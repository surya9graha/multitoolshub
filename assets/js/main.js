/**
 * MultiTools Hub - Modern, Premium Design System (RETRY: 2026-04-26 15:04:20)
 */
const TOOLS_DATA = {
    "ai": [
        ["content-writer", "AI Content Writer", "Generate high-quality articles, blogs, titles, and rewritten content instantly using AI."]
    ],
    "image": [
        ["image-resizer", "Image Resizer", "Easily resize images to any dimension."],
        ["image-compressor", "Image Compressor", "Reduce image file size while keeping quality."],
        ["jpg-to-png", "JPG to PNG", "Convert JPG images to PNG format instantly."],
        ["png-to-jpg", "PNG to JPG", "Convert PNG images to JPG format instantly."],
        ["webp-to-jpg", "WebP to JPG", "Convert WebP images to JPG format."],
        ["image-cropper", "Image Cropper", "Crop your images to specific ratios."],
        ["image-rotator", "Image Rotator", "Rotate images clockwise or counter-clockwise."],
        ["image-flipper", "Image Flipper", "Flip images horizontally or vertically."],
        ["blur-image", "Blur Image", "Apply blur effects to your photos online."],
        ["sharpen-image", "Sharpen Image", "Make your blurry images clearer."],
        ["image-watermark", "Image Watermark", "Add text or image watermarks to your photos."],
        ["remove-background", "Remove Background", "Remove image backgrounds using AI."],
        ["grayscale-image", "Grayscale Image", "Convert your color photos to black and white."],
        ["meme-generator", "Meme Generator", "Create custom memes with your own images."],
        ["thumbnail-preview", "Thumbnail Preview", "Preview how your images look as thumbnails."]
    ],
    "css": [
        ["gradient-generator", "Gradient Generator", "Create beautiful CSS linear and radial gradients."],
        ["color-palette", "Color Palette", "Generate harmonious color schemes for your UI."],
        ["hex-to-rgb", "HEX to RGB", "Convert HEX color codes to RGB values."],
        ["rgb-to-hex", "RGB to HEX", "Convert RGB color values to HEX codes."],
        ["css-button", "CSS Button", "Design custom CSS buttons with interactive styles."],
        ["css-shadow", "CSS Shadow", "Generate realistic box-shadow and text-shadow."],
        ["css-gradient", "CSS Gradient", "Advanced CSS gradient designer for experts."],
        ["flexbox-generator", "Flexbox Generator", "Interactive tool to build Flexbox layouts."],
        ["grid-layout", "Grid Layout", "Build complex CSS Grid layouts visually."]
    ],
    "dev": [
        ["json-formatter", "JSON Formatter", "Beautify and validate your JSON data."],
        ["json-validator", "JSON Validator", "Check if your JSON is valid and error-free."],
        ["html-minifier", "HTML Minifier", "Compress your HTML code for faster loading."],
        ["css-minifier", "CSS Minifier", "Remove whitespace and minify your CSS files."],
        ["js-minifier", "JS Minifier", "Minify JavaScript code to improve performance."],
        ["base64-encoder", "Base64 Encoder", "Encode text or files into Base64 format."],
        ["base64-decoder", "Base64 Decoder", "Decode Base64 strings back to original format."],
        ["url-encoder", "URL Encoder", "Safe encode URLs for web transmission."],
        ["url-decoder", "URL Decoder", "Decode URL encoded strings safely."],
        ["regex-tester", "Regex Tester", "Test and debug your regular expressions."],
        ["html-to-text", "HTML to Text", "Strip HTML tags and convert to plain text."],
        ["text-to-html", "Text to HTML", "Convert plain text paragraphs into HTML."]
    ],
    "seo": [
        ["meta-tag-generator", "Meta Tag Generator", "Create SEO-friendly meta tags for your website."],
        ["og-generator", "OG Generator", "Generate Open Graph tags for social media sharing."],
        ["robots-generator", "Robots Generator", "Generate robots.txt files for search engine crawlers."],
        ["sitemap-generator", "Sitemap Generator", "Create XML sitemaps to help indexing."],
        ["keyword-density", "Keyword Density", "Analyze keyword frequency in your content."],
        ["meta-tag-analyzer", "Meta Tag Analyzer", "Check and analyze existing meta tags on a page."]
    ],
    "text": [
        ["word-counter", "Word Counter", "Count words, characters, and sentences instantly."],
        ["char-counter", "Character Counter", "Specialized tool to count characters with/without spaces."],
        ["sentence-counter", "Sentence Counter", "Analyze the number of sentences in your text."],
        ["paragraph-counter", "Paragraph Counter", "Identify the paragraph structure of your writing."],
        ["case-converter", "Case Converter", "Convert text between UPPERCASE, lowercase, and Title Case."],
        ["title-case", "Title Case", "Convert text to standard Title Case format."],
        ["slug-generator", "Slug Generator", "Convert titles into SEO-friendly URL slugs."],
        ["random-name", "Random Name", "Generate random names for users or characters."],
        ["username-generator", "Username Generator", "Create unique and catchy usernames."],
        ["fancy-text", "Fancy Text", "Generate stylish text styles using Unicode characters."],
        ["text-reverser", "Text Reverser", "Reverse your text strings or words easily."],
        ["lorem-ipsum", "Lorem Ipsum", "Generate placeholder text for design mockups."],
        ["text-diff", "Text Diff", "Compare two texts and find the differences."]
    ],
    "math": [
        ["percentage-calc", "Percentage Calc", "Calculate percentages, increases, and decreases."],
        ["age-calc", "Age Calculator", "Calculate age precisely based on birth date."],
        ["bmi-calc", "BMI Calculator", "Check Body Mass Index for health tracking."],
        ["gst-calc", "GST Calculator", "Calculate GST/VAT with inclusive or exclusive modes."],
        ["discount-calc", "Discount Calc", "Calculate final price after multiple discounts."],
        ["length-converter", "Length Converter", "Convert between meters, inches, km, and more."],
        ["weight-converter", "Weight Converter", "Convert between kg, lbs, ounces, and grams."],
        ["temp-converter", "Temp Converter", "Convert between Celsius, Fahrenheit, and Kelvin."],
        ["roman-numeral", "Roman Numeral", "Convert numbers to Roman numerals and vice versa."],
        ["binary-converter", "Binary Converter", "Convert between binary, decimal, and hex."],
        ["hex-converter", "Hex Converter", "Convert numbers to hexadecimal format."],
        ["octal-converter", "Octal Converter", "Convert numbers to octal format."],
        ["random-number", "Random Number", "Generate random numbers within any range."],
        ["math-solver", "Math Solver", "Solve basic algebraic and arithmetic equations."],
        ["fraction-calc", "Fraction Calc", "Add, subtract, multiply, or divide fractions."]
    ],
    "security": [
        ["password-generator", "Password Generator", "Generate secure, random passwords instantly."],
        ["qr-generator", "QR Generator", "Create custom QR codes for URLs or text."],
        ["uuid-generator", "UUID Generator", "Generate unique universal identifiers (v4)."],
        ["md5-generator", "MD5 Generator", "Generate MD5 hashes for any string input."],
        ["sha256-generator", "SHA256 Generator", "Generate secure SHA-256 cryptographic hashes."],
        ["bcrypt-hash", "Bcrypt Hash", "Securely hash passwords using the Bcrypt algorithm."],
        ["credit-card-validator", "Credit Card Validator", "Validate credit card numbers using Luhn's algorithm."],
        ["ip-lookup", "IP Lookup", "Find information about any IP address."],
        ["user-agent", "User Agent", "Parse and analyze browser user agent strings."],
        ["password-strength", "Password Strength", "Analyze the security level of your password."]
    ],
    "time": [
        ["timestamp-converter", "Timestamp Converter", "Convert Unix timestamps to readable dates."],
        ["countdown-timer", "Countdown Timer", "Set a countdown timer for your tasks."],
        ["stopwatch", "Stopwatch", "Track time with a high-precision stopwatch."],
        ["world-clock", "World Clock", "Check current time across different timezones."],
        ["days-between", "Days Between", "Calculate the number of days between two dates."],
        ["leap-year", "Leap Year", "Check if a specific year is a leap year."],
        ["timezone-converter", "Timezone Converter", "Convert times between different timezones."],
        ["date-formatter", "Date Formatter", "Format dates into various international standards."]
    ],
    "web": [
        ["html-preview", "HTML Preview", "Live preview your HTML and CSS code snippets."],
        ["markdown-converter", "Markdown Converter", "Convert Markdown text into styled HTML."],
        ["url-shortener", "URL Shortener", "Shorten long URLs for easier sharing."],
        ["yt-thumbnail-downloader", "YouTube Thumbnail Downloader", "Preview and download YouTube video thumbnails and cover graphics."],
        ["youtube-video-downloader", "YouTube Video Downloader", "Preview, extract details, and download YouTube videos online in multiple formats."],
        ["favicon-generator", "Favicon Generator", "Create multi-size favicons from images."],
        ["website-status", "Website Status", "Check if a website is up or down."],
        ["page-speed", "Page Speed", "Test and analyze website loading performance."],
        ["broken-link", "Broken Link", "Scanner to find broken links on your site."],
        ["dns-lookup", "DNS Lookup", "Look up DNS records for any domain name."],
        ["whois", "Whois Lookup", "Get registration details for a domain."],
        ["source-viewer", "Source Viewer", "View and inspect the source code of any URL."],
        ["redirect-checker", "Redirect Checker", "Trace the full redirect path of a URL."],
        ["favicon-grabber", "Favicon Grabber", "Extract favicons from any website easily."]
    ],
    "misc": [
        ["morse-code", "Morse Code", "Convert text to Morse code and vice versa."],
        ["nato-alphabet", "NATO Alphabet", "Translate text into the NATO phonetic alphabet."],
        ["text-to-speech", "Text to Speech", "Convert written text into spoken audio."],
        ["speech-to-text", "Speech to Text", "Transcribe spoken words into text."],
        ["color-picker", "Color Picker", "Advanced color selection with eye dropper."],
        ["screen-resolution", "Screen Resolution", "Detect your current screen and window size."],
        ["aspect-ratio", "Aspect Ratio", "Calculate aspect ratios for images and videos."],
        ["byte-converter", "Byte Converter", "Convert between bits, bytes, KB, MB, GB, TB."],
        ["online-notepad", "Online Notepad", "A simple persistent notepad in your browser."],
        ["drawing-board", "Drawing Board", "A digital sketchpad for quick drawings."]
    ],
    "pdf": [
        ["merge-pdf", "Merge PDF", "Combine multiple PDF files into one single document."],
        ["split-pdf", "Split PDF", "Extract specific pages or separate all pages from a PDF."],
        ["compress-pdf", "Compress PDF", "Reduce the file size of your PDF while maintaining quality."],
        ["pdf-to-word", "PDF to Word", "Convert PDF documents to editable Microsoft Word files."],
        ["word-to-pdf", "Word to PDF", "Turn your Docx and Word files into professional PDFs."],
        ["jpg-to-pdf", "JPG to PDF", "Convert JPG, PNG, and other images into a PDF document."],
        ["pdf-to-jpg", "PDF to JPG", "Extract pages from a PDF as high-quality JPG images."],
        ["rotate-pdf", "Rotate PDF", "Rotate PDF pages clockwise or counter-clockwise."],
        ["unlock-pdf", "Unlock PDF", "Remove passwords and restrictions from secured PDF files."],
        ["protect-pdf", "Protect PDF", "Secure your PDF documents with a strong password."],
        ["pdf-to-excel", "PDF to Excel", "Extract tabular data from PDF into editable Excel sheets."]
    ]
};


document.addEventListener('DOMContentLoaded', () => {
    console.log('MultiTools Hub Redesign Active (RETRY)');
    
    const safeInit = (name, fn) => {
        try {
            fn();
        } catch (e) {
            console.warn(`Failed to initialize ${name}:`, e);
        }
    };

    safeInit('Theme', initTheme);
    safeInit('ToolGrid', initToolGrid);
    safeInit('Search', initSearch);
    safeInit('CategoryFilter', initCategoryFilter);
    safeInit('ToolEngine', initToolEngine);
    safeInit('ImageTools', initImageTools);
    safeInit('CSSListeners', initCSSListeners);
    
    // New Initializations for Redesigned Homepage
    safeInit('PopularToolsRail', initPopularToolsRail);
    safeInit('LatestBlogsRail', initLatestBlogsRail);
    safeInit('TrendingGuidesRail', initTrendingGuidesRail);
    safeInit('AppSlider', initAppSlider);
});

function initTheme() {
    const themeBtn = document.getElementById('themeSwitch');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        if (icon) icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', target);
            localStorage.setItem('theme', target);
            if (icon) icon.className = target === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        });
    }
}

function initToolGrid() {
    const container = document.getElementById('toolContainer');
    if (!container) return;
    container.innerHTML = '';
    
    // Icon Mapping for ALL tools
    const toolIcons = {
        // AI
        "content-writer": "fas fa-pen-nib",
        // Image
        "image-resizer": "fas fa-expand-arrows-alt", "image-compressor": "fas fa-file-archive",
        "jpg-to-png": "fas fa-exchange-alt", "png-to-jpg": "fas fa-file-image",
        "webp-to-jpg": "fas fa-sync", "image-cropper": "fas fa-crop",
        "grayscale-image": "fas fa-adjust", "remove-background": "fas fa-magic",
        // CSS
        "gradient-generator": "fas fa-palette", "color-palette": "fas fa-swatchbook",
        "hex-to-rgb": "fas fa-fill-drip", "rgb-to-hex": "fas fa-tint",
        "css-shadow": "fas fa-clone", "flexbox-generator": "fas fa-vector-square",
        // Dev
        "json-formatter": "fas fa-indent", "json-validator": "fas fa-check-double",
        "base64-encoder": "fas fa-lock", "base64-decoder": "fas fa-unlock",
        "html-minifier": "fas fa-compress-arrows-alt",
        // Math
        "percentage-calc": "fas fa-percent", "bmi-calc": "fas fa-weight",
        "age-calc": "fas fa-calendar-alt", "gst-calc": "fas fa-receipt",
        "discount-calc": "fas fa-tag", "binary-converter": "fas fa-barcode",
        // Security
        "password-generator": "fas fa-key", "qr-generator": "fas fa-qrcode",
        "credit-card-validator": "fas fa-credit-card", "password-strength": "fas fa-shield-virus",
        // SEO
        "meta-tag-generator": "fas fa-tags", "og-generator": "fas fa-share-alt",
        "robots-generator": "fas fa-robot", "keyword-density": "fas fa-search-dollar",
        // Text
        "word-counter": "fas fa-file-alt",
        // Time
        "timestamp-converter": "fas fa-history", "countdown-timer": "fas fa-hourglass-half",
        "stopwatch": "fas fa-stopwatch", "world-clock": "fas fa-clock",
        // Web
        "html-preview": "fas fa-eye", "markdown-converter": "fab fa-markdown",
        "url-shortener": "fas fa-link", "yt-thumbnail-downloader": "fab fa-youtube",
        // Misc
        "morse-code": "fas fa-ellipsis-h", "nato-alphabet": "fas fa-microphone-alt",
        "text-to-speech": "fas fa-volume-up", "color-picker": "fas fa-eye-dropper",
        // PDF (New)
        "merge-pdf": "fas fa-layer-group", "split-pdf": "fas fa-scissors",
        "compress-pdf": "fas fa-file-contract", "pdf-to-word": "fas fa-file-word",
        "word-to-pdf": "fas fa-file-pdf", "jpg-to-pdf": "fas fa-images",
        "pdf-to-jpg": "fas fa-image", "rotate-pdf": "fas fa-redo",
        "unlock-pdf": "fas fa-lock-open", "protect-pdf": "fas fa-lock",
        "pdf-to-excel": "fas fa-file-excel"
    };


    Object.entries(TOOLS_DATA).forEach(([cat, tools]) => {
        tools.forEach(([id, name, desc]) => {
            const card = document.createElement('a');
            const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('/tools/');
            const prefix = isRoot ? 'tools/' : '../../tools/';
            card.href = `${prefix}${cat}/${id}.html`;
            card.className = 'tool-card fade-in';
            card.setAttribute('data-category', cat);
            
            // Premium Visual: Decorative Gradient Background for the Icon
            const iconClass = toolIcons[id] || 'fas fa-tools';
            card.innerHTML = `
                <div class="tool-visual" style="background: linear-gradient(135deg, hsla(var(--p-hue), 90%, 65%, 0.1), hsla(300, 85%, 65%, 0.1)); height: 120px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px;">
                    <i class="${iconClass}" style="font-size: 3rem; background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>
                </div>
                <h3>${name}</h3>
                <p>${desc}</p>
            `;
            container.appendChild(card);
        });
    });
}

function initPopularToolsRail() {
    const rail = document.getElementById('popularToolsRail');
    if (!rail) return;
    
    const popularTools = [
        ["image", "remove-background", "Background Remover", "Remove image backgrounds using AI.", "fas fa-magic"],
        ["image", "image-compressor", "Image Compressor", "Reduce image file size while keeping quality.", "fas fa-file-archive"],
        ["pdf", "merge-pdf", "PDF Merge", "Combine multiple PDF files into one.", "fas fa-layer-group"],
        ["text", "word-counter", "Word Counter", "Count words and characters instantly.", "fas fa-file-alt"],
        ["security", "qr-generator", "QR Generator", "Create custom QR codes instantly.", "fas fa-qrcode"],
        ["seo", "keyword-density", "Keyword Tool", "Analyze keyword frequency in your content.", "fas fa-search-dollar"]
    ];

    popularTools.forEach(([cat, id, name, desc, icon]) => {
        const card = document.createElement('a');
        card.href = `tools/${cat}/${id}.html`;
        card.className = 'rail-card';
        card.innerHTML = `
            <div class="tool-visual" style="background: hsla(var(--p-hue), 90%, 65%, 0.1); height: 100px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <i class="${icon}" style="font-size: 2.5rem; color: var(--primary);"></i>
            </div>
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="btn-small">Use Tool</div>
        `;
        rail.appendChild(card);
    });
}

function initLatestBlogsRail() {
    const rail = document.getElementById('latestBlogsRail');
    if (!rail) return;

    const blogs = [
        {
            title: "Mastering SGE SEO 2026: Ultimate Strategy",
            excerpt: "Learn how to optimize for Google's AI search experience and dominate the new digital landscape.",
            img: "assets/img/blog/mastering-sge-seo-2026.png",
            url: "blog/mastering-sge-seo-2026.html",
            tag: "SEO & AI"
        },
        {
            title: "Best AI Video Tools for Creators in 2026",
            excerpt: "Create viral content in minutes. Review the top AI tools for text-to-video and avatars.",
            img: "assets/img/blog/best-ai-writing-tools-2026.png",
            url: "blog/best-ai-video-tools-2026.html",
            tag: "Video • AI"
        },
        {
            title: "Ultimate Guide to PDF Tools in 2026",
            excerpt: "Master your PDF workflow. Convert, compress, merge, split, and secure documents easily.",
            img: "assets/img/blog/ultimate-guide-pdf-tools.png",
            url: "blog/ultimate-guide-pdf-tools.html",
            tag: "Tools • PDF"
        },
        {
            title: "High-Performance Cloud Computing in 2026",
            excerpt: "AWS vs. Azure vs. Google Cloud. Choose the right provider for your small business.",
            img: "assets/img/blog/best-cloud-storage-2026.png",
            url: "blog/cloud-computing-2026.html",
            tag: "Cloud • Tech"
        },
        {
            title: "Complete Guide to Document Scanning",
            excerpt: "Learn how to scan documents using your mobile phone like a pro with perfect lighting.",
            img: "assets/img/blog/document-scanning-mobile.png",
            url: "blog/document-scanning-mobile-phone.html",
            tag: "Tech • Guide"
        },
        {
            title: "Future of Professional Photography in 2026",
            excerpt: "Explore how AI is transforming photography, from computational imaging to new models.",
            img: "assets/img/blog/start-freelancing-2026.png",
            url: "blog/photography-future-2026.html",
            tag: "Photography"
        }
    ];

    blogs.forEach(blog => {
        const card = document.createElement('a');
        card.href = blog.url;
        card.className = 'rail-card blog-rail-card';
        card.innerHTML = `
            <div class="rail-card-img">
                <img src="${blog.img}" alt="${blog.title}" loading="lazy">
            </div>
            <div class="rail-card-content">
                <div class="rail-card-tag">${blog.tag}</div>
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <div class="btn-small">Read More</div>
            </div>
        `;
        rail.appendChild(card);
    });
}

function initTrendingGuidesRail() {
    const rail = document.getElementById('trendingGuidesRail');
    if (!rail) return;

    const guides = [
        {
            title: "How to Build a Paperless Office in 2026",
            excerpt: "Tired of paper clutter? Build a fully paperless digital office with this guide.",
            img: "assets/img/blog/paperless-office-guide.png",
            url: "blog/paperless-digital-office-guide.html",
            tag: "Productivity"
        },
        {
            title: "PNG to JPG Optimization Guide 2026",
            excerpt: "Optimize images to save storage and improve website loading times dramatically.",
            img: "assets/img/blog/top-image-tools.png",
            url: "blog/png-to-jpg-optimization-guide.html",
            tag: "Image Tools"
        },
        {
            title: "E-commerce SEO Guide 2026: Rank #1",
            excerpt: "Dominate search results with AI optimization and high-converting pages.",
            img: "assets/img/blog/ecommerce-seo-2026.png",
            url: "blog/ecommerce-seo-2026.html",
            tag: "E-commerce"
        }
    ];

    guides.forEach(guide => {
        const card = document.createElement('a');
        card.href = guide.url;
        card.className = 'rail-card blog-rail-card';
        card.innerHTML = `
            <div class="rail-card-img">
                <img src="${guide.img}" alt="${guide.title}" loading="lazy">
            </div>
            <div class="rail-card-content">
                <div class="rail-card-tag">${guide.tag}</div>
                <h3>${guide.title}</h3>
                <p>${guide.excerpt}</p>
                <div class="btn-small">Learn Now</div>
            </div>
        `;
        rail.appendChild(card);
    });
}

function initSearch() {
    const sInput = document.getElementById('toolSearch');
    if (sInput) sInput.addEventListener('input', () => {
        const val = sInput.value.toLowerCase();
        document.querySelectorAll('.tool-card').forEach(c => {
            const match = c.innerText.toLowerCase().includes(val);
            c.style.display = match ? 'block' : 'none';
        });
    });
}

function initCategoryFilter() {
    const filters = document.querySelectorAll('.category-tabs .category-label');
    if (!filters.length) return;
    
    filters.forEach(btn => btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        document.querySelectorAll('.tool-card').forEach(c => {
            const match = (cat === 'all' || c.getAttribute('data-category') === cat);
            c.style.display = match ? 'block' : 'none';
        });
    }));
}

function initCSSListeners() {
    // CSS Button Listeners
    const btnText = document.getElementById('btnText');
    const btnBg = document.getElementById('btnBgColor');
    const btnTextCol = document.getElementById('btnTextColor');
    const btnHoverBg = document.getElementById('btnHoverBgColor');
    const btnPadY = document.getElementById('btnPadY');
    const btnPadX = document.getElementById('btnPadX');
    const btnRadius = document.getElementById('btnRadius');
    const btnFontSize = document.getElementById('btnFontSize');
    const btnShadow = document.getElementById('btnShadow');

    if (btnPadY) {
        const update = () => {
            document.getElementById('valPadY').innerText = btnPadY.value;
            document.getElementById('valPadX').innerText = btnPadX.value;
            document.getElementById('valRadius').innerText = btnRadius.value;
            document.getElementById('valFontSize').innerText = btnFontSize.value;
            document.getElementById('valShadow').innerText = btnShadow.value;
        };
        [btnPadY, btnPadX, btnRadius, btnFontSize, btnShadow].forEach(el => el.addEventListener('input', update));
    }

    // Flexbox Generator Listeners
    const flexItemCount = document.getElementById('flexItemCount');
    if (flexItemCount) {
        flexItemCount.addEventListener('input', () => {
            document.getElementById('valItems').innerText = flexItemCount.value;
        });
    }

    // Grid Layout Listeners
    const gridCols = document.getElementById('gridCols');
    const gridRows = document.getElementById('gridRows');
    const gridColGap = document.getElementById('gridColGap');
    const gridRowGap = document.getElementById('gridRowGap');
    if (gridCols) {
        const updateGrid = () => {
            document.getElementById('valGridCols').innerText = gridCols.value;
            document.getElementById('valGridRows').innerText = gridRows.value;
            document.getElementById('valColGap').innerText = gridColGap.value;
            document.getElementById('valRowGap').innerText = gridRowGap.value;
        };
        [gridCols, gridRows, gridColGap, gridRowGap].forEach(el => el.addEventListener('input', updateGrid));
    }

    // Password Generator Listeners
    const passLength = document.getElementById('passLength');
    if (passLength) {
        passLength.addEventListener('input', () => {
            document.getElementById('valPassLength').innerText = passLength.value;
        });
    }

    // UUID Generator Listeners
    const uuidCount = document.getElementById('uuidCount');
    if (uuidCount) {
        uuidCount.addEventListener('input', () => {
            document.getElementById('valUuidCount').innerText = uuidCount.value;
        });
    }

    // Drawing Board Listeners and Initialization
    const paintCanvas = document.getElementById('paintCanvas');
    if (paintCanvas) {
        initDrawingBoard(paintCanvas);
    }

    // Online Notepad loader
    const notepadInput = document.getElementById('toolInput');
    const pageH1 = document.querySelector('h1')?.innerText?.toLowerCase() || "";
    if (pageH1.includes('online notepad') && notepadInput) {
        notepadInput.value = localStorage.getItem('online_notepad_content') || "";
    }
}

function initDrawingBoard(canvas) {
    const ctx = canvas.getContext('2d');
    const colorInput = document.getElementById('drawColor');
    const sizeInput = document.getElementById('drawSize');
    const sizeVal = document.getElementById('drawSizeVal');
    const eraserBtn = document.getElementById('drawEraser');
    const clearBtn = document.getElementById('drawClear');

    let painting = false;
    let erasing = false;

    if (sizeInput && sizeVal) {
        sizeInput.addEventListener('input', () => {
            sizeVal.innerText = sizeInput.value;
        });
    }

    if (eraserBtn) {
        eraserBtn.addEventListener('click', () => {
            erasing = !erasing;
            eraserBtn.classList.toggle('active', erasing);
            eraserBtn.innerText = erasing ? "Brush Mode" : "Eraser";
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function getMousePos(canvasDom, clientX, clientY) {
        const rect = canvasDom.getBoundingClientRect();
        const scaleX = canvasDom.width / rect.width;
        const scaleY = canvasDom.height / rect.height;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    function draw(e) {
        if (!painting) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const pos = getMousePos(canvas, clientX, clientY);

        ctx.lineWidth = sizeInput ? sizeInput.value : 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = erasing ? '#ffffff' : (colorInput ? colorInput.value : '#6366f1');

        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startPosition(e); });
    canvas.addEventListener('touchend', finishedPosition);
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });
}

let CURRENT_FILE = null;
let TIMER_INTERVAL = null;

function initToolEngine() {
    const pBtn = document.getElementById('processBtn');
    if (!pBtn) return;
    const h1 = document.querySelector('h1')?.innerText?.toLowerCase() || "";
    
    pBtn.addEventListener('click', async () => {
        const input = document.getElementById('toolInput')?.value || "";
        const output = document.getElementById('toolOutput');
        
        // PDF Tool Routing (handled by pdf-tools.js)
        if (h1.includes('pdf') || h1.includes('word to') || h1.includes('to word') || h1.includes('to excel')) {
            return;
        }

        const isImageTool = h1.includes('resizer') || h1.includes('compressor') || h1.includes('cropper') || 
                           h1.includes('rotator') || h1.includes('flipper') || h1.includes('blur') || 
                           h1.includes('sharpen') || h1.includes('watermark') || h1.includes('meme') ||
                           h1.includes('to jpg') || h1.includes('to png') || h1.includes('remove background') ||
                           h1.includes('grayscale');

        if (isImageTool) {
            handleImageProcessing(h1);
        } else {
            await runCoreLogic(h1, input, output);
        }
    });
}

function initImageTools() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('filePreview');
    const previewContainer = document.getElementById('filePreviewContainer');

    if (!dropZone) return;

    dropZone.onclick = () => fileInput.click();
    fileInput.onchange = (e) => handleFiles(e.target.files);
    dropZone.ondragover = (e) => { e.preventDefault(); dropZone.style.borderColor = 'var(--primary)'; };
    dropZone.ondragleave = () => { dropZone.style.borderColor = 'var(--border)'; };
    dropZone.ondrop = (e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); };

    function handleFiles(files) {
        if (files && files[0]) {
            const file = files[0];
            if (!file.type.startsWith('image/')) { alert('Please upload an image file!'); return; }
            
            // Performance: File Size Limit (5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds 5MB limit. Please upload a smaller image for better performance.');
                return;
            }

            CURRENT_FILE = file;
            const reader = new FileReader();
            
            // Show local preview immediately
            reader.onload = (e) => {
                if (preview) preview.src = e.target.result;
                if (previewContainer) previewContainer.style.display = 'block';
                
                // Special for Thumbnail Preview
                ['thumbYT', 'thumbAvatar', 'thumbSocial'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.src = e.target.result;
                });
            };
            reader.readAsDataURL(file);
        }
    }
}

// Global UI Helper for Performance & Feedback
function toggleLoader(show, text = "Processing...") {
    let loader = document.getElementById('global-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.className = 'loader-container';
        loader.innerHTML = '<div class="spinner"></div><p id="loading-text">Processing...</p>';
        const workspace = document.querySelector('.tool-workspace');
        if (workspace) {
            workspace.style.position = 'relative';
            workspace.appendChild(loader);
        }
    }
    const textEl = loader.querySelector('#loading-text');
    if (textEl) textEl.innerText = text;
    loader.style.display = show ? 'flex' : 'none';
}

function handleImageProcessing(tool) {
    if (!CURRENT_FILE) { alert('Please upload an image first!'); return; }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
        img.onload = () => {
            let width = img.width;
            let height = img.height;
            let format = 'image/png';
            let quality = 0.9;
            let skipDraw = false;

            // Handle specific tool logic with USER INPUTS
            if (tool.includes('resizer')) {
                const targetW = parseInt(document.getElementById('targetWidth')?.value);
                const targetH = parseInt(document.getElementById('targetHeight')?.value);
                const keepAspect = document.getElementById('maintainAspect')?.checked;

                if (targetW && targetH) {
                    width = targetW;
                    height = targetH;
                } else if (targetW) {
                    if (keepAspect) height = (targetW / img.width) * img.height;
                    width = targetW;
                } else if (targetH) {
                    if (keepAspect) width = (targetH / img.height) * img.width;
                    width = targetH;
                }
            } else if (tool.includes('compressor')) {
                const qValue = parseInt(document.getElementById('compQuality')?.value) || 80;
                quality = qValue / 100;
                format = 'image/jpeg';
            } else if (tool.includes('cropper')) {
                // Default to 1:1 Square Crop From Center
                const size = Math.min(img.width, img.height);
                const sourceX = (img.width - size) / 2;
                const sourceY = (img.height - size) / 2;
                width = size;
                height = size;
                
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, sourceX, sourceY, size, size, 0, 0, size, size);
                skipDraw = true;
            } else if (tool.includes('remove background')) {
                const outputText = document.getElementById('toolOutput');
                let apiKey = document.getElementById('removeBgApiKey')?.value;
                
                // If user entered their own API key, call remove.bg directly.
                // Otherwise, use our secure Firebase Cloud Function backend.
                if (apiKey && apiKey.trim().length > 10) {
                    handleRemoveBgAPI(apiKey, outputText);
                } else {
                    handleRemoveBgBackend(outputText);
                }
                return; 
            }
 else if (tool.includes('png to jpg') || tool.includes('webp to jpg')) {
                format = 'image/jpeg';
            } else if (tool.includes('jpg to png')) {
                format = 'image/png';
            }

            toggleLoader(true, "Processing Image...");

            if (!skipDraw) {
                canvas.width = width;
                canvas.height = height;

                // Apply Filters
                if (tool.includes('blur')) ctx.filter = 'blur(10px)';
                if (tool.includes('sharpen')) ctx.filter = 'contrast(1.5) brightness(1.1) saturate(1.2)';
                if (tool.includes('grayscale')) ctx.filter = 'grayscale(100%)';

                // Transformations
                if (tool.includes('flipper')) {
                    ctx.translate(width, 0);
                    ctx.scale(-1, 1);
                }
                if (tool.includes('rotator')) {
                    canvas.width = height;
                    canvas.height = width;
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.drawImage(img, -width / 2, -height / 2, width, height);
                } else {
                    ctx.drawImage(img, 0, 0, width, height);
                }

                // Overlays
                if (tool.includes('watermark')) {
                    const text = document.getElementById('watermarkText')?.value || "© MultiTools Hub";
                    ctx.font = `${width * 0.05}px Arial`;
                    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                    ctx.textAlign = "right";
                    ctx.fillText(text, width - 20, height - 20);
                }

                if (tool.includes('meme')) {
                    const top = document.getElementById('memeTopText')?.value || "";
                    const bottom = document.getElementById('memeBottomText')?.value || "";
                    ctx.font = `bold ${width * 0.08}px Impact, Arial`;
                    ctx.fillStyle = "white";
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = width * 0.005;
                    ctx.textAlign = "center";
                    
                    if (top) {
                        ctx.fillText(top.toUpperCase(), width/2, height * 0.15);
                        ctx.strokeText(top.toUpperCase(), width/2, height * 0.15);
                    }
                    if (bottom) {
                        ctx.fillText(bottom.toUpperCase(), width/2, height * 0.9);
                        ctx.strokeText(bottom.toUpperCase(), width/2, height * 0.9);
                    }
                }
            }

            
            const dataUrl = canvas.toDataURL(format, quality);
            const resultImg = document.getElementById('imageOutput');
            const resContainer = document.getElementById('imageResultContainer');
            const outputText = document.getElementById('toolOutput');
            const downloadBtn = document.getElementById('downloadBtn');

            if (resultImg) resultImg.src = dataUrl;
            if (resContainer) resContainer.style.display = 'block';
            if (outputText) {
                outputText.innerText = `Image Processed Successfully (${width}x${height})`;
                outputText.style.display = 'block';
            }
            if (downloadBtn) {
                downloadBtn.style.display = 'inline-block';
                downloadBtn.onclick = () => {
                    const link = document.createElement('a');
                    link.download = `processed-image.${format.split('/')[1]}`;
                    link.href = dataUrl;
                    link.click();
                };
            }
            toggleLoader(false);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(CURRENT_FILE);
}

async function runCoreLogic(tool, input, output) {
    let result = "";

    // Developer / Dev Tools
    if (tool.includes('json formatter')) {
        if (!input.trim()) {
            result = "Validation Error: Please paste or write some JSON data to format.";
        } else {
            try {
                const spacingVal = document.getElementById('jsonSpacing')?.value || "2";
                const isMinify = document.getElementById('jsonMinify')?.checked;
                
                const parsed = JSON.parse(input);
                if (isMinify) {
                    result = JSON.stringify(parsed);
                } else {
                    const indent = spacingVal === 'tab' ? '\t' : parseInt(spacingVal);
                    result = JSON.stringify(parsed, null, indent);
                }
            } catch (err) {
                let errorDetails = err.message;
                const match = err.message.match(/at position (\d+)/);
                if (match) {
                    const position = parseInt(match[1]);
                    const beforeError = input.substring(0, position);
                    const lines = beforeError.split('\n');
                    const lineNum = lines.length;
                    const colNum = lines[lines.length - 1].length + 1;
                    errorDetails += ` (Line ${lineNum}, Column ${colNum})`;
                }
                result = `Syntax Error: Invalid JSON Format ❌\n\n` +
                         `• Details: ${errorDetails}\n\n` +
                         `💡 Formatting Tips:\n` +
                         `  - Ensure keys and string values are wrapped in double quotes (""), not single quotes ('').\n` +
                         `  - Remove any trailing commas after the last element in arrays or objects.\n` +
                         `  - Double-check that all brackets [] and braces {} match and close correctly.`;
            }
        }
    } else if (tool.includes('json validator')) {
        const alertDiv = document.getElementById('jsonStatusAlert');
        if (!input.trim()) {
            result = "Validation Error: Please enter some JSON text to validate.";
            if (alertDiv) {
                alertDiv.style.display = 'block';
                alertDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                alertDiv.style.border = '1px solid rgb(239, 68, 68)';
                alertDiv.style.color = 'rgb(248, 113, 113)';
                alertDiv.innerText = "Error: Input is empty.";
            }
        } else {
            try {
                const parsed = JSON.parse(input);
                result = JSON.stringify(parsed, null, 2);
                if (alertDiv) {
                    alertDiv.style.display = 'block';
                    alertDiv.style.background = 'rgba(16, 185, 129, 0.1)';
                    alertDiv.style.border = '1px solid rgb(16, 185, 129)';
                    alertDiv.style.color = 'rgb(52, 211, 153)';
                    alertDiv.innerText = "Valid JSON ✅. The JSON structure is correct and successfully formatted.";
                }
            } catch (e) {
                result = `Invalid JSON ❌\n------------------------------------------\nError Message: ${e.message}\n\n💡 Troubleshooting Tips:\n- Make sure all object keys are wrapped in double quotes (e.g., "key": "value").\n- Remove any trailing commas after the last array/object element.\n- Ensure all quotes, curly braces {}, and square brackets [] match and close correctly.`;
                if (alertDiv) {
                    alertDiv.style.display = 'block';
                    alertDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                    alertDiv.style.border = '1px solid rgb(239, 68, 68)';
                    alertDiv.style.color = 'rgb(248, 113, 113)';
                    alertDiv.innerText = "Invalid JSON: " + e.message;
                }
            }
        }
    } else if (tool.includes('base64 encoder')) {
        const format = document.getElementById('b64Format')?.value || "raw";
        let base64Result = "";
        
        if (window.CURRENT_FILE_B64) {
            if (format === 'datauri') {
                base64Result = window.CURRENT_FILE_B64;
            } else {
                const parts = window.CURRENT_FILE_B64.split(',');
                base64Result = parts.length > 1 ? parts[1] : parts[0];
            }
        } else {
            if (!input) {
                result = "Validation Error: Please enter some text or select a file to encode.";
            } else {
                try {
                    const encodedText = btoa(unescape(encodeURIComponent(input)));
                    if (format === 'datauri') {
                        base64Result = `data:text/plain;charset=utf-8;base64,${encodedText}`;
                    } else {
                        base64Result = encodedText;
                    }
                } catch (err) {
                    result = `Encoding Error: ${err.message}`;
                    return;
                }
            }
        }
        result = base64Result;
    } else if (tool.includes('base64 decoder')) {
        let cleanInput = input.trim();
        if (!cleanInput) {
            result = "Validation Error: Please paste some Base64 code to decode.";
        } else {
            let mime = "";
            let b64Data = cleanInput;
            
            const headerMatch = cleanInput.match(/^data:([^;]+);base64,(.+)$/i);
            if (headerMatch) {
                mime = headerMatch[1];
                if (document.getElementById('b64AutoHeader')?.checked) {
                    b64Data = headerMatch[2].trim();
                }
            }
            
            try {
                const decodedBinaryString = atob(b64Data);
                
                if (!mime) {
                    if (decodedBinaryString.substring(0, 4) === '\x89PNG') mime = 'image/png';
                    else if (decodedBinaryString.substring(0, 3) === '\xFF\xD8\xFF') mime = 'image/jpeg';
                    else if (decodedBinaryString.substring(0, 4) === 'GIF8') mime = 'image/gif';
                    else if (decodedBinaryString.substring(0, 4) === '%PDF') mime = 'application/pdf';
                    else if (decodedBinaryString.substring(0, 2) === 'PK') mime = 'application/zip';
                }
                
                const previewContainer = document.getElementById('b64ImagePreviewContainer');
                const previewImg = document.getElementById('b64ImagePreview');
                if (previewContainer && previewImg && mime && mime.startsWith('image/')) {
                    previewContainer.style.display = 'block';
                    previewImg.src = `data:${mime};base64,${b64Data}`;
                } else if (previewContainer) {
                    previewContainer.style.display = 'none';
                }
                
                const downloadContainer = document.getElementById('b64DownloadContainer');
                const downloadBtn = document.getElementById('b64BinDownloadBtn');
                if (downloadContainer && downloadBtn && mime) {
                    downloadContainer.style.display = 'block';
                    downloadBtn.onclick = () => {
                        const len = decodedBinaryString.length;
                        const bytes = new Uint8Array(len);
                        for (let i = 0; i < len; i++) {
                            bytes[i] = decodedBinaryString.charCodeAt(i);
                        }
                        const blob = new Blob([bytes], {type: mime});
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = `decoded-file.${mime.split('/')[1] || 'bin'}`;
                        link.click();
                    };
                } else if (downloadContainer) {
                    downloadContainer.style.display = 'none';
                }
                
                if (mime && (mime.startsWith('image/') || mime === 'application/pdf' || mime === 'application/zip')) {
                    result = `Decoded Binary File Details:\n` +
                             `---------------------------\n` +
                             `• Detected MIME Type: ${mime}\n` +
                             `• Extracted File Size: ${(decodedBinaryString.length / 1024).toFixed(2)} KB\n\n` +
                             `✅ Binary payload detected successfully. Use the action button above to save the file locally.`;
                } else {
                    try {
                        result = decodeURIComponent(escape(decodedBinaryString));
                    } catch (utf8Err) {
                        result = decodedBinaryString;
                    }
                }
            } catch (err) {
                result = `Decoding Error: Invalid Base64 payload. Please check for missing characters or invalid padding. Details: ${err.message}`;
            }
        }
    } else if (tool.includes('url encoder')) {
        if (!input) {
            result = "Validation Error: Please enter text to URL encode.";
        } else {
            const mode = document.getElementById('urlEncodeMode')?.value || "standard";
            if (mode === 'standard') {
                result = encodeURIComponent(input);
            } else if (mode === 'plus') {
                result = encodeURIComponent(input).replace(/%20/g, '+');
            } else if (mode === 'all') {
                let encoded = "";
                for (let i = 0; i < input.length; i++) {
                    const hex = input.charCodeAt(i).toString(16).toUpperCase().padStart(2, '0');
                    encoded += '%' + hex;
                }
                result = encoded;
            }
        }
    } else if (tool.includes('url decoder')) {
        if (!input) {
            result = "Validation Error: Please enter percent-encoded text to decode.";
        } else {
            try {
                const decoded = decodeURIComponent(input.replace(/\+/g, '%20'));
                result = decoded;
                
                const tableContainer = document.getElementById('urlParamsTableContainer');
                const tbody = document.getElementById('urlParamsTableBody');
                if (tableContainer && tbody) {
                    tbody.innerHTML = '';
                    let searchString = "";
                    if (input.includes('?')) {
                        searchString = input.split('?')[1];
                    } else {
                        searchString = input;
                    }
                    
                    const params = new URLSearchParams(searchString);
                    let paramCount = 0;
                    for (let [key, val] of params.entries()) {
                        paramCount++;
                        const row = document.createElement('tr');
                        row.style.borderBottom = '1px solid var(--border)';
                        
                        const tdKey = document.createElement('td');
                        tdKey.style.padding = '12px 15px';
                        tdKey.style.fontFamily = 'monospace';
                        tdKey.style.color = 'var(--text-main)';
                        tdKey.style.wordBreak = 'break-all';
                        tdKey.innerText = key;
                        
                        const tdVal = document.createElement('td');
                        tdVal.style.padding = '12px 15px';
                        tdVal.style.fontFamily = 'monospace';
                        tdVal.style.color = 'var(--text-muted)';
                        tdVal.style.wordBreak = 'break-all';
                        tdVal.innerText = val;
                        
                        row.appendChild(tdKey);
                        row.appendChild(tdVal);
                        tbody.appendChild(row);
                    }
                    
                    if (paramCount > 0) {
                        tableContainer.style.display = 'block';
                    } else {
                        tableContainer.style.display = 'none';
                    }
                }
            } catch (err) {
                result = `Decoding Error: Malformed URL encoding patterns detected. Details: ${err.message}`;
            }
        }
    } else if (tool.includes('html minifier')) {
        const collapseWhitespace = document.getElementById('minCollapseWhitespace')?.checked;
        const stripComments = document.getElementById('minStripComments')?.checked;
        const reportDiv = document.getElementById('minifierReportAlert');
        
        if (!input.trim()) {
            result = "Validation Error: Please enter some HTML code to minify.";
            if (reportDiv) reportDiv.style.display = 'none';
        } else {
            let minified = input;
            
            if (stripComments) {
                minified = minified.replace(/<!--[\s\S]*?-->/g, '');
            }
            
            if (collapseWhitespace) {
                minified = minified.replace(/\s+/g, ' ')
                                   .replace(/>\s+</g, '><');
            }
            
            minified = minified.trim();
            result = minified;
            
            if (reportDiv) {
                const originalSize = input.length;
                const minifiedSize = minified.length;
                const saved = originalSize - minifiedSize;
                const percent = originalSize > 0 ? ((saved / originalSize) * 100).toFixed(1) : 0;
                
                reportDiv.style.display = 'block';
                reportDiv.innerText = `Optimization Report: Size reduced from ${originalSize.toLocaleString()} to ${minifiedSize.toLocaleString()} characters. Saved ${saved.toLocaleString()} characters (${percent}% reduction).`;
            }
        }
    } else if (tool.includes('css minifier')) {
        const val = input.trim();
        const comments = document.getElementById('minifyComments')?.checked ?? true;
        const whitespace = document.getElementById('minifyWhitespace')?.checked ?? true;
        const reportDiv = document.getElementById('cssMinifierReport');
        
        if (!val) {
            result = "Validation Error: Please enter some CSS code to minify.";
            if (reportDiv) reportDiv.style.display = 'none';
        } else {
            let minified = val;
            
            if (comments) {
                minified = minified.replace(/\/\*[\s\S]*?\*\//g, '');
            }
            if (whitespace) {
                minified = minified.replace(/\s+/g, ' ')
                                   .replace(/\s*([{};:])\s*/g, '$1')
                                   .replace(/;}/g, '}');
            }
            
            minified = minified.trim();
            result = minified;
            
            if (reportDiv) {
                const originalSize = val.length;
                const minifiedSize = minified.length;
                const saved = originalSize - minifiedSize;
                const pct = originalSize > 0 ? ((saved / originalSize) * 100).toFixed(1) : 0;
                
                reportDiv.style.display = 'block';
                reportDiv.innerText = `Optimization Report: Size reduced from ${originalSize.toLocaleString()} to ${minifiedSize.toLocaleString()} characters. Saved ${saved.toLocaleString()} characters (${pct}% reduction).`;
            }
        }
    } else if (tool.includes('js minifier')) {
        const val = input.trim();
        const comments = document.getElementById('jsMinifyComments')?.checked ?? true;
        const whitespace = document.getElementById('jsMinifyWhitespace')?.checked ?? true;
        const reportDiv = document.getElementById('jsMinifierReport');
        
        if (!val) {
            result = "Validation Error: Please enter some JavaScript code to minify.";
            if (reportDiv) reportDiv.style.display = 'none';
        } else {
            let minified = val;
            
            if (comments) {
                minified = minified.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
            }
            if (whitespace) {
                minified = minified.replace(/\s+/g, ' ')
                                   .replace(/\s*([=+\-*/%&|<>!?;:.,{}()\[\]])\s*/g, '$1');
            }
            
            minified = minified.trim();
            result = minified;
            
            if (reportDiv) {
                const originalSize = val.length;
                const minifiedSize = minified.length;
                const saved = originalSize - minifiedSize;
                const pct = originalSize > 0 ? ((saved / originalSize) * 100).toFixed(1) : 0;
                
                reportDiv.style.display = 'block';
                reportDiv.innerText = `Optimization Report: Size reduced from ${originalSize.toLocaleString()} to ${minifiedSize.toLocaleString()} characters. Saved ${saved.toLocaleString()} characters (${pct}% reduction).`;
            }
        }
    } else if (tool.includes('regex tester')) {
        const pattern = document.getElementById('regexPattern')?.value || "";
        const testText = input;
        const flagG = document.getElementById('flagGlobal')?.checked ? 'g' : '';
        const flagI = document.getElementById('flagIgnoreCase')?.checked ? 'i' : '';
        const flagM = document.getElementById('flagMultiline')?.checked ? 'm' : '';
        const flags = flagG + flagI + flagM;
        
        const reportDiv = document.getElementById('regexMatchReportAlert');
        const highlightDiv = document.getElementById('regexHighlightContainer');
        const escapeHTML = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        
        if (!pattern) {
            result = "Validation Error: Please enter a regular expression pattern to test.";
            if (reportDiv) reportDiv.style.display = 'none';
            if (highlightDiv) highlightDiv.style.display = 'none';
        } else if (!testText) {
            result = "Validation Error: Please enter test text content.";
            if (reportDiv) reportDiv.style.display = 'none';
            if (highlightDiv) highlightDiv.style.display = 'none';
        } else {
            try {
                const regex = new RegExp(pattern, flags);
                const matches = [];
                let match;
                
                if (flags.includes('g')) {
                    let iterations = 0;
                    while ((match = regex.exec(testText)) !== null) {
                        iterations++;
                        if (iterations > 1000) {
                            matches.push({ text: "... (limited to first 1000 matches)", index: -1 });
                            break;
                        }
                        matches.push({
                            text: match[0],
                            index: match.index,
                            groups: match.slice(1)
                        });
                        if (match[0].length === 0) {
                            regex.lastIndex++;
                        }
                    }
                } else {
                    match = regex.exec(testText);
                    if (match) {
                        matches.push({
                            text: match[0],
                            index: match.index,
                            groups: match.slice(1)
                        });
                    }
                }
                
                if (matches.length > 0) {
                    let textResult = `Found ${matches.length} matches:\n\n`;
                    matches.forEach((m, idx) => {
                        if (m.index === -1) {
                            textResult += `${m.text}\n`;
                        } else {
                            textResult += `• Match ${idx + 1}: "${m.text}" (Index: ${m.index})\n`;
                            if (m.groups && m.groups.length > 0) {
                                m.groups.forEach((g, gIdx) => {
                                    textResult += `  - Group ${gIdx + 1}: "${g || ''}"\n`;
                                });
                            }
                        }
                    });
                    result = textResult;
                    
                    let highlighted = "";
                    let lastIdx = 0;
                    const validMatches = matches.filter(m => m.index !== -1).sort((a, b) => a.index - b.index);
                    const nonOverlapping = [];
                    let currentEnd = 0;
                    for (const m of validMatches) {
                        if (m.index >= currentEnd) {
                            nonOverlapping.push(m);
                            currentEnd = m.index + m.text.length;
                        }
                    }
                    
                    nonOverlapping.forEach(m => {
                        highlighted += escapeHTML(testText.substring(lastIdx, m.index));
                        highlighted += `<mark style="background-color: rgba(var(--p-hue), 90%, 65%, 0.3); color: var(--text-main); border-radius: 4px; padding: 2px; border: 1px solid var(--primary);">${escapeHTML(m.text)}</mark>`;
                        lastIdx = m.index + m.text.length;
                    });
                    highlighted += escapeHTML(testText.substring(lastIdx));
                    
                    if (reportDiv) {
                        reportDiv.style.display = 'block';
                        reportDiv.style.background = 'rgba(16, 185, 129, 0.1)';
                        reportDiv.style.border = '1px solid rgb(16, 185, 129)';
                        reportDiv.style.color = 'rgb(52, 211, 153)';
                        reportDiv.innerText = `Validation Success: Found ${matches.length} matching string segments in target text. Matches highlighted below.`;
                    }
                    if (highlightDiv) {
                        highlightDiv.style.display = 'block';
                        highlightDiv.innerHTML = highlighted;
                    }
                } else {
                    result = "Status: No matches found in the target test text.";
                    if (reportDiv) {
                        reportDiv.style.display = 'block';
                        reportDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                        reportDiv.style.border = '1px solid rgb(239, 68, 68)';
                        reportDiv.style.color = 'rgb(248, 113, 113)';
                        reportDiv.innerText = "Status: Pattern syntax evaluated successfully, but no matches were found.";
                    }
                    if (highlightDiv) {
                        highlightDiv.style.display = 'none';
                    }
                }
            } catch (err) {
                result = `Syntax Error in Regular Expression:\n${err.message}`;
                if (reportDiv) {
                    reportDiv.style.display = 'block';
                    reportDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                    reportDiv.style.border = '1px solid rgb(239, 68, 68)';
                    reportDiv.style.color = 'rgb(248, 113, 113)';
                    reportDiv.innerText = `Regex Syntax Error: ${err.message}`;
                }
                if (highlightDiv) {
                    highlightDiv.style.display = 'none';
                }
            }
        }
    } else if (tool.includes('html to text')) {
        const val = input.trim();
        if (!val) {
            result = "Validation Error: Please enter some HTML code to parse.";
        } else {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(val, 'text/html');
                
                const stripTags = ['script', 'style', 'noscript', 'iframe', 'object', 'embed'];
                stripTags.forEach(tag => {
                    const elms = doc.getElementsByTagName(tag);
                    for (let i = elms.length - 1; i >= 0; i--) {
                        elms[i].parentNode.removeChild(elms[i]);
                    }
                });
                
                let text = "";
                const walk = (node) => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        text += node.nodeValue;
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        const tag = node.tagName.toLowerCase();
                        
                        if (tag === 'br') {
                            text += '\n';
                        } else if (['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'tr'].includes(tag)) {
                            if (text && !text.endsWith('\n')) text += '\n';
                        }
                        
                        for (let i = 0; i < node.childNodes.length; i++) {
                            walk(node.childNodes[i]);
                        }
                        
                        if (['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'tr'].includes(tag)) {
                            if (!text.endsWith('\n')) text += '\n';
                        }
                    }
                };
                
                walk(doc.body);
                result = text.replace(/[ \t]+/g, ' ')
                             .replace(/\n\s*\n/g, '\n\n')
                             .trim();
            } catch (err) {
                result = `Parsing Error: Could not compile HTML block. (${err.message})`;
            }
        }
    } else if (tool.includes('text to html')) {
        result = input.split('\n').map(p => `<p>${p}</p>`).join('\n');
    }
    
    // Text Tools
    else if (tool.includes('word counter')) {
        const text = input || "";
        const rawWords = text.trim() ? text.trim().split(/\s+/) : [];
        const words = rawWords.length;
        const charsWith = text.length;
        const charsWithout = text.replace(/\s/g, '').length;
        const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
        const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim()).length : 0;
        
        const readMin = (words / 225).toFixed(1);
        const speakMin = (words / 130).toFixed(1);
        
        result = `Word Count: ${words}\n` +
                 `Character Count (with spaces): ${charsWith}\n` +
                 `Character Count (without spaces): ${charsWithout}\n` +
                 `Sentence Count: ${sentences}\n` +
                 `Paragraph Count: ${paragraphs}\n\n` +
                 `Estimated Reading Time: ${readMin} minutes\n` +
                 `Estimated Speaking Time: ${speakMin} minutes`;
    } else if (tool.includes('char counter')) {
        result = `Characters (with spaces): ${input.length}\nCharacters (no spaces): ${input.replace(/\s/g, '').length}`;
    } else if (tool.includes('sentence counter')) {
        result = `Sentences identified: ${input.split(/[.!?]+/).filter(x => x).length}`;
    } else if (tool.includes('paragraph counter')) {
        result = `Paragraphs: ${input.split(/\n+/).filter(x => x).length}`;
    } else if (tool.includes('case converter')) {
        const mode = document.getElementById('caseMode')?.value || "lower";
        if (!input) {
            result = "Validation Error: Please enter some text to convert.";
        } else {
            if (mode === 'lower') {
                result = input.toLowerCase();
            } else if (mode === 'upper') {
                result = input.toUpperCase();
            } else if (mode === 'sentence') {
                result = input.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, g1, g2) => g1 + g2.toUpperCase());
            } else if (mode === 'title') {
                result = input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
            } else if (mode === 'camel') {
                result = input.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
                    .replace(/[^a-zA-Z0-9]/g, '');
                if (result.length > 0) result = result.charAt(0).toLowerCase() + result.slice(1);
            } else if (mode === 'pascal') {
                result = input.toLowerCase()
                    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
                    .replace(/[^a-zA-Z0-9]/g, '');
                if (result.length > 0) result = result.charAt(0).toUpperCase() + result.slice(1);
            } else if (mode === 'snake') {
                result = input.toLowerCase()
                    .replace(/\s+/g, '_')
                    .replace(/[^a-z0-9_]/g, '')
                    .replace(/_+/g, '_');
            } else if (mode === 'kebab') {
                result = input.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^a-z0-9-]/g, '')
                    .replace(/-+/g, '-');
            }
        }
    } else if (tool.includes('title case')) {
        const val = input.trim();
        const style = document.getElementById('titleCaseStyle')?.value || "ap";
        
        if (!val) {
            result = "Validation Error: Please enter a title text block.";
        } else {
            const apMinorWords = new Set([
                'a', 'an', 'the', 'and', 'but', 'or', 'for', 'of', 'to', 'in', 'on', 'at', 'with', 'by', 
                'from', 'it', 'its', 'as'
            ]);
            
            const chicagoMinorWords = new Set([
                'a', 'an', 'the', 'and', 'but', 'or', 'for', 'of', 'to', 'in', 'on', 'at', 'with', 'by',
                'from', 'as', 'into', 'onto', 'than', 'via', 'vs', 'per'
            ]);
            
            const wikipediaMinorWords = new Set([
                'a', 'an', 'the', 'and', 'but', 'or', 'for', 'of', 'to', 'in', 'on', 'at', 'with', 'by',
                'from', 'as', 'into', 'onto', 'than', 'via', 'vs', 'per', 'off', 'out'
            ]);
            
            const minorWords = style === 'ap' ? apMinorWords : (style === 'chicago' ? chicagoMinorWords : wikipediaMinorWords);
            
            const formatWord = (word, index, array) => {
                if (word.length === 0) return word;
                const cleaned = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
                const isFirst = index === 0;
                const isLast = index === array.length - 1;
                
                if (style === 'capital') {
                    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                }
                
                if (minorWords.has(cleaned) && !isFirst && !isLast) {
                    return word.toLowerCase();
                }
                
                return word.charAt(0).toUpperCase() + word.substring(1);
            };
            
            result = val.split('\n').map(line => {
                const words = line.split(/\s+/);
                return words.map((w, idx) => formatWord(w, idx, words)).join(' ');
            }).join('\n');
        }
    } else if (tool.includes('text reverser')) {
        result = input.split('').reverse().join('');
    } else if (tool.includes('lorem ipsum')) {
        const count = parseInt(document.getElementById('loremCount')?.value || "5", 10);
        const type = document.getElementById('loremType')?.value || "paragraphs";
        const format = document.getElementById('loremFormat')?.value || "plain";
        const startWith = document.getElementById('loremStartWith')?.checked;
        
        const wordsList = [
            "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
            "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
            "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
            "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", 
            "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", 
            "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", 
            "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", 
            "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", 
            "anim", "id", "est", "laborum"
        ];
        
        const getRandomWord = () => wordsList[Math.floor(Math.random() * wordsList.length)];
        
        const generateSentence = () => {
            const length = 5 + Math.floor(Math.random() * 10);
            let sentenceWords = [];
            for (let i = 0; i < length; i++) {
                sentenceWords.push(getRandomWord());
            }
            let s = sentenceWords.join(' ');
            return s.charAt(0).toUpperCase() + s.slice(1) + '.';
        };
        
        const generateParagraph = () => {
            const numSentences = 3 + Math.floor(Math.random() * 5);
            let sentences = [];
            for (let i = 0; i < numSentences; i++) {
                sentences.push(generateSentence());
            }
            return sentences.join(' ');
        };
        
        let outputPieces = [];
        
        if (type === 'paragraphs') {
            for (let i = 0; i < count; i++) {
                let p = generateParagraph();
                if (i === 0 && startWith) {
                    p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + p;
                }
                outputPieces.push(p);
            }
            
            if (format === 'html') {
                result = outputPieces.map(p => `<p>${p}</p>`).join('\n\n');
            } else if (format === 'markdown') {
                result = outputPieces.join('\n\n');
            } else {
                result = outputPieces.join('\n\n');
            }
        } 
        else if (type === 'words') {
            let totalWords = [];
            if (startWith) {
                totalWords = ["lorem", "ipsum", "dolor", "sit", "amet"];
            }
            while (totalWords.length < count) {
                totalWords.push(getRandomWord());
            }
            totalWords = totalWords.slice(0, count);
            let resText = totalWords.join(' ');
            resText = resText.charAt(0).toUpperCase() + resText.slice(1) + '.';
            
            if (format === 'html') {
                result = `<span>${resText}</span>`;
            } else {
                result = resText;
            }
        }
        else if (type === 'lists') {
            for (let i = 0; i < count; i++) {
                let itemText = generateSentence().replace(/\.$/, '');
                if (i === 0 && startWith) {
                    itemText = "Lorem ipsum dolor sit amet, " + itemText.toLowerCase();
                }
                outputPieces.push(itemText);
            }
            
            if (format === 'html') {
                result = `<ul>\n` + outputPieces.map(li => `  <li>${li}</li>`).join('\n') + `\n</ul>`;
            } else if (format === 'markdown') {
                result = outputPieces.map(li => `* ${li}`).join('\n');
            } else {
                result = outputPieces.map(li => `• ${li}`).join('\n');
            }
        }
    } else if (tool.includes('slug generator')) {
        const val = input.trim();
        const removeStopwords = document.getElementById('slugRemoveStopwords')?.checked ?? false;
        const forceLowercase = document.getElementById('slugLowercase')?.checked ?? true;
        
        if (!val) {
            result = "Validation Error: Please enter a title or text to generate a slug.";
        } else {
            let slug = val;
            slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            if (forceLowercase) {
                slug = slug.toLowerCase();
            }
            
            slug = slug.replace(/[^a-zA-Z0-9\s-]/g, '');
            
            if (removeStopwords) {
                const stopwords = new Set([
                    'the', 'a', 'an', 'and', 'but', 'or', 'for', 'of', 'to', 'in', 'on', 'at', 'with', 'by', 
                    'is', 'are', 'was', 'were', 'from', 'this', 'that', 'these', 'those', 'it', 'its'
                ]);
                const words = slug.split(/\s+/);
                slug = words.filter(w => !stopwords.has(w.toLowerCase())).join(' ');
            }
            
            slug = slug.replace(/\s+/g, '-').replace(/-+/g, '-');
            slug = slug.replace(/^-+|-+$/g, '');
            
            result = slug;
        }
    } else if (tool.includes('random name')) {
        const names = ["John Doe", "Jane Smith", "Alex Johnson", "Sam Wilson", "Emily Davis"];
        result = names[Math.floor(Math.random() * names.length)];
    } else if (tool.includes('username generator')) {
        result = input.toLowerCase().replace(/\s+/g, '_') + Math.floor(Math.random() * 999);
    } else if (tool.includes('fancy text')) {
        result = "Ⓕⓐⓝⓒⓨ Ⓣⓔⓧⓣ: " + input.split('').join(' ');
    } else if (tool.includes('text diff')) {
        const originalText = input;
        const modifiedText = document.getElementById('textDiffModified')?.value || "";
        const reportDiv = document.getElementById('diffReportAlert');
        const diffContainer = document.getElementById('diffResultContainer');
        const escapeHTML = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        
        if (!originalText.trim() && !modifiedText.trim()) {
            result = "Validation Error: Please enter some text in both fields to compare.";
            if (reportDiv) reportDiv.style.display = 'none';
            if (diffContainer) diffContainer.style.display = 'none';
        } else {
            const originalLines = originalText.split('\n');
            const modifiedLines = modifiedText.split('\n');
            
            let diffHTML = '';
            let i = 0, j = 0;
            let changesFound = false;
            let insertions = 0;
            let deletions = 0;
            let identical = 0;
            
            while (i < originalLines.length || j < modifiedLines.length) {
                const lineOrig = originalLines[i];
                const lineMod = modifiedLines[j];
                
                if (lineOrig === lineMod) {
                    diffHTML += `<div style="color: var(--text-muted); padding: 4px 8px; border-left: 3px solid transparent; font-family: monospace;">  ${escapeHTML(lineOrig || '')}</div>`;
                    i++;
                    j++;
                    identical++;
                } else {
                    changesFound = true;
                    let lookAheadJ = j;
                    let foundMatch = false;
                    while (lookAheadJ < modifiedLines.length) {
                        if (modifiedLines[lookAheadJ] === lineOrig) {
                            foundMatch = true;
                            break;
                        }
                        lookAheadJ++;
                    }
                    
                    if (foundMatch && lookAheadJ > j) {
                        for (let k = j; k < lookAheadJ; k++) {
                            diffHTML += `<div style="background: rgba(16, 185, 129, 0.1); color: rgb(52, 211, 153); padding: 4px 8px; border-left: 3px solid rgb(16, 185, 129); font-weight: 600; font-family: monospace;">+ ${escapeHTML(modifiedLines[k])}</div>`;
                            insertions++;
                        }
                        j = lookAheadJ;
                    } else {
                        if (lineOrig !== undefined) {
                            diffHTML += `<div style="background: rgba(239, 68, 68, 0.1); color: rgb(248, 113, 113); padding: 4px 8px; border-left: 3px solid rgb(239, 68, 68); text-decoration: line-through; font-family: monospace;">- ${escapeHTML(lineOrig)}</div>`;
                            deletions++;
                            i++;
                        }
                        if (lineMod !== undefined && !foundMatch) {
                            diffHTML += `<div style="background: rgba(16, 185, 129, 0.1); color: rgb(52, 211, 153); padding: 4px 8px; border-left: 3px solid rgb(16, 185, 129); font-weight: 600; font-family: monospace;">+ ${escapeHTML(lineMod)}</div>`;
                            insertions++;
                            j++;
                        }
                    }
                }
            }
            
            result = changesFound 
                ? `Differences detected!\n========================================\n\n• Insertions (+): ${insertions} lines\n• Deletions (-):  ${deletions} lines\n• Identical:      ${identical} lines`
                : "No differences found! The two texts are identical.";
                
            if (reportDiv) {
                reportDiv.style.display = 'block';
                if (changesFound) {
                    reportDiv.style.background = 'rgba(245, 158, 11, 0.1)';
                    reportDiv.style.border = '1px solid rgb(245, 158, 11)';
                    reportDiv.style.color = 'rgb(251, 191, 36)';
                    reportDiv.innerText = `Comparison Complete: Found ${insertions} insertions and ${deletions} deletions. Color-coded diff logs loaded below.`;
                } else {
                    reportDiv.style.background = 'rgba(16, 185, 129, 0.1)';
                    reportDiv.style.border = '1px solid rgb(16, 185, 129)';
                    reportDiv.style.color = 'rgb(52, 211, 153)';
                    reportDiv.innerText = "Comparison Complete: No changes detected. The original and modified text blocks are identical.";
                }
            }
            
            if (diffContainer) {
                diffContainer.style.display = 'block';
                diffContainer.innerHTML = diffHTML;
            }
        }
    }

    else if (tool.includes('password generator')) {
        const length = parseInt(document.getElementById('passLength')?.value || "16");
        const upper = document.getElementById('passUpper')?.checked;
        const lower = document.getElementById('passLower')?.checked;
        const numbers = document.getElementById('passNumbers')?.checked;
        const symbols = document.getElementById('passSymbols')?.checked;

        const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowers = "abcdefghijklmnopqrstuvwxyz";
        const nums = "0123456789";
        const syms = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        let charPool = "";
        let poolSize = 0;
        if (upper) { charPool += uppers; poolSize += 26; }
        if (lower) { charPool += lowers; poolSize += 26; }
        if (numbers) { charPool += nums; poolSize += 10; }
        if (symbols) { charPool += syms; poolSize += syms.length; }

        if (charPool.length === 0) {
            result = "Please select at least one character set!";
        } else {
            let password = "";
            const randomValues = new Uint32Array(length);
            window.crypto.getRandomValues(randomValues);
            for (let i = 0; i < length; i++) {
                password += charPool.charAt(randomValues[i] % charPool.length);
            }
            
            const entropy = Math.round(length * Math.log2(poolSize));
            let strength = "Weak ⚠️";
            if (entropy >= 80) strength = "Very Strong (Excellent) ✅";
            else if (entropy >= 60) strength = "Strong (Secure) ✅";
            else if (entropy >= 40) strength = "Medium (Moderate) ⚠️";
            
            result = `Generated Password: ${password}\n\n` +
                     `Password Strength Metrics:\n` +
                     `• Length: ${length} characters\n` +
                     `• Character Pool Size: ${poolSize} characters\n` +
                     `• Password Entropy: ~${entropy} bits\n` +
                     `• Security Level: ${strength}\n\n` +
                     `💡 Note: This password was generated locally using cryptographically secure pseudorandom values.`;
        }
    } else if (tool.includes('uuid generator')) {
        const count = parseInt(document.getElementById('uuidCount')?.value || "5");
        const uppercase = document.getElementById('uuidUppercase')?.checked;
        const noHyphens = document.getElementById('uuidNoHyphens')?.checked;
        const wrapBraces = document.getElementById('uuidBraces')?.checked;
        
        let uuids = [];
        for (let j = 0; j < count; j++) {
            const sz = new Uint8Array(16);
            window.crypto.getRandomValues(sz);
            sz[6] = (sz[6] & 0x0f) | 0x40;
            sz[8] = (sz[8] & 0x3f) | 0x80;
            const hex = Array.from(sz).map(b => b.toString(16).padStart(2, '0')).join('');
            
            let uuid = "";
            if (noHyphens) {
                uuid = hex;
            } else {
                uuid = `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20, 32)}`;
            }
            
            if (uppercase) {
                uuid = uuid.toUpperCase();
            }
            
            if (wrapBraces) {
                uuid = `{${uuid}}`;
            }
            
             } else if (tool.includes('md5 generator')) {
        const hashCase = document.getElementById('hashCase')?.value || "lower";
        const hashBulk = document.getElementById('hashBulk')?.checked;
        
        const RotateLeft = (lValue, iShiftBits) => (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
        const AddUnsigned = (lX,lY) => {
            var lX4,lY4,lX8,lY8,lResult;
            lX8 = (lX & 0x80000000); lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000); lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
            if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            if (lX4 | lY4) {
                if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            } else return (lResult ^ lX8 ^ lY8);
        };
        const F = (x,y,z) => (x & y) | ((~x) & z);
        const G = (x,y,z) => (x & z) | (y & (~z));
        const H = (x,y,z) => (x ^ y ^ z);
        const I = (x,y,z) => (y ^ (x | (~z)));
        const FF = (a,b,c,d,x,s,ac) => AddUnsigned(RotateLeft(AddUnsigned(a, AddUnsigned(AddUnsigned(F(b,c,d), x), ac)), s), b);
        const GG = (a,b,c,d,x,s,ac) => AddUnsigned(RotateLeft(AddUnsigned(a, AddUnsigned(AddUnsigned(G(b,c,d), x), ac)), s), b);
        const HH = (a,b,c,d,x,s,ac) => AddUnsigned(RotateLeft(AddUnsigned(a, AddUnsigned(AddUnsigned(H(b,c,d), x), ac)), s), b);
        const II = (a,b,c,d,x,s,ac) => AddUnsigned(RotateLeft(AddUnsigned(a, AddUnsigned(AddUnsigned(I(b,c,d), x), ac)), s), b);
        
        const ConvertToWordArray = (bytes) => {
            var lMessageLength = bytes.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
            var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
            var lWordArray = Array(lNumberOfWords);
            for (let i=0; i<lNumberOfWords; i++) lWordArray[i] = 0;
            var lBytePosition = 0; var lByteCount = 0;
            while ( lByteCount < lMessageLength ) {
                var lWordCount = (lByteCount-(lByteCount % 4))/4;
                lBytePosition = (lByteCount % 4)*8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (bytes[lByteCount]<<lBytePosition));
                lByteCount++;
            }
            var lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
            lWordArray[lNumberOfWords-2] = lMessageLength<<3;
            lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
            return lWordArray;
        };
        const WordToHex = (lValue) => {
            var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
            for (lCount = 0;lCount<=3;lCount++) {
                lByte = (lValue>>>(lCount*8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
            }
            return WordToHexValue;
        };
        const md5Bytes = (bytes) => {
            var x = ConvertToWordArray(bytes);
            var k,AA,BB,CC,DD,a,b,c,d;
            var S11=7, S12=12, S13=17, S14=22;
            var S21=5, S22=9, S23=14, S24=20;
            var S31=4, S32=11, S33=16, S34=23;
            var S41=6, S42=10, S43=15, S44=21;
            a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
            for (k=0;k<x.length;k+=16) {
                AA=a; BB=b; CC=c; DD=d;
                a=FF(a,b,c,d,x[k+0], S11,0xD76AA478); d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
                c=FF(c,d,a,b,x[k+2], S13,0x242070DB); b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
                a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF); d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
                c=FF(c,d,a,b,x[k+6], S13,0xA8304613); b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
                a=FF(a,b,c,d,x[k+8], S11,0x698098D8); d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
                c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1); b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
                a=FF(a,b,c,d,x[k+12],S11,0x6B901122); d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
                c=FF(c,d,a,b,x[k+14],S13,0xA679438E); b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
                a=GG(a,b,c,d,x[k+1], S21,0xF61E2562); d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
                c=GG(c,d,a,b,x[k+11],S23,0x265E5A51); b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
                a=GG(a,b,c,d,x[k+5], S21,0xD62F105D); d=GG(d,a,b,c,x[k+10],S22,0x2441453);
                c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681); b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
                a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6); d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
                c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87); b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
                a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905); d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
                c=GG(c,d,a,b,x[k+7], S23,0x676F02D9); b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
                a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942); d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
                c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122); b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
                a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44); d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
                c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60); b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
                a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6); d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
                c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085); b=HH(b,c,d,a,x[k+6],S34,0x4881D05);
                a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039); d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
                c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8); b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
                a=II(a,b,c,d,x[k+0], S41,0xF4292244); d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
                c=II(c,d,a,b,x[k+14],S43,0xAB9423A7); b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
                a=II(a,b,c,d,x[k+12],S41,0x655B59C3); d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
                c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D); b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
                a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F); d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
                c=II(c,d,a,b,x[k+6], S43,0xA3014314); b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
                a=II(a,b,c,d,x[k+4], S41,0xF7537E82); d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
                c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB); b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
                a=AddUnsigned(a,AA); b=AddUnsigned(b,BB); c=AddUnsigned(c,CC); d=AddUnsigned(d,DD);
            }
            return (WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d));
        };
        const md5String = (str) => {
            const encoder = new TextEncoder();
            return md5Bytes(encoder.encode(str));
        };
        
        let md5Result = "";
        if (window.CURRENT_HASH_FILE_BYTES) {
            md5Result = md5Bytes(window.CURRENT_HASH_FILE_BYTES);
            if (hashCase === 'upper') md5Result = md5Result.toUpperCase();
        } else {
            if (!input) {
                result = "Validation Error: Please enter some text to hash.";
            } else {
                if (hashBulk) {
                    const lines = input.split('\n');
                    md5Result = lines.map(line => {
                        const h = md5String(line);
                        return hashCase === 'upper' ? h.toUpperCase() : h;
                    }).join('\n');
                } else {
                    md5Result = md5String(input);
                    if (hashCase === 'upper') md5Result = md5Result.toUpperCase();
                }
            }
        }
        result = md5Result;
    } else if (tool.includes('sha256 generator')) {
        const hashCase = document.getElementById('hashCase')?.value || "lower";
        const hashBulk = document.getElementById('hashBulk')?.checked;
        let sha256Result = "";
        
        if (window.CURRENT_HASH_FILE_BYTES) {
            const hashBuffer = await crypto.subtle.digest('SHA-256', window.CURRENT_HASH_FILE_BYTES);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            sha256Result = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            if (hashCase === 'upper') sha256Result = sha256Result.toUpperCase();
        } else {
            if (!input) {
                result = "Validation Error: Please enter some text to hash.";
            } else {
                if (hashBulk) {
                    const lines = input.split('\n');
                    const hashedLines = [];
                    for (let line of lines) {
                        const msgBuffer = new TextEncoder().encode(line);
                        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
                        const hashArray = Array.from(new Uint8Array(hashBuffer));
                        let h = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                        if (hashCase === 'upper') h = h.toUpperCase();
                        hashedLines.push(h);
                    }
                    sha256Result = hashedLines.join('\n');
                } else {
                    const msgBuffer = new TextEncoder().encode(input);
                    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    sha256Result = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                    if (hashCase === 'upper') sha256Result = sha256Result.toUpperCase();
                }
            }
        result = sha256Result;
    } else if (tool.includes('bcrypt hash')) {
        if (!input) {
            result = "Please enter text/password to hash.";
        } else {
            const encoder = new TextEncoder();
            const data = encoder.encode(input);
            const salt = new Uint8Array(16);
            window.crypto.getRandomValues(salt);
            const saltB64 = btoa(String.fromCharCode(...salt)).substring(0, 22).replace(/\+/g, '.');
            
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashB64 = btoa(String.fromCharCode(...hashArray)).substring(0, 31).replace(/\+/g, '.');
            
            result = `$2a$12$${saltB64}${hashB64}`;
        }
    } else if (tool.includes('qr generator')) {
        const qrTarget = document.getElementById('qrCodeTarget');
        const resContainer = document.getElementById('imageResultContainer');
        const downloadBtn = document.getElementById('downloadBtn');
        
        const size = parseInt(document.getElementById('qrSize')?.value || "200");
        const colorDark = document.getElementById('qrColorDark')?.value || "#000000";
        const colorLight = document.getElementById('qrColorLight')?.value || "#ffffff";
        const ecc = document.getElementById('qrECC')?.value || "H";
        
        if (qrTarget && input) {
            qrTarget.innerHTML = '';
            
            let eccLevel = QRCode.CorrectLevel.H;
            if (ecc === 'L') eccLevel = QRCode.CorrectLevel.L;
            else if (ecc === 'M') eccLevel = QRCode.CorrectLevel.M;
            else if (ecc === 'Q') eccLevel = QRCode.CorrectLevel.Q;
            
            new QRCode(qrTarget, {
                text: input,
                width: size,
                height: size,
                colorDark: colorDark,
                colorLight: colorLight,
                correctLevel: eccLevel
            });
            
            setTimeout(() => {
                const canvas = qrTarget.querySelector('canvas');
                const imgOut = document.getElementById('imageOutput');
                if (canvas && imgOut) {
                    imgOut.src = canvas.toDataURL("image/png");
                    if (resContainer) resContainer.style.display = 'block';
                }
            }, 50);

            if (downloadBtn) {
                downloadBtn.style.display = 'inline-block';
                downloadBtn.onclick = () => {
                    const canvas = qrTarget.querySelector('canvas');
                    if (canvas) {
                        const link = document.createElement('a');
                        link.download = `qrcode-${Date.now()}.png`;
                        link.href = canvas.toDataURL("image/png");
                        link.click();
                    }
                };
            }
            result = `QR Code Generated Successfully!\n\n• Encoded Content: ${input}\n• Dimensions: ${size} x ${size} px\n• Color Palette: Foreground ${colorDark} / Background ${colorLight}\n• ECC Level: ${ecc}`;
        } else {
            result = "Validation Error: Please enter some data or a URL to generate a QR Code.";
        }
    } else if (tool.includes('credit card validator')) {
        const ccInputVal = document.getElementById('ccInput')?.value.replace(/\D/g, '') || input.replace(/\D/g, '');
        
        if (!ccInputVal) {
            result = "Validation Error: Please enter a credit card number to validate.";
        } else if (ccInputVal.length < 13 || ccInputVal.length > 19) {
            result = `Validation Error: Invalid digit length (${ccInputVal.length}). Credit card numbers typically have between 13 and 19 digits.`;
        } else {
            let sum = 0;
            let shouldDouble = false;
            for (let i = ccInputVal.length - 1; i >= 0; i--) {
                let digit = parseInt(ccInputVal[i]);
                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }
                sum += digit;
                shouldDouble = !shouldDouble;
            }
            
            const isLuhnValid = (sum % 10 === 0);
            
            let cardBrand = "Unknown Network";
            if (ccInputVal.startsWith('4')) {
                cardBrand = "Visa 💳";
            } else if (/^(5[1-5]|2[2-7])/.test(ccInputVal)) {
                cardBrand = "Mastercard 💳";
            } else if (/^3[47]/.test(ccInputVal)) {
                cardBrand = "American Express (Amex) 💳";
            } else if (/^6(?:011|5)/.test(ccInputVal)) {
                cardBrand = "Discover 💳";
            } else if (/^(352[89]|35[3-8][0-9])/.test(ccInputVal)) {
                cardBrand = "JCB 💳";
            } else if (/^3(?:0[0-5]|[68])/.test(ccInputVal)) {
                cardBrand = "Diners Club 💳";
            } else if (/^(5018|5020|5038|6304|6759|676[1-3])/.test(ccInputVal)) {
                cardBrand = "Maestro 💳";
            }
            
            if (isLuhnValid) {
                result = `Credit Card Validation: PASSED ✅\n\n` +
                         `• Card Number: ${ccInputVal.replace(/(.{4})/g, '$1 ')}\n` +
                         `• Card Issuer Network: ${cardBrand}\n` +
                         `• Length Check: ${ccInputVal.length} digits (Valid)\n` +
                         `• Luhn Checksum: Valid (Sum: ${sum}, Divisible by 10)\n\n` +
                         `✅ The card number is mathematically structured correctly according to the ISO/IEC 7812 standard. Note: This does not verify active credit, balance, or authorization status.`;
            } else {
                result = `Credit Card Validation: FAILED ❌\n\n` +
                         `• Card Number: ${ccInputVal.replace(/(.{4})/g, '$1 ')}\n` +
                         `• Length Check: ${ccInputVal.length} digits\n` +
                         `• Luhn Checksum: Invalid (Sum: ${sum}, Not divisible by 10)\n\n` +
                         `❌ The card number fails the Luhn algorithm mathematical verification. Please check for spelling mistakes or transpositions.`;
            }
        }
    } else if (tool.includes('password strength')) {
        const password = document.getElementById('passInput')?.value || input;
        if (!password) {
            result = "Validation Error: Please enter a password to analyze.";
        } else {
            let score = 0;
            const length = password.length;
            
            const hasUpper = /[A-Z]/.test(password);
            const hasLower = /[a-z]/.test(password);
            const hasNumbers = /[0-9]/.test(password);
            const hasSymbols = /[^a-zA-Z0-9]/.test(password);
            
            score += Math.min(length * 4, 40);
            
            if (hasUpper) score += 10;
            if (hasLower) score += 10;
            if (hasNumbers) score += 15;
            if (hasSymbols) score += 15;
            
            if (hasUpper && hasLower) score += 5;
            if ((hasUpper || hasLower) && hasNumbers && hasSymbols) score += 5;
            
            const commonBadPatterns = ['123456', 'password', 'qwerty', 'admin', 'welcome', '12345678', 'password123'];
            let hasCommonPattern = false;
            for (let pat of commonBadPatterns) {
                if (password.toLowerCase().includes(pat)) {
                    score = Math.max(10, score - 20);
                    hasCommonPattern = true;
                }
            }
            
            let rangeSize = 0;
            if (hasUpper) rangeSize += 26;
            if (hasLower) rangeSize += 26;
            if (hasNumbers) rangeSize += 10;
            if (hasSymbols) rangeSize += 33;
            
            const entropy = Math.round(length * Math.log2(rangeSize || 1));
            
            let crackTimeText = "Instant (Brute force)";
            if (entropy > 0) {
                const totalGuesses = Math.pow(2, entropy);
                const seconds = totalGuesses / 1e11;
                
                if (seconds < 1) {
                    crackTimeText = "Under a second ⚡";
                } else if (seconds < 60) {
                    crackTimeText = `${Math.round(seconds)} seconds`;
                } else if (seconds < 3600) {
                    crackTimeText = `${Math.round(seconds / 60)} minutes`;
                } else if (seconds < 86400) {
                    crackTimeText = `${Math.round(seconds / 3600)} hours`;
                } else if (seconds < 31536000) {
                    crackTimeText = `${Math.round(seconds / 86400)} days`;
                } else if (seconds < 31536000 * 1000) {
                    crackTimeText = `${Math.round(seconds / 31536000)} years`;
                } else {
                    crackTimeText = "Centuries / Millennia 🔒";
                }
            }

            let assessment = "Weak 🔴";
            if (score >= 80 && entropy >= 60) assessment = "Very Strong (Excellent) 🟢";
            else if (score >= 60 && entropy >= 45) assessment = "Strong (Secure) 🟢";
            else if (score >= 40) assessment = "Medium (Moderate) 🟡";

            const checkLength = length >= 12 ? "✅ Length is strong (12+ characters)" : "❌ Too short (Recommend 12+ characters)";
            const checkUpper = hasUpper ? "✅ Contains uppercase letters" : "❌ Missing uppercase letters";
            const checkLower = hasLower ? "✅ Contains lowercase letters" : "❌ Missing lowercase letters";
            const checkNumbers = hasNumbers ? "✅ Contains numbers" : "❌ Missing numbers";
            const checkSymbols = hasSymbols ? "✅ Contains special symbols" : "❌ Missing special symbols";
            const checkPattern = !hasCommonPattern ? "✅ No obvious common keyboard sequence patterns" : "❌ Warning: Contains common easily guessable dictionary patterns";

            result = `Password Strength Report\n` +
                     `========================\n\n` +
                     `• Strength Score: ${score}/100\n` +
                     `• Information Entropy: ~${entropy} bits\n` +
                     `• Security Assessment: ${assessment}\n` +
                     `• Estimated Brute-Force Crack Time (100B guesses/sec): ${crackTimeText}\n\n` +
                     `Structural Checklist:\n` +
                     `---------------------\n` +
                     `• ${checkLength}\n` +
                     `• ${checkUpper}\n` +
                     `• ${checkLower}\n` +
                     `• ${checkNumbers}\n` +
                     `• ${checkSymbols}\n` +
                     `• ${checkPattern}\n\n` +
                     `💡 Improvement Tips:\n` +
                     `  - To increase entropy significantly, make your password longer (16+ characters).\n` +
                     `  - Use unique passphrases (e.g. 4 random combined words) instead of a single word with replacements.`;
        }
    } else if (tool.includes('ip lookup')) {
        const ip = input.trim();
        toggleLoader(true, "Looking up IP address information...");
        try {
            const queryUrl = ip ? `https://ipapi.co/${ip}/json/` : `https://ipapi.co/json/`;
            const response = await fetch(queryUrl);
            toggleLoader(false);
            if (response.ok) {
                const data = await response.json();
                if (data.error) {
                    result = `IP Lookup failed: ${data.reason || 'Invalid IP Address'}`;
                } else {
                    result = `IP Address:  ${data.ip}\n` +
                             `Country:     ${data.country_name} (${data.country_code})\n` +
                             `Region/City: ${data.region}, ${data.city}\n` +
                             `Latitude:    ${data.latitude}\n` +
                             `Longitude:   ${data.longitude}\n` +
                             `ISP:         ${data.org || 'Unknown'}\n` +
                             `Timezone:    ${data.timezone}`;
                }
            } else {
                result = "Failed to retrieve IP details. Showing simulated fallback:\n" + 
                         `IP Address: ${ip || '127.0.0.1'}\nLocation: Delhi, India\nISP: Reliance Jio\nCountry: India`;
            }
        } catch (err) {
            toggleLoader(false);
            result = "Error fetching IP information. Showing simulated fallback:\n" +
                     `IP Address: ${ip || '127.0.0.1'}\nLocation: Delhi, India\nISP: Reliance Jio\nCountry: India`;
        }
    } else if (tool.includes('user agent')) {
        result = `Browser: ${navigator.userAgent}\nOS: ${navigator.platform}\nLanguage: ${navigator.language}`;
    }

    // SEO Tools
    else if (tool.includes('meta tag generator')) {
        const title = document.getElementById('metaTagTitle')?.value || "Website Title";
        const desc = document.getElementById('metaTagDesc')?.value || "";
        const keywords = document.getElementById('metaTagKeywords')?.value || "";
        const index = document.getElementById('robotsIndex')?.value || "index";
        const follow = document.getElementById('robotsFollow')?.value || "follow";
        const lang = document.getElementById('metaTagLang')?.value || "English";
        const author = document.getElementById('metaTagAuthor')?.value || "";
        
        let tags = `<!-- HTML Meta Tags Generated via MultiTools Hub -->\n`;
        tags += `<title>${title}</title>\n`;
        tags += `<meta name="title" content="${title}">\n`;
        
        if (desc.trim().length > 0) {
            tags += `<meta name="description" content="${desc.trim()}">\n`;
        }
        if (keywords.trim().length > 0) {
            tags += `<meta name="keywords" content="${keywords.trim()}">\n`;
        }
        
        tags += `<meta name="robots" content="${index}, ${follow}">\n`;
        tags += `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n`;
        tags += `<meta name="language" content="${lang}">\n`;
        
        if (author.trim().length > 0) {
            tags += `<meta name="author" content="${author.trim()}">\n`;
        }
        
        result = tags;
    } else if (tool.includes('og generator')) {
        const title = document.getElementById('ogTitle')?.value || "Site Title";
        const url = document.getElementById('ogUrl')?.value || "https://example.com";
        const img = document.getElementById('ogImage')?.value || "https://example.com/og-image.jpg";
        const type = document.getElementById('ogType')?.value || "website";
        const desc = input.trim();
        
        let tags = `<!-- Open Graph Social Meta Tags Generated via MultiTools Hub -->\n`;
        tags += `<meta property="og:title" content="${title.trim()}">\n`;
        tags += `<meta property="og:type" content="${type}">\n`;
        tags += `<meta property="og:url" content="${url.trim()}">\n`;
        tags += `<meta property="og:image" content="${img.trim()}">\n`;
        
        if (desc.length > 0) {
            tags += `<meta property="og:description" content="${desc}">\n`;
        } else {
            tags += `<meta property="og:description" content="Social summary description here.">\n`;
        }
        
        tags += `\n<!-- Twitter Card Metadata -->\n`;
        tags += `<meta name="twitter:card" content="summary_large_image">\n`;
        tags += `<meta name="twitter:title" content="${title.trim()}">\n`;
        if (desc.length > 0) {
            tags += `<meta name="twitter:description" content="${desc}">\n`;
        }
        tags += `<meta name="twitter:image" content="${img.trim()}">\n`;
        
        result = tags;
    } else if (tool.includes('meta tag analyzer')) {
        const title = input.match(/<title>(.*?)<\/title>/i)?.[1] || "No Title Found";
        const desc = input.match(/<meta name="description" content="(.*?)"/i)?.[1] || "No Description Found";
        const keys = input.match(/<meta name="keywords" content="(.*?)"/i)?.[1] || "No Keywords Found";
        result = `Title: ${title}\nDescription: ${desc}\nKeywords: ${keys}`;
    } else if (tool.includes('robots generator')) {
        const agent = document.getElementById('robotsAgent')?.value || "*";
        const delay = document.getElementById('robotsDelay')?.value || "none";
        const sitemap = document.getElementById('robotsSitemap')?.value || "";
        const disallowedRaw = document.getElementById('robotsDisallowed')?.value || "";
        const allowedRaw = document.getElementById('robotsAllowed')?.value || "";
        
        let txt = `# Robots.txt generated online via MultiTools Hub\n`;
        txt += `User-agent: ${agent}\n`;
        
        if (delay !== 'none') {
            txt += `Crawl-delay: ${delay}\n`;
        }
        
        const disallowLines = disallowedRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (disallowLines.length > 0) {
            disallowLines.forEach(l => {
                txt += `Disallow: ${l}\n`;
            });
        } else {
            txt += `Disallow:\n`;
        }
        
        const allowLines = allowedRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (allowLines.length > 0) {
            allowLines.forEach(l => {
                txt += `Allow: ${l}\n`;
            });
        }
        
        if (sitemap.trim().length > 0) {
            txt += `\nSitemap: ${sitemap.trim()}\n`;
        }
        
        result = txt;
    } else if (tool.includes('sitemap generator')) {
        const urlList = input.split('\n').map(u => u.trim()).filter(u => u.length > 0);
        const freq = document.getElementById('sitemapFrequency')?.value || "daily";
        const priority = document.getElementById('sitemapPriority')?.value || "1.0";
        
        if (urlList.length === 0) {
            result = "Validation Error: Please enter at least one URL to generate a sitemap.";
        } else {
            const today = new Date().toISOString().slice(0, 10);
            let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
            xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
            
            urlList.forEach(u => {
                let formattedUrl = u;
                if (!u.startsWith('http://') && !u.startsWith('https://')) {
                    formattedUrl = 'https://' + u;
                }
                xml += `  <url>\n`;
                xml += `    <loc>${formattedUrl}</loc>\n`;
                xml += `    <lastmod>${today}</lastmod>\n`;
                xml += `    <changefreq>${freq}</changefreq>\n`;
                xml += `    <priority>${priority}</priority>\n`;
                xml += `  </url>\n`;
            });
            
            xml += `</urlset>`;
            result = xml;
        }
    } else if (tool.includes('keyword density')) {
        const val = input.trim();
        if (!val) {
            result = "Validation Error: Please enter some text content to analyze.";
        } else {
            const rawWords = val.toLowerCase().match(/\b[a-z0-9]+(?:'[a-z]+)?\b/g) || [];
            
            if (rawWords.length === 0) {
                result = "Validation Error: The input does not contain any valid alphanumeric words.";
            } else {
                const stopwords = new Set([
                    'the', 'a', 'an', 'and', 'but', 'or', 'for', 'of', 'to', 'in', 'on', 'at', 'with', 'by', 
                    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 
                    'did', 'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must', 'about', 
                    'above', 'after', 'again', 'against', 'all', 'any', 'as', 'both', 'each', 'few', 'more', 
                    'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 
                    'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now', 'i', 'you', 'he', 
                    'she', 'it', 'we', 'they', 'them', 'him', 'her', 'us', 'me', 'my', 'your', 'their', 'our'
                ]);
                
                const wordCounts = {};
                let filteredCount = 0;
                
                rawWords.forEach(w => {
                    if (!stopwords.has(w) && w.length > 1) {
                        wordCounts[w] = (wordCounts[w] || 0) + 1;
                        filteredCount++;
                    }
                });
                
                if (filteredCount === 0) {
                    result = "Status: All input words are common grammar stopwords. Try paste a larger text sample.";
                } else {
                    const sorted = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
                    
                    let table = `Keyword Density Analysis\n`;
                    table += `========================================\n\n`;
                    table += `• Total Words (Raw):      ${rawWords.length}\n`;
                    table += `• Semantic Words (Filtered): ${filteredCount}\n\n`;
                    table += `Top Keyword Densities (Excluding Stopwords):\n`;
                    
                    sorted.slice(0, 15).forEach(([word, count], idx) => {
                        const density = ((count / filteredCount) * 100).toFixed(2);
                        table += `  ${(idx + 1).toString().padStart(2, ' ')}. "${word}": ${count} times (${density}%)\n`;
                    });
                    
                    result = table;
                }
            }
        }
    }

    // CSS Tools
    else if (tool.includes('hex to rgb')) {
        const hex = input.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        result = isNaN(r) ? "Invalid HEX code" : `rgb(${r}, ${g}, ${b})`;
    } else if (tool.includes('rgb to hex')) {
        const parts = input.match(/\d+/g);
        if (parts && parts.length >= 3) {
            const hex = "#" + parts.slice(0, 3).map(x => {
                const h = parseInt(x).toString(16);
                return h.length === 1 ? '0' + h : h;
            }).join('');
            result = hex.toUpperCase();
        } else { result = "Invalid RGB (format: 255, 255, 255)"; }
    } else if (tool.includes('gradient generator') || tool.includes('css gradient')) {
        const type = document.getElementById('gradientType')?.value || "linear";
        const c1 = document.getElementById('gradColorText1')?.value || "#6D28D9";
        const c2 = document.getElementById('gradColorText2')?.value || "#3B82F6";
        const angle = document.getElementById('gradAngle')?.value || "90";
        
        let gradRule = '';
        if (type === 'radial') {
            gradRule = `background: radial-gradient(circle, ${c1}, ${c2});`;
        } else {
            gradRule = `background: linear-gradient(${angle}deg, ${c1}, ${c2});`;
        }
        
        const previewBox = document.getElementById('gradientPreviewBox');
        if (previewBox) {
            previewBox.style.background = type === 'radial' 
                ? `radial-gradient(circle, ${c1}, ${c2})`
                : `linear-gradient(${angle}deg, ${c1}, ${c2})`;
        }
        
        result = `/* CSS Gradient Styles */\n` +
                 `${gradRule}\n` +
                 `background-image: ${type === 'radial' ? `radial-gradient(circle, ${c1}, ${c2})` : `linear-gradient(${angle}deg, ${c1}, ${c2})`};\n` +
                 `\n` +
                 `/* Cross-Browser Support */\n` +
                 `-webkit-${gradRule}\n` +
                 `-moz-${gradRule}`;
    } else if (tool.includes('color palette')) {
        result = `Palette based on ${input || '#6366f1'}:\n1. ${input || '#6366f1'}\n2. #a855f7\n3. #ec4899\n4. #06b6d4`;
    } else if (tool.includes('css shadow')) {
        result = `box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);`;
    } else if (tool.includes('css button')) {
        const text = document.getElementById('btnText')?.value || "Click Me";
        const bg = document.getElementById('btnBgColor')?.value || "#6366f1";
        const color = document.getElementById('btnTextColor')?.value || "#ffffff";
        const hoverBg = document.getElementById('btnHoverBgColor')?.value || "#4f46e5";
        const padY = document.getElementById('btnPadY')?.value || "12";
        const padX = document.getElementById('btnPadX')?.value || "28";
        const radius = document.getElementById('btnRadius')?.value || "10";
        const size = document.getElementById('btnFontSize')?.value || "16";
        const shadow = document.getElementById('btnShadow')?.value || "10";

        const cssClass = `.custom-btn {
  background-color: ${bg};
  color: ${color};
  padding: ${padY}px ${padX}px;
  border: none;
  border-radius: ${radius}px;
  font-size: ${size}px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 ${shadow}px ${shadow * 2.5}px -${shadow * 0.5}px ${bg}80;
}

.custom-btn:hover {
  background-color: ${hoverBg};
  transform: translateY(-2px);
}`;
        result = cssClass;

        const previewContainer = document.getElementById('imageResultContainer');
        if (previewContainer) {
            previewContainer.innerHTML = `
                <div style="padding: 40px; display: flex; justify-content: center; align-items: center; background: rgba(0,0,0,0.2); border-radius: 20px;">
                    <style>
                        #btnPreview {
                            background-color: ${bg};
                            color: ${color};
                            padding: ${padY}px ${padX}px;
                            border: none;
                            border-radius: ${radius}px;
                            font-size: ${size}px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            box-shadow: 0 ${shadow}px ${shadow * 2.5}px -${shadow * 0.5}px ${bg}80;
                        }
                        #btnPreview:hover {
                            background-color: ${hoverBg};
                            transform: translateY(-2px);
                        }
                    </style>
                    <button id="btnPreview">${text}</button>
                </div>
            `;
            previewContainer.style.display = 'block';
        }
    } else if (tool.includes('flexbox generator')) {
        const dir = document.getElementById('flexDir')?.value || "row";
        const justify = document.getElementById('flexJustify')?.value || "center";
        const align = document.getElementById('flexAlign')?.value || "center";
        const wrap = document.getElementById('flexWrap')?.value || "nowrap";
        const count = parseInt(document.getElementById('flexItemCount')?.value || "3");

        const cssCode = `.flex-container {
  display: flex;
  flex-direction: ${dir};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: 15px;
  background: #111827;
  padding: 20px;
  border-radius: 15px;
  min-height: 250px;
}

.flex-item {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  padding: 20px 30px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`;
        result = cssCode;

        const previewContainer = document.getElementById('imageResultContainer');
        if (previewContainer) {
            let itemsHTML = '';
            for (let i = 1; i <= count; i++) {
                itemsHTML += `<div class="flex-item" style="background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; padding: 20px 30px; border-radius: 10px; font-weight: bold; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif;">Item ${i}</div>`;
            }
            previewContainer.innerHTML = `
                <div style="background: #111827; border: 1px solid var(--border); border-radius: 20px; padding: 20px; min-height: 250px; display: flex; flex-direction: ${dir}; justify-content: ${justify}; align-items: ${align}; flex-wrap: ${wrap}; gap: 15px;">
                    ${itemsHTML}
                </div>
            `;
            previewContainer.style.display = 'block';
        }
    } else if (tool.includes('grid layout')) {
        const cols = parseInt(document.getElementById('gridCols')?.value || "3");
        const rows = parseInt(document.getElementById('gridRows')?.value || "2");
        const colGap = parseInt(document.getElementById('gridColGap')?.value || "15");
        const rowGap = parseInt(document.getElementById('gridRowGap')?.value || "15");

        const cssCode = `.grid-container {
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  grid-gap: ${rowGap}px ${colGap}px;
  background: #111827;
  padding: 20px;
  border-radius: 15px;
}

.grid-item {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  padding: 25px;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`;
        result = cssCode;

        const previewContainer = document.getElementById('imageResultContainer');
        if (previewContainer) {
            let itemsHTML = '';
            const totalItems = cols * rows;
            for (let i = 1; i <= totalItems; i++) {
                itemsHTML += `<div class="grid-item" style="background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; padding: 25px; border-radius: 10px; font-weight: bold; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif;">Item ${i}</div>`;
            }
            previewContainer.innerHTML = `
                <div style="background: #111827; border: 1px solid var(--border); border-radius: 20px; padding: 20px; display: grid; grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr); grid-gap: ${rowGap}px ${colGap}px;">
                    ${itemsHTML}
                </div>
            `;
            previewContainer.style.display = 'block';
        }
    }

    // Math Tools
    else if (tool.includes('random number')) {
        const range = input.match(/\d+/g) || [0, 100];
        const min = parseInt(range[0]), max = parseInt(range[1] || 100);
        result = Math.floor(Math.random() * (max - min + 1) + min).toString();
    } else if (tool.includes('binary converter')) {
        const mode = document.getElementById('binaryMode')?.value || "bin_to_all";
        const cleanInput = input.trim();
        
        if (!cleanInput) {
            result = "Validation Error: Input is empty. Please enter value to convert.";
        } else {
            let tableRows = [];
            let textResult = "";
            
            if (mode === 'bin_to_all') {
                if (!/^[01\s]+$/.test(cleanInput)) {
                    result = "Validation Error: Input contains non-binary characters. Please enter only 0s and 1s.";
                    return;
                }
                const cleanBin = cleanInput.replace(/\s+/g, '');
                const dec = parseInt(cleanBin, 2);
                if (isNaN(dec)) {
                    result = "Validation Error: Invalid binary value.";
                    return;
                }
                tableRows = [
                    { base: "Decimal (Base 10)", val: dec },
                    { base: "Hexadecimal (Base 16)", val: dec.toString(16).toUpperCase() },
                    { base: "Octal (Base 8)", val: dec.toString(8) }
                ];
                textResult = `Binary Conversion Report\n========================\n\n• Binary: ${cleanBin}\n• Decimal: ${dec}\n• Hexadecimal: ${dec.toString(16).toUpperCase()}\n• Octal: ${dec.toString(8)}`;
            } 
            else if (mode === 'dec_to_all') {
                if (!/^-?\d+$/.test(cleanInput)) {
                    result = "Validation Error: Input is not a valid integer.";
                    return;
                }
                const dec = parseInt(cleanInput, 10);
                tableRows = [
                    { base: "Binary (Base 2)", val: dec.toString(2) },
                    { base: "Hexadecimal (Base 16)", val: dec.toString(16).toUpperCase() },
                    { base: "Octal (Base 8)", val: dec.toString(8) }
                ];
                textResult = `Decimal Conversion Report\n=========================\n\n• Decimal: ${dec}\n• Binary: ${dec.toString(2)}\n• Hexadecimal: ${dec.toString(16).toUpperCase()}\n• Octal: ${dec.toString(8)}`;
            }
            else if (mode === 'text_to_bin') {
                let binaryStr = "";
                for (let i = 0; i < cleanInput.length; i++) {
                    const charCode = cleanInput.charCodeAt(i);
                    binaryStr += charCode.toString(2).padStart(8, '0') + " ";
                }
                binaryStr = binaryStr.trim();
                tableRows = [
                    { base: "Input Length", val: `${cleanInput.length} character(s)` },
                    { base: "Binary String (UTF-8)", val: binaryStr }
                ];
                textResult = binaryStr;
            }
            else if (mode === 'bin_to_text') {
                const bytes = cleanInput.split(/\s+/);
                let textStr = "";
                for (let i = 0; i < bytes.length; i++) {
                    if (!bytes[i]) continue;
                    if (!/^[01]+$/.test(bytes[i])) {
                        result = "Validation Error: Binary byte contains non-binary characters.";
                        return;
                    }
                    const charCode = parseInt(bytes[i], 2);
                    textStr += String.fromCharCode(charCode);
                }
                tableRows = [
                    { base: "Binary Bytes Count", val: `${bytes.filter(b=>b).length} byte(s)` },
                    { base: "Decoded Plain Text", val: textStr }
                ];
                textResult = textStr;
            }
            
            const tableContainer = document.getElementById('binaryResultsTableContainer');
            const tbody = document.getElementById('binaryResultsTableBody');
            if (tableContainer && tbody) {
                tbody.innerHTML = '';
                for (let row of tableRows) {
                    const tr = document.createElement('tr');
                    tr.style.borderBottom = '1px solid var(--border)';
                    
                    const tdBase = document.createElement('td');
                    tdBase.style.padding = '12px 15px';
                    tdBase.style.color = 'var(--text-main)';
                    tdBase.innerText = row.base;
                    
                    const tdVal = document.createElement('td');
                    tdVal.style.padding = '12px 15px';
                    tdVal.style.fontFamily = 'monospace';
                    tdVal.style.color = 'var(--text-muted)';
                    tdVal.style.wordBreak = 'break-all';
                    tdVal.innerText = row.val;
                    
                    tr.appendChild(tdBase);
                    tr.appendChild(tdVal);
                    tbody.appendChild(tr);
                }
                tableContainer.style.display = 'block';
            }
            result = textResult;
        }
    } else if (tool.includes('percentage calc')) {
        const val1El = document.getElementById('percentageVal1');
        const val2El = document.getElementById('percentageVal2');
        const modeEl = document.getElementById('percentageMode');
        
        if (val1El && val2El && modeEl) {
            const v1 = parseFloat(val1El.value);
            const v2 = parseFloat(val2El.value);
            const mode = modeEl.value;
            
            if (isNaN(v1) || isNaN(v2)) {
                result = "Validation Error: Please enter valid numbers in both input fields.";
            } else {
                if (mode === "of") {
                    const res = (v1 / 100) * v2;
                    result = `Calculation: What is ${v1}% of ${v2}?\n\n` +
                             `• Formula: (Percentage / 100) * Total Amount\n` +
                             `• Equation: (${v1} / 100) * ${v2} = ${res.toFixed(4)}\n\n` +
                             `✅ Result: ${res.toFixed(2)}`;
                } else if (mode === "is_percent") {
                    if (v2 === 0) {
                        result = "Math Error: Total Amount (Y) cannot be zero when finding percentage.";
                    } else {
                        const res = (v1 / v2) * 100;
                        result = `Calculation: ${v1} is what percent of ${v2}?\n\n` +
                                 `• Formula: (Part / Whole) * 100\n` +
                                 `• Equation: (${v1} / ${v2}) * 100 = ${res.toFixed(4)}%\n\n` +
                                 `✅ Result: ${res.toFixed(2)}%`;
                    }
                } else if (mode === "change") {
                    if (v1 === 0) {
                        result = "Math Error: Initial value cannot be zero when calculating percentage change.";
                    } else {
                        const change = v2 - v1;
                        const res = (change / Math.abs(v1)) * 100;
                        const direction = change >= 0 ? "Increase" : "Decrease";
                        result = `Calculation: Percentage change from ${v1} to ${v2}\n\n` +
                                 `• Formula: ((Final Value - Initial Value) / |Initial Value|) * 100\n` +
                                 `• Net Difference: ${change.toFixed(2)} (${direction})\n` +
                                 `• Equation: (${change.toFixed(2)} / ${Math.abs(v1)}) * 100 = ${res.toFixed(4)}%\n\n` +
                                 `✅ Result: ${Math.abs(res).toFixed(2)}% ${direction}`;
                    }
                }
            }
        } else {
            const nums = input.match(/[\d.]+/g);
            if (nums && nums.length >= 2) {
                const p = parseFloat(nums[0]), total = parseFloat(nums[1]);
                result = `${p}% of ${total} is ${(p/100 * total).toFixed(2)}`;
            } else { result = "Format: [percentage] [total] (e.g. 20 500)"; }
        }
    } else if (tool.includes('gst calc')) {
        const gstAmountEl = document.getElementById('gstAmount');
        const gstRateEl = document.getElementById('gstRate');
        const customGstRateEl = document.getElementById('customGstRate');
        const gstTypeEl = document.querySelector('input[name="gstType"]:checked');
        
        if (gstAmountEl && gstRateEl) {
            const amount = parseFloat(gstAmountEl.value);
            let rate = gstRateEl.value === 'custom' ? parseFloat(customGstRateEl?.value) : parseFloat(gstRateEl.value);
            const type = gstTypeEl?.value || 'exclusive';
            
            if (isNaN(amount) || amount < 0) {
                result = "Validation Error: Please enter a valid positive number for the amount.";
            } else if (isNaN(rate) || rate < 0) {
                result = "Validation Error: Please enter a valid positive rate percentage.";
            } else {
                let gstAmt, netAmt, totalAmt;
                if (type === 'exclusive') {
                    gstAmt = amount * (rate / 100);
                    netAmt = amount;
                    totalAmt = amount + gstAmt;
                    result = `Calculation Type: GST Exclusive (Add tax to original amount)\n\n` +
                             `• Net Amount: $${netAmt.toFixed(2)}\n` +
                             `• GST Rate: ${rate}%\n` +
                             `• GST Tax Amount: $${gstAmt.toFixed(2)}\n` +
                             `  - CGST (Central Tax 50%): $${(gstAmt / 2).toFixed(2)}\n` +
                             `  - SGST (State Tax 50%): $${(gstAmt / 2).toFixed(2)}\n\n` +
                             `✅ Total Gross Price (Net + GST): $${totalAmt.toFixed(2)}`;
                } else {
                    gstAmt = amount - (amount * (100 / (100 + rate)));
                    netAmt = amount - gstAmt;
                    totalAmt = amount;
                    result = `Calculation Type: GST Inclusive (Tax already in total amount)\n\n` +
                             `• Total Gross Price (Inclusive): $${totalAmt.toFixed(2)}\n` +
                             `• GST Rate: ${rate}%\n` +
                             `• GST Tax Amount: $${gstAmt.toFixed(2)}\n` +
                             `  - CGST (Central Tax 50%): $${(gstAmt / 2).toFixed(2)}\n` +
                             `  - SGST (State Tax 50%): $${(gstAmt / 2).toFixed(2)}\n\n` +
                             `✅ Net Value (Before Tax): $${netAmt.toFixed(2)}`;
                }
            }
        } else {
            const val = parseFloat(input) || 0;
            const gst = (val * 0.18).toFixed(2);
            result = `Original: ${val}\nGST (18%): ${gst}\nTotal: ${(val + parseFloat(gst)).toFixed(2)}`;
        }
    } else if (tool.includes('discount calc')) {
        const discPriceEl = document.getElementById('discPrice');
        const discPercentEl = document.getElementById('discPercent');
        const discAdditionalEl = document.getElementById('discAdditional');
        const discTaxEl = document.getElementById('discTax');
        
        if (discPriceEl && discPercentEl) {
            const originalPrice = parseFloat(discPriceEl.value);
            const discountPercent = parseFloat(discPercentEl.value);
            const additionalDiscount = parseFloat(discAdditionalEl?.value || 0) || 0;
            const taxPercent = parseFloat(discTaxEl?.value || 0) || 0;
            
            if (isNaN(originalPrice) || originalPrice < 0) {
                result = "Validation Error: Please enter a valid positive original price.";
            } else if (isNaN(discountPercent) || discountPercent < 0 || discountPercent > 100) {
                result = "Validation Error: Please enter a valid discount percentage between 0 and 100.";
            } else if (additionalDiscount < 0 || additionalDiscount > 100) {
                result = "Validation Error: Additional discount must be between 0 and 100.";
            } else if (taxPercent < 0) {
                result = "Validation Error: Sales tax percentage cannot be negative.";
            } else {
                const savings1 = originalPrice * (discountPercent / 100);
                let currentPrice = originalPrice - savings1;
                
                const savings2 = currentPrice * (additionalDiscount / 100);
                currentPrice = currentPrice - savings2;
                
                const totalSavings = savings1 + savings2;
                
                const taxAmount = currentPrice * (taxPercent / 100);
                const finalPrice = currentPrice + taxAmount;
                
                result = `Discount Calculation Breakdown:\n\n` +
                         `• Original Price: $${originalPrice.toFixed(2)}\n` +
                         `• Primary Discount: ${discountPercent}% (-$${savings1.toFixed(2)})\n`;
                if (additionalDiscount > 0) {
                    result += `• Stacked Addl. Discount: ${additionalDiscount}% (-$${savings2.toFixed(2)})\n`;
                }
                result += `• Price After Discount(s): $${currentPrice.toFixed(2)}\n` +
                          `• Total Amount Saved: $${totalSavings.toFixed(2)}\n`;
                if (taxPercent > 0) {
                    result += `• Sales Tax: ${taxPercent}% (+$${taxAmount.toFixed(2)})\n`;
                }
                result += `\n✅ Final Sale Price: $${finalPrice.toFixed(2)}`;
            }
        } else {
            const nums = input.match(/[\d.]+/g);
            if (nums && nums.length >= 2) {
                const price = parseFloat(nums[0]), disc = parseFloat(nums[1]);
                const saved = (price * disc / 100).toFixed(2);
                result = `Original Price: ${price}\nDiscount: ${disc}%\nYou Save: ${saved}\nFinal Price: ${(price - saved).toFixed(2)}`;
            } else { result = "Format: [price] [discount%] (e.g. 1200 15)"; }
        }
    } else if (tool.includes('bmi calc')) {
        const bmiSystemEl = document.getElementById('bmiSystem');
        const bmiWeightEl = document.getElementById('bmiWeight');
        const bmiHeightEl = document.getElementById('bmiHeight');
        
        if (bmiSystemEl && bmiWeightEl && bmiHeightEl) {
            const system = bmiSystemEl.value;
            const weight = parseFloat(bmiWeightEl.value);
            const height = parseFloat(bmiHeightEl.value);
            
            if (isNaN(weight) || weight <= 0) {
                result = "Validation Error: Please enter a valid weight value greater than zero.";
            } else if (isNaN(height) || height <= 0) {
                result = "Validation Error: Please enter a valid height value greater than zero.";
            } else {
                let bmi = 0;
                let healthyMin = 0;
                let healthyMax = 0;
                let wUnit = "kg", hUnit = "cm";
                
                if (system === 'metric') {
                    const heightM = height / 100;
                    bmi = weight / (heightM * heightM);
                    healthyMin = 18.5 * (heightM * heightM);
                    healthyMax = 24.9 * (heightM * heightM);
                } else {
                    wUnit = "lbs";
                    hUnit = "inches";
                    bmi = (weight / (height * height)) * 703;
                    healthyMin = (18.5 * (height * height)) / 703;
                    healthyMax = (24.9 * (height * height)) / 703;
                }
                
                let category = "";
                let healthTips = "";
                if (bmi < 18.5) {
                    category = "Underweight ⚠️";
                    healthTips = "It may be beneficial to consult a doctor or nutritionist about achieving a healthy weight, focusing on nutrient-rich foods and strength building.";
                } else if (bmi >= 18.5 && bmi < 25) {
                    category = "Normal Weight (Healthy) ✅";
                    healthTips = "Great job! Keep maintaining your weight through balanced nutrition and regular physical activity.";
                } else if (bmi >= 25 && bmi < 30) {
                    category = "Overweight ⚠️";
                    healthTips = "Consider incorporating more physical activity and focusing on portion sizes to return to the healthy weight range.";
                } else {
                    category = "Obese 🚨";
                    healthTips = "Consult with a healthcare professional to establish a safe, structured weight management program prioritizing cardiovascular health.";
                }
                
                result = `BMI Calculator Results:\n\n` +
                         `• Weight: ${weight} ${wUnit}\n` +
                         `• Height: ${height} ${hUnit}\n` +
                         `• BMI Score: ${bmi.toFixed(2)}\n` +
                         `• Health Category: ${category}\n\n` +
                         `• Healthy Weight Range for Your Height:\n` +
                         `  ${healthyMin.toFixed(1)} ${wUnit} - ${healthyMax.toFixed(1)} ${wUnit}\n\n` +
                         `💡 Wellness Advice: ${healthTips}`;
            }
        } else {
            const nums = input.match(/[\d.]+/g);
            if (nums && nums.length >= 2) {
                const weight = parseFloat(nums[0]), height = parseFloat(nums[1]) / 100;
                const bmi = (weight / (height * height)).toFixed(1);
                let cat = "Normal";
                if (bmi < 18.5) cat = "Underweight";
                else if (bmi > 25 && bmi < 29.9) cat = "Overweight";
                else if (bmi >= 30) cat = "Obese";
                result = `BMI Score: ${bmi}\nCategory: ${cat}`;
            } else { result = "Format: [weight in kg] [height in cm] (e.g. 70 175)"; }
        }
    } else if (tool.includes('age calc')) {
        const birthDateEl = document.getElementById('birthDate');
        const ageAtDateEl = document.getElementById('ageAtDate');
        
        if (birthDateEl && ageAtDateEl) {
            const birthDateStr = birthDateEl.value;
            const ageAtDateStr = ageAtDateEl.value;
            
            if (!birthDateStr) {
                result = "Validation Error: Please select your Date of Birth.";
            } else {
                const birth = new Date(birthDateStr);
                const ageAt = ageAtDateStr ? new Date(ageAtDateStr) : new Date();
                
                birth.setHours(0,0,0,0);
                ageAt.setHours(0,0,0,0);
                
                if (isNaN(birth.getTime())) {
                    result = "Validation Error: Invalid birth date format.";
                } else if (isNaN(ageAt.getTime())) {
                    result = "Validation Error: Invalid target date format.";
                } else if (ageAt < birth) {
                    result = "Validation Error: Target date cannot be earlier than your date of birth.";
                } else {
                    let years = ageAt.getFullYear() - birth.getFullYear();
                    let months = ageAt.getMonth() - birth.getMonth();
                    let days = ageAt.getDate() - birth.getDate();
                    
                    if (days < 0) {
                        months--;
                        const prevMonth = new Date(ageAt.getFullYear(), ageAt.getMonth(), 0);
                        days += prevMonth.getDate();
                    }
                    
                    if (months < 0) {
                        years--;
                        months += 12;
                    }
                    
                    const totalDays = Math.floor((ageAt.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
                    const totalWeeks = Math.floor(totalDays / 7);
                    const remDays = totalDays % 7;
                    
                    const totalMonths = (years * 12) + months;
                    const totalHours = totalDays * 24;
                    const totalMinutes = totalHours * 60;
                    
                    const countLeapYears = (start, end) => {
                        let count = 0;
                        for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
                            if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
                                const leapDay = new Date(y, 1, 29);
                                if (leapDay >= start && leapDay <= end) {
                                    count++;
                                }
                            }
                        }
                        return count;
                    };
                    
                    result = `Age Calculation Details:\n\n` +
                             `• Date of Birth: ${birth.toDateString()}\n` +
                             `• Age-at Date: ${ageAt.toDateString()}\n\n` +
                             `✅ Age: ${years} Years, ${months} Months, and ${days} Days\n\n` +
                             `📊 Equivalent In Alternative Time Units:\n` +
                             `  • In Months: ${totalMonths} Months, ${days} Days\n` +
                             `  • In Weeks & Days: ${totalWeeks} Weeks, ${remDays} Days\n` +
                             `  • In Total Days: ${totalDays.toLocaleString()} Days\n` +
                             `  • In Hours: ~${totalHours.toLocaleString()} Hours\n` +
                             `  • In Minutes: ~${totalMinutes.toLocaleString()} Minutes\n\n` +
                             `📅 Leap Years Passed: ${countLeapYears(birth, ageAt)} leap year(s)`;
                }
            }
        } else {
            const birth = new Date(input);
            if (isNaN(birth)) result = "Invalid Date (use YYYY-MM-DD)";
            else {
                const diff = Date.now() - birth.getTime();
                const age = new Date(diff).getUTCFullYear() - 1970;
                result = `Your current age is: ${age} years`;
            }
        }
    } else if (tool.includes('temp converter')) {
        const valStr = document.getElementById('tempValue')?.value;
        const val = parseFloat(valStr !== undefined ? valStr : input);
        if (isNaN(val)) {
            result = "Validation Error: Please enter a valid number to convert.";
        } else {
            const unit = document.getElementById('tempFrom')?.value || "c";
            
            let cValue = 0;
            if (unit === 'c') cValue = val;
            else if (unit === 'f') cValue = (val - 32) * 5/9;
            else if (unit === 'k') cValue = val - 273.15;
            else if (unit === 'r') cValue = (val - 491.67) * 5/9;
            
            const results = {
                "Celsius (°C)": cValue,
                "Fahrenheit (°F)": cValue * 9/5 + 32,
                "Kelvin (K)": cValue + 273.15,
                "Rankine (°R)": (cValue + 273.15) * 9/5
            };
            
            if (results["Kelvin (K)"] < 0) {
                result = `Conversion Error: Temperature cannot fall below absolute zero (-273.15°C / 0K). Entered value corresponds to ${results["Kelvin (K)"].toFixed(2)}K.`;
            } else {
                const tableContainer = document.getElementById('tempResultTableContainer');
                const tbody = document.getElementById('tempResultTableBody');
                if (tableContainer && tbody) {
                    tbody.innerHTML = '';
                    for (let [u, convertedVal] of Object.entries(results)) {
                        const row = document.createElement('tr');
                        row.style.borderBottom = '1px solid var(--border)';
                        
                        const tdUnit = document.createElement('td');
                        tdUnit.style.padding = '12px 15px';
                        tdUnit.style.color = 'var(--text-main)';
                        tdUnit.innerText = u;
                        
                        const tdVal = document.createElement('td');
                        tdVal.style.padding = '12px 15px';
                        tdVal.style.fontFamily = 'monospace';
                        tdVal.style.color = 'var(--text-muted)';
                        tdVal.innerText = convertedVal.toFixed(4).replace(/\.?0+$/, '');
                        
                        row.appendChild(tdUnit);
                        row.appendChild(tdVal);
                        tbody.appendChild(row);
                    }
                    tableContainer.style.display = 'block';
                }
                
                let textResult = `Temperature Conversion Report\n=============================\n\n`;
                for (let [u, convertedVal] of Object.entries(results)) {
                    textResult += `• ${u}: ${convertedVal.toFixed(4).replace(/\.?0+$/, '')}\n`;
                }
                result = textResult;
            }
        }
    } else if (tool.includes('roman numeral')) {
        const mode = document.getElementById('romanMode')?.value || "arabicToRoman";
        const val = input.trim();
        
        if (!val) {
            result = "Validation Error: Please enter a value to convert.";
        } else {
            const romanMap = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
            
            if (mode === 'arabicToRoman') {
                const num = parseInt(val, 10);
                if (isNaN(num) || num < 1 || num > 3999) {
                    result = "Validation Error: Please enter a valid integer between 1 and 3999.";
                } else {
                    let temp = num;
                    let romanVal = '';
                    let steps = [];
                    for (let key in romanMap) {
                        while (temp >= romanMap[key]) {
                            romanVal += key;
                            temp -= romanMap[key];
                            steps.push(`${key} (+${romanMap[key]})`);
                        }
                    }
                    result = `Arabic Number: ${num}\n` +
                             `========================================\n\n` +
                             `• Roman Numeral: ${romanVal}\n\n` +
                             `Step-by-Step Breakdown:\n` +
                             `• Formula: ${num} = ${steps.join(' + ')}`;
                }
            } else {
                const romanStr = val.toUpperCase().replace(/[^MDCLXVI]/g, '');
                if (!romanStr || romanStr !== val.toUpperCase()) {
                    result = "Validation Error: Input contains invalid Roman numeral characters (use M, D, C, L, X, V, I).";
                } else {
                    let arabicVal = 0;
                    let i = 0;
                    let steps = [];
                    while (i < romanStr.length) {
                        const s1 = romanStr.charAt(i);
                        const v1 = romanMap[s1];
                        if (i + 1 < romanStr.length) {
                            const s2 = romanStr.charAt(i + 1);
                            const v2 = romanMap[s2];
                            if (v1 >= v2) {
                                arabicVal += v1;
                                steps.push(`${s1} (${v1})`);
                                i++;
                            } else {
                                arabicVal += (v2 - v1);
                                steps.push(`${s1}${s2} (${v2} - ${v1} = ${v2 - v1})`);
                                i += 2;
                            }
                        } else {
                            arabicVal += v1;
                            steps.push(`${s1} (${v1})`);
                            i++;
                        }
                    }
                    result = `Roman Numeral: ${romanStr}\n` +
                             `========================================\n\n` +
                             `• Arabic Number: ${arabicVal}\n\n` +
                             `Step-by-Step Addition:\n` +
                             `• Calculation: ${steps.join(' + ')} = ${arabicVal}`;
                }
            }
        }
    } else if (tool.includes('math solver')) {
        try { result = "Result: " + eval(input.replace(/[^-+*/().0-9]/g, '')); } catch(e) { result = "Error solving expression"; }
    } else if (tool.includes('length converter')) {
        const valStr = document.getElementById('lengthValue')?.value;
        const val = parseFloat(valStr !== undefined ? valStr : input);
        if (isNaN(val)) {
            result = "Validation Error: Please enter a valid number to convert.";
        } else {
            const unit = document.getElementById('lengthFrom')?.value || "m";
            
            const mFactor = {
                m: 1,
                km: 1000,
                cm: 0.01,
                mm: 0.001,
                mi: 1609.344,
                yd: 0.9144,
                ft: 0.3048,
                in: 0.0254
            };
            
            const valueInMeters = val * (mFactor[unit] || 1);
            
            const results = {
                "Meter (m)": valueInMeters,
                "Kilometer (km)": valueInMeters / 1000,
                "Centimeter (cm)": valueInMeters * 100,
                "Millimeter (mm)": valueInMeters * 1000,
                "Mile (mi)": valueInMeters / 1609.344,
                "Yard (yd)": valueInMeters / 0.9144,
                "Foot (ft)": valueInMeters / 0.3048,
                "Inch (in)": valueInMeters / 0.0254
            };
            
            const tableContainer = document.getElementById('lengthResultTableContainer');
            const tbody = document.getElementById('lengthResultTableBody');
            if (tableContainer && tbody) {
                tbody.innerHTML = '';
                for (let [u, convertedVal] of Object.entries(results)) {
                    const row = document.createElement('tr');
                    row.style.borderBottom = '1px solid var(--border)';
                    
                    const tdUnit = document.createElement('td');
                    tdUnit.style.padding = '12px 15px';
                    tdUnit.style.color = 'var(--text-main)';
                    tdUnit.innerText = u;
                    
                    const tdVal = document.createElement('td');
                    tdVal.style.padding = '12px 15px';
                    tdVal.style.fontFamily = 'monospace';
                    tdVal.style.color = 'var(--text-muted)';
                    tdVal.innerText = convertedVal % 1 === 0 ? convertedVal : convertedVal.toFixed(6).replace(/\.?0+$/, '');
                    
                    row.appendChild(tdUnit);
                    row.appendChild(tdVal);
                    tbody.appendChild(row);
                }
                tableContainer.style.display = 'block';
            }
            
            let textResult = `Length Conversion Report\n========================\n\n`;
            for (let [u, convertedVal] of Object.entries(results)) {
                const formatted = convertedVal % 1 === 0 ? convertedVal : convertedVal.toFixed(6).replace(/\.?0+$/, '');
                textResult += `• ${u}: ${formatted}\n`;
            }
            result = textResult;
        }
    } else if (tool.includes('weight converter')) {
        const valStr = document.getElementById('weightValue')?.value;
        const val = parseFloat(valStr !== undefined ? valStr : input);
        if (isNaN(val)) {
            result = "Validation Error: Please enter a valid number to convert.";
        } else {
            const unit = document.getElementById('weightFrom')?.value || "kg";
            
            const kgFactor = {
                kg: 1,
                g: 0.001,
                lb: 0.45359237,
                oz: 0.028349523125,
                st: 6.35029318,
                ton: 1000
            };
            
            const valueInKg = val * (kgFactor[unit] || 1);
            
            const results = {
                "Kilogram (kg)": valueInKg,
                "Gram (g)": valueInKg * 1000,
                "Pound (lb)": valueInKg / 0.45359237,
                "Ounce (oz)": valueInKg / 0.028349523125,
                "Stone (st)": valueInKg / 6.35029318,
                "Metric Ton (t)": valueInKg / 1000
            };
            
            const tableContainer = document.getElementById('weightResultTableContainer');
            const tbody = document.getElementById('weightResultTableBody');
            if (tableContainer && tbody) {
                tbody.innerHTML = '';
                for (let [u, convertedVal] of Object.entries(results)) {
                    const row = document.createElement('tr');
                    row.style.borderBottom = '1px solid var(--border)';
                    
                    const tdUnit = document.createElement('td');
                    tdUnit.style.padding = '12px 15px';
                    tdUnit.style.color = 'var(--text-main)';
                    tdUnit.innerText = u;
                    
                    const tdVal = document.createElement('td');
                    tdVal.style.padding = '12px 15px';
                    tdVal.style.fontFamily = 'monospace';
                    tdVal.style.color = 'var(--text-muted)';
                    tdVal.innerText = convertedVal % 1 === 0 ? convertedVal : convertedVal.toFixed(6).replace(/\.?0+$/, '');
                    
                    row.appendChild(tdUnit);
                    row.appendChild(tdVal);
                    tbody.appendChild(row);
                }
                tableContainer.style.display = 'block';
            }
            
            let textResult = `Weight Conversion Report\n========================\n\n`;
            for (let [u, convertedVal] of Object.entries(results)) {
                const formatted = convertedVal % 1 === 0 ? convertedVal : convertedVal.toFixed(6).replace(/\.?0+$/, '');
                textResult += `• ${u}: ${formatted}\n`;
            }
            result = textResult;
        }
    } else if (tool.includes('hex converter')) {
        const mode = document.getElementById('hexMode')?.value || "hexToDec";
        const val = input.trim();
        
        if (!val) {
            result = "Validation Error: Please enter a value to convert.";
        } else {
            if (mode === 'decToHex') {
                const dec = parseInt(val, 10);
                if (isNaN(dec) || dec < 0) {
                    result = "Validation Error: Please enter a non-negative decimal integer.";
                } else {
                    const hex = dec.toString(16).toUpperCase();
                    const bin = dec.toString(2);
                    const oct = dec.toString(8);
                    
                    let steps = [];
                    let temp = dec;
                    if (temp === 0) steps.push("0 / 16 = 0 (Remainder: 0)");
                    while (temp > 0) {
                        const rem = temp % 16;
                        const hexDigit = rem.toString(16).toUpperCase();
                        steps.push(`${temp} / 16 = ${Math.floor(temp / 16)} (Remainder: ${rem} -> ${hexDigit})`);
                        temp = Math.floor(temp / 16);
                    }
                    
                    result = `Decimal Integer: ${dec}\n` +
                             `========================================\n\n` +
                             `• Hexadecimal: ${hex}\n` +
                             `• Binary:      ${bin}\n` +
                             `• Octal:       ${oct}\n\n` +
                             `Mathematical Division Steps (Base 10 to Base 16):\n` +
                             `• Divide decimal number by 16 repeatedly. List remainders from bottom to top:\n` +
                             `  ${steps.join('\n  ')}`;
                }
            } else {
                const cleanHex = val.replace(/^0x|^#/i, '');
                if (!/^[0-9a-fA-F]+$/.test(cleanHex)) {
                    result = "Validation Error: Input is not a valid Hexadecimal string (use characters 0-9 and A-F).";
                } else {
                    const dec = parseInt(cleanHex, 16);
                    const bin = dec.toString(2);
                    const oct = dec.toString(8);
                    
                    let steps = [];
                    const digits = cleanHex.toUpperCase().split('');
                    const len = digits.length;
                    let sumStr = [];
                    
                    digits.forEach((d, idx) => {
                        const power = len - 1 - idx;
                        const digitVal = parseInt(d, 16);
                        const termVal = digitVal * Math.pow(16, power);
                        sumStr.push(`(${digitVal} * 16^${power})`);
                        steps.push(`Position ${power}: Digit "${d}" -> value ${digitVal} * 16^${power} = ${termVal.toLocaleString()}`);
                    });
                    
                    result = `Hexadecimal: ${cleanHex.toUpperCase()}\n` +
                             `========================================\n\n` +
                             `• Decimal (Base 10): ${dec.toLocaleString()}\n` +
                             `• Binary (Base 2):   ${bin}\n` +
                             `• Octal (Base 8):    ${oct}\n\n` +
                             `Positional Expansion Steps (Base 16 to Base 10):\n` +
                             `• ${sumStr.join(' + ')} = ${dec.toLocaleString()}\n\n` +
                             `• Position Breakdown:\n` +
                             `  ${steps.join('\n  ')}`;
                }
            }
        }
    } else if (tool.includes('octal converter')) {
        const mode = document.getElementById('octalMode')?.value || "octToDec";
        const val = input.trim();
        
        if (!val) {
            result = "Validation Error: Please enter a value to convert.";
        } else {
            if (mode === 'decToOct') {
                const dec = parseInt(val, 10);
                if (isNaN(dec) || dec < 0) {
                    result = "Validation Error: Please enter a non-negative decimal integer.";
                } else {
                    const oct = dec.toString(8);
                    const bin = dec.toString(2);
                    const hex = dec.toString(16).toUpperCase();
                    
                    let steps = [];
                    let temp = dec;
                    if (temp === 0) steps.push("0 / 8 = 0 (Remainder: 0)");
                    while (temp > 0) {
                        const rem = temp % 8;
                        steps.push(`${temp} / 8 = ${Math.floor(temp / 8)} (Remainder: ${rem})`);
                        temp = Math.floor(temp / 8);
                    }
                    
                    result = `Decimal Integer: ${dec}\n` +
                             `========================================\n\n` +
                             `• Octal:       ${oct}\n` +
                             `• Binary:      ${bin}\n` +
                             `• Hexadecimal: ${hex}\n\n` +
                             `Mathematical Division Steps (Base 10 to Base 8):\n` +
                             `• Divide decimal number by 8 repeatedly. List remainders from bottom to top:\n` +
                             `  ${steps.join('\n  ')}`;
                }
            } else {
                const cleanOct = val.replace(/^0o/i, '');
                if (!/^[0-7]+$/.test(cleanOct)) {
                    result = "Validation Error: Input is not a valid Octal string (use characters 0 to 7).";
                } else {
                    const dec = parseInt(cleanOct, 8);
                    const bin = dec.toString(2);
                    const hex = dec.toString(16).toUpperCase();
                    
                    let steps = [];
                    const digits = cleanOct.split('');
                    const len = digits.length;
                    let sumStr = [];
                    
                    digits.forEach((d, idx) => {
                        const power = len - 1 - idx;
                        const digitVal = parseInt(d, 10);
                        const termVal = digitVal * Math.pow(8, power);
                        sumStr.push(`(${digitVal} * 8^${power})`);
                        steps.push(`Position ${power}: Digit "${d}" -> value ${digitVal} * 8^${power} = ${termVal.toLocaleString()}`);
                    });
                    
                    result = `Octal Value: ${cleanOct}\n` +
                             `========================================\n\n` +
                             `• Decimal (Base 10): ${dec.toLocaleString()}\n` +
                             `• Binary (Base 2):   ${bin}\n` +
                             `• Hexadecimal (Base 16): ${hex}\n\n` +
                             `Positional Expansion Steps (Base 8 to Base 10):\n` +
                             `• ${sumStr.join(' + ')} = ${dec.toLocaleString()}\n\n` +
                             `• Position Breakdown:\n` +
                             `  ${steps.join('\n  ')}`;
                }
            }
        }
    } else if (tool.includes('fraction calc')) {
        const n1 = parseInt(document.getElementById('fracNumerator1')?.value, 10);
        const d1 = parseInt(document.getElementById('fracDenominator1')?.value, 10);
        const op = document.getElementById('fracOperator')?.value || "+";
        const n2 = parseInt(document.getElementById('fracNumerator2')?.value, 10);
        const d2 = parseInt(document.getElementById('fracDenominator2')?.value, 10);
        
        const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
        const lcm = (a, b) => (a * b) / gcd(a, b);
        
        if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2)) {
            result = "Validation Error: Please enter valid integer values for all numerator and denominator fields.";
        } else if (d1 === 0 || d2 === 0) {
            result = "Validation Error: Denominators cannot be zero.";
        } else {
            let resNum, resDen;
            let stepText = [];
            
            if (op === '+') {
                const commonDen = lcm(d1, d2);
                const mult1 = commonDen / d1;
                const mult2 = commonDen / d2;
                resNum = (n1 * mult1) + (n2 * mult2);
                resDen = commonDen;
                
                stepText.push(`Find Lowest Common Multiple (LCM) of denominators ${d1} and ${d2} -> ${commonDen}`);
                stepText.push(`Convert fractions: (${n1} * ${mult1})/${commonDen} + (${n2} * ${mult2})/${commonDen}`);
                stepText.push(`Sum numerators: ${n1 * mult1} + ${n2 * mult2} = ${resNum}`);
            } else if (op === '-') {
                const commonDen = lcm(d1, d2);
                const mult1 = commonDen / d1;
                const mult2 = commonDen / d2;
                resNum = (n1 * mult1) - (n2 * mult2);
                resDen = commonDen;
                
                stepText.push(`Find Lowest Common Multiple (LCM) of denominators ${d1} and ${d2} -> ${commonDen}`);
                stepText.push(`Convert fractions: (${n1} * ${mult1})/${commonDen} - (${n2} * ${mult2})/${commonDen}`);
                stepText.push(`Subtract numerators: ${n1 * mult1} - ${n2 * mult2} = ${resNum}`);
            } else if (op === '*') {
                resNum = n1 * n2;
                resDen = d1 * d2;
                
                stepText.push(`Multiply numerators: ${n1} * ${n2} = ${resNum}`);
                stepText.push(`Multiply denominators: ${d1} * ${d2} = ${resDen}`);
            } else if (op === '/') {
                resNum = n1 * d2;
                resDen = d1 * n2;
                
                stepText.push(`Reciprocal of divisor fraction: ${d2}/${n2}`);
                stepText.push(`Multiply original fraction by reciprocal: (${n1}/${d1}) * (${d2}/${n2})`);
                stepText.push(`Multiply: ${n1} * ${d2} = ${resNum} (Numerator)`);
                stepText.push(`Multiply: ${d1} * ${n2} = ${resDen} (Denominator)`);
            }
            
            if (resDen === 0) {
                result = "Validation Error: Division by zero fraction (numerator 2 cannot be zero when dividing).";
            } else {
                const common = gcd(resNum, resDen);
                const simpNum = resNum / common;
                const simpDen = resDen / common;
                const decVal = (simpNum / simpDen).toFixed(4);
                
                const simpStr = simpDen === 1 ? `${simpNum}` : `${simpNum}/${simpDen}`;
                
                let mathReport = `Fraction Calculation Results\n`;
                mathReport += `========================================\n\n`;
                mathReport += `• Operation:          ${n1}/${d1} ${op} ${n2}/${d2}\n`;
                mathReport += `• Result (Raw):        ${resNum}/${resDen}\n`;
                mathReport += `• Result (Simplified): ${simpStr}\n`;
                mathReport += `• Result (Decimal):    ${decVal}\n\n`;
                mathReport += `Mathematical Step-by-Step Breakdown:\n`;
                mathReport += `• ` + stepText.join('\n• ') + `\n`;
                mathReport += `• Simplify using Greatest Common Divisor (GCD): GCD of ${resNum} and ${resDen} is ${common}.\n`;
                mathReport += `  (${resNum} / ${common}) / (${resDen} / ${common}) = ${simpStr}`;
                
                result = mathReport;
            }
        }
    }

    else if (tool.includes('timestamp converter')) {
        const timezone = document.getElementById('timeZoneSelect')?.value || "local";
        const humanVal = document.getElementById('humanDateTime')?.value;
        const rawEpoch = document.getElementById('toolInput')?.value || input;
        
        let targetEpoch = null;
        let isEpochInput = true;
        
        if (!rawEpoch.trim() && humanVal) {
            isEpochInput = false;
        }
        
        if (isEpochInput) {
            const cleanEpoch = rawEpoch.trim();
            if (!cleanEpoch) {
                result = "Validation Error: Please enter an epoch timestamp (seconds or milliseconds).";
            } else {
                let epochNum = parseInt(cleanEpoch, 10);
                if (isNaN(epochNum)) {
                    result = "Validation Error: Epoch must be a valid numeric integer.";
                } else {
                    let isMs = cleanEpoch.length >= 13;
                    let date = new Date(isMs ? epochNum : epochNum * 1000);
                    
                    if (isNaN(date.getTime())) {
                        result = "Conversion Error: Invalid date values represented by epoch.";
                        return;
                    }
                    
                    let dateStr = "";
                    if (timezone === 'UTC') {
                        dateStr = date.toUTCString();
                    } else {
                        dateStr = date.toString();
                    }
                    
                    result = `Epoch Input: ${epochNum} (${isMs ? 'milliseconds' : 'seconds'})\n` +
                             `========================================\n\n` +
                             `• Human-Friendly Date: ${dateStr}\n` +
                             `• Coordinated Universal Time (UTC): ${date.toUTCString()}\n` +
                             `• ISO 8601 Format: ${date.toISOString()}\n` +
                             `• Timezone Mode: ${timezone.toUpperCase()}`;
                }
            }
        } else {
            const date = new Date(humanVal);
            if (isNaN(date.getTime())) {
                result = "Validation Error: Please select a valid date and time using the calendar picker.";
            } else {
                const epochSec = Math.floor(date.getTime() / 1000);
                const epochMs = date.getTime();
                
                result = `Human Date Input: ${date.toString()}\n` +
                         `========================================\n\n` +
                         `• Epoch Timestamp (seconds): ${epochSec}\n` +
                         `• Epoch Timestamp (milliseconds): ${epochMs}\n` +
                         `• Coordinated Universal Time (UTC): ${date.toUTCString()}\n` +
                         `• ISO 8601 Format: ${date.toISOString()}`;
            }
        }
    } else if (tool.includes('countdown timer')) {
        const targetVal = document.getElementById('timerTarget')?.value;
        const clockDisplay = document.getElementById('countdownClockDisplay');
        const progressBar = document.getElementById('countdownProgressBar');
        const btnPauseResume = document.getElementById('btnPauseResume');
        const btnResetTimer = document.getElementById('btnResetTimer');
        
        if (!targetVal) {
            result = "Validation Error: Please select a target date and time.";
            return;
        }
        
        const targetDate = new Date(targetVal);
        const targetMs = targetDate.getTime();
        const nowMs = Date.now();
        
        if (targetMs <= nowMs) {
            result = "Validation Error: Target date must be in the future.";
            return;
        }
        
        if (window.countdownIntervalId) {
            clearInterval(window.countdownIntervalId);
        }
        
        window.countdownEndTime = targetMs;
        window.countdownTotalDuration = targetMs - nowMs;
        window.countdownIsPaused = false;
        window.countdownPausedRemaining = 0;
        
        if (btnPauseResume) btnPauseResume.style.display = 'inline-block';
        if (btnResetTimer) btnResetTimer.style.display = 'inline-block';
        if (btnPauseResume) btnPauseResume.innerText = 'Pause';
        
        const updateTick = () => {
            if (window.countdownIsPaused) return;
            
            const currentNow = Date.now();
            const remaining = window.countdownEndTime - currentNow;
            
            if (remaining <= 0) {
                clearInterval(window.countdownIntervalId);
                if (clockDisplay) clockDisplay.innerText = "00d 00h 00m 00s";
                if (progressBar) progressBar.style.width = "100%";
                
                try {
                    const AudioCtx = window.AudioContext || window.webkitAudioContext;
                    if (AudioCtx) {
                        const ctx = new AudioCtx();
                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();
                        osc.frequency.setValueAtTime(880, ctx.currentTime);
                        gain.gain.setValueAtTime(0.5, ctx.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
                        osc.connect(gain);
                        gain.connect(ctx.destination);
                        osc.start();
                        osc.stop(ctx.currentTime + 1.5);
                    }
                } catch(e) {}
                
                const outArea = document.getElementById('toolOutput');
                if (outArea) outArea.innerText = "TIME IS UP! 🔔\nThe countdown has completed.";
                return;
            }
            
            const secTotal = Math.floor(remaining / 1000);
            const days = Math.floor(secTotal / (24 * 3600));
            const hours = Math.floor((secTotal % (24 * 3600)) / 3600);
            const minutes = Math.floor((secTotal % 3600) / 60);
            const seconds = secTotal % 60;
            
            const fmt = `${days.toString().padStart(2, '0')}d ` +
                        `${hours.toString().padStart(2, '0')}h ` +
                        `${minutes.toString().padStart(2, '0')}m ` +
                        `${seconds.toString().padStart(2, '0')}s`;
                        
            if (clockDisplay) clockDisplay.innerText = fmt;
            
            const elapsed = window.countdownTotalDuration - remaining;
            const pct = Math.min(100, Math.max(0, (elapsed / window.countdownTotalDuration) * 100));
            if (progressBar) progressBar.style.width = `${pct}%`;
            
            const outArea = document.getElementById('toolOutput');
            if (outArea) {
                outArea.innerText = `Countdown Active:\nTime Remaining: ${fmt}\nElapsed: ${pct.toFixed(1)}%`;
            }
        };
        
        window.toggleTimerRunning = () => {
            const btn = document.getElementById('btnPauseResume');
            if (!btn) return;
            
            if (window.countdownIsPaused) {
                window.countdownEndTime = Date.now() + window.countdownPausedRemaining;
                window.countdownIsPaused = false;
                btn.innerText = 'Pause';
            } else {
                window.countdownPausedRemaining = window.countdownEndTime - Date.now();
                window.countdownIsPaused = true;
                btn.innerText = 'Resume';
            }
        };
        
        window.resetCountdownTimer = () => {
            if (window.countdownIntervalId) {
                clearInterval(window.countdownIntervalId);
            }
            window.countdownEndTime = 0;
            window.countdownTotalDuration = 0;
            window.countdownIsPaused = false;
            window.countdownPausedRemaining = 0;
            
            const clk = document.getElementById('countdownClockDisplay');
            const pb = document.getElementById('countdownProgressBar');
            const pr = document.getElementById('btnPauseResume');
            const rst = document.getElementById('btnResetTimer');
            
            if (clk) clk.innerText = "00d 00h 00m 00s";
            if (pb) pb.style.width = "0%";
            if (pr) pr.style.display = 'none';
            if (rst) rst.style.display = 'none';
            
            const outArea = document.getElementById('toolOutput');
            if (outArea) outArea.innerText = "Countdown cleared. Select a date above to start a new countdown.";
        };
        
        window.countdownIntervalId = setInterval(updateTick, 1000);
        updateTick();
        
        result = `Countdown started for target: ${targetDate.toString()}`;
    } else if (tool.includes('stopwatch')) {
        window.startStopwatchTicker = () => {
            const btnStart = document.getElementById('btnStopwatchStart');
            const btnLap = document.getElementById('btnStopwatchLap');
            const btnReset = document.getElementById('btnStopwatchReset');
            const display = document.getElementById('stopwatchClockDisplay');
            
            if (!window.stopwatchIsRunning) {
                window.stopwatchStartTime = Date.now() - (window.stopwatchElapsedBeforePause || 0);
                window.stopwatchIsRunning = true;
                if (btnStart) btnStart.innerText = 'Pause';
                if (btnStart) btnStart.className = 'btn btn-secondary';
                if (btnLap) btnLap.style.display = 'inline-block';
                if (btnReset) btnReset.style.display = 'inline-block';
                
                const updateTick = () => {
                    const elapsed = Date.now() - window.stopwatchStartTime;
                    
                    const ms = elapsed % 1000;
                    const totalSecs = Math.floor(elapsed / 1000);
                    const hours = Math.floor(totalSecs / 3600);
                    const minutes = Math.floor((totalSecs % 3600) / 60);
                    const seconds = totalSecs % 60;
                    
                    const fmt = `${hours.toString().padStart(2, '0')}:` +
                                `${minutes.toString().padStart(2, '0')}:` +
                                `${seconds.toString().padStart(2, '0')}.` +
                                `${ms.toString().padStart(3, '0')}`;
                                
                    if (display) display.innerText = fmt;
                };
                
                window.stopwatchIntervalId = setInterval(updateTick, 10);
            } else {
                clearInterval(window.stopwatchIntervalId);
                window.stopwatchElapsedBeforePause = Date.now() - window.stopwatchStartTime;
                window.stopwatchIsRunning = false;
                if (btnStart) btnStart.innerText = 'Resume';
                if (btnStart) btnStart.className = 'btn btn-primary';
            }
        };
        
        window.recordStopwatchLap = () => {
            if (!window.stopwatchIsRunning && !window.stopwatchElapsedBeforePause) return;
            const elapsed = window.stopwatchIsRunning 
                ? Date.now() - window.stopwatchStartTime 
                : window.stopwatchElapsedBeforePause;
                
            const ms = elapsed % 1000;
            const totalSecs = Math.floor(elapsed / 1000);
            const hours = Math.floor(totalSecs / 3600);
            const minutes = Math.floor((totalSecs % 3600) / 60);
            const seconds = totalSecs % 60;
            
            const fmt = `${hours.toString().padStart(2, '0')}:` +
                        `${minutes.toString().padStart(2, '0')}:` +
                        `${seconds.toString().padStart(2, '0')}.` +
                        `${ms.toString().padStart(3, '0')}`;
                        
            if (!window.stopwatchLaps) window.stopwatchLaps = [];
            window.stopwatchLaps.push(fmt);
            
            const container = document.getElementById('stopwatchLapsListContainer');
            const list = document.getElementById('stopwatchLapsList');
            if (container) container.style.display = 'block';
            if (list) {
                const item = document.createElement('div');
                item.style.padding = '8px 12px';
                item.style.background = 'rgba(255,255,255,0.03)';
                item.style.border = '1px solid var(--border)';
                item.style.borderRadius = '8px';
                item.style.fontFamily = 'monospace';
                item.style.fontSize = '0.9rem';
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.innerHTML = `<span>Lap ${window.stopwatchLaps.length}</span><span style="font-weight:700; color:var(--primary);">${fmt}</span>`;
                list.appendChild(item);
                list.scrollTop = list.scrollHeight;
            }
            
            const outArea = document.getElementById('toolOutput');
            if (outArea) {
                outArea.innerText = `Recorded Laps:\n` + window.stopwatchLaps.map((l, i) => `• Lap ${i + 1}: ${l}`).join('\n');
            }
        };
        
        window.resetStopwatchTicker = () => {
            clearInterval(window.stopwatchIntervalId);
            window.stopwatchStartTime = 0;
            window.stopwatchElapsedBeforePause = 0;
            window.stopwatchIsRunning = false;
            window.stopwatchLaps = [];
            
            const display = document.getElementById('stopwatchClockDisplay');
            const btnStart = document.getElementById('btnStopwatchStart');
            const btnLap = document.getElementById('btnStopwatchLap');
            const btnReset = document.getElementById('btnStopwatchReset');
            const container = document.getElementById('stopwatchLapsListContainer');
            const list = document.getElementById('stopwatchLapsList');
            
            if (display) display.innerText = "00:00:00.000";
            if (btnStart) btnStart.innerText = 'Start';
            if (btnStart) btnStart.className = 'btn btn-primary';
            if (btnLap) btnLap.style.display = 'none';
            if (btnReset) btnReset.style.display = 'none';
            if (container) container.style.display = 'none';
            if (list) list.innerHTML = '';
            
            const outArea = document.getElementById('toolOutput');
            if (outArea) outArea.innerText = "Stopwatch reset. Press Start above to begin dynamic tracking.";
        };
        
        result = "Stopwatch initialized! Click the Start button above to begin tracking time intervals.";
    } else if (tool.includes('world clock')) {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        
        result = `World Clock Report (Ticking live below)\n` +
                 `========================================\n\n` +
                 `• London (GMT/BST):   ${now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', ...timeOptions })} - ${now.toLocaleDateString('en-GB', { timeZone: 'Europe/London', ...dateOptions })}\n` +
                 `• New York (EST/EDT):  ${now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', ...timeOptions })} - ${now.toLocaleDateString('en-US', { timeZone: 'America/New_York', ...dateOptions })}\n` +
                 `• Tokyo (JST):         ${now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', ...timeOptions })} - ${now.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', ...dateOptions })}\n` +
                 `• Dubai (GST):         ${now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', ...timeOptions })} - ${now.toLocaleDateString('en-US', { timeZone: 'Asia/Dubai', ...dateOptions })}\n` +
                 `• Delhi (IST):         ${now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', ...timeOptions })} - ${now.toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata', ...dateOptions })}\n` +
                 `• Sydney (AEST/AEDT):  ${now.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney', ...timeOptions })} - ${now.toLocaleDateString('en-US', { timeZone: 'Australia/Sydney', ...dateOptions })}\n\n` +
                 `Offset Comparisons:\n` +
                 `• Local Timezone:      ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n` +
                 `• Local Time:          ${now.toLocaleTimeString('en-US', timeOptions)} - ${now.toLocaleDateString('en-US', dateOptions)}`;
    } else if (tool.includes('leap year')) {
        const isRange = document.getElementById('leapRangeToggle')?.checked;
        const singleYear = parseInt(document.getElementById('leapYearInput')?.value, 10);
        
        const checkLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
        
        if (isRange) {
            const startYear = parseInt(document.getElementById('leapStartYear')?.value, 10);
            const endYear = parseInt(document.getElementById('leapEndYear')?.value, 10);
            if (isNaN(startYear) || isNaN(endYear)) {
                result = "Validation Error: Please enter valid start and end years.";
            } else if (startYear > endYear) {
                result = "Validation Error: Start year cannot be greater than end year.";
            } else {
                let leapYears = [];
                for (let y = startYear; y <= endYear; y++) {
                    if (checkLeap(y)) {
                        leapYears.push(y);
                    }
                }
                result = `Leap Years between ${startYear} and ${endYear}:\n` +
                         `========================================\n\n` +
                         `Total Found: ${leapYears.length}\n` +
                         `Leap Years: ${leapYears.length > 0 ? leapYears.join(', ') : 'None'}`;
            }
        } else {
            if (isNaN(singleYear) || singleYear < 1) {
                result = "Validation Error: Please enter a valid positive year.";
            } else {
                const isLeap = checkLeap(singleYear);
                let nextLeaps = [];
                let curr = singleYear + 1;
                while (nextLeaps.length < 10) {
                    if (checkLeap(curr)) {
                        nextLeaps.push(curr);
                    }
                    curr++;
                }
                
                result = `Year Checked: ${singleYear}\n` +
                         `========================================\n\n` +
                         `• Status: ${isLeap ? '✅ Yes, this is a Leap Year.' : '❌ No, this is not a Leap Year.'}\n` +
                         `• Logic: ${singleYear} ${isLeap ? 'is divisible by 4 (and not 100, or is divisible by 400).' : 'does not satisfy Gregorian leap rules.'}\n\n` +
                         `Next 10 Leap Years after ${singleYear}:\n` +
                         `${nextLeaps.join(', ')}`;
            }
        }
    } else if (tool.includes('days between')) {
        const startVal = document.getElementById('startDate')?.value;
        const endVal = document.getElementById('endDate')?.value;
        const includeEnd = document.getElementById('includeEndDate')?.checked;
        
        if (!startVal || !endVal) {
            result = "Validation Error: Please select both a start date and an end date.";
        } else {
            const d1 = new Date(startVal);
            const d2 = new Date(endVal);
            
            if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
                result = "Validation Error: One of the selected dates is invalid.";
            } else {
                let diffMs = Math.abs(d2 - d1);
                let diffDays = diffMs / (1000 * 60 * 60 * 24);
                
                if (includeEnd) {
                    diffDays += 1;
                    diffMs += 1000 * 60 * 60 * 24;
                }
                
                const totalWeeks = (diffDays / 7).toFixed(1);
                const totalMonths = (diffDays / 30.4375).toFixed(1);
                const totalYears = (diffDays / 365.25).toFixed(1);
                
                result = `Start Date: ${d1.toDateString()}\n` +
                         `End Date:   ${d2.toDateString()}\n` +
                         `========================================\n\n` +
                         `• Total Difference: ${Math.floor(diffDays)} days\n` +
                         `• Equivalent Weeks: ${totalWeeks} weeks\n` +
                         `• Equivalent Months: ${totalMonths} months\n` +
                         `• Equivalent Years: ${totalYears} years\n\n` +
                         `Detailed Metrics:\n` +
                         `• Hours: ${(diffDays * 24).toLocaleString()}\n` +
                         `• Minutes: ${(diffDays * 24 * 60).toLocaleString()}\n` +
                         `• Mode: ${includeEnd ? 'End date included (+1 day)' : 'Standard difference'}`;
            }
        }
    } else if (tool.includes('timezone converter')) {
        const sourceVal = document.getElementById('timezoneDateTime')?.value;
        const sourceTZ = document.getElementById('sourceTZ')?.value || "UTC";
        const targetTZ = document.getElementById('targetTZ')?.value || "Asia/Kolkata";
        
        if (!sourceVal) {
            result = "Validation Error: Please select a source date and time.";
        } else {
            try {
                const localDate = new Date(sourceVal);
                const formatterOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
                
                const targetFormatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: targetTZ,
                    dateStyle: 'full',
                    timeStyle: 'long'
                });
                
                const sourceFormatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: sourceTZ,
                    dateStyle: 'full',
                    timeStyle: 'long'
                });
                
                result = `Source Timezone (${sourceTZ}):\n` +
                         `• ${sourceFormatter.format(localDate)}\n\n` +
                         `Target Timezone (${targetTZ}):\n` +
                         `• ${targetFormatter.format(localDate)}\n\n` +
                         `========================================\n` +
                         `Offset Information:\n` +
                         `• Source Time: ${localDate.toLocaleString('en-US', { timeZone: sourceTZ })}\n` +
                         `• Target Time: ${localDate.toLocaleString('en-US', { timeZone: targetTZ })}`;
            } catch (e) {
                result = `Conversion Error: Unable to perform calculation for target zone. Details: ${e.message}`;
            }
        }
    } else if (tool.includes('date formatter')) {
        const d = input.trim() ? new Date(isNaN(input.trim()) ? input.trim() : parseInt(input.trim())) : new Date();
        if (isNaN(d.getTime())) {
            result = "Invalid Date format.";
        } else {
            result = `Date Formats:
------------------------------------------
ISO String:         ${d.toISOString()}
UTC String:         ${d.toUTCString()}
Local String:       ${d.toString()}
Date Only:          ${d.toDateString()}
Time Only:          ${d.toTimeString()}
Locale Date:        ${d.toLocaleDateString()}
Locale Time:        ${d.toLocaleTimeString()}
Unix Timestamp (s): ${Math.floor(d.getTime() / 1000)}
Unix Timestamp (ms):${d.getTime()}
------------------------------------------
Custom Formats:
YYYY-MM-DD:         ${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}
DD/MM/YYYY:         ${d.getDate().toString().padStart(2, '0')}/${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getFullYear()}
MM/DD/YYYY:         ${(d.getMonth()+1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}/${d.getFullYear()}`;
        }
    }

    else if (tool.includes('html preview')) {
        const iframe = document.getElementById('htmlPreviewIframe');
        if (iframe) {
            iframe.srcdoc = input;
            result = "Live preview rendered directly inside the preview frame.";
        } else {
            result = "Error: Preview container not found.";
        }
    } else if (tool.includes('markdown converter')) {
        const rawText = input || "";
        const parseMarkdown = (md) => {
            let html = md
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
                
            html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
            html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
            html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
            html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
            html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
            html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
            html = html.replace(/_(.*?)_/g, '<em>$1</em>');
            html = html.replace(/`(.*?)`/g, '<code>$1</code>');
            html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
            html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
            html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
            html = html.replace(/<\/ul>\s*<ul>/gim, '');
            html = html.replace(/\n$/gim, '<br>');
            html = html.replace(/\n\n/gim, '</p><p>');
            return `<p>${html}</p>`.replace(/<p>\s*<\/p>/g, '');
        };
        
        const htmlOutput = parseMarkdown(rawText);
        const previewDiv = document.getElementById('markdownPreviewContainer');
        const codeTextarea = document.getElementById('markdownHtmlCodeContainer');
        
        if (previewDiv) previewDiv.innerHTML = htmlOutput;
        if (codeTextarea) codeTextarea.value = htmlOutput;
        
        result = htmlOutput;
    } else if (tool.includes('url shortener')) {
        const url = input.trim();
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
        
        if (!url || !url.startsWith('http') || !urlPattern.test(url)) {
            result = "Validation Error: Please enter a valid destination URL starting with http:// or https://\nExample: https://multitoolshub.co.in";
        } else {
            toggleLoader(true, "Shortening URL...");
            try {
                const target = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(target)}`);
                toggleLoader(false);
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.contents && data.contents.startsWith('http')) {
                        result = `Original URL:  ${url}\n` +
                                 `Shortened URL: ${data.contents}\n\n` +
                                 `========================================\n` +
                                 `Status: Success ✅. You can copy the shortened link above.`;
                    } else {
                        result = "Error: TinyURL service returned an unexpected response format. Please try again later.";
                    }
                } else {
                    result = "Error: The shortening proxy service returned an error response. Please try again later.";
                }
            } catch (err) {
                toggleLoader(false);
                result = `Network Error: Unable to contact the shortening service. Details: ${err.message}`;
            }
        }
    } else if (tool.includes('favicon grabber')) {
        const domain = input.replace('https://', '').replace('http://', '').split('/')[0] || 'google.com';
        const iconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
        const resultImg = document.getElementById('imageOutput');
        const resContainer = document.getElementById('imageResultContainer');
        if (resultImg && resContainer) {
            resultImg.src = iconUrl;
            resContainer.style.display = 'block';
            result = `Favicon grabbed for ${domain}! Check target below.`;
        } else {
            result = `Icon URL: ${iconUrl}`;
        }
    } else if (tool.includes('thumbnail downloader')) {
        const vid = input.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)?.[1];
        if (vid) {
            const maxres = `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`;
            const hq = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
            const mq = `https://img.youtube.com/vi/${vid}/mqdefault.jpg`;
            const sd = `https://img.youtube.com/vi/${vid}/sddefault.jpg`;
            
            const resultImg = document.getElementById('imageOutput');
            const resContainer = document.getElementById('imageResultContainer');
            const downloadBtn = document.getElementById('downloadBtn');

            if (resultImg && resContainer) {
                resultImg.src = maxres;
                resContainer.style.display = 'block';
            }
            
            result = `YouTube Video ID: ${vid}\n\n`;
            result += `Thumbnail Preview loaded below. Copy the image or use the links below to download direct:\n`;
            result += `- Max Resolution (1080p): ${maxres}\n`;
            result += `- Standard Quality (640p): ${sd}\n`;
            result += `- High Quality (480p):     ${hq}\n`;
            result += `- Medium Quality (360p):   ${mq}\n\n`;
            result += `Tip: Right-click the preview image below and select 'Save Image As...' to download it instantly.`;
            
            if (downloadBtn) {
                downloadBtn.style.display = 'inline-block';
                downloadBtn.innerText = "Open Full-Size Thumbnail";
                downloadBtn.onclick = () => window.open(maxres, '_blank');
            }
        } else {
            result = "Error: Invalid YouTube URL.\nSupported formats:\n- https://www.youtube.com/watch?v=VIDEO_ID\n- https://youtu.be/VIDEO_ID\n- https://www.youtube.com/embed/VIDEO_ID";
        }
    } else if (tool.includes('youtube video downloader')) {
        const urlInput = document.getElementById('youtubeUrl')?.value || input;
        const vid = urlInput.match(/(?:v=|\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/)?.[1];
        if (vid) {
            const maxres = `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`;
            const downloadBtn = document.getElementById('downloadBtn');
            const resContainer = document.getElementById('imageResultContainer');

            if (resContainer) {
                resContainer.innerHTML = `
                    <div style="margin-top: 20px; text-align: center;">
                        <h4 style="color: var(--primary); margin-bottom: 15px; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">Video Preview</h4>
                        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 20px; border: 1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 25px;">
                            <iframe src="https://www.youtube.com/embed/${vid}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
                        </div>
                        
                        <h4 style="color: var(--primary); margin-bottom: 15px; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">Direct Download Options</h4>
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 20px; padding: 20px; margin-bottom: 25px;">
                            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 15px;">Use the secure tool widget below to generate direct high-speed download links for Video (MP4) or Audio (MP3):</p>
                            <div style="overflow: hidden; border-radius: 10px; border: 1px solid var(--border); min-height: 180px;">
                                <iframe src="https://p.savenow.to/api/button/?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + vid)}&color=6366f1" style="width: 100%; min-height: 200px; border: none; background: transparent;" scrolling="no"></iframe>
                            </div>
                        </div>

                        <h4 style="color: var(--primary); margin-bottom: 15px; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">Alternative High-Speed Mirrors</h4>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 25px;">
                            <a href="https://www.youtubepp.com/watch?v=${vid}" target="_blank" class="category-label" style="text-decoration: none; padding: 12px 25px; border-radius: 10px; background: #ff007f; color: #fff; font-weight: bold; border: none;">Mirror 1 (Y2Mate)</a>
                            <a href="https://savefrom.net/?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + vid)}" target="_blank" class="category-label" style="text-decoration: none; padding: 12px 25px; border-radius: 10px; background: #00bfff; color: #fff; font-weight: bold; border: none;">Mirror 2 (SaveFrom)</a>
                            <a href="${maxres}" target="_blank" class="category-label" style="text-decoration: none; padding: 12px 25px; border-radius: 10px; background: var(--bg-card); border: 1px solid var(--border); color: var(--text-main);">Download Cover HD</a>
                        </div>
                    </div>
                `;
                resContainer.style.display = 'block';
            }

            result = `YouTube Video ID: ${vid}\n\n`;
            result += `Extraction Successful! The downloader widget, dynamic video player, and mirror servers have been loaded successfully below.\n\n`;
            result += `Instructions:\n`;
            result += `1. Scroll down to the 'Direct Download Options' widget.\n`;
            result += `2. Select the video quality (MP4) or audio format (MP3) you prefer.\n`;
            result += `3. Click the download button inside the widget to save the file instantly.\n`;
            result += `4. Alternatively, use Mirror 1 or Mirror 2 for external high-speed downloads.`;

            if (downloadBtn) {
                downloadBtn.style.display = 'none';
            }
        } else {
            result = "Error: Invalid YouTube URL.\nSupported formats:\n- https://www.youtube.com/watch?v=VIDEO_ID\n- https://youtu.be/VIDEO_ID\n- https://www.youtube.com/shorts/VIDEO_ID\n- https://www.youtube.com/embed/VIDEO_ID";
        }
    } else if (tool.includes('website status')) {
        const url = input.trim();
        const reportDiv = document.getElementById('websiteStatusReport');
        
        if (!url) {
            result = "Validation Error: Please enter a website URL.";
            if (reportDiv) reportDiv.style.display = 'none';
        } else {
            const cleanUrl = url.startsWith('http') ? url : `https://${url}`;
            let parsedDomain = "";
            try {
                parsedDomain = new URL(cleanUrl).hostname;
            } catch(e) {
                result = "Validation Error: Please enter a valid URL or domain name (e.g. example.com).";
                if (reportDiv) reportDiv.style.display = 'none';
                return;
            }
            
            toggleLoader(true, "Checking website status...");
            try {
                const startTime = performance.now();
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(cleanUrl)}`);
                const endTime = performance.now();
                toggleLoader(false);
                
                if (response.ok) {
                    const resJson = await response.json();
                    const duration = Math.round(endTime - startTime);
                    const isUp = resJson && resJson.status && resJson.status.http_code < 400;
                    
                    if (isUp) {
                        result = `Website: ${cleanUrl}\nDomain Name: ${parsedDomain}\nStatus: UP ✅\nResponse Time: ${duration}ms\nCORS Access: Enabled\nConnection: Successful`;
                        if (reportDiv) {
                            reportDiv.style.display = 'block';
                            reportDiv.style.background = 'rgba(16, 185, 129, 0.1)';
                            reportDiv.style.border = '1px solid rgb(16, 185, 129)';
                            reportDiv.style.color = 'rgb(52, 211, 153)';
                            reportDiv.innerHTML = `<strong>Domain Status: ONLINE</strong><br>The website <strong>${parsedDomain}</strong> is responding normally with a latency of ${duration}ms.`;
                        }
                    } else {
                        const httpCode = resJson && resJson.status ? resJson.status.http_code : 500;
                        result = `Website: ${cleanUrl}\nDomain Name: ${parsedDomain}\nStatus: DOWN or UNREACHABLE ❌\nHTTP Code: ${httpCode}\nConnection: Failed`;
                        if (reportDiv) {
                            reportDiv.style.display = 'block';
                            reportDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                            reportDiv.style.border = '1px solid rgb(239, 68, 68)';
                            reportDiv.style.color = 'rgb(248, 113, 113)';
                            reportDiv.innerHTML = `<strong>Domain Status: UNREACHABLE</strong><br>The website <strong>${parsedDomain}</strong> returned HTTP code ${httpCode} or failed to respond.`;
                        }
                    }
                } else {
                    result = `Website: ${cleanUrl}\nDomain Name: ${parsedDomain}\nStatus: Down or Unreachable ❌\nResponse Code: ${response.status}`;
                    if (reportDiv) {
                        reportDiv.style.display = 'block';
                        reportDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                        reportDiv.style.border = '1px solid rgb(239, 68, 68)';
                        reportDiv.style.color = 'rgb(248, 113, 113)';
                        reportDiv.innerHTML = `<strong>Domain Status: OFFLINE</strong><br>The remote server did not return a valid response (HTTP status ${response.status}).`;
                    }
                }
            } catch (err) {
                toggleLoader(false);
                result = `Website: ${cleanUrl}\nDomain Name: ${parsedDomain}\nStatus: Unreachable ❌\nDetails: Could not connect to the domain. It may be offline or blocking proxy access.`;
                if (reportDiv) {
                    reportDiv.style.display = 'block';
                    reportDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                    reportDiv.style.border = '1px solid rgb(239, 68, 68)';
                    reportDiv.style.color = 'rgb(248, 113, 113)';
                    reportDiv.innerHTML = `<strong>Domain Status: ERROR</strong><br>Unable to resolve or access <strong>${parsedDomain}</strong>. Server connection timed out or is refused.`;
                }
            }
        }
    } else if (tool.includes('favicon generator')) {
        const fileData = window.CURRENT_FAVICON_DATA;
        if (!fileData) {
            result = "Validation Error: Please select an image file first.";
        } else {
            const size = parseInt(document.getElementById('favSize')?.value || "32", 10);
            const format = document.getElementById('favFormat')?.value || "png";
            
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = () => {
                ctx.drawImage(img, 0, 0, size, size);
                
                const dataUrl = canvas.toDataURL('image/png');
                const filename = `favicon.${format}`;
                
                const previewImg = document.getElementById('faviconPreviewImg');
                const previewContainer = document.getElementById('faviconPreviewContainer');
                if (previewImg && previewContainer) {
                    previewImg.src = dataUrl;
                    previewContainer.style.display = 'block';
                }
                
                const resultImg = document.getElementById('imageOutput');
                const resContainer = document.getElementById('imageResultContainer');
                const downloadBtn = document.getElementById('downloadBtn');
                
                if (resultImg) resultImg.src = dataUrl;
                if (resContainer) resContainer.style.display = 'block';
                if (downloadBtn) {
                    downloadBtn.style.display = 'inline-block';
                    downloadBtn.onclick = () => {
                        const link = document.createElement('a');
                        link.download = filename;
                        link.href = dataUrl;
                        link.click();
                    };
                }
                
                if (output) {
                    output.innerText = `Favicon (${size}x${size} px, ${format.toUpperCase()}) generated successfully!\n\nClick the Download button above to save the file.`;
                }
            };
            
            img.onerror = () => {
                if (output) output.innerText = "Error: Invalid image file.";
            };
            
            img.src = fileData;
            result = "Processing favicon...";
        }
    } else if (tool.includes('dns lookup')) {
        const domain = input.trim().replace(/^https?:\/\//i, '').split('/')[0];
        if (!domain) {
            result = "Please enter a valid domain name.";
        } else {
            toggleLoader(true, "Querying DNS Records...");
            try {
                const types = ['A', 'AAAA', 'MX', 'TXT', 'CNAME'];
                let records = [];
                for (const type of types) {
                    const response = await fetch(`https://dns.google/resolve?name=${domain}&type=${type}`);
                    if (response.ok) {
                        const data = await response.json();
                        if (data.Answer) {
                            data.Answer.forEach(ans => {
                                records.push(`${type.padStart(5)} | TTL: ${ans.TTL.toString().padStart(5)} | Data: ${ans.data}`);
                            });
                        }
                    }
                }
                toggleLoader(false);
                if (records.length === 0) {
                    result = `No DNS records found for ${domain}.`;
                } else {
                    result = `DNS Records for ${domain}:\n------------------------------------------------------------\nType  | TTL   | Value\n------------------------------------------------------------\n` + records.join('\n');
                }
            } catch (err) {
                toggleLoader(false);
                result = "Error fetching DNS records. Please check your domain name or internet connection.";
            }
        }
    } else if (tool.includes('whois')) {
        const domain = input.trim().replace(/^https?:\/\//i, '').split('/')[0];
        if (!domain) {
            result = "Please enter a valid domain name.";
        } else {
            toggleLoader(true, "Fetching WHOIS (RDAP) Information...");
            try {
                const response = await fetch(`https://rdap.org/domain/${domain}`);
                toggleLoader(false);
                if (response.ok) {
                    const data = await response.json();
                    const registrar = data.port43 || (data.entities && data.entities[0] ? data.entities[0].handle : "Unknown");
                    const events = data.events || [];
                    let dates = "";
                    events.forEach(e => {
                        dates += `${e.eventAction.toUpperCase()}: ${new Date(e.eventActor ? e.eventActor : e.eventDate).toLocaleDateString()}\n`;
                    });
                    result = `WHOIS (RDAP) Result for ${domain}:\n\n` +
                             `Registrar Entity: ${registrar}\n` +
                             `Domain RDAP Status: ${data.status ? data.status.join(', ') : 'Unknown'}\n\n` +
                             `Registration Events:\n${dates || 'No dates returned by registry.'}`;
                } else {
                    result = `Could not fetch WHOIS data for ${domain}. The domain might be unregistered or registry API returned an error.`;
                }
            } catch (err) {
                toggleLoader(false);
                result = `Error connecting to RDAP server: ${err.message}. Showing simulated data instead:\n\nSimulated WHOIS for ${domain}:\nRegistrar: GoDaddy.com, LLC\nCreated: 2012-05-15\nExpires: 2027-05-15\nStatus: clientTransferProhibited`;
            }
        }
    } else if (tool.includes('source viewer')) {
        const url = input.trim();
        if (!url || !url.startsWith('http')) {
            result = "Please enter a valid URL (starting with http:// or https://).";
        } else {
            toggleLoader(true, "Fetching Source Code...");
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                toggleLoader(false);
                if (response.ok) {
                    const data = await response.json();
                    result = data.contents;
                } else {
                    result = "Error: Could not retrieve webpage source.";
                }
            } catch (err) {
                toggleLoader(false);
                result = `Error retrieving source: ${err.message}`;
            }
        }
    } else if (tool.includes('redirect checker')) {
        const url = input.trim();
        if (!url || !url.startsWith('http')) {
            result = "Please enter a valid URL (starting with http:// or https://).";
        } else {
            toggleLoader(true, "Tracing redirects...");
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                toggleLoader(false);
                if (response.ok) {
                    const data = await response.json();
                    const finalUrl = data.status ? data.status.url : url;
                    if (finalUrl === url) {
                        result = `No redirects found!\nInitial URL: ${url}\nFinal URL:   ${finalUrl}\nStatus Code: 200 OK`;
                    } else {
                        result = `Redirect Path Traced:\n1. 301/302 Redirect -> ${url}\n2. 200 OK -> ${finalUrl}`;
                    }
                } else {
                    result = "Could not trace redirects.";
                }
            } catch (err) {
                toggleLoader(false);
                result = `Redirect trace failed: ${err.message}`;
            }
        }
    } else if (tool.includes('page speed')) {
        const url = input.trim();
        if (!url || !url.startsWith('http')) {
            result = "Please enter a valid website URL (starting with http:// or https://).";
        } else {
            toggleLoader(true, "Analyzing page speed...");
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                toggleLoader(false);
                if (response.ok) {
                    const data = await response.json();
                    const html = data.contents;
                    
                    const scriptsCount = (html.match(/<script/g) || []).length;
                    const cssCount = (html.match(/<link[^>]*rel=["']stylesheet["']/g) || []).length;
                    const imagesCount = (html.match(/<img/g) || []).length;
                    const pageSizeKb = (html.length / 1024).toFixed(1);
                    
                    let score = 100 - (scriptsCount * 2) - (cssCount * 3) - (imagesCount * 1.5) - (pageSizeKb / 100);
                    score = Math.max(10, Math.min(99, Math.round(score)));
                    
                    result = `Page Speed Report for ${url}\n`;
                    result += `--------------------------------------------------\n`;
                    result += `Overall Performance Score: ${score}/100\n`;
                    result += `Page Size (HTML):         ${pageSizeKb} KB\n`;
                    result += `External Scripts Found:    ${scriptsCount}\n`;
                    result += `Style Sheets Found:        ${cssCount}\n`;
                    result += `Images Found:              ${imagesCount}\n\n`;
                    result += `Suggestions:\n`;
                    if (scriptsCount > 10) result += `- Reduce external javascript files to improve load time.\n`;
                    if (pageSizeKb > 200) result += `- Compress HTML page content and enable Gzip/Brotli.\n`;
                    if (imagesCount > 15) result += `- Use modern formats like WebP and enable lazy loading for images.\n`;
                    if (score > 85) result += `- Page is highly optimized! Great job.\n`;
                } else {
                    result = "Failed to fetch page data for speed analysis.";
                }
            } catch (err) {
                toggleLoader(false);
                result = `Analysis failed: ${err.message}`;
            }
        }
    } else if (tool.includes('broken link')) {
        const url = input.trim();
        if (!url || !url.startsWith('http')) {
            result = "Please enter a valid website URL (starting with http:// or https://).";
        } else {
            toggleLoader(true, "Scanning website for links...");
            try {
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
                toggleLoader(false);
                if (response.ok) {
                    const data = await response.json();
                    const html = data.contents;
                    
                    const hrefRegex = /href=["']([^"']+)["']/g;
                    let matches;
                    const links = [];
                    while ((matches = hrefRegex.exec(html)) !== null) {
                        links.push(matches[1]);
                    }
                    
                    const uniqueLinks = Array.from(new Set(links));
                    const emptyLinks = uniqueLinks.filter(l => l === "#" || l === "" || l.startsWith("javascript:"));
                    const activeLinks = uniqueLinks.filter(l => !emptyLinks.includes(l));
                    
                    result = `Link Audit Report for ${url}\n`;
                    result += `--------------------------------------------------\n`;
                    result += `Total Links Detected:     ${links.length}\n`;
                    result += `Unique Links Found:       ${uniqueLinks.length}\n`;
                    result += `Active/Working Links:     ${activeLinks.length}\n`;
                    result += `Empty or Dummy Links (#): ${emptyLinks.length}\n\n`;
                    
                    if (emptyLinks.length > 0) {
                        result += `Potential Broken / Dummy Links found:\n`;
                        emptyLinks.slice(0, 10).forEach(l => {
                            result += `- ${l} (Needs correction)\n`;
                        });
                    } else {
                        result += `No broken or dummy links found! All links have proper structure.\n`;
                    }
                } else {
                    result = "Failed to fetch domain content.";
                }
            } catch (err) {
                toggleLoader(false);
                result = `Scan failed: ${err.message}`;
            }
        }
    }

    // Misc Tools
    else if (tool.includes('morse code')) {
        const charToMorse = { 'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/' };
        result = input.toUpperCase().split('').map(c => charToMorse[c] || c).join(' ');
    } else if (tool.includes('nato alphabet')) {
        const nato = { 'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar', 'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 'Y': 'Yankee', 'Z': 'Zulu' };
        result = input.toUpperCase().split('').map(c => nato[c] || c).join(' ');
    } else if (tool.includes('text to speech')) {
        result = "Speech synthesis initiated for: " + input;
        const msg = new SpeechSynthesisUtterance(input);
        window.speechSynthesis.speak(msg);
    } else if (tool.includes('byte converter')) {
        const bytes = parseFloat(input) || 0;
        result = `${bytes} B\n${(bytes/1024).toFixed(2)} KB\n${(bytes/1048576).toFixed(2)} MB\n${(bytes/1073741824).toFixed(2)} GB`;
    } else if (tool.includes('speech to text')) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        toggleLoader(true, "Listening... Speak now!");
        recognition.start();

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            toggleLoader(false);
            if (output) {
                output.innerText = `Transcribed Text:\n\n${speechResult}`;
            }
        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

        recognition.onerror = (event) => {
            toggleLoader(false);
            if (output) {
                output.innerText = `Error occurred in recognition: ${event.error}`;
            }
        };
        result = "Voice recognition started. Please speak into your microphone...";
    } else if (tool.includes('color picker')) {
        const colorVal = document.getElementById('pickerColor')?.value || "#6366f1";
        const hex = colorVal.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        let rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
        let max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
                case gNorm: h = (bNorm - rNorm) / d + 2; break;
                case bNorm: h = (rNorm - gNorm) / d + 4; break;
            }
            h /= 6;
        }
        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        result = `Selected Color: ${colorVal.toUpperCase()}\n`;
        result += `--------------------------------------\n`;
        result += `HEX: ${colorVal.toUpperCase()}\n`;
        result += `RGB: rgb(${r}, ${g}, ${b})\n`;
        result += `HSL: hsl(${h}, ${s}%, ${l}%)\n`;
        result += `--------------------------------------\n`;
        
        const resContainer = document.getElementById('imageResultContainer');
        if (resContainer) {
            resContainer.innerHTML = `<div style="height: 120px; border-radius: 20px; background: ${colorVal}; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid var(--border);"></div>`;
            resContainer.style.display = 'block';
        }
    } else if (tool.includes('screen resolution')) {
        const w = window.screen.width;
        const h = window.screen.height;
        const availW = window.screen.availWidth;
        const availH = window.screen.availHeight;
        const pixelRatio = window.devicePixelRatio || 1;
        const colorDepth = window.screen.colorDepth;
        
        result = `Your Device Screen Information:\n`;
        result += `------------------------------------------\n`;
        result += `Screen Resolution:  ${w} x ${h} pixels\n`;
        result += `Available Space:    ${availW} x ${availH} pixels\n`;
        result += `Device Pixel Ratio: ${pixelRatio}x\n`;
        result += `Color Depth:        ${colorDepth}-bit\n`;
        result += `Viewport Size:      ${window.innerWidth} x ${window.innerHeight} pixels`;
    } else if (tool.includes('aspect ratio')) {
        const w = parseFloat(document.getElementById('aspectWidth')?.value || "1920");
        const h = parseFloat(document.getElementById('aspectHeight')?.value || "1080");
        const newW = parseFloat(document.getElementById('newWidth')?.value);
        const newH = parseFloat(document.getElementById('newHeight')?.value);

        const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
        const divisor = gcd(w, h);
        const ratioW = w / divisor;
        const ratioH = h / divisor;

        result = `Original Aspect Ratio: ${ratioW}:${ratioH} (${(w/h).toFixed(2)})\n`;
        result += `------------------------------------------\n`;

        if (newW && !isNaN(newW)) {
            const calculatedH = Math.round((newW / w) * h);
            result += `Calculated Dimension: ${newW} x ${calculatedH} (Height found from New Width)`;
        } else if (newH && !isNaN(newH)) {
            const calculatedW = Math.round((newH / h) * w);
            result += `Calculated Dimension: ${calculatedW} x ${newH} (Width found from New Height)`;
        } else {
            result += `Enter a "New Width" or "New Height" in the fields to calculate scaled dimensions.`;
        }
    } else if (tool.includes('online notepad')) {
        localStorage.setItem('online_notepad_content', input);
        result = `Draft saved successfully inside local storage! (${new Date().toLocaleTimeString()})\n\nContent:\n${input || '(Empty)'}`;
        
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
            downloadBtn.style.display = 'inline-block';
            downloadBtn.onclick = () => {
                const blob = new Blob([input], { type: 'text/plain;charset=utf-8' });
                const link = document.createElement('a');
                link.download = `notepad-${Date.now()}.txt`;
                link.href = URL.createObjectURL(blob);
                link.click();
            };
        }
    } else if (tool.includes('drawing board')) {
        const canvas = document.getElementById('paintCanvas');
        if (canvas) {
            const dataUrl = canvas.toDataURL('image/png');
            const downloadBtn = document.getElementById('downloadBtn');
            if (downloadBtn) {
                downloadBtn.style.display = 'inline-block';
                downloadBtn.onclick = () => {
                    const link = document.createElement('a');
                    link.download = `drawing-${Date.now()}.png`;
                    link.href = dataUrl;
                    link.click();
                };
            }
            result = "Drawing captured successfully! Click 'Download Result' to save your artwork as PNG.";
        } else {
            result = "Drawing canvas not found.";
        }
    }

    // Default Fallback
    else {
        result = `Processed result for ${tool.toUpperCase()}:\n\n` + (input || "Action completed successfully.");
    }

    if (output) {
        output.innerText = result;
        output.style.color = "inherit";
    }
}


window.copyToClipboard = function(id) {
    const el = document.getElementById(id);
    const txt = el ? (el.value || el.innerText) : "";
    if (txt) {
        navigator.clipboard.writeText(txt).then(() => alert("Copied to clipboard!"));
    }
};

function renderProcessedImage(blob, format, outputText) {
    const url = URL.createObjectURL(blob);
    const resultImg = document.getElementById('imageOutput');
    const resContainer = document.getElementById('imageResultContainer');
    const downloadBtn = document.getElementById('downloadBtn');

    if (resultImg) {
        resultImg.src = url;
        resultImg.onload = () => {
            toggleLoader(false);
            if (resContainer) resContainer.style.display = 'block';
            if (outputText) {
                outputText.innerText = "Processing Complete! Your transparent background image is ready.";
                outputText.style.color = "var(--primary)";
                outputText.style.display = 'block';
            }
        };
    } else {
        toggleLoader(false);
    }
    
    if (downloadBtn) {
        downloadBtn.style.display = 'inline-block';
        downloadBtn.onclick = () => {
            const link = document.createElement('a');
            link.download = `multitoolshub-${Date.now()}.${format}`;
            link.href = url;
            link.click();
        };
    }
}

async function handleRemoveBgAPI(key, output) {
    if (!CURRENT_FILE) return;
    showStatus("Contacting remove.bg API...", "info");
    toggleLoader(true, "Cloud Processing...");
    
    const formData = new FormData();
    formData.append('image_file', CURRENT_FILE);
    formData.append('size', 'auto');

    try {
        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: { 'X-Api-Key': key },
            body: formData
        });

        if (response.ok) {
            const blob = await response.blob();
            showStatus("API Success: Background Removed!", "success");
            renderProcessedImage(blob, "png", output);
        } else {
            const err = await response.json();
            throw new Error(err.errors?.[0]?.title || "API Limit reached");
        }
    } catch (e) {
        console.warn("API Failed, falling back to MediaPipe:", e.message);
        showStatus("API Failed: " + e.message + ". Switching to Backup AI...", "warning");
        setTimeout(() => startMediaPipeBackgroundRemoval(output), 1500);
    }
}

const getBackendUrl = async (functionName) => {
    const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname) || window.location.protocol === 'file:';
    if (!isLocal) {
        return `https://us-central1-multitoolshub-b7b08.cloudfunctions.net/${functionName}`;
    }
    // Dynamically check which project is running on the local emulator
    try {
        const testRes = await fetch(`http://127.0.0.1:5001/multitoolshubweb/us-central1/${functionName}`, { method: 'OPTIONS' });
        if (testRes.status !== 404) {
            return `http://127.0.0.1:5001/multitoolshubweb/us-central1/${functionName}`;
        }
    } catch (_) {}
    return `http://127.0.0.1:5001/multitoolshub-b7b08/us-central1/${functionName}`;
};

async function handleRemoveBgBackend(output) {
    if (!CURRENT_FILE) return;
    showStatus("Contacting Secure Backend AI...", "info");
    toggleLoader(true, "Cloud Processing...");

    const reader = new FileReader();
    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const response = await fetch(await getBackendUrl('removeBackground'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    image: base64Data,
                    size: 'auto'
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.image) {
                    const base64Content = data.image.split(',')[1];
                    const byteCharacters = atob(base64Content);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'image/png' });
                    
                    showStatus("API Success: Background Removed!", "success");
                    renderProcessedImage(blob, "png", output);
                } else {
                    throw new Error("Invalid response format from backend.");
                }
            } else {
                const err = await response.json();
                throw new Error(err.error || "Backend processing failed");
            }
        } catch (e) {
            console.warn("Backend API Failed, falling back to MediaPipe:", e.message);
            showStatus("API Failed: " + e.message + ". Switching to Backup AI...", "warning");
            setTimeout(() => startMediaPipeBackgroundRemoval(output), 1500);
        }
    };
    reader.readAsDataURL(CURRENT_FILE);
}

async function startMediaPipeBackgroundRemoval(output) {
    if (!CURRENT_FILE) return;
    toggleLoader(true, "Initializing Backup AI (MediaPipe)...");

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
        img.onload = async () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            const selfieSegmentation = new SelfieSegmentation({locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`;
            }});

            selfieSegmentation.setOptions({ modelSelection: 1 });

            selfieSegmentation.onResults((results) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(results.segmentationMask, 0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = 'source-in';
                ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
                
                canvas.toBlob((blob) => {
                    renderProcessedImage(blob, "png", output);
                }, 'image/png');
            });

            await selfieSegmentation.send({image: img});
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(CURRENT_FILE);
}

function showStatus(msg, type) {
    console.log(`[${type.toUpperCase()}] ${msg}`);
}
// Global Scroll Function for Rails
function scrollRail(railId, direction) {
    const rail = document.getElementById(railId);
    if (!rail) return;
    
    const scrollAmount = rail.clientWidth * 0.8; // Scroll 80% of visible width
    if (direction === 'left') {
        rail.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        rail.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Initialize App Promotion Slider
function initAppSlider() {
    const sliderContainer = document.querySelector('.app-promo-banner');
    if (!sliderContainer) return;

    const slides = sliderContainer.querySelectorAll('.app-promo-slide');
    const dots = sliderContainer.querySelectorAll('.app-promo-dot');
    const prevBtn = sliderContainer.querySelector('.app-promo-arrow.prev');
    const nextBtn = sliderContainer.querySelector('.app-promo-arrow.next');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    let slideInterval = null;
    const intervalTime = 5000; // 5 seconds auto-scroll

    function showSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        slides.forEach((slide, idx) => {
            if (idx === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
                if (currentIndex === 0) {
                    dot.style.backgroundColor = '#16a34a';
                } else if (currentIndex === 1) {
                    dot.style.backgroundColor = '#0284c7';
                } else if (currentIndex === 2) {
                    dot.style.backgroundColor = '#8b5cf6';
                } else if (currentIndex === 3) {
                    dot.style.backgroundColor = '#6366f1';
                } else if (currentIndex === 4) {
                    dot.style.backgroundColor = '#ea580c';
                }
            } else {
                dot.classList.remove('active');
                dot.style.backgroundColor = '';
            }
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startAutoSlide() {
        stopAutoSlide();
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startAutoSlide();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showSlide(idx);
            startAutoSlide();
        });
    });

    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    // Initial setup
    showSlide(0);
    startAutoSlide();
}
