/**
 * ADSENSE CONFIGURATION
 * Edit this file to change your Google AdSense details across the entire website.
 */

// YOUR ADSENSE CLIENT ID (e.g. "ca-pub-XXXXXXXXXXXXXXXX")
const ADSENSE_CLIENT_ID = "ca-pub-0000000000000000"; // REPLACE WITH YOUR REAL ID

// AD SCRIPT URL (Don't change usually)
const ADSENSE_SCRIPT_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

/**
 * Injects AdSense ads into the placeholder slots
 * This handles loading the Google Ads script and rendering ad blocks.
 */
function initAds() {
    // 1. Add the main Google Ads script to head
    if (!document.querySelector(`script[src*='adsbygoogle.js']`)) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `${ADSENSE_SCRIPT_URL}?client=${ADSENSE_CLIENT_ID}`;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    }

    // 2. Locate all ad slots and fill them with ad markup
    const slots = document.querySelectorAll('.adsense-slot');
    
    slots.forEach((slot, index) => {
        // If slot is empty, inject an ad unit
        if (slot.innerHTML.trim().length === 0 || slot.innerHTML.includes('Advertisement')) {
            // Determine the ad format (auto, horizontal, etc) based on slot type if needed
            const adUnit = document.createElement('ins');
            adUnit.className = "adsbygoogle";
            adUnit.style.display = "block";
            adUnit.setAttribute('data-ad-client', ADSENSE_CLIENT_ID);
            adUnit.setAttribute('data-ad-slot', '000000000' + (index + 1)); // Placeholder Slot IDs
            adUnit.setAttribute('data-ad-format', 'auto');
            adUnit.setAttribute('data-full-width-responsive', 'true');
            
            // Clear slot and append new ad unit
            slot.innerHTML = '';
            slot.appendChild(adUnit);
            
            // Push to Google Ads engine
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense Error:", e);
                // In local dev, show a message
                slot.innerHTML = `<div style="color:var(--text-muted); font-size:0.8rem; font-family: sans-serif;">Ad Unit Slot ${index + 1} (${ADSENSE_CLIENT_ID})</div>`;
            }
        }
    });

    console.log(`AdSense initialised with 3 potential slots. ID: ${ADSENSE_CLIENT_ID}`);
}

// Auto-initiate once DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAds);
} else {
    initAds();
}
