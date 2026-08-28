import os
from seo_content_db import get_seo_content, TOOL_META_DATA

# Base directory for the tools
BASE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tools")

# Categories and their list of tools
tools_data = {
    "image": [
        "image-resizer", "image-compressor", "jpg-to-png", "png-to-jpg", "webp-to-jpg",
        "image-cropper", "image-rotator", "image-flipper", "blur-image", "sharpen-image",
        "image-watermark", "remove-background", "meme-generator", "thumbnail-preview"
    ],
    "css": [
        "gradient-generator", "color-palette", "hex-to-rgb", "rgb-to-hex", "css-button",
        "css-shadow", "css-gradient", "flexbox-generator", "grid-layout"
    ],
    "dev": [
        "json-formatter", "json-validator", "html-minifier", "css-minifier", "js-minifier",
        "base64-encoder", "base64-decoder", "url-encoder", "url-decoder", "regex-tester",
        "html-to-text", "text-to-html"
    ],
    "seo": [
        "meta-tag-generator", "og-generator", "robots-generator", "sitemap-generator",
        "keyword-density", "meta-tag-analyzer"
    ],
    "text": [
        "word-counter", "char-counter", "sentence-counter", "paragraph-counter", "case-converter",
        "title-case", "slug-generator", "random-name", "username-generator", "fancy-text",
        "text-reverser", "lorem-ipsum", "text-diff"
    ],
    "math": [
        "percentage-calc", "age-calc", "bmi-calc", "gst-calc", "discount-calc",
        "length-converter", "weight-converter", "temp-converter", "roman-numeral", "binary-converter",
        "hex-converter", "octal-converter", "random-number", "math-solver", "fraction-calc"
    ],
    "security": [
        "password-generator", "qr-generator", "uuid-generator", "md5-generator", "sha256-generator",
        "bcrypt-hash", "credit-card-validator", "ip-lookup", "user-agent", "password-strength"
    ],
    "time": [
        "timestamp-converter", "countdown-timer", "stopwatch", "world-clock", "days-between",
        "leap-year", "timezone-converter", "date-formatter"
    ],
    "web": [
        "html-preview", "markdown-converter", "url-shortener", "yt-thumbnail-downloader", "youtube-video-downloader", "favicon-generator",
        "website-status", "page-speed", "broken-link", "dns-lookup", "whois",
        "source-viewer", "redirect-checker", "favicon-grabber"
    ],
    "misc": [
        "morse-code", "nato-alphabet", "text-to-speech", "speech-to-text", "color-picker",
        "screen-resolution", "aspect-ratio", "byte-converter", "online-notepad", "drawing-board"
    ]
}

# The UNIVERSAL template for each tool page
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSZPL7TBSE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){{dataLayer.push(arguments);}}
      gtag('js', new Date());

      gtag('config', 'G-FSZPL7TBSE');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{meta_title}</title>
    <meta name="description" content="{meta_description}">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@700;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
    <!-- Icon Library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Styles -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="../../assets/css/ads.css">
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1356057643477835"
     crossorigin="anonymous"></script>
</head>
<body data-theme="dark">

    <header>
        <div class="container nav-inner">
            <a href="../../index.html" class="logo">MultiTools Hub</a>
            <ul class="nav-links">
                <li><a href="../../index.html">Home</a></li>
                <li><a href="../../blog/index.html">Blog</a></li>
                <li><a href="../../about.html">About</a></li>
                <li><a href="../../contact.html">Contact</a></li>
                <li><a href="../../sitemap.html">Sitemap</a></li>
            </ul>
            <button class="theme-btn" id="themeSwitch" title="Toggle Dark/Light Mode">
                <i class="fas fa-sun"></i>
            </button>
        </div>
    </header>

    <main class="container">
        <div class="breadcrumb" style="margin-top: 50px;">
            <a href="../../index.html">Home</a> / {category_name} / <span>{title}</span>
        </div>

        <!-- Ad Slot: Top -->
        <div class="adsense-slot ads-top" id="ad-top">
            <div style="color:var(--text-muted); font-size:0.7rem;">Top Advertisement Slot</div>
        </div>

        <section class="tool-workspace" style="margin-top: 30px; position: relative; overflow: hidden;">
            <div class="tool-header-visual" style="position: absolute; top: 0; right: 0; width: 300px; height: 100%; background: radial-gradient(circle at center, hsla(var(--p-hue), 90%, 65%, 0.08), transparent 70%); z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h1 style="font-size: 3.5rem; margin-bottom: 20px; background: linear-gradient(135deg, var(--text-main), var(--primary)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">{title}</h1>
                <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 800px; margin-bottom: 40px;">Professional-grade {title} utility. Fast, secure, and processing 100% in your browser for maximum privacy.</p>
                
                <div id="tool-container">
                    {dynamic_input}
                    
                    <div style="display: flex; gap: 15px; margin-top: 35px; margin-bottom: 40px; flex-wrap: wrap;">
                        <button id="processBtn" class="category-label active" style="border: none; padding: 18px 45px; font-size: 1.1rem; box-shadow: 0 10px 30px hsla(var(--p-hue), 90%, 65%, 0.3);">Process {title}</button>
                        <button id="downloadBtn" class="category-label" style="display:none; border: none; padding: 18px 35px;">Download Result</button>
                        <button onclick="copyToClipboard('toolOutput')" class="category-label" style="border: none; padding: 18px 35px;">Copy Output</button>
                        <button onclick="window.location.reload()" class="category-label" style="border: none; padding: 18px 35px;">Clear</button>
                    </div>

                    <div class="result-container" style="background: rgba(255,255,255,0.02); border-radius: 30px; border: 1px solid var(--border); padding: 40px; min-height: 200px; position: relative; backdrop-filter: blur(10px);">
                        <label style="display:block; margin-bottom: 20px; color: var(--primary); font-weight: 800; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 3px;">Output Result</label>
                        
                        <div id="toolOutput" class="form-control" style="min-height: 120px; white-space: pre-wrap; background: transparent; border: none; padding: 0; font-family: 'JetBrains Mono', monospace; font-size: 1.1rem; line-height: 1.8;">
                            The generated results will appear here...
                        </div>
                        
                        <div id="imageResultContainer" style="display:none; text-align: center; margin-top: 20px;">
                            <img id="imageOutput" style="max-width: 100%; border-radius: 20px; border: 1px solid var(--border); box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ad Slot: Middle -->
        <div class="adsense-slot ads-middle" id="ad-mid">
            <div style="color:var(--text-muted); font-size:0.7rem;">In-Content Advertisement Slot</div>
        </div>

        <section class="seo-content tool-workspace" style="margin-top: 60px; background: transparent; border: none; box-shadow: none;">
            {seo_content}
            
            <h2>Technical Details & Privacy</h2>
            <p>Our <strong>{title}</strong> is part of the premier suite at MultiTools Hub. This digital utility is optimized for professional performance and user privacy. No files are ever saved on our servers.</p>
            
            <h3>Secure & High-Speed Processing</h3>
            <p>We've engineered this {title} tool using current web standards to ensure high reliability. It's fully responsive, meaning you can use it on mobile devices, tablets, and desktops alike.</p>
        </section>

        <!-- Ad Slot: Bottom -->
        <div class="adsense-slot ads-bottom" id="ad-bottom">
            <div style="color:var(--text-muted); font-size:0.7rem;">Footer Advertisement Slot</div>
        </div>
    </main>

    <footer style="margin-top: 100px; background: var(--bg-card); border-top: 1px solid var(--border); padding: 60px 0;">
        <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
                <div>
                    <h3 style="margin-bottom: 20px;">MultiTools Hub</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">The premier multi-tool destination for professionals. Fast, free, and secure utilities for developers, writers, and designers.</p>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <ul style="list-style: none; margin-top: 15px;">
                        <li><a href="../../blog/index.html" style="color: var(--text-muted);">Blog</a></li>
                        <li><a href="../../about.html" style="color: var(--text-muted);">About Us</a></li>
                        <li><a href="../../contact.html" style="color: var(--text-muted);">Contact Us</a></li>
                        <li><a href="../../sitemap.html" style="color: var(--text-muted);">Sitemap</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal Compliance</h4>
                    <ul style="list-style: none; margin-top: 15px;">
                        <li><a href="../../terms.html" style="color: var(--text-muted);">Terms of Service</a></li>
                        <li><a href="../../privacy.html" style="color: var(--text-muted);">Privacy Policy</a></li>
                        <li><a href="../../disclaimer.html" style="color: var(--text-muted);">Disclaimer</a></li>
                        <li><a href="../../rss.xml" style="color: var(--text-muted);">RSS Feed</a></li>
                    </ul>
                </div>
            </div>
            <div style="text-align: center; border-top: 1px solid var(--border); padding-top: 30px; color: var(--text-muted); font-size: 0.9rem;">
                &copy; 2026 MultiTools Hub. Powered by Client-Side Innovation.
            </div>
        </div>
    </footer>

    <script src="../../assets/js/main.js"></script>
    <script src="../../assets/js/ads.js"></script>
    <script>
        // Syncing theme state
        if (localStorage.getItem('theme') === 'light') {{
            document.documentElement.setAttribute('data-theme', 'light');
        }}
    </script>
</body>
</html>
"""

# Tool categories specific input UIs
INPUT_TEXTAREA = """
<div class="input-group">
    <label>Enter Your Data Below</label>
    <textarea id="toolInput" class="form-control" placeholder="Type or paste your content here..."></textarea>
</div>
"""

INPUT_FILE = """
<div class="input-group">
    <label>Upload Your Image</label>
    <div id="dropZone" style="border: 2px dashed var(--border); padding: 40px; border-radius: 20px; text-align: center; cursor: pointer; background: rgba(255,255,255,0.02);">
        <i class="fas fa-cloud-upload-alt" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <p>Drag & Drop or Click to Upload Image</p>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
    </div>
    <div id="filePreviewContainer" style="display:none; margin-top: 20px; text-align: center;">
        <img id="filePreview" style="max-width: 200px; border-radius: 10px; border: 1px solid var(--border);">
    </div>
    <!-- Hidden text input for compatibility -->
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_MEME_GENERATOR = """
<div class="input-group">
    <label>Upload Base Image</label>
    <div id="dropZone" style="border: 2px dashed var(--border); padding: 40px; border-radius: 20px; text-align: center; cursor: pointer; background: rgba(255,255,255,0.02);">
        <i class="fas fa-laugh" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <p>Click or Drag Image</p>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
    </div>
    <div style="margin-top: 30px; display: grid; gap: 20px;">
        <input type="text" id="memeTopText" class="form-control" placeholder="Top Text (Optional)" style="padding: 15px; text-transform: uppercase;">
        <input type="text" id="memeBottomText" class="form-control" placeholder="Bottom Text (Optional)" style="padding: 15px; text-transform: uppercase;">
    </div>
    <div id="filePreviewContainer" style="display:none; margin-top: 20px; text-align: center;">
        <img id="filePreview" style="max-width: 200px; border-radius: 10px; border: 1px solid var(--border);">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_IMAGE_WATERMARK = """
<div class="input-group">
    <label>Upload Image to Watermark</label>
    <div id="dropZone" style="border: 2px dashed var(--border); padding: 40px; border-radius: 20px; text-align: center; cursor: pointer; background: rgba(255,255,255,0.02);">
        <i class="fas fa-copyright" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <p>Click or Drag Image</p>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
    </div>
    <div style="margin-top: 30px;">
        <label style="font-size: 0.9rem; margin-bottom: 10px; display: block;">Watermark Text</label>
        <input type="text" id="watermarkText" class="form-control" placeholder="© 2026 MultiTools Hub" style="padding: 15px;">
    </div>
    <div id="filePreviewContainer" style="display:none; margin-top: 20px; text-align: center;">
        <img id="filePreview" style="max-width: 200px; border-radius: 10px; border: 1px solid var(--border);">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_THUMBNAIL_PREVIEW = """
<div class="input-group">
    <label>Upload Image to Preview</label>
    <div id="dropZone" style="border: 2px dashed var(--border); padding: 40px; border-radius: 20px; text-align: center; cursor: pointer; background: rgba(255,255,255,0.02);">
        <i class="fas fa-tv" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <p>Click or Drag Image</p>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
    </div>
    <div id="filePreviewContainer" style="display:none; margin-top: 20px; text-align: center;">
        <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
            <div style="text-align: center;">
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">YouTube (120x68)</p>
                <img id="thumbYT" style="width: 120px; height: 68px; object-fit: cover; border-radius: 5px; border: 1px solid var(--border);">
            </div>
            <div style="text-align: center;">
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">Avatar (64x64)</p>
                <img id="thumbAvatar" style="width: 64px; height: 64px; object-fit: cover; border-radius: 50%; border: 1px solid var(--border);">
            </div>
            <div style="text-align: center;">
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px;">Social (150x150)</p>
                <img id="thumbSocial" style="width: 150px; height: 150px; object-fit: cover; border-radius: 10px; border: 1px solid var(--border);">
            </div>
        </div>
        <img id="filePreview" style="display:none;">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_IMAGE_RESIZER = """
<div class="input-group">
    <label>Upload Image to Resize</label>
    <div id="dropZone" style="border: 2px dashed var(--border); padding: 40px; border-radius: 20px; text-align: center; cursor: pointer; background: rgba(255,255,255,0.02);">
        <i class="fas fa-expand-arrows-alt" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <p>Click or Drag Image</p>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
        <div>
            <label style="font-size: 0.9rem; margin-bottom: 10px; display: block;">Target Width (px)</label>
            <input type="number" id="targetWidth" class="form-control" placeholder="Original Width" style="padding: 15px;">
        </div>
        <div>
            <label style="font-size: 0.9rem; margin-bottom: 10px; display: block;">Target Height (px)</label>
            <input type="number" id="targetHeight" class="form-control" placeholder="Original Height" style="padding: 15px;">
        </div>
    </div>
    <div style="margin-top: 20px;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="maintainAspect" checked style="width: 20px; height: 20px;">
            Maintain Aspect Ratio
        </label>
    </div>
    <div id="filePreviewContainer" style="display:none; margin-top: 20px; text-align: center;">
        <img id="filePreview" style="max-width: 200px; border-radius: 10px; border: 1px solid var(--border);">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_IMAGE_COMPRESSOR = """
<div class="input-group">
    <label>Upload Image to Compress</label>
    <div id="dropZone" style="border: 2px dashed var(--border); padding: 40px; border-radius: 20px; text-align: center; cursor: pointer; background: rgba(255,255,255,0.02);">
        <i class="fas fa-file-archive" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <p>Click or Drag Image</p>
        <input type="file" id="fileInput" accept="image/*" style="display: none;">
    </div>
    <div style="margin-top: 30px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <label>Compression Quality</label>
            <span id="qualityVal">80%</span>
        </div>
        <input type="range" id="compQuality" min="1" max="100" value="80" style="width: 100%; height: 6px; background: var(--border); border-radius: 5px; appearance: none; cursor: pointer;" oninput="document.getElementById('qualityVal').innerText = this.value + '%'">
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 10px;">Lower quality results in smaller file sizes.</p>
    </div>
    <div id="filePreviewContainer" style="display:none; margin-top: 20px; text-align: center;">
        <img id="filePreview" style="max-width: 200px; border-radius: 10px; border: 1px solid var(--border);">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_MATH = """
<div class="input-group">
    <label>Enter Values (Numbers Only)</label>
    <textarea id="toolInput" class="form-control" style="height: 100px; font-size: 1.5rem;" placeholder="e.g. 20 500 (for percentage) or 70 175 (for BMI)"></textarea>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Note: Enter multiple values separated by spaces for tools requiring more than one input.</p>
</div>
"""

INPUT_CSS = """
<div class="input-group">
    <label>Select Primary Color or Enter HEX/RGB</label>
    <div style="display: flex; gap: 20px; align-items: center; background: rgba(255,255,255,0.02); padding: 25px; border-radius: 25px; border: 1px solid var(--border);">
        <input type="color" id="colorPicker" value="#6366f1" style="width: 80px; height: 80px; border: none; border-radius: 15px; cursor: pointer; background: transparent;" oninput="document.getElementById('toolInput').value = this.value">
        <textarea id="toolInput" class="form-control" placeholder="#6366f1" style="height: 80px; padding: 25px; min-height: unset;"></textarea>
    </div>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 15px;">Tip: You can use the color picker or manually type HEX/RGB values.</p>
</div>
"""

INPUT_SEO = """
<div class="input-group">
    <label>Site & Content Details</label>
    <textarea id="toolInput" class="form-control" style="height: 180px;" placeholder="Title: MultiTools Hub&#10;Description: Professional online tools for developers and creators.&#10;Keywords: tools, developer, online, free"></textarea>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">For generators: Use 'Attribute: Value' format. For analyzers: Paste your content directly.</p>
</div>
"""

INPUT_SECURITY = """
<div class="input-group">
    <label>Data to Process / Validate</label>
    <textarea id="toolInput" class="form-control" style="height: 120px;" placeholder="Enter text, hash, or card number to validate..."></textarea>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Security Note: All processing happens locally on your device.</p>
</div>
"""

INPUT_TIME = """
<div class="input-group">
    <label>Enter Date, Time, or Timestamp</label>
    <textarea id="toolInput" class="form-control" style="height: 100px;" placeholder="e.g. 2026-04-01, 1711785600000, or leave blank for NOW"></textarea>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Format: Standard date strings or Unix timestamps in milliseconds.</p>
</div>
"""

INPUT_WEB = """
<div class="input-group">
    <label>Enter Website URL or Source Code</label>
    <textarea id="toolInput" class="form-control" style="height: 150px;" placeholder="https://example.com or <html>...</html>"></textarea>
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Note: For downloaders, paste the URL. For previews, paste the code.</p>
</div>
"""

INPUT_YOUTUBE_DOWNLOADER = """
<div class="input-group">
    <label>Enter YouTube Video URL</label>
    <input type="text" id="youtubeUrl" class="form-control" placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="padding: 15px; margin-bottom: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%;">
    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Paste the link of the YouTube video you wish to download (supports Shorts, standard, and mobile share links).</p>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_CSS_BUTTON = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label>Button Text</label>
        <input type="text" id="btnText" class="form-control" value="Click Me" style="padding: 15px;">
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
        <div>
            <label>Bg Color</label>
            <input type="color" id="btnBgColor" value="#6366f1" style="width: 100%; height: 50px; border: none; border-radius: 10px; cursor: pointer;">
        </div>
        <div>
            <label>Text Color</label>
            <input type="color" id="btnTextColor" value="#ffffff" style="width: 100%; height: 50px; border: none; border-radius: 10px; cursor: pointer;">
        </div>
        <div>
            <label>Hover Bg Color</label>
            <input type="color" id="btnHoverBgColor" value="#4f46e5" style="width: 100%; height: 50px; border: none; border-radius: 10px; cursor: pointer;">
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label>Padding Y (px): <span id="valPadY">12</span></label>
            <input type="range" id="btnPadY" min="0" max="40" value="12" style="width: 100%;">
        </div>
        <div>
            <label>Padding X (px): <span id="valPadX">28</span></label>
            <input type="range" id="btnPadX" min="0" max="80" value="28" style="width: 100%;">
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label>Border Radius (px): <span id="valRadius">10</span></label>
            <input type="range" id="btnRadius" min="0" max="50" value="10" style="width: 100%;">
        </div>
        <div>
            <label>Font Size (px): <span id="valFontSize">16</span></label>
            <input type="range" id="btnFontSize" min="8" max="40" value="16" style="width: 100%;">
        </div>
    </div>
    <div>
        <label>Shadow Blur (px): <span id="valShadow">10</span></label>
        <input type="range" id="btnShadow" min="0" max="30" value="10" style="width: 100%;">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_FLEXBOX_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div>
            <label>Flex Direction</label>
            <select id="flexDir" class="form-control" style="padding: 10px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); width: 100%;">
                <option value="row">row</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column">column</option>
                <option value="column-reverse">column-reverse</option>
            </select>
        </div>
        <div>
            <label>Justify Content</label>
            <select id="flexJustify" class="form-control" style="padding: 10px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); width: 100%;">
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center" selected>center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
            </select>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div>
            <label>Align Items</label>
            <select id="flexAlign" class="form-control" style="padding: 10px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); width: 100%;">
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center" selected>center</option>
                <option value="stretch">stretch</option>
                <option value="baseline">baseline</option>
            </select>
        </div>
        <div>
            <label>Flex Wrap</label>
            <select id="flexWrap" class="form-control" style="padding: 10px; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border); width: 100%;">
                <option value="nowrap">nowrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
            </select>
        </div>
    </div>
    <div>
        <label>Number of Items: <span id="valItems">3</span></label>
        <input type="range" id="flexItemCount" min="1" max="10" value="3" style="width: 100%;">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_GRID_LAYOUT = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label>Grid Columns: <span id="valGridCols">3</span></label>
            <input type="range" id="gridCols" min="1" max="6" value="3" style="width: 100%;">
        </div>
        <div>
            <label>Grid Rows: <span id="valGridRows">2</span></label>
            <input type="range" id="gridRows" min="1" max="6" value="2" style="width: 100%;">
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label>Column Gap (px): <span id="valColGap">15</span></label>
            <input type="range" id="gridColGap" min="0" max="40" value="15" style="width: 100%;">
        </div>
        <div>
            <label>Row Gap (px): <span id="valRowGap">15</span></label>
            <input type="range" id="gridRowGap" min="0" max="40" value="15" style="width: 100%;">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_PASSWORD_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label>Password Length: <span id="valPassLength">16</span></label>
        <input type="range" id="passLength" min="6" max="64" value="16" style="width: 100%;">
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="passUpper" checked style="width: 20px; height: 20px;">
            Uppercase Letters (A-Z)
        </label>
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="passLower" checked style="width: 20px; height: 20px;">
            Lowercase Letters (a-z)
        </label>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="passNumbers" checked style="width: 20px; height: 20px;">
            Numbers (0-9)
        </label>
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="passSymbols" checked style="width: 20px; height: 20px;">
            Symbols (!@#$%)
        </label>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_UUID_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label>Number of UUIDs to Generate: <span id="valUuidCount">5</span></label>
        <input type="range" id="uuidCount" min="1" max="50" value="5" style="width: 100%;">
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="uuidUppercase" style="width: 20px; height: 20px;">
            Uppercase UUIDs
        </label>
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="uuidNoHyphens" style="width: 20px; height: 20px;">
            Remove Hyphens (-)
        </label>
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="uuidBraces" style="width: 20px; height: 20px;">
            Wrap in Braces {}
        </label>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_QR_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Text or URL to Encode</label>
        <textarea id="toolInput" class="form-control" placeholder="Enter text or URL to generate QR code..." style="height: 80px;"></textarea>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
        <div>
            <label for="qrSize">QR Code Size (px)</label>
            <select id="qrSize" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="150">150 x 150</option>
                <option value="200" selected>200 x 200</option>
                <option value="250">250 x 250</option>
                <option value="300">300 x 300</option>
                <option value="400">400 x 400</option>
            </select>
        </div>
        <div>
            <label for="qrECC">Error Correction Level</label>
            <select id="qrECC" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="L">Low (7% recovery)</option>
                <option value="M">Medium (15% recovery)</option>
                <option value="Q">Quartile (25% recovery)</option>
                <option value="H" selected>High (30% recovery)</option>
            </select>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label for="qrColorDark">Foreground Color (Dark)</label>
            <input type="color" id="qrColorDark" value="#000000" style="width: 100%; height: 50px; border: none; border-radius: 10px; cursor: pointer; background: transparent;">
        </div>
        <div>
            <label for="qrColorLight">Background Color (Light)</label>
            <input type="color" id="qrColorLight" value="#ffffff" style="width: 100%; height: 50px; border: none; border-radius: 10px; cursor: pointer; background: transparent;">
        </div>
    </div>
    <!-- Hidden container for library visual target -->
    <div id="qrCodeTarget" style="display:none;"></div>
</div>
"""

INPUT_CREDIT_CARD_VALIDATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="ccInput">Credit Card Number</label>
        <div style="position: relative;">
            <input type="text" id="ccInput" class="form-control" placeholder="e.g. 4111 1111 1111 1111" style="padding: 15px; font-family: monospace; font-size: 1.2rem; padding-right: 120px;">
            <span id="ccBrand" style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); font-weight: 700; color: var(--primary); font-size: 1rem; text-transform: uppercase;">CARD</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">The validator automatically formats card digits and flags the card issuer network (Visa, Mastercard, Amex, etc.).</p>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    document.getElementById('ccInput')?.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\\D/g, '').substring(0, 16);
        let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = formatted;
        
        const rawInput = document.getElementById('toolInput');
        if (rawInput) rawInput.value = val;

        const brand = document.getElementById('ccBrand');
        if (brand) {
            if (val.startsWith('4')) {
                brand.innerText = 'VISA';
                brand.style.color = '#2563eb';
            } else if (/^(5[1-5]|2[2-7])/.test(val)) {
                brand.innerText = 'MC';
                brand.style.color = '#ea580c';
            } else if (/^3[47]/.test(val)) {
                brand.innerText = 'AMEX';
                brand.style.color = '#0d9488';
            } else if (/^6(?:011|5)/.test(val)) {
                brand.innerText = 'DISCOVER';
                brand.style.color = '#d97706';
            } else if (/^(352[89]|35[3-8][0-9])/.test(val)) {
                brand.innerText = 'JCB';
                brand.style.color = '#7c3aed';
            } else {
                brand.innerText = 'CARD';
                brand.style.color = 'var(--primary)';
            }
        }
    });
</script>
"""

INPUT_JSON_FORMATTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Raw JSON Content</label>
        <textarea id="toolInput" class="form-control" placeholder="Paste your raw, minified, or unformatted JSON here..." style="height: 180px; font-family: monospace; font-size: 0.95rem; line-height: 1.6;"></textarea>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
        <div>
            <label for="jsonSpacing">Indentation Spacing</label>
            <select id="jsonSpacing" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="2" selected>2 Spaces</option>
                <option value="4">4 Spaces</option>
                <option value="8">8 Spaces</option>
                <option value="tab">Tab Character</option>
            </select>
        </div>
        <div style="display: flex; align-items: flex-end;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; height: 54px; margin: 0;">
                <input type="checkbox" id="jsonMinify" style="width: 20px; height: 20px;">
                Minify Output instead of Beautify
            </label>
        </div>
    </div>
</div>
"""

INPUT_PASSWORD_STRENGTH = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="passInput">Enter Password to Analyze</label>
        <div style="position: relative; display: flex; align-items: center;">
            <input type="password" id="passInput" class="form-control" placeholder="Type a password..." style="padding: 15px; font-size: 1.1rem; width: 100%; padding-right: 50px;">
            <button type="button" id="togglePassVisibility" style="position: absolute; right: 15px; background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; height: 100%; width: 40px; outline: none;">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 10px;">Your password is analyzed entirely in-browser and is never transmitted over the internet.</p>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    const passInput = document.getElementById('passInput');
    const toggleBtn = document.getElementById('togglePassVisibility');
    
    toggleBtn?.addEventListener('click', () => {
        const icon = toggleBtn.querySelector('i');
        if (passInput.type === 'password') {
            passInput.type = 'text';
            if (icon) {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        } else {
            passInput.type = 'password';
            if (icon) {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }
    });

    passInput?.addEventListener('input', (e) => {
        const rawInput = document.getElementById('toolInput');
        if (rawInput) {
            rawInput.value = e.target.value;
        }
    });
</script>
"""

INPUT_BASE64_ENCODER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Text to Encode or Select File Below</label>
        <textarea id="toolInput" class="form-control" placeholder="Type or paste the text you want to encode..." style="height: 120px;"></textarea>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--border); border-radius: 15px; padding: 20px; text-align: center;">
        <label style="display: block; font-weight: 600; margin-bottom: 10px; color: var(--primary);">Convert File to Base64 (Optional)</label>
        <input type="file" id="base64File" class="form-control" style="padding: 10px; display: none;">
        <button type="button" onclick="document.getElementById('base64File').click()" class="category-label" style="display: inline-block; border: 1px solid var(--border); background: rgba(255,255,255,0.05); padding: 10px 20px; cursor: pointer; border-radius: 10px; margin-bottom: 10px;">Choose File</button>
        <span id="b64FileName" style="display: block; font-size: 0.9rem; color: var(--text-muted);">No file selected (Max 2MB)</span>
    </div>
    <div>
        <label for="b64Format">Output Format</label>
        <select id="b64Format" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
            <option value="raw" selected>Raw Base64 String</option>
            <option value="datauri">Data URL Scheme (for CSS/HTML embeds)</option>
        </select>
    </div>
</div>
<script>
    document.getElementById('base64File')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const fileNameSpan = document.getElementById('b64FileName');
        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
            alert('File is too large. Max size is 2MB.');
            e.target.value = '';
            if (fileNameSpan) fileNameSpan.innerText = 'No file selected (Max 2MB)';
            return;
        }

        if (fileNameSpan) {
            fileNameSpan.innerText = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        }

        const reader = new FileReader();
        reader.onload = function(evt) {
            window.CURRENT_FILE_B64 = evt.target.result;
            window.CURRENT_FILE_NAME = file.name;
            window.CURRENT_FILE_TYPE = file.type;
        };
        reader.readAsDataURL(file);
    });
</script>
"""

INPUT_BASE64_DECODER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Paste Base64 Payload to Decode</label>
        <textarea id="toolInput" class="form-control" placeholder="Paste the Base64 string here..." style="height: 120px; font-family: monospace; font-size: 0.95rem;"></textarea>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="b64AutoHeader" checked style="width: 20px; height: 20px;">
            Auto-strip Data URL Headers
        </label>
    </div>
    <!-- Hidden element to hold file download trigger -->
    <div id="b64DownloadContainer" style="display:none; text-align: center; margin-top: 15px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 15px; border: 1px solid var(--border);">
        <p style="color: var(--primary); font-weight: 600; margin-bottom: 10px;">Binary File Detected in Payload!</p>
        <button type="button" id="b64BinDownloadBtn" class="category-label active" style="border: none; padding: 10px 20px; font-size: 0.95rem;">Download Decoded Binary File</button>
    </div>
    <!-- Interactive preview container for decoded image base64 -->
    <div id="b64ImagePreviewContainer" style="display:none; text-align: center; margin-top: 15px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 15px; border: 1px solid var(--border);">
        <p style="color: var(--primary); font-weight: 600; margin-bottom: 10px;">Decoded Image Preview:</p>
        <img id="b64ImagePreview" style="max-width: 100%; max-height: 250px; border-radius: 10px; border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
    </div>
</div>
"""

INPUT_URL_ENCODER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Enter Text or URL to Encode</label>
        <textarea id="toolInput" class="form-control" placeholder="Type or paste parameters or URL here..." style="height: 120px;"></textarea>
    </div>
    <div>
        <label for="urlEncodeMode">Encoding Standard</label>
        <select id="urlEncodeMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
            <option value="standard" selected>Standard encodeURIComponent (RFC 3986)</option>
            <option value="all">Full Encoding (Encode all characters including safe ones)</option>
            <option value="plus">Application/x-www-form-urlencoded (Spaces to '+')</option>
        </select>
    </div>
</div>
"""

INPUT_URL_DECODER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Paste URL or Query Parameters to Decode</label>
        <textarea id="toolInput" class="form-control" placeholder="Paste the percent-encoded URL or queries here..." style="height: 120px;"></textarea>
    </div>
    <div id="urlParamsTableContainer" style="display:none; margin-top: 15px;">
        <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Parsed Query Parameters</label>
        <div style="overflow-x: auto; background: rgba(255,255,255,0.02); border-radius: 15px; border: 1px solid var(--border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 12px 15px; color: var(--primary);">Key</th>
                        <th style="padding: 12px 15px; color: var(--primary);">Value</th>
                    </tr>
                </thead>
                <tbody id="urlParamsTableBody">
                </tbody>
            </table>
        </div>
    </div>
</div>
"""

INPUT_LENGTH_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="lengthValue">Value to Convert</label>
            <input type="number" id="lengthValue" class="form-control" value="1" placeholder="e.g. 10" style="padding: 15px;">
        </div>
        <div>
            <label for="lengthFrom">From Unit</label>
            <select id="lengthFrom" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="m" selected>Meter (m)</option>
                <option value="km">Kilometer (km)</option>
                <option value="cm">Centimeter (cm)</option>
                <option value="mm">Millimeter (mm)</option>
                <option value="mi">Mile (mi)</option>
                <option value="yd">Yard (yd)</option>
                <option value="ft">Foot (ft)</option>
                <option value="in">Inch (in)</option>
            </select>
        </div>
    </div>
    <div id="lengthResultTableContainer" style="display:none; margin-top: 15px;">
        <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Equivalent Length Conversions</label>
        <div style="overflow-x: auto; background: rgba(255,255,255,0.02); border-radius: 15px; border: 1px solid var(--border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 12px 15px; color: var(--primary);">Unit</th>
                        <th style="padding: 12px 15px; color: var(--primary);">Converted Value</th>
                    </tr>
                </thead>
                <tbody id="lengthResultTableBody">
                </tbody>
            </table>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_WEIGHT_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="weightValue">Value to Convert</label>
            <input type="number" id="weightValue" class="form-control" value="1" placeholder="e.g. 150" style="padding: 15px;">
        </div>
        <div>
            <label for="weightFrom">From Unit</label>
            <select id="weightFrom" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="kg" selected>Kilogram (kg)</option>
                <option value="g">Gram (g)</option>
                <option value="lb">Pound (lb)</option>
                <option value="oz">Ounce (oz)</option>
                <option value="st">Stone (st)</option>
                <option value="ton">Metric Ton (t)</option>
            </select>
        </div>
    </div>
    <div id="weightResultTableContainer" style="display:none; margin-top: 15px;">
        <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Equivalent Weight Conversions</label>
        <div style="overflow-x: auto; background: rgba(255,255,255,0.02); border-radius: 15px; border: 1px solid var(--border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 12px 15px; color: var(--primary);">Unit</th>
                        <th style="padding: 12px 15px; color: var(--primary);">Converted Value</th>
                    </tr>
                </thead>
                <tbody id="weightResultTableBody">
                </tbody>
            </table>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_TEMP_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="tempValue">Value to Convert</label>
            <input type="number" id="tempValue" class="form-control" value="0" placeholder="e.g. 100" style="padding: 15px;" step="any">
        </div>
        <div>
            <label for="tempFrom">From Unit</label>
            <select id="tempFrom" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="c" selected>Celsius (°C)</option>
                <option value="f">Fahrenheit (°F)</option>
                <option value="k">Kelvin (K)</option>
                <option value="r">Rankine (°R)</option>
            </select>
        </div>
    </div>
    <div id="tempResultTableContainer" style="display:none; margin-top: 15px;">
        <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Equivalent Temperature Conversions</label>
        <div style="overflow-x: auto; background: rgba(255,255,255,0.02); border-radius: 15px; border: 1px solid var(--border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 12px 15px; color: var(--primary);">Unit</th>
                        <th style="padding: 12px 15px; color: var(--primary);">Converted Value</th>
                    </tr>
                </thead>
                <tbody id="tempResultTableBody">
                </tbody>
            </table>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_BINARY_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="binaryMode">Select Mode</label>
        <select id="binaryMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
            <option value="bin_to_all" selected>Binary to Decimal / Hex / Octal</option>
            <option value="dec_to_all">Decimal to Binary / Hex / Octal</option>
            <option value="text_to_bin">Text to Binary</option>
            <option value="bin_to_text">Binary to Text</option>
        </select>
    </div>
    <div>
        <label id="binaryInputLabel" for="toolInput">Input Value</label>
        <textarea id="toolInput" class="form-control" placeholder="Enter binary code (e.g., 01001000)..." style="height: 100px; font-family: monospace;"></textarea>
    </div>
    <div id="binaryResultsTableContainer" style="display:none; margin-top: 15px;">
        <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Equivalent Numerical Bases</label>
        <div style="overflow-x: auto; background: rgba(255,255,255,0.02); border-radius: 15px; border: 1px solid var(--border);">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.05);">
                        <th style="padding: 12px 15px; color: var(--primary);">Base</th>
                        <th style="padding: 12px 15px; color: var(--primary);">Value</th>
                    </tr>
                </thead>
                <tbody id="binaryResultsTableBody">
                </tbody>
            </table>
        </div>
    </div>
</div>
<script>
    document.getElementById('binaryMode')?.addEventListener('change', (e) => {
        const mode = e.target.value;
        const lbl = document.getElementById('binaryInputLabel');
        const txt = document.getElementById('toolInput');
        
        if (mode === 'bin_to_all') {
            if (lbl) lbl.innerText = 'Input Binary Value';
            if (txt) txt.placeholder = 'Enter binary code (e.g. 01001000)...';
        } else if (mode === 'dec_to_all') {
            if (lbl) lbl.innerText = 'Input Decimal Value';
            if (txt) txt.placeholder = 'Enter decimal value (e.g. 72)...';
        } else if (mode === 'text_to_bin') {
            if (lbl) lbl.innerText = 'Input Plain Text';
            if (txt) txt.placeholder = 'Enter text characters (e.g. Hello)...';
        } else if (mode === 'bin_to_text') {
            if (lbl) lbl.innerText = 'Input Binary String';
            if (txt) txt.placeholder = 'Enter space-separated binary bytes (e.g. 01001000 01100101)...';
        }
    });
</script>
"""

INPUT_FAVICON_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--border); border-radius: 15px; padding: 25px; text-align: center;">
        <label style="display: block; font-weight: 600; margin-bottom: 15px; color: var(--primary);">Upload Source Image</label>
        <input type="file" id="faviconFile" class="form-control" accept="image/*" style="display: none;">
        <button type="button" onclick="document.getElementById('faviconFile').click()" class="category-label" style="display: inline-block; border: 1px solid var(--border); background: rgba(255,255,255,0.05); padding: 12px 25px; cursor: pointer; border-radius: 10px; margin-bottom: 10px;">Select Image File</button>
        <span id="favFileName" style="display: block; font-size: 0.9rem; color: var(--text-muted);">Supports PNG, JPG, WEBP, or SVG (Max 5MB)</span>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="favSize">Favicon Output Size</label>
            <select id="favSize" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="16">16 x 16 px (Standard)</option>
                <option value="32" selected>32 x 32 px (Recommended)</option>
                <option value="48">48 x 48 px</option>
                <option value="64">64 x 64 px</option>
                <option value="128">128 x 128 px</option>
            </select>
        </div>
        <div>
            <label for="favFormat">Output File Format</label>
            <select id="favFormat" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="png" selected>PNG Graphic (.png)</option>
                <option value="ico">ICO Icon Format (.ico)</option>
            </select>
        </div>
    </div>
    <!-- Canvas display for generated favicon in workspace -->
    <div id="faviconPreviewContainer" style="display:none; text-align: center; margin-top: 15px; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 15px; border: 1px solid var(--border);">
        <p style="color: var(--primary); font-weight: 600; margin-bottom: 10px;">Generated Favicon Preview:</p>
        <div style="display: inline-flex; align-items: center; justify-content: center; background: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
            <img id="faviconPreviewImg" style="image-rendering: pixelated; width: 32px; height: 32px;">
        </div>
    </div>
</div>
<script>
    document.getElementById('faviconFile')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const fileNameSpan = document.getElementById('favFileName');
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large. Max size is 5MB.');
            e.target.value = '';
            if (fileNameSpan) fileNameSpan.innerText = 'No file selected (Max 5MB)';
            return;
        }

        if (fileNameSpan) {
            fileNameSpan.innerText = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        }

        const reader = new FileReader();
        reader.onload = function(evt) {
            window.CURRENT_FAVICON_DATA = evt.target.result;
        };
        reader.readAsDataURL(file);
    });
</script>
"""

INPUT_CASE_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Text to Convert</label>
        <textarea id="toolInput" class="form-control" placeholder="Type or paste your text here..." style="height: 120px;"></textarea>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div>
            <label for="caseMode">Target Case Format</label>
            <select id="caseMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="lower" selected>lower case (lowercase)</option>
                <option value="upper">UPPER CASE (UPPERCASE)</option>
                <option value="sentence">Sentence case (First letter capitalized)</option>
                <option value="title">Title Case (Capitalize Every Word)</option>
                <option value="camel">camelCase (variableName)</option>
                <option value="pascal">PascalCase (TypeName)</option>
                <option value="snake">snake_case (file_name)</option>
                <option value="kebab">kebab-case (url-slug)</option>
            </select>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; text-align: center; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 15px; border: 1px solid var(--border);">
        <div>
            <div id="statChars" style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Characters</div>
        </div>
        <div>
            <div id="statWords" style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Words</div>
        </div>
        <div>
            <div id="statLines" style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Lines</div>
        </div>
        <div>
            <div id="statSentences" style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Sentences</div>
        </div>
    </div>
</div>
<script>
    const caseTxt = document.getElementById('toolInput');
    const updateStats = () => {
        const text = caseTxt?.value || '';
        const chars = text.length;
        const words = text.trim() ? text.trim().split(/\\s+/).length : 0;
        const lines = text ? text.split('\\n').length : 0;
        const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
        
        const sc = document.getElementById('statChars');
        const sw = document.getElementById('statWords');
        const sl = document.getElementById('statLines');
        const ss = document.getElementById('statSentences');
        if (sc) sc.innerText = chars;
        if (sw) sw.innerText = words;
        if (sl) sl.innerText = lines;
        if (ss) ss.innerText = sentences;
    };
    caseTxt?.addEventListener('input', updateStats);
</script>
"""

INPUT_LOREM_IPSUM = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
        <div>
            <label for="loremCount">Generate Count</label>
            <input type="number" id="loremCount" class="form-control" value="5" min="1" max="100" style="padding: 15px;">
        </div>
        <div>
            <label for="loremType">Generation Unit</label>
            <select id="loremType" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="paragraphs" selected>Paragraphs</option>
                <option value="words">Words</option>
                <option value="lists">Unordered List Items</option>
            </select>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
        <div>
            <label for="loremFormat">Markup Format</label>
            <select id="loremFormat" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="plain" selected>Plain Text</option>
                <option value="html">HTML Elements (&lt;p&gt; or &lt;li&gt;)</option>
                <option value="markdown">Markdown syntax</option>
            </select>
        </div>
        <div style="display: flex; align-items: flex-end;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; height: 54px; margin: 0;">
                <input type="checkbox" id="loremStartWith" checked style="width: 20px; height: 20px;">
                Start with "Lorem ipsum"
            </label>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_TIMESTAMP_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(var(--p-hue), 90%, 65%, 0.05); border: 1px solid var(--primary); padding: 15px 20px; border-radius: 15px;">
        <div>
            <span style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Current Epoch Timestamp</span>
            <div id="liveEpoch" style="font-size: 1.6rem; font-weight: 800; font-family: monospace; color: var(--primary);">Loading...</div>
        </div>
        <button type="button" onclick="document.getElementById('toolInput').value = document.getElementById('liveEpoch').innerText" class="category-label active" style="border: none; padding: 10px 15px; font-size: 0.85rem; margin: 0;">Use Current</button>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div style="display: grid; gap: 10px; align-content: start;">
            <label style="font-weight: 600; color: var(--primary);" for="toolInput">1. Convert Epoch to Human Date</label>
            <input type="text" id="toolInput" class="form-control" placeholder="Epoch seconds (e.g. 1718000000) or milliseconds" style="padding: 15px;">
        </div>
        
        <div style="display: grid; gap: 10px; align-content: start;">
            <label style="font-weight: 600; color: var(--primary);" for="humanDateTime">2. Convert Human Date to Epoch</label>
            <div style="display: flex; gap: 10px;">
                <input type="datetime-local" id="humanDateTime" class="form-control" style="padding: 12px; height: 50px;">
            </div>
        </div>
    </div>
    <div>
        <label for="timeZoneSelect">Target Timezone for Output</label>
        <select id="timeZoneSelect" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
            <option value="local" selected>Your Local System Time</option>
            <option value="UTC">Coordinated Universal Time (UTC / GMT)</option>
        </select>
    </div>
</div>
<script>
    const liveEp = document.getElementById('liveEpoch');
    if (liveEp) {
        liveEp.innerText = Math.floor(Date.now() / 1000);
        setInterval(() => {
            liveEp.innerText = Math.floor(Date.now() / 1000);
        }, 1000);
    }
    const localInput = document.getElementById('humanDateTime');
    if (localInput) {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        localInput.value = now.toISOString().slice(0, 16);
    }
</script>
"""

INPUT_MD5_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Text to Hash</label>
        <textarea id="toolInput" class="form-control" placeholder="Type text to hash. If hashing list, toggle option below..." style="height: 120px;"></textarea>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--border); border-radius: 15px; padding: 20px; text-align: center;">
        <label style="display: block; font-weight: 600; margin-bottom: 10px; color: var(--primary);">Generate Checksum from Local File (Optional)</label>
        <input type="file" id="hashFile" class="form-control" style="padding: 10px; display: none;">
        <button type="button" onclick="document.getElementById('hashFile').click()" class="category-label" style="display: inline-block; border: 1px solid var(--border); background: rgba(255,255,255,0.05); padding: 10px 20px; cursor: pointer; border-radius: 10px; margin-bottom: 10px;">Choose File</button>
        <span id="hashFileName" style="display: block; font-size: 0.9rem; color: var(--text-muted);">No file selected (Max 5MB)</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
        <div>
            <label for="hashCase">Output Case</label>
            <select id="hashCase" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="lower" selected>Lowercase Hex (e.g. d41d8cd9...)</option>
                <option value="upper">Uppercase Hex (e.g. D41D8CD9...)</option>
            </select>
        </div>
        <div style="display: flex; align-items: flex-end;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; height: 54px; margin: 0;">
                <input type="checkbox" id="hashBulk" style="width: 20px; height: 20px;">
                Bulk Mode (Hash each line independently)
            </label>
        </div>
    </div>
</div>
<script>
    document.getElementById('hashFile')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const fileNameSpan = document.getElementById('hashFileName');
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large. Max size is 5MB.');
            e.target.value = '';
            if (fileNameSpan) fileNameSpan.innerText = 'No file selected (Max 5MB)';
            return;
        }

        if (fileNameSpan) {
            fileNameSpan.innerText = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        }

        const reader = new FileReader();
        reader.onload = function(evt) {
            window.CURRENT_HASH_FILE_BYTES = new Uint8Array(evt.target.result);
        };
        reader.readAsArrayBuffer(file);
    });
</script>
"""

INPUT_SHA256_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Text to Hash</label>
        <textarea id="toolInput" class="form-control" placeholder="Type text to hash. If hashing list, toggle option below..." style="height: 120px;"></textarea>
    </div>
    <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--border); border-radius: 15px; padding: 20px; text-align: center;">
        <label style="display: block; font-weight: 600; margin-bottom: 10px; color: var(--primary);">Generate Checksum from Local File (Optional)</label>
        <input type="file" id="hashFile" class="form-control" style="padding: 10px; display: none;">
        <button type="button" onclick="document.getElementById('hashFile').click()" class="category-label" style="display: inline-block; border: 1px solid var(--border); background: rgba(255,255,255,0.05); padding: 10px 20px; cursor: pointer; border-radius: 10px; margin-bottom: 10px;">Choose File</button>
        <span id="hashFileName" style="display: block; font-size: 0.9rem; color: var(--text-muted);">No file selected (Max 5MB)</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
        <div>
            <label for="hashCase">Output Case</label>
            <select id="hashCase" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="lower" selected>Lowercase Hex (e.g. e3b0c442...)</option>
                <option value="upper">Uppercase Hex (e.g. E3B0C442...)</option>
            </select>
        </div>
        <div style="display: flex; align-items: flex-end;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; height: 54px; margin: 0;">
                <input type="checkbox" id="hashBulk" style="width: 20px; height: 20px;">
                Bulk Mode (Hash each line independently)
            </label>
        </div>
    </div>
</div>
<script>
    document.getElementById('hashFile')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const fileNameSpan = document.getElementById('hashFileName');
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large. Max size is 5MB.');
            e.target.value = '';
            if (fileNameSpan) fileNameSpan.innerText = 'No file selected (Max 5MB)';
            return;
        }

        if (fileNameSpan) {
            fileNameSpan.innerText = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
        }

        const reader = new FileReader();
        reader.onload = function(evt) {
            window.CURRENT_HASH_FILE_BYTES = new Uint8Array(evt.target.result);
        };
        reader.readAsArrayBuffer(file);
    });
</script>
"""

INPUT_HTML_PREVIEW = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap;">
        <div style="display: flex; gap: 10px; align-items: center;">
            <label for="splitLayout" style="margin: 0; white-space: nowrap;">Layout Split:</label>
            <select id="splitLayout" class="form-control" style="padding: 10px; width: 150px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-main); height: auto;">
                <option value="vertical" selected>Vertical Split</option>
                <option value="horizontal">Horizontal Split</option>
            </select>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Load Presets:</span>
            <button type="button" onclick="loadHtmlPreset('simple')" class="category-label" style="border: 1px solid var(--border); padding: 5px 10px; margin: 0; font-size: 0.8rem;">CSS Animation</button>
            <button type="button" onclick="loadHtmlPreset('svg')" class="category-label" style="border: 1px solid var(--border); padding: 5px 10px; margin: 0; font-size: 0.8rem;">SVG graphic</button>
            <button type="button" onclick="loadHtmlPreset('bootstrap')" class="category-label" style="border: 1px solid var(--border); padding: 5px 10px; margin: 0; font-size: 0.8rem;">Bootstrap Form</button>
        </div>
    </div>
    
    <div id="previewWorkspace" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; transition: grid-template-columns 0.3s ease;">
        <div style="display: grid; gap: 10px; align-content: start;">
            <label for="toolInput">HTML Source Code</label>
            <textarea id="toolInput" class="form-control" placeholder="Write or paste your HTML, CSS, and JS code here..." style="height: 400px; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
        </div>
        <div style="display: grid; gap: 10px; align-content: start;">
            <label>Real-Time Preview</label>
            <iframe id="htmlPreviewIframe" sandbox="allow-scripts" style="width: 100%; height: 400px; background: white; border: 1px solid var(--border); border-radius: 12px;"></iframe>
        </div>
    </div>
</div>
<script>
    const presets = {
        simple: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background: #0f172a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: system-ui, sans-serif;
  }
  .box {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    border-radius: 20px;
    animation: spin 3s infinite linear;
    box-shadow: 0 10px 30px rgba(56, 189, 248, 0.4);
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
        svg: `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background: #1e293b;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
</style>
</head>
<body>
  <svg width="200" height="200" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="#f43f5e" stroke-width="4" fill="none" />
    <polygon points="50,20 65,65 30,40 70,40 35,65" fill="#f59e0b" />
  </svg>
</body>
</html>`,
        bootstrap: `<!DOCTYPE html>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
  body { padding: 30px; background-color: #f8f9fa; }
</style>
</head>
<body>
  <div class="card shadow-sm max-w-md mx-auto" style="max-width: 450px;">
    <div class="card-body">
      <h5 class="card-title">Bootstrap Sample Form</h5>
      <form onsubmit="event.preventDefault(); alert('Form submitted!');">
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" placeholder="name@example.com" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Submit Form</button>
      </form>
    </div>
  </div>
</body>
</html>`
    };
    function loadHtmlPreset(key) {
        const area = document.getElementById('toolInput');
        if (area) {
            area.value = presets[key];
            const evt = new Event('input', { bubbles: true });
            area.dispatchEvent(evt);
        }
    }
    const splitSel = document.getElementById('splitLayout');
    const workspace = document.getElementById('previewWorkspace');
    splitSel?.addEventListener('change', (e) => {
        if (workspace) {
            if (e.target.value === 'horizontal') {
                workspace.style.gridTemplateColumns = '1fr';
            } else {
                workspace.style.gridTemplateColumns = '1fr 1fr';
            }
        }
    });
    setTimeout(() => {
        const area = document.getElementById('toolInput');
        if (area && !area.value) {
            loadHtmlPreset('simple');
        }
    }, 100);
</script>
"""

INPUT_MARKDOWN_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap;">
        <div style="display: flex; gap: 10px; align-items: center;">
            <label for="splitLayout" style="margin: 0; white-space: nowrap;">Layout Split:</label>
            <select id="splitLayout" class="form-control" style="padding: 10px; width: 150px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 8px; color: var(--text-main); height: auto;">
                <option value="vertical" selected>Vertical Split</option>
                <option value="horizontal">Horizontal Split</option>
            </select>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
            <span style="font-size: 0.85rem; color: var(--text-muted);">Preview Mode:</span>
            <button type="button" id="previewBtnHtml" onclick="toggleMarkdownPreviewMode('html')" class="category-label active" style="border: none; padding: 8px 12px; margin: 0; font-size: 0.8rem;">Rendered Preview</button>
            <button type="button" id="previewBtnCode" onclick="toggleMarkdownPreviewMode('code')" class="category-label" style="border: 1px solid var(--border); padding: 8px 12px; margin: 0; font-size: 0.8rem;">Raw HTML Code</button>
        </div>
    </div>
    
    <div id="markdownWorkspace" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; transition: grid-template-columns 0.3s ease;">
        <div style="display: grid; gap: 10px; align-content: start;">
            <label for="toolInput">Markdown Input</label>
            <textarea id="toolInput" class="form-control" placeholder="# Heading 1&#10;&#10;Write markdown text here. Supports:&#10;- **Bold** and *Italics*&#10;- Bullet lists&#10;- Blockquotes&#10;- Inline \\`code\\`" style="height: 400px; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
        </div>
        <div style="display: grid; gap: 10px; align-content: start;">
            <label>Output Area</label>
            <div id="markdownPreviewContainer" class="markdown-body" style="width: 100%; height: 400px; padding: 20px; overflow-y: auto; background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 12px; color: var(--text-main);"></div>
            <textarea id="markdownHtmlCodeContainer" class="form-control" readonly style="width: 100%; height: 400px; display: none; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
        </div>
    </div>
</div>
<script>
    let currentPreviewMode = "html";
    function toggleMarkdownPreviewMode(mode) {
        currentPreviewMode = mode;
        const htmlBtn = document.getElementById('previewBtnHtml');
        const codeBtn = document.getElementById('previewBtnCode');
        const previewDiv = document.getElementById('markdownPreviewContainer');
        const codeTextarea = document.getElementById('markdownHtmlCodeContainer');
        
        if (mode === 'code') {
            htmlBtn.className = "category-label";
            htmlBtn.style.border = "1px solid var(--border)";
            codeBtn.className = "category-label active";
            codeBtn.style.border = "none";
            
            if (previewDiv) previewDiv.style.display = 'none';
            if (codeTextarea) codeTextarea.style.display = 'block';
        } else {
            htmlBtn.className = "category-label active";
            htmlBtn.style.border = "none";
            codeBtn.className = "category-label";
            codeBtn.style.border = "1px solid var(--border)";
            
            if (previewDiv) previewDiv.style.display = 'block';
            if (codeTextarea) codeTextarea.style.display = 'none';
        }
    }
    const splitSelMark = document.getElementById('splitLayout');
    const workspaceMark = document.getElementById('markdownWorkspace');
    splitSelMark?.addEventListener('change', (e) => {
        if (workspaceMark) {
            if (e.target.value === 'horizontal') {
                workspaceMark.style.gridTemplateColumns = '1fr';
            } else {
                workspaceMark.style.gridTemplateColumns = '1fr 1fr';
            }
        }
    });
    setTimeout(() => {
        const area = document.getElementById('toolInput');
        if (area && !area.value) {
            area.value = `# Welcome to Markdown Converter

MultiTools Hub provides this interactive Markdown tool. 

## Key Features
- **Real-Time Compilation**: View changes instantly.
- **HTML Export**: Copy clean target code.
- **Client-Side privacy**: Your text stays in the browser.

> Place blockquotes easily to highlight items of high importance.

Try modifying this text block!`;
            const evt = new Event('input', { bubbles: true });
            area.dispatchEvent(evt);
        }
    }, 100);
</script>
"""

INPUT_WORD_COUNTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Text to Count</label>
        <textarea id="toolInput" class="form-control" placeholder="Type, paste, or draft your text content here to analyze dynamic stats..." style="height: 150px;"></textarea>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 15px; text-align: center; background: rgba(255,255,255,0.02); padding: 20px; border-radius: 15px; border: 1px solid var(--border);">
        <div>
            <div id="statWords" style="font-size: 1.4rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Words</div>
        </div>
        <div>
            <div id="statCharsWith" style="font-size: 1.4rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Characters (Spaces)</div>
        </div>
        <div>
            <div id="statCharsWithout" style="font-size: 1.4rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Characters (No Space)</div>
        </div>
        <div>
            <div id="statSentences" style="font-size: 1.4rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Sentences</div>
        </div>
        <div>
            <div id="statParagraphs" style="font-size: 1.4rem; font-weight: 700; color: var(--primary);">0</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Paragraphs</div>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; background: rgba(var(--p-hue), 90%, 65%, 0.03); border: 1px solid rgba(var(--p-hue), 90%, 65%, 0.2); padding: 15px 20px; border-radius: 15px;">
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">⏱️</span>
            <div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Estimated Reading Time</div>
                <div id="readTime" style="font-weight: 600; color: var(--text-main);">0 minutes</div>
            </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">🗣️</span>
            <div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Estimated Speaking Time</div>
                <div id="speakTime" style="font-weight: 600; color: var(--text-main);">0 minutes</div>
            </div>
        </div>
    </div>
    
    <div style="background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-radius: 15px; padding: 20px;">
        <h4 style="margin-top:0; margin-bottom: 15px; font-size: 1rem; color: var(--primary); display: flex; align-items: center; gap: 10px;">📊 Word Density Analysis (Top 5 Repeated Words)</h4>
        <div id="densityList" style="display: grid; gap: 10px;">
            <div style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Enter text above to compile keyword repetition statistics.</div>
        </div>
    </div>
</div>
<script>
    const wordArea = document.getElementById('toolInput');
    const processStats = () => {
        const text = wordArea?.value || '';
        
        const rawWords = text.trim() ? text.trim().split(/\\s+/) : [];
        const words = rawWords.length;
        const charsWith = text.length;
        const charsWithout = text.replace(/\\s/g, '').length;
        const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
        const paragraphs = text.trim() ? text.split(/\\n+/).filter(p => p.trim()).length : 0;
        
        document.getElementById('statWords').innerText = words;
        document.getElementById('statCharsWith').innerText = charsWith;
        document.getElementById('statCharsWithout').innerText = charsWithout;
        document.getElementById('statSentences').innerText = sentences;
        document.getElementById('statParagraphs').innerText = paragraphs;
        
        const readMin = (words / 225).toFixed(1);
        const speakMin = (words / 130).toFixed(1);
        document.getElementById('readTime').innerText = words > 0 ? `${readMin} min (${Math.ceil(words * 60 / 225)} sec)` : "0 minutes";
        document.getElementById('speakTime').innerText = words > 0 ? `${speakMin} min (${Math.ceil(words * 60 / 130)} sec)` : "0 minutes";
        
        const densityList = document.getElementById('densityList');
        if (!densityList) return;
        
        if (words === 0) {
            densityList.innerHTML = '<div style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Enter text above to compile keyword repetition statistics.</div>';
            return;
        }
        
        const counts = {};
        const stopwords = new Set(["the", "a", "and", "of", "to", "in", "is", "that", "it", "on", "for", "with", "as", "at", "by", "an", "this", "be", "are", "from", "or", "your", "our", "my"]);
        rawWords.forEach(w => {
            const clean = w.toLowerCase().replace(/[^a-z0-9]/g, '');
            if (clean && clean.length > 2 && !stopwords.has(clean)) {
                counts[clean] = (counts[clean] || 0) + 1;
            }
        });
        
        const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 5);
        if (sorted.length === 0) {
            densityList.innerHTML = '<div style="color: var(--text-muted); font-size: 0.9rem; font-style: italic;">Provide longer paragraphs with diverse terms to calculate keyword patterns.</div>';
            return;
        }
        
        let html = '';
        sorted.forEach(([word, count]) => {
            const percentage = ((count / words) * 100).toFixed(1);
            html += `
                <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border);">
                    <strong style="color: var(--text-main); font-family: monospace;">"${word}"</strong>
                    <div style="display: flex; gap: 15px; font-size: 0.9rem;">
                        <span style="color: var(--primary);">Count: ${count}</span>
                        <span style="color: var(--text-muted);">Density: ${percentage}%</span>
                    </div>
                </div>
            `;
        });
        densityList.innerHTML = html;
    };
    wordArea?.addEventListener('input', processStats);
</script>
"""

INPUT_DAYS_BETWEEN = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="startDate">Start Date</label>
            <input type="date" id="startDate" class="form-control" style="padding: 15px; height: 50px;">
        </div>
        <div>
            <label for="endDate">End Date</label>
            <input type="date" id="endDate" class="form-control" style="padding: 15px; height: 50px;">
        </div>
    </div>
    
    <div>
        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="includeEndDate" style="width: 20px; height: 20px;">
            Include end date in calculation (add 1 day)
        </label>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');
    if (startInput && endInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        startInput.value = today.toISOString().split('T')[0];
        endInput.value = tomorrow.toISOString().split('T')[0];
    }
</script>
"""

INPUT_LEAP_YEAR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
            <label for="leapYearInput">Target Year to Check</label>
            <input type="number" id="leapYearInput" class="form-control" value="2026" min="1" max="9999" style="padding: 15px;">
        </div>
        <div style="display: flex; align-items: flex-end;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; height: 54px; margin: 0;">
                <input type="checkbox" id="leapRangeToggle" style="width: 20px; height: 20px;">
                Audit a Year Range Instead
            </label>
        </div>
    </div>
    
    <div id="leapRangeContainer" style="display: none; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label for="leapStartYear">Start Year</label>
            <input type="number" id="leapStartYear" class="form-control" value="1990" min="1" max="9999" style="padding: 15px;">
        </div>
        <div>
            <label for="leapEndYear">End Year</label>
            <input type="number" id="leapEndYear" class="form-control" value="2050" min="1" max="9999" style="padding: 15px;">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    document.getElementById('leapRangeToggle')?.addEventListener('change', (e) => {
        const rangeDiv = document.getElementById('leapRangeContainer');
        if (rangeDiv) {
            rangeDiv.style.display = e.target.checked ? 'grid' : 'none';
        }
    });
</script>
"""

INPUT_JSON_VALIDATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap;">
        <label for="toolInput" style="margin: 0; font-weight: 600;">JSON Input String</label>
        <div style="display: flex; gap: 10px;">
            <button type="button" onclick="loadJsonPreset('valid')" class="category-label" style="border: 1px solid var(--border); padding: 5px 12px; margin: 0; font-size: 0.8rem;">Load Valid JSON</button>
            <button type="button" onclick="loadJsonPreset('invalid')" class="category-label" style="border: 1px solid var(--border); padding: 5px 12px; margin: 0; font-size: 0.8rem;">Load Invalid JSON</button>
        </div>
    </div>
    
    <div>
        <textarea id="toolInput" class="form-control" placeholder="Paste your JSON text content here to validate structure..." style="height: 250px; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
    </div>
    
    <div id="jsonStatusAlert" style="display: none; padding: 15px 20px; border-radius: 12px; font-size: 0.95rem; line-height: 1.5; font-weight: 500;"></div>
</div>
<script>
    const jsonPresets = {
        valid: `{
  "site": "MultiTools Hub",
  "tools": 100,
  "features": [
    "Secure local processing",
    "Real-time calculations",
    "AdSense optimized layouts"
  ],
  "active": true
}`,
        invalid: `{
  "site": "MultiTools Hub",
  "tools": 100
  "features": [
    "Missing comma boundary"
  ]
}`
    };
    function loadJsonPreset(key) {
        const area = document.getElementById('toolInput');
        if (area) {
            area.value = jsonPresets[key];
            const evt = new Event('input', { bubbles: true });
            area.dispatchEvent(evt);
        }
    }
</script>
"""

INPUT_ROBOTS_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
            <label for="robotsAgent">Target User-Agent Directive</label>
            <select id="robotsAgent" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="*" selected>All Crawlers (*)</option>
                <option value="Googlebot">Googlebot (Google Search)</option>
                <option value="Bingbot">Bingbot (Microsoft Bing)</option>
                <option value="Yandex">YandexBot (Yandex Search)</option>
                <option value="Baiduspider">Baiduspider (Baidu Search)</option>
            </select>
        </div>
        <div>
            <label for="robotsDelay">Crawl-Delay Constraint (Seconds)</label>
            <select id="robotsDelay" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="none" selected>No Delay (Recommended)</option>
                <option value="5">5 Seconds</option>
                <option value="10">10 Seconds</option>
                <option value="20">20 Seconds</option>
            </select>
        </div>
    </div>
    
    <div>
        <label for="robotsSitemap">Sitemap XML URL (Optional)</label>
        <input type="url" id="robotsSitemap" class="form-control" placeholder="e.g. https://multitoolshub.co.in/sitemap.xml" style="padding: 15px;">
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label for="robotsDisallowed">Disallowed Paths (One per line)</label>
            <textarea id="robotsDisallowed" class="form-control" placeholder="/admin/&#10;/temp/&#10;/private/" style="height: 120px; font-family: monospace;"></textarea>
        </div>
        <div>
            <label for="robotsAllowed">Allowed Paths (One per line)</label>
            <textarea id="robotsAllowed" class="form-control" placeholder="/public/&#10;/assets/" style="height: 120px; font-family: monospace;"></textarea>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_ROMAN_NUMERAL = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
            <label for="romanMode">Conversion Direction</label>
            <select id="romanMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="arabicToRoman" selected>Arabic Number to Roman Numeral</option>
                <option value="romanToArabic">Roman Numeral to Arabic Number</option>
            </select>
        </div>
        <div>
            <label for="toolInput">Value to Convert</label>
            <input type="text" id="toolInput" class="form-control" placeholder="Enter integer (1 - 3999)" style="padding: 15px;">
        </div>
    </div>
</div>
<script>
    document.getElementById('romanMode')?.addEventListener('change', (e) => {
        const inp = document.getElementById('toolInput');
        if (inp) {
            inp.value = '';
            if (e.target.value === 'arabicToRoman') {
                inp.placeholder = 'Enter integer (1 - 3999)';
            } else {
                inp.placeholder = 'Enter Roman numeral (e.g. MCX)';
            }
        }
    });
</script>
"""

INPUT_TIMEZONE_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
            <label for="timezoneDateTime">Source Date & Time</label>
            <input type="datetime-local" id="timezoneDateTime" class="form-control" style="padding: 12px; height: 50px;">
        </div>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="sourceTZ">Source Timezone</label>
            <select id="sourceTZ" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="UTC" selected>UTC - Coordinated Universal Time</option>
                <option value="America/New_York">EST/EDT - America/New_York</option>
                <option value="Europe/London">GMT/BST - Europe/London</option>
                <option value="Asia/Kolkata">IST - Asia/Kolkata (India)</option>
                <option value="Asia/Tokyo">JST - Asia/Tokyo (Japan)</option>
                <option value="Australia/Sydney">AEST/AEDT - Australia/Sydney</option>
            </select>
        </div>
        <div>
            <label for="targetTZ">Target Timezone</label>
            <select id="targetTZ" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="Asia/Kolkata" selected>IST - Asia/Kolkata (India)</option>
                <option value="UTC">UTC - Coordinated Universal Time</option>
                <option value="America/New_York">EST/EDT - America/New_York</option>
                <option value="Europe/London">GMT/BST - Europe/London</option>
                <option value="Asia/Tokyo">JST - Asia/Tokyo (Japan)</option>
                <option value="Australia/Sydney">AEST/AEDT - Australia/Sydney</option>
            </select>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    const tzInput = document.getElementById('timezoneDateTime');
    if (tzInput) {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        tzInput.value = now.toISOString().slice(0, 16);
    }
</script>
"""

INPUT_URL_SHORTENER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Long URL link to Shorten</label>
        <input type="url" id="toolInput" class="form-control" placeholder="e.g. https://multitoolshub.co.in/tools/text/word-counter.html" style="padding: 15px;">
    </div>
</div>
"""

INPUT_SITEMAP_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput" style="font-weight: 600;">Website URLs (One per line)</label>
        <textarea id="toolInput" class="form-control" placeholder="https://multitoolshub.co.in/&#10;https://multitoolshub.co.in/tools/text/word-counter.html" style="height: 180px; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="sitemapFrequency">Change Frequency</label>
            <select id="sitemapFrequency" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="hourly">Hourly</option>
                <option value="daily" selected>Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="never">Never</option>
            </select>
        </div>
        <div>
            <label for="sitemapPriority">Default Priority</label>
            <select id="sitemapPriority" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="1.0" selected>1.0 (Homepage / Root)</option>
                <option value="0.8">0.8 (Categories / Main tools)</option>
                <option value="0.6">0.6 (Standard pages)</option>
                <option value="0.4">0.4 (Low-value archive pages)</option>
            </select>
        </div>
    </div>
</div>
"""

INPUT_META_TAG_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
        <div>
            <label for="metaTagTitle">Site Title (Max 60 characters recommended)</label>
            <input type="text" id="metaTagTitle" class="form-control" placeholder="e.g. MultiTools Hub - Free Online Web Utilities" style="padding: 15px;">
        </div>
        <div>
            <label for="metaTagDesc">Site Description (Max 160 characters recommended)</label>
            <textarea id="metaTagDesc" class="form-control" placeholder="e.g. Free and secure online tools for developers, SEO specialists, writers, and daily productivity tasks." style="height: 80px;"></textarea>
        </div>
        <div>
            <label for="metaTagKeywords">Keywords (Comma separated)</label>
            <input type="text" id="metaTagKeywords" class="form-control" placeholder="e.g. online tools, word counter, json validator, timezone converter" style="padding: 15px;">
        </div>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
        <div>
            <label for="robotsIndex">Robots Indexing</label>
            <select id="robotsIndex" class="form-control" style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="index" selected>Index (Allow Indexing)</option>
                <option value="noindex">Noindex (Block Indexing)</option>
            </select>
        </div>
        <div>
            <label for="robotsFollow">Robots Following</label>
            <select id="robotsFollow" class="form-control" style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="follow" selected>Follow (Follow links)</option>
                <option value="nofollow">Nofollow (Ignore links)</option>
            </select>
        </div>
        <div>
            <label for="metaTagLang">Content Language</label>
            <select id="metaTagLang" class="form-control" style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="English" selected>English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Bengali">Bengali</option>
            </select>
        </div>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
        <div>
            <label for="metaTagAuthor">Author (Optional)</label>
            <input type="text" id="metaTagAuthor" class="form-control" placeholder="e.g. MultiTools Hub" style="padding: 15px;">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_HEX_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
            <label for="hexMode">Conversion Mode</label>
            <select id="hexMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="hexToDec" selected>Hexadecimal to Decimal</option>
                <option value="decToHex">Decimal to Hexadecimal</option>
                <option value="hexToBin">Hexadecimal to Binary</option>
                <option value="hexToOct">Hexadecimal to Octal</option>
            </select>
        </div>
        <div>
            <label for="toolInput">Value to Convert</label>
            <input type="text" id="toolInput" class="form-control" placeholder="Enter hex string (e.g. A3F)" style="padding: 15px;">
        </div>
    </div>
</div>
<script>
    document.getElementById('hexMode')?.addEventListener('change', (e) => {
        const inp = document.getElementById('toolInput');
        if (inp) {
            inp.value = '';
            if (e.target.value === 'decToHex') {
                inp.placeholder = 'Enter decimal integer (e.g. 2623)';
            } else {
                inp.placeholder = 'Enter hex string (e.g. A3F)';
            }
        }
    });
</script>
"""

INPUT_HTML_MINIFIER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput" style="font-weight: 600;">HTML Source Code</label>
        <textarea id="toolInput" class="form-control" placeholder="Paste your raw HTML markup here..." style="height: 250px; font-family: monospace; font-size: 0.9rem; line-height: 1.5;"></textarea>
    </div>
    
    <div style="display:flex; gap: 20px; flex-wrap: wrap; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="minCollapseWhitespace" checked style="accent-color: var(--primary);"> Collapse Whitespace
        </label>
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="minStripComments" checked style="accent-color: var(--primary);"> Strip Comments
        </label>
    </div>
    
    <div id="minifierReportAlert" style="display: none; padding: 12px 18px; border-radius: 10px; font-size: 0.9rem; font-weight: 500; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); color: rgb(52, 211, 153);"></div>
</div>
"""

INPUT_COUNTDOWN_TIMER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
            <label for="timerTarget">Target Date & Time</label>
            <input type="datetime-local" id="timerTarget" class="form-control" style="padding: 12px; height: 50px;">
        </div>
        <div style="display: flex; align-items: end; gap: 10px;">
            <button type="button" onclick="setTimerDuration(5)" class="category-label" style="border: 1px solid var(--border); padding: 12px 15px; margin: 0; flex-grow: 1;">+5 Min</button>
            <button type="button" onclick="setTimerDuration(30)" class="category-label" style="border: 1px solid var(--border); padding: 12px 15px; margin: 0; flex-grow: 1;">+30 Min</button>
            <button type="button" onclick="setTimerDuration(60)" class="category-label" style="border: 1px solid var(--border); padding: 12px 15px; margin: 0; flex-grow: 1;">+1 Hour</button>
        </div>
    </div>
    
    <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 25px; text-align: center;">
        <div id="countdownClockDisplay" style="font-family: monospace; font-size: 2.8rem; font-weight: 700; color: var(--primary); margin-bottom: 15px; letter-spacing: 2px;">00d 00h 00m 00s</div>
        
        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; margin-bottom: 20px;">
            <div id="countdownProgressBar" style="width: 0%; height: 100%; background: var(--primary); transition: width 0.3s ease;"></div>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 15px;">
            <button type="button" id="btnPauseResume" onclick="toggleTimerRunning()" class="category-label active" style="padding: 10px 25px; margin: 0; display: none;">Pause</button>
            <button type="button" id="btnResetTimer" onclick="resetCountdownTimer()" class="category-label" style="border: 1px solid var(--border); padding: 10px 25px; margin: 0; display: none;">Clear</button>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    const trg = document.getElementById('timerTarget');
    if (trg) {
        const now = new Date();
        now.setHours(now.getHours() + 1);
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        trg.value = now.toISOString().slice(0, 16);
    }
    
    function setTimerDuration(mins) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + mins);
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        const trg = document.getElementById('timerTarget');
        if (trg) {
            trg.value = now.toISOString().slice(0, 16);
            const evt = new Event('input', { bubbles: true });
            trg.dispatchEvent(evt);
        }
    }
</script>
"""

INPUT_REGEX_TESTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
        <div>
            <label for="regexPattern">Regular Expression Pattern</label>
            <input type="text" id="regexPattern" class="form-control" placeholder="e.g. \\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\\b" style="padding: 15px; font-family: monospace;">
        </div>
        <div>
            <label for="toolInput">Test Text</label>
            <textarea id="toolInput" class="form-control" placeholder="Enter text here to test against the regex pattern..." style="height: 150px;"></textarea>
        </div>
    </div>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="flagGlobal" checked style="accent-color: var(--primary);"> Global (g)
        </label>
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="flagIgnoreCase" style="accent-color: var(--primary);"> Ignore Case (i)
        </label>
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="flagMultiline" style="accent-color: var(--primary);"> Multiline (m)
        </label>
    </div>
    
    <div id="regexMatchReportAlert" style="display: none; padding: 12px 18px; border-radius: 10px; font-size: 0.9rem; font-weight: 500;"></div>
    
    <div id="regexHighlightContainer" style="display: none; background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-radius: 12px; padding: 20px; line-height: 1.6; word-break: break-all; white-space: pre-wrap;"></div>
</div>
"""

INPUT_TEXT_DIFF = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="toolInput">Original Text</label>
            <textarea id="toolInput" class="form-control" placeholder="Paste the original version of your text block here..." style="height: 200px;"></textarea>
        </div>
        <div>
            <label for="textDiffModified">Modified Text</label>
            <textarea id="textDiffModified" class="form-control" placeholder="Paste the modified version here to compare..." style="height: 200px;"></textarea>
        </div>
    </div>
    
    <div id="diffReportAlert" style="display: none; padding: 12px 18px; border-radius: 10px; font-size: 0.9rem; font-weight: 500; background: rgba(255,255,255,0.02); border: 1px solid var(--border);"></div>
    
    <div id="diffResultContainer" style="display: none; background: rgba(255,255,255,0.01); border: 1px solid var(--border); border-radius: 12px; padding: 20px; font-family: monospace; font-size: 0.9rem; line-height: 1.5; white-space: pre-wrap; overflow-x: auto;"></div>
</div>
"""

INPUT_WORLD_CLOCK = """
<div class="input-group" style="display: grid; gap: 25px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 20px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary);">London (GMT/BST)</h4>
            <div id="clockLondon" style="font-family: monospace; font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 5px;">00:00:00</div>
            <div id="dateLondon" style="font-size: 0.85rem; color: var(--text-muted);">Date...</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 20px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary);">New York (EST/EDT)</h4>
            <div id="clockNewYork" style="font-family: monospace; font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 5px;">00:00:00</div>
            <div id="dateNewYork" style="font-size: 0.85rem; color: var(--text-muted);">Date...</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 20px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary);">Tokyo (JST)</h4>
            <div id="clockTokyo" style="font-family: monospace; font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 5px;">00:00:00</div>
            <div id="dateTokyo" style="font-size: 0.85rem; color: var(--text-muted);">Date...</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 20px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary);">Dubai (GST)</h4>
            <div id="clockDubai" style="font-family: monospace; font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 5px;">00:00:00</div>
            <div id="dateDubai" style="font-size: 0.85rem; color: var(--text-muted);">Date...</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 20px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary);">Delhi (IST)</h4>
            <div id="clockDelhi" style="font-family: monospace; font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 5px;">00:00:00</div>
            <div id="dateDelhi" style="font-size: 0.85rem; color: var(--text-muted);">Date...</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 15px; padding: 20px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary);">Sydney (AEST/AEDT)</h4>
            <div id="clockSydney" style="font-family: monospace; font-size: 2rem; font-weight: 700; color: var(--text-main); margin-bottom: 5px;">00:00:00</div>
            <div id="dateSydney" style="font-size: 0.85rem; color: var(--text-muted);">Date...</div>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    function startWorldClockTicker() {
        const updateClocks = () => {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            
            document.getElementById('clockLondon').innerText = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', ...timeOptions });
            document.getElementById('dateLondon').innerText = now.toLocaleDateString('en-GB', { timeZone: 'Europe/London', ...dateOptions });
            
            document.getElementById('clockNewYork').innerText = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', ...timeOptions });
            document.getElementById('dateNewYork').innerText = now.toLocaleDateString('en-US', { timeZone: 'America/New_York', ...dateOptions });
            
            document.getElementById('clockTokyo').innerText = now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', ...timeOptions });
            document.getElementById('dateTokyo').innerText = now.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', ...dateOptions });
            
            document.getElementById('clockDubai').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', ...timeOptions });
            document.getElementById('dateDubai').innerText = now.toLocaleDateString('en-US', { timeZone: 'Asia/Dubai', ...dateOptions });
            
            document.getElementById('clockDelhi').innerText = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', ...timeOptions });
            document.getElementById('dateDelhi').innerText = now.toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata', ...dateOptions });
            
            document.getElementById('clockSydney').innerText = now.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney', ...timeOptions });
            document.getElementById('dateSydney').innerText = now.toLocaleDateString('en-US', { timeZone: 'Australia/Sydney', ...dateOptions });
        };
        setInterval(updateClocks, 1000);
        updateClocks();
    }
    setTimeout(startWorldClockTicker, 100);
</script>
"""

INPUT_WEBSITE_STATUS = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Domain or Web Link URL to Check</label>
        <input type="url" id="toolInput" class="form-control" placeholder="e.g. https://multitoolshub.co.in" style="padding: 15px;">
    </div>
    
    <div id="websiteStatusReport" style="display: none; padding: 20px; border-radius: 12px; font-size: 0.95rem; line-height: 1.6; font-weight: 500;"></div>
</div>
"""

INPUT_CSS_GRADIENT = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
        <div>
            <label for="gradientType">Gradient Type</label>
            <select id="gradientType" class="form-control" style="padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="linear" selected>Linear Gradient</option>
                <option value="radial">Radial Gradient</option>
            </select>
        </div>
        <div>
            <label for="gradColor1">Start Color</label>
            <div style="display: flex; gap: 10px; align-items: center;">
                <input type="color" id="gradColor1" value="#6d28d9" style="width: 50px; height: 50px; border: none; border-radius: 10px; background: none; cursor: pointer; padding: 0;">
                <input type="text" id="gradColorText1" value="#6D28D9" class="form-control" style="padding: 10px; font-family: monospace; text-transform: uppercase;">
            </div>
        </div>
        <div>
            <label for="gradColor2">End Color</label>
            <div style="display: flex; gap: 10px; align-items: center;">
                <input type="color" id="gradColor2" value="#3b82f6" style="width: 50px; height: 50px; border: none; border-radius: 10px; background: none; cursor: pointer; padding: 0;">
                <input type="text" id="gradColorText2" value="#3B82F6" class="form-control" style="padding: 10px; font-family: monospace; text-transform: uppercase;">
            </div>
        </div>
        <div id="angleSliderContainer">
            <label for="gradAngle">Angle (Degrees: <span id="angleValueDisplay">90</span>°)</label>
            <input type="range" id="gradAngle" min="0" max="360" value="90" style="width: 100%; height: 50px; accent-color: var(--primary);">
        </div>
    </div>
    
    <div id="gradientPreviewBox" style="width: 100%; height: 180px; border-radius: 15px; border: 1px solid var(--border); background: linear-gradient(90deg, #6d28d9, #3b82f6); box-shadow: inset 0 2px 10px rgba(0,0,0,0.2);"></div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    const picker1 = document.getElementById('gradColor1');
    const txt1 = document.getElementById('gradColorText1');
    const picker2 = document.getElementById('gradColor2');
    const txt2 = document.getElementById('gradColorText2');
    const angle = document.getElementById('gradAngle');
    const type = document.getElementById('gradientType');
    
    const syncAndRefresh = (p, t) => {
        p.addEventListener('input', (e) => {
            t.value = e.target.value.toUpperCase();
            triggerGradientProcess();
        });
        t.addEventListener('input', (e) => {
            if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                p.value = e.target.value;
                triggerGradientProcess();
            }
        });
    };
    
    syncAndRefresh(picker1, txt1);
    syncAndRefresh(picker2, txt2);
    
    angle?.addEventListener('input', (e) => {
        const val = document.getElementById('angleValueDisplay');
        if (val) val.innerText = e.target.value;
        triggerGradientProcess();
    });
    
    type?.addEventListener('change', (e) => {
        const slider = document.getElementById('angleSliderContainer');
        if (slider) {
            slider.style.display = e.target.value === 'radial' ? 'none' : 'block';
        }
        triggerGradientProcess();
    });
    
    function triggerGradientProcess() {
        const trg = document.getElementById('toolInput');
        if (trg) {
            const evt = new Event('input', { bubbles: true });
            trg.dispatchEvent(evt);
        }
    }
</script>
"""

INPUT_CSS_MINIFIER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input CSS Rules</label>
        <textarea id="toolInput" class="form-control" placeholder="Paste your raw CSS styles here to minify..." style="height: 200px; font-family: monospace;"></textarea>
    </div>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="minifyComments" checked style="accent-color: var(--primary);"> Strip Comments
        </label>
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="minifyWhitespace" checked style="accent-color: var(--primary);"> Collapse Whitespace
        </label>
    </div>
    
    <div id="cssMinifierReport" style="display: none; padding: 12px 18px; border-radius: 10px; font-size: 0.9rem; font-weight: 500; background: rgba(16, 185, 129, 0.1); border: 1px solid rgb(16, 185, 129); color: rgb(52, 211, 153);"></div>
</div>
"""

INPUT_KEYWORD_DENSITY = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Article Copy / Text Content</label>
        <textarea id="toolInput" class="form-control" placeholder="Paste your text content here to analyze keywords density distributions..." style="height: 220px;"></textarea>
    </div>
</div>
"""

INPUT_SLUG_GENERATOR = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="toolInput">Input Title or Text String</label>
        <input type="text" id="toolInput" class="form-control" placeholder="e.g. 10 Best SEO Tools For Small Businesses" style="padding: 15px;">
    </div>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid var(--border);">
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="slugRemoveStopwords" style="accent-color: var(--primary);"> Strip Common Stopwords
        </label>
        <label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; cursor: pointer; margin: 0; color: var(--text-muted);">
            <input type="checkbox" id="slugLowercase" checked style="accent-color: var(--primary);"> Force Lowercase
        </label>
    </div>
</div>
"""

INPUT_OCTAL_CONVERTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
        <div>
            <label for="octalMode">Conversion Direction</label>
            <select id="octalMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 12px; color: var(--text-main); height: auto; width: 100%;">
                <option value="octToDec" selected>Octal to Decimal (Base 8 to Base 10)</option>
                <option value="decToOct">Decimal to Octal (Base 10 to Base 8)</option>
                <option value="octToBin">Octal to Binary (Base 8 to Base 2)</option>
                <option value="octToHex">Octal to Hexadecimal (Base 8 to Base 16)</option>
            </select>
        </div>
        <div>
            <label for="toolInput">Input Value</label>
            <input type="text" id="toolInput" class="form-control" placeholder="e.g. 175 (Octal) or 125 (Decimal)" style="padding: 15px; font-family: monospace;">
        </div>
    </div>
</div>
<script>
    const oMode = document.getElementById('octalMode');
    oMode?.addEventListener('change', (e) => {
        const inp = document.getElementById('toolInput');
        if (!inp) return;
        if (e.target.value === 'decToOct') {
            inp.placeholder = "e.g. 125 (Decimal)";
        } else {
            inp.placeholder = "e.g. 175 (Octal)";
        }
    });
</script>
"""

INPUT_STOPWATCH = """
<div class="input-group" style="display: grid; gap: 25px;">
    <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 20px; padding: 30px; text-align: center; max-width: 500px; margin: 0 auto; width: 100%;">
        <div id="stopwatchClockDisplay" style="font-family: monospace; font-size: 3.5rem; font-weight: 700; color: var(--text-main); letter-spacing: 2px; margin-bottom: 20px; line-height: 1;">00:00:00.000</div>
        
        <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 25px;">
            <button id="btnStopwatchStart" onclick="window.startStopwatchTicker()" class="btn btn-primary" style="padding: 12px 25px; font-weight: 600; border-radius: 10px;">Start</button>
            <button id="btnStopwatchLap" onclick="window.recordStopwatchLap()" class="btn" style="padding: 12px 25px; font-weight: 600; border-radius: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: var(--text-main); display: none;">Lap</button>
            <button id="btnStopwatchReset" onclick="window.resetStopwatchTicker()" class="btn" style="padding: 12px 25px; font-weight: 600; border-radius: 10px; background: rgba(239,68,68,0.1); border: 1px solid rgb(239,68,68); color: rgb(248,113,113); display: none;">Reset</button>
        </div>
        
        <div id="stopwatchLapsListContainer" style="display: none; text-align: left; max-height: 200px; overflow-y: auto; border-top: 1px solid var(--border); padding-top: 15px;">
            <label style="font-size: 0.85rem; color: var(--primary); text-transform: uppercase; font-weight: 800; letter-spacing: 2px; display: block; margin-bottom: 10px;">Recorded Laps</label>
            <div id="stopwatchLapsList" style="display: grid; gap: 8px;"></div>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_ASPECT_RATIO = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label>Width</label>
            <input type="number" id="aspectWidth" class="form-control" value="1920" style="padding: 15px;">
        </div>
        <div>
            <label>Height</label>
            <input type="number" id="aspectHeight" class="form-control" value="1080" style="padding: 15px;">
        </div>
    </div>
    <div>
        <label>Calculate For (New Width or New Height)</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <label>New Width (to find Height)</label>
                <input type="number" id="newWidth" class="form-control" placeholder="e.g. 1280" style="padding: 15px;">
            </div>
            <div>
                <label>New Height (to find Width)</label>
                <input type="number" id="newHeight" class="form-control" placeholder="e.g. 720" style="padding: 15px;">
            </div>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_COLOR_PICKER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label>Choose Color</label>
        <input type="color" id="pickerColor" value="#6366f1" style="width: 120px; height: 120px; border: none; border-radius: 20px; cursor: pointer; display: block; margin: 0 auto; background: transparent;">
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_DRAWING_BOARD = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 20px; border: 1px solid var(--border);">
        <div>
            <label style="font-size: 0.8rem; margin-bottom: 5px; display: block;">Brush Color</label>
            <input type="color" id="drawColor" value="#6366f1" style="width: 40px; height: 40px; border: none; border-radius: 5px; cursor: pointer; background: transparent;">
        </div>
        <div>
            <label style="font-size: 0.8rem; margin-bottom: 5px; display: block;">Brush Size: <span id="drawSizeVal">5</span>px</label>
            <input type="range" id="drawSize" min="1" max="50" value="5" style="width: 120px;">
        </div>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
            <button id="drawEraser" class="category-label" style="border: none; padding: 10px 20px;">Eraser</button>
            <button id="drawClear" class="category-label" style="border: none; padding: 10px 20px;">Clear Canvas</button>
        </div>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <canvas id="paintCanvas" width="600" height="400" style="border: 1px solid var(--border); border-radius: 20px; background: #ffffff; cursor: crosshair; max-width: 100%; display: block; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"></canvas>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_TEXT_DIFF = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div>
            <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Original Text</label>
            <textarea id="textDiffOriginal" class="form-control" style="height: 200px;" placeholder="Paste the original text here..."></textarea>
        </div>
        <div>
            <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Modified Text</label>
            <textarea id="textDiffModified" class="form-control" style="height: 200px;" placeholder="Paste the modified text here..."></textarea>
        </div>
    </div>
    <!-- Hidden input for compatibility -->
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_REGEX_TESTER = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 3fr 1fr; gap: 15px;">
        <div>
            <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Regular Expression Pattern</label>
            <input type="text" id="regexPattern" class="form-control" placeholder="e.g. [a-zA-Z]+" style="padding: 15px; font-family: monospace;">
        </div>
        <div>
            <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Flags</label>
            <div style="display: flex; gap: 10px; align-items: center; height: 50px; background: rgba(255,255,255,0.02); padding: 0 15px; border-radius: 15px; border: 1px solid var(--border);">
                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 0.85rem;"><input type="checkbox" id="flagGlobal" checked>g</label>
                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 0.85rem;"><input type="checkbox" id="flagIgnoreCase" checked>i</label>
                <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 0.85rem;"><input type="checkbox" id="flagMultiline">m</label>
            </div>
        </div>
    </div>
    <div>
        <label style="display:block; margin-bottom: 10px; color: var(--primary); font-weight: 600;">Text to Test</label>
        <textarea id="regexTestText" class="form-control" style="height: 180px;" placeholder="Type or paste the text content you want to match against..."></textarea>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

INPUT_PERCENTAGE_CALC = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="percentageMode">Select Calculation Type</label>
        <select id="percentageMode" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
            <option value="of">What is X% of Y?</option>
            <option value="is_percent">X is what percent of Y?</option>
            <option value="change">What is the percentage increase/decrease from X to Y?</option>
        </select>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label id="labelVal1" for="percentageVal1">Value X</label>
            <input type="number" id="percentageVal1" class="form-control" placeholder="e.g. 20" style="padding: 15px;" step="any">
        </div>
        <div>
            <label id="labelVal2" for="percentageVal2">Value Y</label>
            <input type="number" id="percentageVal2" class="form-control" placeholder="e.g. 500" style="padding: 15px;" step="any">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    // Dynamically update input labels when selection changes
    document.getElementById('percentageMode')?.addEventListener('change', (e) => {
        const mode = e.target.value;
        const lbl1 = document.getElementById('labelVal1');
        const lbl2 = document.getElementById('labelVal2');
        if (mode === 'of') {
            if(lbl1) lbl1.innerText = 'Percentage (X)';
            if(lbl2) lbl2.innerText = 'Total Amount (Y)';
        } else if (mode === 'is_percent') {
            if(lbl1) lbl1.innerText = 'Part (X)';
            if(lbl2) lbl2.innerText = 'Whole (Y)';
        } else if (mode === 'change') {
            if(lbl1) lbl1.innerText = 'Initial Value (X)';
            if(lbl2) lbl2.innerText = 'Final Value (Y)';
        }
    });
</script>
"""

INPUT_AGE_CALC = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; flex-wrap: wrap;">
        <div>
            <label for="birthDate">Date of Birth</label>
            <input type="date" id="birthDate" class="form-control" style="padding: 15px; min-height: 54px; height: auto;" required>
        </div>
        <div>
            <label for="ageAtDate">Age at the Date of</label>
            <input type="date" id="ageAtDate" class="form-control" style="padding: 15px; min-height: 54px; height: auto;">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    // Default the 'Age at' date to today's date in local timezone
    document.addEventListener('DOMContentLoaded', () => {
        const today = new Date().toISOString().split('T')[0];
        const ageAtInput = document.getElementById('ageAtDate');
        if (ageAtInput) ageAtInput.value = today;
    });
</script>
"""

INPUT_BMI_CALC = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div>
        <label for="bmiSystem">Select Unit System</label>
        <select id="bmiSystem" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
            <option value="metric">Metric System (kg, cm)</option>
            <option value="imperial">Imperial System (lbs, inches)</option>
        </select>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label id="bmiWeightLabel" for="bmiWeight">Weight</label>
            <input type="number" id="bmiWeight" class="form-control" placeholder="e.g. 70" style="padding: 15px;" step="any">
        </div>
        <div>
            <label id="bmiHeightLabel" for="bmiHeight">Height</label>
            <input type="number" id="bmiHeight" class="form-control" placeholder="e.g. 175" style="padding: 15px;" step="any">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    document.getElementById('bmiSystem')?.addEventListener('change', (e) => {
        const system = e.target.value;
        const wLabel = document.getElementById('bmiWeightLabel');
        const hLabel = document.getElementById('bmiHeightLabel');
        const wInput = document.getElementById('bmiWeight');
        const hInput = document.getElementById('bmiHeight');
        if (system === 'metric') {
            if (wLabel) wLabel.innerText = 'Weight (kg)';
            if (hLabel) hLabel.innerText = 'Height (cm)';
            if (wInput) wInput.placeholder = 'e.g. 70';
            if (hInput) hInput.placeholder = 'e.g. 175';
        } else {
            if (wLabel) wLabel.innerText = 'Weight (lbs)';
            if (hLabel) hLabel.innerText = 'Height (inches)';
            if (wInput) wInput.placeholder = 'e.g. 154';
            if (hInput) hInput.placeholder = 'e.g. 69';
        }
    });
</script>
"""

INPUT_GST_CALC = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label for="gstAmount">Original Amount ($)</label>
            <input type="number" id="gstAmount" class="form-control" placeholder="e.g. 1000" style="padding: 15px;" step="any">
        </div>
        <div>
            <label for="gstRate">GST Rate (%)</label>
            <select id="gstRate" class="form-control" style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; color: var(--text-main); width: 100%; height: auto;">
                <option value="5">5%</option>
                <option value="12">12%</option>
                <option value="18" selected>18%</option>
                <option value="28">28%</option>
                <option value="custom">Custom GST Rate</option>
            </select>
        </div>
    </div>
    <div id="customGstContainer" style="display: none;">
        <label for="customGstRate">Custom GST Rate (%)</label>
        <input type="number" id="customGstRate" class="form-control" placeholder="e.g. 15" style="padding: 15px;" step="any">
    </div>
    <div>
        <label>Calculation Type</label>
        <div style="display: flex; gap: 20px; align-items: center; margin-top: 5px;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="radio" name="gstType" value="exclusive" checked style="width: 20px; height: 20px;"> GST Exclusive
            </label>
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="radio" name="gstType" value="inclusive" style="width: 20px; height: 20px;"> GST Inclusive
            </label>
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
<script>
    document.getElementById('gstRate')?.addEventListener('change', (e) => {
        const container = document.getElementById('customGstContainer');
        if (container) {
            container.style.display = e.target.value === 'custom' ? 'block' : 'none';
        }
    });
</script>
"""

INPUT_DISCOUNT_CALC = """
<div class="input-group" style="display: grid; gap: 20px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label for="discPrice">Original Price ($)</label>
            <input type="number" id="discPrice" class="form-control" placeholder="e.g. 100" style="padding: 15px;" step="any">
        </div>
        <div>
            <label for="discPercent">Discount (%)</label>
            <input type="number" id="discPercent" class="form-control" placeholder="e.g. 20" style="padding: 15px;" step="any">
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
            <label for="discAdditional">Additional Discount (%, Optional)</label>
            <input type="number" id="discAdditional" class="form-control" placeholder="e.g. 5" style="padding: 15px;" step="any">
        </div>
        <div>
            <label for="discTax">Sales Tax (%, Optional)</label>
            <input type="number" id="discTax" class="form-control" placeholder="e.g. 8" style="padding: 15px;" step="any">
        </div>
    </div>
    <textarea id="toolInput" style="display:none"></textarea>
</div>
"""

# Generate the files
for category, tools in tools_data.items():
    category_path = os.path.join(BASE_DIR, category)
    if not os.path.exists(category_path):
        os.makedirs(category_path)
    
    # Select input type based on category
    if category == "image":
        dynamic_input = INPUT_FILE
    elif category == "math":
        dynamic_input = INPUT_MATH
    elif category == "css":
        dynamic_input = INPUT_CSS
    elif category == "seo":
        dynamic_input = INPUT_SEO
    elif category == "security":
        dynamic_input = INPUT_SECURITY
    elif category == "time":
        dynamic_input = INPUT_TIME
    elif category == "web":
        dynamic_input = INPUT_WEB
    else:
        dynamic_input = INPUT_TEXTAREA
    
    for tool_name in tools:
        title = tool_name.replace('-', ' ').title()
        file_name = f"{tool_name}.html"
        file_path = os.path.join(category_path, file_name)
        
        # Decide specific input for tools
        current_input = dynamic_input
        if tool_name == "image-resizer":
            current_input = INPUT_IMAGE_RESIZER
        elif tool_name == "image-compressor":
            current_input = INPUT_IMAGE_COMPRESSOR
        elif tool_name == "meme-generator":
            current_input = INPUT_MEME_GENERATOR
        elif tool_name == "image-watermark":
            current_input = INPUT_IMAGE_WATERMARK
        elif tool_name == "thumbnail-preview":
            current_input = INPUT_THUMBNAIL_PREVIEW
        elif tool_name == "css-button":
            current_input = INPUT_CSS_BUTTON
        elif tool_name == "flexbox-generator":
            current_input = INPUT_FLEXBOX_GENERATOR
        elif tool_name == "grid-layout":
            current_input = INPUT_GRID_LAYOUT
        elif tool_name == "password-generator":
            current_input = INPUT_PASSWORD_GENERATOR
        elif tool_name == "uuid-generator":
            current_input = INPUT_UUID_GENERATOR
        elif tool_name == "aspect-ratio":
            current_input = INPUT_ASPECT_RATIO
        elif tool_name == "color-picker":
            current_input = INPUT_COLOR_PICKER
        elif tool_name == "drawing-board":
            current_input = INPUT_DRAWING_BOARD
        elif tool_name == "favicon-generator":
            current_input = INPUT_FAVICON_GENERATOR
        elif tool_name == "length-converter":
            current_input = INPUT_LENGTH_CONVERTER
        elif tool_name == "weight-converter":
            current_input = INPUT_WEIGHT_CONVERTER
        elif tool_name == "temp-converter":
            current_input = INPUT_TEMP_CONVERTER
        elif tool_name == "binary-converter":
            current_input = INPUT_BINARY_CONVERTER
        elif tool_name == "text-diff":
            current_input = INPUT_TEXT_DIFF
        elif tool_name == "regex-tester":
            current_input = INPUT_REGEX_TESTER
        elif tool_name == "youtube-video-downloader":
            current_input = INPUT_YOUTUBE_DOWNLOADER
        elif tool_name == "percentage-calc":
            current_input = INPUT_PERCENTAGE_CALC
        elif tool_name == "age-calc":
            current_input = INPUT_AGE_CALC
        elif tool_name == "bmi-calc":
            current_input = INPUT_BMI_CALC
        elif tool_name == "gst-calc":
            current_input = INPUT_GST_CALC
        elif tool_name == "discount-calc":
            current_input = INPUT_DISCOUNT_CALC
        elif tool_name == "qr-generator":
            current_input = INPUT_QR_GENERATOR
        elif tool_name == "credit-card-validator":
            current_input = INPUT_CREDIT_CARD_VALIDATOR
        elif tool_name == "json-formatter":
            current_input = INPUT_JSON_FORMATTER
        elif tool_name == "password-strength":
            current_input = INPUT_PASSWORD_STRENGTH
        elif tool_name == "base64-encoder":
            current_input = INPUT_BASE64_ENCODER
        elif tool_name == "base64-decoder":
            current_input = INPUT_BASE64_DECODER
        elif tool_name == "url-encoder":
            current_input = INPUT_URL_ENCODER
        elif tool_name == "url-decoder":
            current_input = INPUT_URL_DECODER
        elif tool_name == "case-converter":
            current_input = INPUT_CASE_CONVERTER
        elif tool_name == "lorem-ipsum":
            current_input = INPUT_LOREM_IPSUM
        elif tool_name == "timestamp-converter":
            current_input = INPUT_TIMESTAMP_CONVERTER
        elif tool_name == "md5-generator":
            current_input = INPUT_MD5_GENERATOR
        elif tool_name == "sha256-generator":
            current_input = INPUT_SHA256_GENERATOR
        elif tool_name == "html-preview":
            current_input = INPUT_HTML_PREVIEW
        elif tool_name == "markdown-converter":
            current_input = INPUT_MARKDOWN_CONVERTER
        elif tool_name == "word-counter":
            current_input = INPUT_WORD_COUNTER
        elif tool_name == "days-between":
            current_input = INPUT_DAYS_BETWEEN
        elif tool_name == "leap-year":
            current_input = INPUT_LEAP_YEAR
        elif tool_name == "json-validator":
            current_input = INPUT_JSON_VALIDATOR
        elif tool_name == "robots-generator":
            current_input = INPUT_ROBOTS_GENERATOR
        elif tool_name == "roman-numeral":
            current_input = INPUT_ROMAN_NUMERAL
        elif tool_name == "timezone-converter":
            current_input = INPUT_TIMEZONE_CONVERTER
        elif tool_name == "url-shortener":
            current_input = INPUT_URL_SHORTENER
        elif tool_name == "sitemap-generator":
            current_input = INPUT_SITEMAP_GENERATOR
        elif tool_name == "meta-tag-generator":
            current_input = INPUT_META_TAG_GENERATOR
        elif tool_name == "hex-converter":
            current_input = INPUT_HEX_CONVERTER
        elif tool_name == "html-minifier":
            current_input = INPUT_HTML_MINIFIER
        elif tool_name == "countdown-timer":
            current_input = INPUT_COUNTDOWN_TIMER
        elif tool_name == "regex-tester":
            current_input = INPUT_REGEX_TESTER
        elif tool_name == "text-diff":
            current_input = INPUT_TEXT_DIFF
        elif tool_name == "world-clock":
            current_input = INPUT_WORLD_CLOCK
        elif tool_name == "website-status":
            current_input = INPUT_WEBSITE_STATUS
        elif tool_name == "css-gradient":
            current_input = INPUT_CSS_GRADIENT
        elif tool_name == "css-minifier":
            current_input = INPUT_CSS_MINIFIER
        elif tool_name == "keyword-density":
            current_input = INPUT_KEYWORD_DENSITY
        elif tool_name == "slug-generator":
            current_input = INPUT_SLUG_GENERATOR
        elif tool_name == "octal-converter":
            current_input = INPUT_OCTAL_CONVERTER
        elif tool_name == "stopwatch":
            current_input = INPUT_STOPWATCH
            
        seo_content = get_seo_content(category, tool_name, title)
        
        meta = TOOL_META_DATA.get(tool_name, {})
        meta_title = meta.get("title", f"{title} | MultiTools Hub - Professional Online Tool")
        meta_description = meta.get("description", f"Free and professional {title} on MultiTools Hub. Fast, secure, and user-friendly online tool for everyone.")
        
        content = HTML_TEMPLATE.format(
            title=title,
            meta_title=meta_title,
            meta_description=meta_description,
            category_name=category.capitalize(),
            tool_name=tool_name,
            dynamic_input=current_input,
            seo_content=seo_content
        )
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

print(f"Successfully generated 100 tools with dynamic UI across {len(tools_data)} categories.")
