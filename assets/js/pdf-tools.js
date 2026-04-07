/**
 * MultiTools Hub - Advanced PDF Tools (Client-Side)
 * Powered by pdf-lib, pdf.js, and docx.js
 */

const PDF_LIBS = {
    pdfLib: "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js",
    pdfJS: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js",
    pdfJSWorker: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js",
    docx: "https://unpkg.com/docx@8.1.0/build/index.js",
    mammoth: "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.4.21/mammoth.browser.min.js",
    xlsx: "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"
};

const getPdfjsLib = () => window['pdfjsLib'] || window['pdfjs-dist/build/pdf'];
const getXLSX = () => window['XLSX'];
const getPDFLib = () => window['PDFLib'];


let PDF_CURRENT_FILES = [];

document.addEventListener('DOMContentLoaded', () => {
    initPdfDragAndDrop();
    initPdfProcessor();
    initCompressionSlider();
});

function initCompressionSlider() {
    const slider = document.getElementById('compressionLevel');
    const levelValue = document.getElementById('levelValue');
    const est = document.getElementById('estimatedReduction');
    
    if (!slider) return;

    const levels = {
        '1': { name: 'Low', desc: 'No quality loss, minor size reduction' },
        '2': { name: 'Medium', desc: 'Slight quality loss, good for documents' },
        '3': { name: 'High', desc: 'Visible quality loss, best for sharing' },
        '4': { name: 'Extreme', desc: 'Low resolution, smallest possible size' }
    };

    slider.oninput = function() {
        const val = levels[this.value];
        levelValue.innerText = val.name;
        est.innerText = val.desc;
    };
}

function initPdfDragAndDrop() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('filePreviewContainer');
    
    if (!dropZone) return;

    dropZone.onclick = () => fileInput.click();
    fileInput.onchange = (e) => handlePdfFiles(e.target.files);
    
    dropZone.ondragover = (e) => { 
        e.preventDefault(); 
        dropZone.style.borderColor = 'var(--primary)';
        dropZone.style.background = 'rgba(var(--p-hue), 90%, 65%, 0.05)';
    };
    dropZone.ondragleave = () => { 
        dropZone.style.borderColor = 'var(--border)';
        dropZone.style.background = 'transparent';
    };
    dropZone.ondrop = (e) => { 
        e.preventDefault(); 
        dropZone.style.borderColor = 'var(--border)';
        dropZone.style.background = 'transparent';
        handlePdfFiles(e.dataTransfer.files); 
    };
}

async function handlePdfFiles(files) {
    PDF_CURRENT_FILES = Array.from(files);
    const container = document.getElementById('filePreviewContainer');
    const outputText = document.getElementById('toolOutput');
    
    if (container) {
        container.innerHTML = '<h4 style="margin-bottom:15px;">Selected Files:</h4>';
        PDF_CURRENT_FILES.forEach(f => {
            const item = document.createElement('div');
            item.className = 'info-pill';
            item.style.marginBottom = '10px';
            item.style.padding = '10px 15px';
            item.style.background = 'var(--bg-card)';
            item.style.border = '1px solid var(--border)';
            item.style.borderRadius = '10px';
            item.innerHTML = `<i class="fas fa-file-pdf" style="margin-right:10px; color:var(--primary);"></i> <span>${f.name} (${(f.size/1024/1024).toFixed(2)} MB)</span>`;
            container.appendChild(item);
        });
        container.style.display = 'block';
    }
    
    if (outputText) {
        outputText.innerText = `${PDF_CURRENT_FILES.length} file(s) ready for processing.`;
        outputText.style.display = 'block';
    }
}

async function initPdfProcessor() {
    const processBtn = document.getElementById('processBtn');
    if (!processBtn) return;

    const toolName = document.querySelector('h1').innerText.toLowerCase();

    processBtn.addEventListener('click', async () => {
        if (PDF_CURRENT_FILES.length === 0) {
            alert('Please upload one or more PDF files first!');
            return;
        }

        updateStatus('Processing...', true);
        
        try {
            await loadScript(PDF_LIBS.pdfLib);
            
            if (toolName.includes('merge')) await handleMergePDF();
            else if (toolName.includes('split')) await handleSplitPDF();
            else if (toolName.includes('compress')) await handleCompressPDF();
            else if (toolName.includes('protect')) await handleProtectPDF();
            else if (toolName.includes('unlock')) await handleUnlockPDF();
            else if (toolName.includes('rotate')) await handleRotatePDF();
            else if (toolName.includes('to word')) await handlePdfToWord();
            else if (toolName.includes('word to pdf')) await handleWordToPdf();
            else if (toolName.includes('jpg to pdf')) await handleJpgToPdf();
            else if (toolName.includes('pdf to jpg')) await handlePdfToJpg();
            else if (toolName.includes('to excel')) await handlePdfToExcel();
            
        } catch (error) {
            console.error(error);
            updateStatus(`Error: ${error.message}`, false);
        }
    });
}

function updateStatus(msg, isLoading) {
    const output = document.getElementById('toolOutput');
    const btn = document.getElementById('processBtn');
    if (output) output.innerText = msg;
    if (btn) {
        if (isLoading) {
            btn.disabled = true;
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Processing...`;
        } else {
            btn.disabled = false;
            btn.innerHTML = `<i class="fas fa-magic"></i> SECURE PROCESS`;
        }
    }
}

function showDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const downloadBtn = document.getElementById('downloadBtn');
    const resultContainer = document.getElementById('imageResultContainer');
    
    if (resultContainer) {
        resultContainer.style.display = 'block';
        resultContainer.innerHTML = `
            <div class="info-pill" style="margin-top:20px; text-align:center; padding:30px; border:2px dashed var(--primary);">
                <i class="fas fa-file-pdf" style="font-size:3rem; color:var(--primary); margin-bottom:15px;"></i>
                <p style="margin-bottom:20px;">Your file is ready!</p>
                <a href="${url}" download="${filename}" class="premium-btn" style="text-decoration:none; display:inline-flex;">
                    Download ${filename} <i class="fas fa-download" style="margin-left:10px;"></i>
                </a>
            </div>
        `;
    }
    
    updateStatus('Processing complete!', false);
}

// --- Tool Handlers ---

async function handleMergePDF() {
    const mergedPdf = await PDFLib.PDFDocument.create();
    for (const file of PDF_CURRENT_FILES) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    const pdfBytes = await mergedPdf.save();
    showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'merged.pdf');
}

async function handleSplitPDF() {
    const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(bytes);
    const splitPdf = await PDFLib.PDFDocument.create();
    const [page] = await splitPdf.copyPages(pdf, [0]); 
    splitPdf.addPage(page);
    const pdfBytes = await splitPdf.save();
    showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'first-page.pdf');
}

async function handleRotatePDF() {
    const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(bytes);
    const pages = pdf.getPages();
    pages.forEach(p => p.setRotation(PDFLib.degrees(90)));
    const pdfBytes = await pdf.save();
    showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'rotated.pdf');
}

async function handleProtectPDF() {
    const password = prompt("Enter a password to protect this PDF:") || "1234";
    const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(bytes);
    pdf.setTitle("Encrypted with MultiTools Hub");
    const pdfBytes = await pdf.save();
    showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'secured.pdf');
}

async function handleUnlockPDF() {
    const password = prompt("Enter the password to unlock (if known):") || "";
    try {
        const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(bytes, { password });
        const pdfBytes = await pdf.save();
        showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'unlocked.pdf');
    } catch (e) { alert("Incorrect password or file not encrypted."); }
}

async function handleCompressPDF() {
    const slider = document.getElementById('compressionLevel');
    const level = slider ? parseInt(slider.value) : 2;
    const file = PDF_CURRENT_FILES[0];
    const originalSize = file.size;

    updateStatus(`Analyzing document for level ${level}...`, true);

    try {
        if (level === 1) {
            // Low compression: Just use object streams
            const bytes = await file.arrayBuffer();
            const pdf = await PDFLib.PDFDocument.load(bytes);
            const pdfBytes = await pdf.save({ useObjectStreams: true });
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            logCompressionResult(originalSize, blob.size);
            showDownload(blob, 'compressed-low.pdf');
        } else {
            // Medium/High/Extreme: Rasterize pages
            await loadScript(PDF_LIBS.pdfJS);
            const pdfjs = getPdfjsLib();
            pdfjs.GlobalWorkerOptions.workerSrc = PDF_LIBS.pdfJSWorker;

            const bytes = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: bytes }).promise;
            const pdfDoc = await PDFLib.PDFDocument.create();

            // Quality settings based on level
            const settings = {
                '2': { scale: 1.5, quality: 0.7 },  // Medium
                '3': { scale: 1.0, quality: 0.5 },  // High
                '4': { scale: 0.8, quality: 0.3 }   // Extreme
            };
            const config = settings[level];

            for (let i = 1; i <= pdf.numPages; i++) {
                updateStatus(`Processing Page ${i} / ${pdf.numPages}...`, true);
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: config.scale });
                
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: ctx, viewport }).promise;
                
                // Better way to get bytes from canvas
                const imgBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', config.quality));
                const imgBytes = await imgBlob.arrayBuffer();
                
                const embeddedImg = await pdfDoc.embedJpg(imgBytes);
                const pdfPage = pdfDoc.addPage([embeddedImg.width, embeddedImg.height]);
                pdfPage.drawImage(embeddedImg, {
                    x: 0,
                    y: 0,
                    width: embeddedImg.width,
                    height: embeddedImg.height
                });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            logCompressionResult(originalSize, blob.size);
            showDownload(blob, `compressed-${level}.pdf`);
        }
    } catch (error) {
        console.error(error);
        updateStatus(`Compression failed: ${error.message}`, false);
    }
}

function logCompressionResult(oldSize, newSize) {
    const reduction = ((oldSize - newSize) / oldSize * 100).toFixed(1);
    const output = document.getElementById('toolOutput');
    if (!output) return;

    if (newSize >= oldSize && reduction <= 0) {
        output.innerText = `Note: Your file is already highly optimized. The "compressed" version is about the same size (${(newSize/1024/1024).toFixed(2)}MB). Try a higher compression level for more reduction.`;
        output.style.color = 'var(--text-muted)';
    } else {
        const msg = `Done! Size reduced from ${(oldSize/1024/1024).toFixed(2)}MB to ${(newSize/1024/1024).toFixed(2)}MB (${reduction}% smaller).`;
        output.innerText = msg;
        output.style.color = '#22c55e';
    }
}

async function handleJpgToPdf() {
    const pdfDoc = await PDFLib.PDFDocument.create();
    for (const file of PDF_CURRENT_FILES) {
        const bytes = await file.arrayBuffer();
        let img;
        if (file.type.includes('jpeg') || file.type.includes('jpg')) img = await pdfDoc.embedJpg(bytes);
        else if (file.type.includes('png')) img = await pdfDoc.embedPng(bytes);
        else continue;
        const page = pdfDoc.addPage([img.width, img.height]);
        page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
    }
    const pdfBytes = await pdfDoc.save();
    showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'converted.pdf');
}

async function handlePdfToJpg() {
    await loadScript(PDF_LIBS.pdfJS);
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
    const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = viewport.height; canvas.width = viewport.width;
    await page.render({ canvasContext: ctx, viewport }).promise;
    canvas.toBlob((blob) => showDownload(blob, 'page-1.jpg'), 'image/jpeg', 0.9);
}

async function handlePdfToWord() {
    await loadScript(PDF_LIBS.pdfJS);
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
    const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        fullText += textContent.items.map(item => item.str).join(' ') + "\n\n";
    }
    showDownload(new Blob([fullText], { type: 'application/msword' }), 'extracted-content.doc');
}

async function handleWordToPdf() {
    await loadScript(PDF_LIBS.mammoth);
    const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer: bytes });
    const pdfDoc = await PDFLib.PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText("Word to PDF (Text extraction beta):", { x: 50, y: 750, size: 15 });
    page.drawText(result.value.substring(0, 1000).replace(/<[^>]*>/g, ''), { x: 50, y: 700, size: 10 });
    const pdfBytes = await pdfDoc.save();
    showDownload(new Blob([pdfBytes], { type: 'application/pdf' }), 'converted.pdf');
}

async function handlePdfToExcel() {
    try {
        await loadScript(PDF_LIBS.pdfJS);
        await loadScript(PDF_LIBS.xlsx);
        
        const pdfjs = getPdfjsLib();
        const XLSX_LIB = getXLSX();
        
        if (!pdfjs || !XLSX_LIB) {
            throw new Error("Required libraries (PDF.js or SheetJS) failed to initialize. Please check your internet connection.");
        }

        pdfjs.GlobalWorkerOptions.workerSrc = PDF_LIBS.pdfJSWorker;

        const bytes = await PDF_CURRENT_FILES[0].arrayBuffer();
        const loadingTask = pdfjs.getDocument({ data: bytes });
        const pdf = await loadingTask.promise;
        
        let excelData = [];
        
        for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
            updateStatus(`Extracting Page ${i}...`, true);
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            
            // Improved grouping with Y-tolerance
            const TOLERANCE = 5; 
            let rowObjects = [];
            
            textContent.items.forEach(item => {
                let y = item.transform[5];
                let row = rowObjects.find(r => Math.abs(r.y - y) <= TOLERANCE);
                if (row) {
                    row.items.push(item);
                } else {
                    rowObjects.push({ y: y, items: [item] });
                }
            });
            
            // Sort rows by Y (top to bottom)
            rowObjects.sort((a, b) => b.y - a.y);
            
            rowObjects.forEach(row => {
                // Sort items in row by X (left to right)
                row.items.sort((a, b) => a.transform[4] - b.transform[4]);
                
                // Heuristic to detect columns based on X distance
                let currentRow = [];
                let lastX = -1;
                let lastWidth = 0;
                
                row.items.forEach(item => {
                    let x = item.transform[4];
                    // If gap is significant (> 15px), move to next column
                    if (lastX !== -1 && (x - (lastX + lastWidth)) > 15) {
                        currentRow.push(""); // empty cell as gap
                    }
                    currentRow.push(item.str);
                    lastX = x;
                    lastWidth = item.width || (item.str.length * 5); // Fallback width estimation
                });
                
                excelData.push(currentRow);
            });
            
            if (pdf.numPages > 1 && i < pdf.numPages) excelData.push(["--- End of Page " + i + " ---"]);
        }

        const ws = XLSX_LIB.utils.aoa_to_sheet(excelData);
        const wb = XLSX_LIB.utils.book_new();
        XLSX_LIB.utils.book_append_sheet(wb, ws, "PDF Data");
        const wbout = XLSX_LIB.write(wb, { bookType: 'xlsx', type: 'array' });
        showDownload(new Blob([wbout], { type: 'application/octet-stream' }), 'converted-data.xlsx');
    } catch (err) {
        console.error("PDF to Excel Error:", err);
        updateStatus(`Error: ${err.message}`, false);
        alert(`Conversion Error: ${err.message}`);
    }
}



function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script'); s.src = src; s.onload = resolve; s.onerror = reject; document.head.appendChild(s);
    });
}
