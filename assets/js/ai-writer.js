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
    generateBtn.addEventListener('click', async () => {
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
        outputBox.value = "AI is thinking...\nConnecting to Gemini API...\nStructuring content...";
        updateStats();

        try {
            const prompt = `Act as an expert AI Content Writer. Create a ${length} length ${type} about "${topic}". The tone of the content should be ${tone}. Write the entire output in the ${lang} language. Ensure the content is high quality, well-structured, and professional. Format it cleanly without excessive markdown.`;
            
            // Call secure backend Firebase Cloud Function
            const response = await fetch('https://us-central1-multitoolshub-b7b08.cloudfunctions.net/generateText', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Failed to connect to backend server.");
            }

            const data = await response.json();
            if (data.result) {
                outputBox.value = data.result.trim();
            } else {
                throw new Error("No content generated. Please try a different prompt.");
            }
            updateStats();
        } catch (error) {
            outputBox.value = "Error generating content: " + error.message;
            updateStats();
        } finally {
            // Reset button
            generateBtn.innerHTML = originalText;
            generateBtn.disabled = false;
        }
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
    
    // Simple localization dictionary for the mock output
    const translations = {
        "spanish": {
            "title": "Guía Definitiva de",
            "p1": `Este es un ${type} altamente optimizado y de tono ${tone} sobre "${topic}". Como se trata de una demostración de herramienta gratuita sin clave API, proporciona un marcador de posición estructurado.`,
            "p2": "Cuando conecte una clave API activa en el backend, este cuadro se completará con la respuesta inteligente real basada en su solicitud exacta. La interfaz maneja perfectamente el conteo de palabras en tiempo real.",
            "p3": "En conclusión, esta interfaz proporciona un diseño rápido y listo para dispositivos móviles que garantiza una excelente experiencia de usuario, manteniendo políticas estrictas."
        },
        "french": {
            "title": "Le Guide Ultime de",
            "p1": `Ceci est un ${type} hautement optimisé (ton ${tone}) sur "${topic}". Puisqu'il s'agit d'une démonstration d'outil gratuit, il fournit un espace réservé structuré.`,
            "p2": "Lorsque vous connectez une clé API active dans le backend, cette zone sera remplie avec la véritable réponse intelligente. L'interface gère parfaitement le comptage des mots en temps réel.",
            "p3": "En conclusion, cette interface de rédaction offre une conception ultra-rapide et adaptée aux mobiles qui garantit une excellente expérience utilisateur."
        },
        "german": {
            "title": "Der ultimative Leitfaden für",
            "p1": `Dies ist ein hochgradig optimierter ${type} (Ton: ${tone}) über "${topic}". Da es sich um eine kostenlose Demo handelt, wird ein strukturierter Platzhalter angezeigt.`,
            "p2": "Wenn Sie einen Live-API-Schlüssel im Backend verbinden, wird dieses Feld mit der tatsächlichen intelligenten Antwort gefüllt. Die Benutzeroberfläche verarbeitet die Wortzählung in Echtzeit perfekt.",
            "p3": "Zusammenfassend lässt sich sagen, dass diese Schnittstelle ein blitzschnelles, mobilfähiges Layout bietet, das ein großartiges Benutzererlebnis gewährleistet."
        },
        "hindi": {
            "title": "की अंतिम मार्गदर्शिका",
            "p1": `यह "${topic}" के बारे में एक अत्यधिक अनुकूलित, ${tone} ${type} है। चूंकि यह एक मुफ़्त टूल डेमो है, इसलिए यह एक संरचित प्लेसहोल्डर प्रदान करता है।`,
            "p2": "जब आप बैकएंड में लाइव एपीआई कुंजी (जैसे, जेमिनी या ओपनएआई) कनेक्ट करते हैं, तो यह बॉक्स आपके सटीक प्रॉम्प्ट के आधार पर वास्तविक बुद्धिमान प्रतिक्रिया के साथ पॉप्युलेट हो जाएगा।",
            "p3": "अंत में, यह एआई लेखक इंटरफ़ेस एक तेज़, मोबाइल-तैयार लेआउट प्रदान करता है जो एक शानदार उपयोगकर्ता अनुभव सुनिश्चित करता है।"
        },
        "bengali": {
            "title": "সম্পূর্ণ গাইড:",
            "p1": `এটি "${topic}" সম্পর্কে একটি অপ্টিমাইজ করা, ${tone} ${type}। যেহেতু এটি একটি ফ্রি টুল ডেমো, তাই এটি একটি স্ট্রাকচার্ড প্লেসহোল্ডার প্রদান করে।`,
            "p2": "যখন আপনি ব্যাকএন্ডে একটি লাইভ এপিআই কী কানেক্ট করবেন, তখন এই বক্সটি আপনার নির্দিষ্ট প্রম্পটের উপর ভিত্তি করে আসল প্রতিক্রিয়া দিয়ে পূর্ণ হবে।",
            "p3": "উপসংহারে, এই এআই রাইটার ইন্টারফেসটি একটি দ্রুত, মোবাইল-রেডি লেআউট প্রদান করে যা একটি দুর্দান্ত ব্যবহারকারীর অভিজ্ঞতা নিশ্চিত করে।"
        },
        "english": {
            "title": "The Ultimate Guide to",
            "p1": `This is a highly optimized, ${tone} ${type} about "${topic}". Since this is a free client-side tool demonstration without a backend API key, it provides a structured placeholder showing how the final AI output is formatted.`,
            "p2": `When you connect a live API key (e.g., Gemini or OpenAI) in the backend, this box will populate with the actual intelligent response based on your exact prompt and tone settings.`,
            "p3": `In conclusion, this AI writer interface provides a blazing-fast, mobile-ready layout that ensures a great user experience. Its clean typography and green accents promote trust.`
        }
    };

    const t = translations[lang] || translations["english"];
    
    let titleStr = "";
    if (type === 'blog' || type === 'article') {
        titleStr = `Title: ${t.title} ${topic}...\n\n`;
    } else if (type === 'youtube') {
        titleStr = `[YouTube Script: ${topic}]\n\n**Hook (0:00-0:15):**\nWelcome back to the channel. Today we're talking about ${topic}.\n\n`;
    } else if (type === 'title') {
        return `1. Master ${topic}\n2. ${t.title} ${topic}\n3. 10 Things About ${topic}\n4. ${topic}: Guide\n5. Why ${topic}`;
    }

    let paragraphs = 3;
    if (length === 'short') paragraphs = 1;
    if (length === 'long') paragraphs = 4;

    let contentArr = [t.p1];
    if (paragraphs >= 3) contentArr.push(t.p2, t.p3);
    if (paragraphs === 4) contentArr.push("Thank you for using the MultiToolsHub AI Content Writer!");

    return titleStr + contentArr.join("\n\n");
}
