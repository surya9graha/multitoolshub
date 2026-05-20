const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔑 Scanning staged files for API keys and secrets...');

try {
  // Get staged files (Added, Copied, Modified)
  const stdout = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' });
  const files = stdout.split('\n').map(f => f.trim()).filter(Boolean);

  if (files.length === 0) {
    console.log('✅ No staged files to scan.');
    process.exit(0);
  }

  // Regex patterns to identify secrets
  const secretPatterns = [
    // Google / Gemini API keys (typically 39 characters total, starts with AIzaSy)
    /AIzaSy[A-Za-z0-9_-]{30,40}/g,
    // OpenAI API keys
    /sk-[a-zA-Z0-9_-]{30,60}/g,
    // Hardcoded API key assignments (matches key = "...", apiKey = "...", DEFAULT_KEY = "...")
    /(\b\w*key\w*\s*=\s*["'])([A-Za-z0-9_-]{16,})(["'])/gi,
    // Exact match for the known keys just in case
    /AIzaSyD4DNak0O_jtf1cqy2dzVyn7kJp8y7eujc/g,
    /na25qhAMojbheofRFMapnLBD/g
  ];

  let secretsDetected = false;

  for (const file of files) {
    const fullPath = path.resolve(process.cwd(), file);
    
    // Skip directories, missing files, or binaries
    if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) continue;
    if (file.includes('node_modules') || file.includes('.git/') || file.includes('scan-secrets.js') || file.includes('.env') || file.endsWith('package-lock.json') || file.endsWith('yarn.lock')) continue;

    let content = fs.readFileSync(fullPath, 'utf8');
    let originalContent = content;
    let fileModified = false;

    // Apply replacements
    for (const pattern of secretPatterns) {
      // Reset regex index for safety with global flag
      pattern.lastIndex = 0;
      if (pattern.test(content)) {
        secretsDetected = true;
        console.warn(`⚠️ [WARNING] Detected potential API key or secret in: ${file}`);
        
        // Reset regex index for replacement
        pattern.lastIndex = 0;
        
        // Replace with empty/placeholder depending on regex
        if (pattern.source.includes('key')) {
          content = content.replace(pattern, (match, prefix, secret, suffix) => {
            console.log(`   -> Replacing hardcoded key value with placeholder.`);
            return `${prefix}REMOVED_BY_PRE_COMMIT_HOOK${suffix}`;
          });
        } else {
          console.log(`   -> Replacing standalone secret with placeholder.`);
          content = content.replace(pattern, 'REMOVED_BY_PRE_COMMIT_HOOK');
        }
        fileModified = true;
      }
    }

    if (fileModified) {
      fs.writeFileSync(fullPath, content, 'utf8');
      // Re-stage the modified file so the cleanup is included in the commit
      execSync(`git add "${file}"`);
      console.log(`✅ Automatically removed secrets and re-staged: ${file}`);
    }
  }

  if (secretsDetected) {
    console.error('\n❌ Commit blocked! Staged files contained hardcoded secrets.');
    console.error('The secrets have been automatically removed and the clean files re-staged.');
    console.error('Please review the changes (git diff) and try committing again.\n');
    process.exit(1);
  } else {
    console.log('✅ Security scan passed. No secrets detected in staged files.');
    process.exit(0);
  }

} catch (err) {
  console.error('❌ Error running secret scanner:', err.message);
  process.exit(1);
}
