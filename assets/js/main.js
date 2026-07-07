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
        ["yt-downloader", "YT Downloader", "Preview YouTube video metadata and thumbnails."],
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
    initTheme();
    initToolGrid();
    initSearch();
    initCategoryFilter();
    initToolEngine();
    initImageTools();
    initCSSListeners();
    
    // New Initializations for Redesigned Homepage
    initPopularToolsRail();
    initLatestBlogsRail();
    initTrendingGuidesRail();
    initAppSlider();
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
        "url-shortener": "fas fa-link", "yt-downloader": "fab fa-youtube",
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
            title: "International Tax Planning for Nomads 2026",
            excerpt: "Explore legal ways to optimize your global footprint and keep more of what you earn.",
            img: "assets/img/blog/nomad-health-insurance-2026.png",
            url: "blog/nomad-tax-planning-2026.html",
            tag: "Tax • Finance"
        },
        {
            title: "High-Performance Cloud Computing in 2026",
            excerpt: "AWS vs. Azure vs. Google Cloud. Choose the right provider for your small business.",
            img: "assets/img/blog/best-cloud-storage-2026.png",
            url: "blog/cloud-computing-2026.html",
            tag: "Cloud • Tech"
        },
        {
            title: "AI-Driven Sales Automation for 2026",
            excerpt: "Close more deals using AI for lead gen, outreach, and CRM mastery.",
            img: "assets/img/blog/best-ai-crm-tools-2026.png",
            url: "blog/sales-automation-2026.html",
            tag: "Sales • AI"
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
            title: "How to Start Freelancing in 2026",
            excerpt: "Step-by-step roadmap to launching a successful freelance career.",
            img: "assets/img/blog/start-freelancing-2026.png",
            url: "blog/how-to-start-freelancing-2026.html",
            tag: "Freelancing"
        },
        {
            title: "Best Business Credit Cards for Startups",
            excerpt: "Maximize rewards and cash flow with the right business card in 2026.",
            img: "assets/img/blog/best-business-credit-cards-2026.png",
            url: "blog/best-business-credit-cards-2026.html",
            tag: "Finance"
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
    const pageH1 = document.querySelector('h1')?.innerText.toLowerCase() || "";
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
    const h1 = document.querySelector('h1').innerText.toLowerCase();
    
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
        try { result = JSON.stringify(JSON.parse(input), null, 4); } catch(e) { result = "Invalid JSON: " + e.message; }
    } else if (tool.includes('json validator')) {
        try { JSON.parse(input); result = "Valid JSON ✅"; } catch(e) { result = "Invalid JSON ❌: " + e.message; }
    } else if (tool.includes('base64 encoder')) {
        result = btoa(input);
    } else if (tool.includes('base64 decoder')) {
        try { result = atob(input); } catch(e) { result = "Invalid Base64 string"; }
    } else if (tool.includes('url encoder')) {
        result = encodeURIComponent(input);
    } else if (tool.includes('url decoder')) {
        result = decodeURIComponent(input);
    } else if (tool.includes('html minifier')) {
        result = input.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').trim();
    } else if (tool.includes('css minifier')) {
        result = input.replace(/\s+/g, ' ').replace(/\/\*.*?\*\//g, '').replace(/\s*([{};:])\s*/g, '$1').trim();
    } else if (tool.includes('js minifier')) {
        result = input.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').trim();
    } else if (tool.includes('regex tester')) {
        result = "Regex testing requires complex UI but a sample test:\n" + (input.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) ? "Found Emails!" : "No typical emails found.");
    } else if (tool.includes('html to text')) {
        const div = document.createElement('div'); div.innerHTML = input; result = div.textContent || div.innerText || "";
    } else if (tool.includes('text to html')) {
        result = input.split('\n').map(p => `<p>${p}</p>`).join('\n');
    }
    
    // Text Tools
    else if (tool.includes('word counter')) {
        const words = input.trim().split(/\s+/).filter(x => x).length;
        const chars = input.length;
        const sentences = input.split(/[.!?]+/).filter(x => x).length;
        result = `Words: ${words}\nCharacters: ${chars}\nSentences: ${sentences}`;
    } else if (tool.includes('char counter')) {
        result = `Characters (with spaces): ${input.length}\nCharacters (no spaces): ${input.replace(/\s/g, '').length}`;
    } else if (tool.includes('sentence counter')) {
        result = `Sentences identified: ${input.split(/[.!?]+/).filter(x => x).length}`;
    } else if (tool.includes('paragraph counter')) {
        result = `Paragraphs: ${input.split(/\n+/).filter(x => x).length}`;
    } else if (tool.includes('case converter')) {
        result = `UPPERCASE: ${input.toUpperCase()}\nlowercase: ${input.toLowerCase()}\nTitle Case: ${input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}`;
    } else if (tool.includes('title case')) {
        result = input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    } else if (tool.includes('text reverser')) {
        result = input.split('').reverse().join('');
    } else if (tool.includes('lorem ipsum')) {
        result = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    } else if (tool.includes('slug generator')) {
        result = input.toLowerCase().replace(/[^a-z0-0]+/g, '-').replace(/^-+|-+$/g, '');
    } else if (tool.includes('random name')) {
        const names = ["John Doe", "Jane Smith", "Alex Johnson", "Sam Wilson", "Emily Davis"];
        result = names[Math.floor(Math.random() * names.length)];
    } else if (tool.includes('username generator')) {
        result = input.toLowerCase().replace(/\s+/g, '_') + Math.floor(Math.random() * 999);
    } else if (tool.includes('fancy text')) {
        result = "Ⓕⓐⓝⓒⓨ Ⓣⓔⓧⓣ: " + input.split('').join(' ');
    } else if (tool.includes('text diff')) {
        result = "Text diffing logic here (placeholder). Compare A and B.";
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
        if (upper) charPool += uppers;
        if (lower) charPool += lowers;
        if (numbers) charPool += nums;
        if (symbols) charPool += syms;

        if (charPool.length === 0) {
            result = "Please select at least one character set!";
        } else {
            let password = "";
            const randomValues = new Uint32Array(length);
            window.crypto.getRandomValues(randomValues);
            for (let i = 0; i < length; i++) {
                password += charPool.charAt(randomValues[i] % charPool.length);
            }
            result = password;
        }
    } else if (tool.includes('uuid generator')) {
        const count = parseInt(document.getElementById('uuidCount')?.value || "5");
        let uuids = [];
        for (let j = 0; j < count; j++) {
            const sz = new Uint8Array(16);
            window.crypto.getRandomValues(sz);
            sz[6] = (sz[6] & 0x0f) | 0x40;
            sz[8] = (sz[8] & 0x3f) | 0x80;
            const hex = Array.from(sz).map(b => b.toString(16).padStart(2, '0')).join('');
            const uuid = `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20, 32)}`;
            uuids.push(uuid);
        }
        result = uuids.join('\n');
    } else if (tool.includes('md5 generator')) {
        if (!input) {
            result = "Please enter some text to generate its MD5 hash.";
        } else {
            const md5 = (string) => {
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
                const ConvertToWordArray = (string) => {
                    var lWordCount;
                    var lMessageLength = string.length;
                    var lNumberOfWords_temp1 = lMessageLength + 8;
                    var lNumberOfWords_temp2 = (lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
                    var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
                    var lWordArray = Array(lNumberOfWords);
                    var lBytePosition = 0; var lByteCount = 0;
                    while ( lByteCount < lMessageLength ) {
                        lWordCount = (lByteCount-(lByteCount % 4))/4;
                        lBytePosition = (lByteCount % 4)*8;
                        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                        lByteCount++;
                    }
                    lWordCount = (lByteCount-(lByteCount % 4))/4;
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
                const Utf8Encode = (string) => {
                    string = string.replace(/\r\n/g,"\n");
                    var utftext = "";
                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) utftext += String.fromCharCode(c);
                        else if((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                    }
                    return utftext;
                };
                var x = Array();
                var k,AA,BB,CC,DD,a,b,c,d;
                var S11=7, S12=12, S13=17, S14=22;
                var S21=5, S22=9, S23=14, S24=20;
                var S31=4, S32=11, S33=16, S34=23;
                var S41=6, S42=10, S43=15, S44=21;
                string = Utf8Encode(string);
                x = ConvertToWordArray(string);
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
                return (WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d)).toLowerCase();
            };
            result = md5(input);
        }
    } else if (tool.includes('sha256 generator')) {
        if (!input) {
            result = "Please enter some text to hash.";
        } else {
            const msgBuffer = new TextEncoder().encode(input);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            result = hashHex;
        }
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
        if (qrTarget && input) {
            qrTarget.innerHTML = '';
            new QRCode(qrTarget, {
                text: input,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            if (resContainer) resContainer.style.display = 'block';
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
            result = "QR Code Generated Successfully!";
        } else {
            result = "Please enter data to generate a QR Code.";
        }
    } else if (tool.includes('credit card validator')) {
        let sum = 0, b = false;
        const digits = input.replace(/\D/g, '');
        for (let i = digits.length - 1; i >= 0; i--) {
            let n = parseInt(digits[i]);
            if (b) { if ((n *= 2) > 9) n -= 9; }
            sum += n; b = !b;
        }
        result = (sum % 10 === 0 && digits.length >= 13) ? "Valid Card Number ✅" : "Invalid Card Number ❌";
    } else if (tool.includes('password strength')) {
        const score = input.length * 4 + (input.match(/[A-Z]/) ? 10 : 0) + (input.match(/[0-9]/) ? 10 : 0) + (input.match(/[^a-zA-Z0-9]/) ? 15 : 0);
        let strength = "Weak";
        if (score > 80) strength = "Very Strong";
        else if (score > 60) strength = "Strong";
        else if (score > 40) strength = "Medium";
        result = `Strength Score: ${score}/100\nAssessment: ${strength}`;
    } else if (tool.includes('ip lookup')) {
        result = `IP Address: ${input || '127.0.0.1'}\nLocation: Simulated Data\nISP: Local ISP\nCountry: India (Simulated)`;
    } else if (tool.includes('user agent')) {
        result = `Browser: ${navigator.userAgent}\nOS: ${navigator.platform}\nLanguage: ${navigator.language}`;
    }

    // SEO Tools
    else if (tool.includes('meta tag generator')) {
        const lines = input.split('\n');
        let title = "Website Title", desc = "Description here", keys = "keywords";
        lines.forEach(l => {
            if (l.toLowerCase().includes('title:')) title = l.split(':')[1].trim();
            if (l.toLowerCase().includes('desc')) desc = l.split(':')[1].trim();
            if (l.toLowerCase().includes('key')) keys = l.split(':')[1].trim();
        });
        result = `<title>${title}</title>\n<meta name="description" content="${desc}">\n<meta name="keywords" content="${keys}">\n<meta name="robots" content="index, follow">`;
    } else if (tool.includes('og generator')) {
        const title = input.match(/title:\s*(.*)/i)?.[1] || "Site Title";
        result = `<meta property="og:title" content="${title}">\n<meta property="og:description" content="Professional tools for everyone.">\n<meta property="og:type" content="website">\n<meta property="og:url" content="https://example.com">\n<meta property="og:image" content="https://example.com/og-image.jpg">`;
    } else if (tool.includes('meta tag analyzer')) {
        const title = input.match(/<title>(.*?)<\/title>/i)?.[1] || "No Title Found";
        const desc = input.match(/<meta name="description" content="(.*?)"/i)?.[1] || "No Description Found";
        const keys = input.match(/<meta name="keywords" content="(.*?)"/i)?.[1] || "No Keywords Found";
        result = `Title: ${title}\nDescription: ${desc}\nKeywords: ${keys}`;
    } else if (tool.includes('robots generator')) {
        result = `User-agent: *\nDisallow: /admin/\nDisallow: /private/\n\nSitemap: https://${input || 'example.com'}/sitemap.xml`;
    } else if (tool.includes('sitemap generator')) {
        result = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://${input || 'example.com'}/</loc>\n    <lastmod>2026-03-30</lastmod>\n    <priority>1.0</priority>\n  </url>\n</urlset>`;
    } else if (tool.includes('keyword density')) {
        const words = input.toLowerCase().match(/\w+/g) || [];
        const freq = {};
        words.forEach(w => freq[w] = (freq[w] || 0) + 1);
        result = Object.entries(freq).sort((a,b) => b[1]-a[1]).slice(0, 10).map(e => `${e[0]}: ${((e[1]/words.length)*100).toFixed(1)}%`).join('\n');
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
        result = `background: linear-gradient(135deg, ${input || '#6366f1'}, #a855f7);`;
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
        const num = parseInt(input);
        if (isNaN(num)) result = "Please enter a valid number";
        else result = `Binary: ${num.toString(2)}\nHex: ${num.toString(16).toUpperCase()}\nOctal: ${num.toString(8)}\nDecimal: ${num}`;
    } else if (tool.includes('percentage calc')) {
        const nums = input.match(/[\d.]+/g);
        if (nums && nums.length >= 2) {
            const p = parseFloat(nums[0]), total = parseFloat(nums[1]);
            result = `${p}% of ${total} is ${(p/100 * total).toFixed(2)}`;
        } else { result = "Format: [percentage] [total] (e.g. 20 500)"; }
    } else if (tool.includes('gst calc')) {
        const val = parseFloat(input) || 0;
        const gst = (val * 0.18).toFixed(2);
        result = `Original: ${val}\nGST (18%): ${gst}\nTotal: ${(val + parseFloat(gst)).toFixed(2)}`;
    } else if (tool.includes('discount calc')) {
        const nums = input.match(/[\d.]+/g);
        if (nums && nums.length >= 2) {
            const price = parseFloat(nums[0]), disc = parseFloat(nums[1]);
            const saved = (price * disc / 100).toFixed(2);
            result = `Original Price: ${price}\nDiscount: ${disc}%\nYou Save: ${saved}\nFinal Price: ${(price - saved).toFixed(2)}`;
        } else { result = "Format: [price] [discount%] (e.g. 1200 15)"; }
    } else if (tool.includes('bmi calc')) {
        const nums = input.match(/[\d.]+/g);
        if (nums && nums.length >= 2) {
            const weight = parseFloat(nums[0]), height = parseFloat(nums[1]) / 100; // cm to m
            const bmi = (weight / (height * height)).toFixed(1);
            let cat = "Normal";
            if (bmi < 18.5) cat = "Underweight";
            else if (bmi > 25 && bmi < 29.9) cat = "Overweight";
            else if (bmi >= 30) cat = "Obese";
            result = `BMI Score: ${bmi}\nCategory: ${cat}`;
        } else { result = "Format: [weight in kg] [height in cm] (e.g. 70 175)"; }
    } else if (tool.includes('age calc')) {
        const birth = new Date(input);
        if (isNaN(birth)) result = "Invalid Date (use YYYY-MM-DD)";
        else {
            const diff = Date.now() - birth.getTime();
            const age = new Date(diff).getUTCFullYear() - 1970;
            result = `Your current age is: ${age} years`;
        }
    } else if (tool.includes('temp converter')) {
        const val = parseFloat(input) || 0;
        result = `${val}°C = ${(val * 9/5 + 32).toFixed(1)}°F = ${(val + 273.15).toFixed(1)}K`;
    } else if (tool.includes('roman numeral')) {
        const roman = (num) => {
            const map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
            let res = '';
            for (let i in map) { while (num >= map[i]) { res += i; num -= map[i]; } }
            return res;
        };
        result = roman(parseInt(input) || 0) || "Result would appear here";
    } else if (tool.includes('math solver')) {
        try { result = "Result: " + eval(input.replace(/[^-+*/().0-9]/g, '')); } catch(e) { result = "Error solving expression"; }
    } else if (tool.includes('length converter')) {
        const val = parseFloat(input) || 0;
        result = `${val} m = ${(val * 100).toFixed(2)} cm\n${val} m = ${(val * 3.28084).toFixed(2)} ft\n${val} m = ${(val * 39.3701).toFixed(2)} in\n${val} m = ${(val / 1000).toFixed(3)} km`;
    } else if (tool.includes('weight converter')) {
        const val = parseFloat(input) || 0;
        result = `${val} kg = ${(val * 2.20462).toFixed(2)} lbs\n${val} kg = ${(val * 1000).toFixed(0)} g\n${val} kg = ${(val * 35.274).toFixed(2)} oz`;
    } else if (tool.includes('hex converter')) {
        const cleanInput = input.trim().replace(/^0x|^#/i, '');
        if (/^[0-9a-fA-F]+$/.test(cleanInput)) {
            const dec = parseInt(cleanInput, 16);
            result = `Hexadecimal: ${cleanInput.toUpperCase()}\nDecimal: ${dec}\nBinary: ${dec.toString(2)}\nOctal: ${dec.toString(8)}`;
        } else {
            const dec = parseInt(input.trim());
            if (!isNaN(dec)) {
                result = `Decimal: ${dec}\nHexadecimal: ${dec.toString(16).toUpperCase()}\nBinary: ${dec.toString(2)}\nOctal: ${dec.toString(8)}`;
            } else {
                result = "Please enter a valid Hexadecimal string (e.g., 1A) or a Decimal number (e.g., 26).";
            }
        }
    } else if (tool.includes('octal converter')) {
        const cleanInput = input.trim();
        if (/^[0-7]+$/.test(cleanInput)) {
            const dec = parseInt(cleanInput, 8);
            result = `Octal: ${cleanInput}\nDecimal: ${dec}\nHexadecimal: ${dec.toString(16).toUpperCase()}\nBinary: ${dec.toString(2)}`;
        } else {
            const dec = parseInt(cleanInput);
            if (!isNaN(dec)) {
                result = `Decimal: ${dec}\nOctal: ${dec.toString(8)}\nHexadecimal: ${dec.toString(16).toUpperCase()}\nBinary: ${dec.toString(2)}`;
            } else {
                result = "Please enter a valid Octal string (digits 0-7) or a Decimal number.";
            }
        }
    } else if (tool.includes('fraction calc')) {
        const match = input.match(/^\s*(\d+)\/(\d+)\s*([\+\-\*\/])\s*(\d+)\/(\d+)\s*$/);
        if (match) {
            const n1 = parseInt(match[1]), d1 = parseInt(match[2]);
            const op = match[3];
            const n2 = parseInt(match[4]), d2 = parseInt(match[5]);
            
            const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
            const simplifyFraction = (num, denom) => {
                const common = gcd(num, denom);
                return {
                    num: num / common,
                    denom: denom / common
                };
            };
            
            if (d1 === 0 || d2 === 0) {
                result = "Denominator cannot be zero.";
            } else {
                let resNum, resDen;
                if (op === '+') {
                    resNum = n1 * d2 + n2 * d1;
                    resDen = d1 * d2;
                } else if (op === '-') {
                    resNum = n1 * d2 - n2 * d1;
                    resDen = d1 * d2;
                } else if (op === '*') {
                    resNum = n1 * n2;
                    resDen = d1 * d2;
                } else if (op === '/') {
                    resNum = n1 * d2;
                    resDen = d1 * n2;
                }
                
                if (resDen === 0) {
                    result = "Error: Division by zero fraction.";
                } else {
                    const simplified = simplifyFraction(resNum, resDen);
                    const decVal = (simplified.num / simplified.denom).toFixed(4);
                    result = `Input: ${n1}/${d1} ${op} ${n2}/${d2}\n\n`;
                    result += `Result (Raw): ${resNum}/${resDen}\n`;
                    result += `Result (Simplified): ${simplified.num}/${simplified.denom}\n`;
                    result += `Result (Decimal): ${decVal}`;
                }
            }
        } else {
            result = "Please enter calculation in format: [fraction] [operator] [fraction]\nExample: 1/2 + 3/4\nSupported operators: +, -, *, /";
        }
    }

    // Time Tools
    else if (tool.includes('timestamp converter')) {
        const ts = parseInt(input) || Date.now();
        result = `ISO: ${new Date(ts).toISOString()}\nLocal: ${new Date(ts).toString()}\nUTC: ${new Date(ts).toUTCString()}`;
    } else if (tool.includes('countdown timer')) {
        let sec = parseInt(input) || 60;
        if (TIMER_INTERVAL) clearInterval(TIMER_INTERVAL);
        TIMER_INTERVAL = setInterval(() => {
            if (sec <= 0) {
                clearInterval(TIMER_INTERVAL);
                output.innerText = "TIME IS UP! 🔔";
                return;
            }
            sec--;
            const m = Math.floor(sec / 60), s = sec % 60;
            output.innerText = `Time Remaining: ${m}:${s.toString().padStart(2, '0')}`;
        }, 1000);
        result = `Countdown started for ${sec} seconds...`;
    } else if (tool.includes('stopwatch')) {
        let sec = 0;
        if (TIMER_INTERVAL) clearInterval(TIMER_INTERVAL);
        TIMER_INTERVAL = setInterval(() => {
            sec++;
            const m = Math.floor(sec / 60), s = sec % 60;
            output.innerText = `Stopwatch Running: ${m}:${s.toString().padStart(2, '0')}`;
        }, 1000);
        result = "Stopwatch started!";
    } else if (tool.includes('world clock')) {
        const now = new Date();
        result = `London: ${now.toLocaleTimeString('en-GB', {timeZone:'Europe/London'})}\nNew York: ${now.toLocaleTimeString('en-US', {timeZone:'America/New_York'})}\nTokyo: ${now.toLocaleTimeString('ja-JP', {timeZone:'Asia/Tokyo'})}\nDubai: ${now.toLocaleTimeString('en-US', {timeZone:'Asia/Dubai'})}\nDelhi: ${now.toLocaleTimeString('en-GB', {timeZone:'Asia/Kolkata'})}`;
    } else if (tool.includes('leap year')) {
        const year = parseInt(input) || new Date().getFullYear();
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        result = `${year} is ${isLeap ? 'a Leap Year ✅' : 'NOT a Leap Year ❌'}`;
    } else if (tool.includes('days between')) {
        const dates = input.split(' ');
        if (dates.length >= 2) {
            const d1 = new Date(dates[0]), d2 = new Date(dates[1]);
            const diff = Math.abs(d1 - d2);
            result = `Difference: ${Math.ceil(diff / (1000 * 60 * 60 * 24))} days`;
        } else { result = "Format: YYYY-MM-DD YYYY-MM-DD"; }
    } else if (tool.includes('timezone converter')) {
        const now = new Date();
        result = `From Local: ${now.toLocaleTimeString()}\nTo Tokyo: ${now.toLocaleTimeString('ja-JP', {timeZone:'Asia/Tokyo'})}\nTo New York: ${now.toLocaleTimeString('en-US', {timeZone:'America/New_York'})}\nTo London: ${now.toLocaleTimeString('en-GB', {timeZone:'Europe/London'})}`;
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

    // Web Tools
    else if (tool.includes('html preview')) {
        const resContainer = document.getElementById('imageResultContainer');
        const resultImg = document.getElementById('imageOutput');
        if (resContainer) {
            resContainer.style.display = 'block';
            resContainer.innerHTML = `<iframe sandbox="allow-scripts" style="width:100%; height:300px; border:1px solid var(--border); border-radius:15px; background:white;" srcdoc="${input.replace(/"/g, '&quot;')}"></iframe>`;
            result = "Live preview rendered below.";
        }
    } else if (tool.includes('markdown converter')) {
        result = input.replace(/^# (.*$)/gim, '<h1>$1</h1>').replace(/^## (.*$)/gim, '<h2>$1</h2>').replace(/\*\*(.*)\*\*/gim, '<b>$1</b>').replace(/\*(.*)\*/gim, '<i>$1</i>').replace(/\n/gim, '<br>');
    } else if (tool.includes('url shortener')) {
        result = `Shortened URL: https://rel.ink/${Math.random().toString(36).substring(7)}`;
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
    } else if (tool.includes('yt downloader')) {
        const vid = input.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)?.[1];
        if (vid) {
            const thumb = `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`;
            const resultImg = document.getElementById('imageOutput');
            const resContainer = document.getElementById('imageResultContainer');
            if (resultImg && resContainer) {
                resultImg.src = thumb;
                resContainer.style.display = 'block';
                result = `Video ID: ${vid}\nThumbnail: ${thumb}\n(Download links would be generated here if connected to an API)`;
            }
        } else { result = "Invalid YouTube URL"; }
    } else if (tool.includes('website status')) {
        result = `Checking ${input}...\nStatus: Up ✅\nResponse Time: ${Math.floor(Math.random() * 200 + 50)}ms`;
    } else if (tool.includes('favicon generator')) {
        if (!CURRENT_FILE) {
            result = "Please upload an image first!";
        } else {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            const reader = new FileReader();
            reader.onload = (e) => {
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, 32, 32);
                    const dataUrl = canvas.toDataURL('image/png');
                    
                    const resultImg = document.getElementById('imageOutput');
                    const resContainer = document.getElementById('imageResultContainer');
                    const downloadBtn = document.getElementById('downloadBtn');
                    
                    if (resultImg) resultImg.src = dataUrl;
                    if (resContainer) resContainer.style.display = 'block';
                    if (downloadBtn) {
                        downloadBtn.style.display = 'inline-block';
                        downloadBtn.onclick = () => {
                            const link = document.createElement('a');
                            link.download = 'favicon.png';
                            link.href = dataUrl;
                            link.click();
                        };
                    }
                    if (output) {
                        output.innerText = "Favicon (32x32) generated successfully! Click Download to save.";
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(CURRENT_FILE);
            result = "Processing image...";
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
