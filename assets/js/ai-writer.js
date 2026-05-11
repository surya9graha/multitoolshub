// AI Writer JS Module for MultiToolsHub

document.addEventListener('DOMContentLoaded', () => {
    const inputTopic = document.getElementById('aiTopic');
    const outputBox = document.getElementById('aiOutput');
    const wordCountEl = document.getElementById('wordCount');
    const charCountEl = document.getElementById('charCount');
    const generateBtn = document.getElementById('btnGenerate');

    if (!inputTopic || !outputBox || !generateBtn) return;

    // Live Word/Char Count
    outputBox.addEventListener('input', updateStats);

    function updateStats() {
        const text = outputBox.value;
        const chars = text.length;
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        wordCountEl.innerText = `Words: ${words}`;
        charCountEl.innerText = `Characters: ${chars}`;
    }

    // Generate Button Click
    generateBtn.addEventListener('click', () => {
        const topic = inputTopic.value.trim();
        if (!topic) {
            alert('Please enter a topic or prompt first!');
            inputTopic.focus();
            return;
        }

        const type = document.getElementById('aiType').value;
        const tone = document.getElementById('aiTone').value;
        const length = document.getElementById('aiLength').value;
        const lang = document.getElementById('aiLang').value;

        // Visual loading state
        const originalText = generateBtn.innerHTML;
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        generateBtn.disabled = true;
        outputBox.value = "AI is thinking...\nAnalyzing prompt...\nStructuring content...";
        updateStats();

        // Simulate API call delay (2.5 seconds)
        setTimeout(() => {
            // Generate simulated response
            const simulatedResponse = generateSimulatedContent(topic, type, tone, length, lang);
            outputBox.value = simulatedResponse;
            updateStats();

            // Reset button
            generateBtn.innerHTML = originalText;
            generateBtn.disabled = false;
        }, 2500);
    });
});

// Helper Functions exposed to global scope for HTML inline onclick attributes
window.fillPrompt = function(text) {
    const input = document.getElementById('aiTopic');
    if (input) {
        input.value = text;
        input.focus();
    }
};

window.copyContent = function() {
    const outputBox = document.getElementById('aiOutput');
    if (!outputBox) return;
    const text = outputBox.value;
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        alert('Failed to copy text. Please select and copy manually.');
    });
};

window.clearContent = function() {
    const outputBox = document.getElementById('aiOutput');
    if (outputBox) outputBox.value = '';
    const wordCountEl = document.getElementById('wordCount');
    const charCountEl = document.getElementById('charCount');
    if (wordCountEl) wordCountEl.innerText = 'Words: 0';
    if (charCountEl) charCountEl.innerText = 'Characters: 0';
};

window.downloadContent = function() {
    const outputBox = document.getElementById('aiOutput');
    if (!outputBox) return;
    const text = outputBox.value;
    if (!text) {
        alert('Nothing to download! Please generate some content first.');
        return;
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-content-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

// Simulated Content Generator (Fallback for Static Deployment)
function generateSimulatedContent(topic, type, tone, length, lang) {
    // In a real production environment, this function would make a fetch() call to OpenAI, Anthropic, or Gemini API.
    // E.g. fetch('https://api.openai.com/v1/chat/completions', { ... })
    
    let titleStr = "";
    if (type === 'blog' || type === 'article') {
        titleStr = `Title: The Ultimate Guide to ${topic.substring(0, 30)}...\n\n`;
    } else if (type === 'youtube') {
        titleStr = `[YouTube Script: ${topic}]\n\n**Hook (0:00-0:15):**\nHey guys! Welcome back to the channel. Today we're talking about ${topic}.\n\n`;
    }

    let paragraphs = 3;
    if (length === 'short') paragraphs = 1;
    if (length === 'long') paragraphs = 5;

    const p1 = `This is a highly optimized, ${tone} ${type} about "${topic}". Since this is a free client-side tool demonstration without a backend API key, it provides a structured placeholder showing how the final AI output is formatted. The system is configured to output in ${lang}.`;
    
    const p2 = `When you connect a live API key (e.g., Gemini or OpenAI) in the backend or JavaScript logic, this box will populate with the actual intelligent response based on your exact prompt and tone settings. The interface perfectly handles real-time word counting, character limits, and rapid formatting.`;
    
    const p3 = `In conclusion, this AI writer interface provides a blazing-fast, mobile-ready layout that ensures a great user experience. Its clean typography and green accents promote trust and engagement while maintaining strict AdSense policies.`;

    let contentArr = [p1];
    if (paragraphs >= 3) contentArr.push(p2, p3);
    if (paragraphs === 5) contentArr.push("Furthermore, SEO optimization relies heavily on keyword placement, semantic structure, and natural readability.", "Thank you for using the MultiToolsHub AI Content Writer. Keep creating amazing content!");

    if (type === 'title') {
        return `1. Master ${topic} Like a Pro\n2. The Secret to ${topic} Revealed\n3. 10 Things You Didn't Know About ${topic}\n4. ${topic}: A Beginner's Guide\n5. Why Everyone is Talking About ${topic}`;
    }

    return titleStr + contentArr.join("\n\n");
}
