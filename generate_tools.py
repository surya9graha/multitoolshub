import os
from image_content import IMAGE_SEO_DATA

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
        "html-preview", "markdown-converter", "url-shortener", "yt-downloader", "favicon-generator",
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | MultiTools Hub - Professional Online Tool</title>
    <meta name="description" content="Free and professional {title} on MultiTools Hub. Fast, secure, and user-friendly online tool for everyone.">
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
                <h1 style="font-size: 3.5rem; margin-bottom: 20px; background: linear-gradient(135deg, var(--text-main), var(--primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">{title}</h1>
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
        
        # Decide specific input for image tools
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
            
        seo_content = IMAGE_SEO_DATA.get(tool_name, f"<h2>Maximize Results with our {title}</h2><p>Experience the power of professional digital tools right in your browser.</p>")
        
        content = HTML_TEMPLATE.format(
            title=title,
            category_name=category.capitalize(),
            tool_name=tool_name,
            dynamic_input=current_input,
            seo_content=seo_content
        )
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

print(f"Successfully generated 100 tools with dynamic UI across {len(tools_data)} categories.")
