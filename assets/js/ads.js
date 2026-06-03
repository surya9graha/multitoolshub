/**
 * ADSENSE CONFIGURATION
 * Edit this file to change your Google AdSense details across the entire website.
 */

// YOUR ADSENSE CLIENT ID (e.g. "ca-pub-XXXXXXXXXXXXXXXX")
const ADSENSE_CLIENT_ID = "ca-pub-1356057643477835"; // REPLACE WITH YOUR REAL ID

// AD SCRIPT URL (Don't change usually)
const ADSENSE_SCRIPT_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

/**
 * Injects AdSense ads into the placeholder slots
 * This handles loading the Google Ads script and rendering ad blocks safely.
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

    // 2. Locate all ad slots
    const slots = document.querySelectorAll('.adsense-slot');
    
    // Create an intersection observer to only load ads when they are visible
    // This prevents the "No slot size for availableWidth=0" error
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            // Check if element is intersecting and has actual width (not hidden by tabs/modals)
            if (entry.isIntersecting && entry.target.offsetWidth > 0) {
                const slot = entry.target;
                const index = slot.getAttribute('data-ad-index');
                
                // Create responsive wrapper
                const adWrapper = document.createElement('div');
                adWrapper.className = "ads-container";

                // Create AdSense unit
                const adUnit = document.createElement('ins');
                adUnit.className = "adsbygoogle";
                adUnit.style.display = "block";
                adUnit.setAttribute('data-ad-client', ADSENSE_CLIENT_ID);
                adUnit.setAttribute('data-ad-slot', '000000000' + index); // Placeholder Slot IDs
                adUnit.setAttribute('data-ad-format', 'auto');
                adUnit.setAttribute('data-full-width-responsive', 'true');
                
                adWrapper.appendChild(adUnit);
                slot.innerHTML = ''; // Clear placeholder
                slot.appendChild(adWrapper);
                
                // Delay push slightly to ensure DOM is updated and layout is calculated
                setTimeout(() => {
                    try {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                    } catch (e) {
                        console.error("AdSense Error:", e);
                    }
                }, 250);

                // Stop observing once loaded
                obs.unobserve(slot);
            }
        });
    }, { rootMargin: '150px' }); // Load slightly before it comes into view

    slots.forEach((slot, index) => {
        // If slot is empty or has default placeholder text
        if (slot.innerHTML.trim().length === 0 || slot.innerHTML.includes('Advertisement')) {
            slot.setAttribute('data-ad-index', index + 1);
            // Observe the slot to push ad only when visible
            observer.observe(slot);
        }
    });

    console.log(`AdSense initialised with ${slots.length} potential slots. ID: ${ADSENSE_CLIENT_ID}`);
}

// Auto-initiate once DOM is ready, avoiding execution before page render
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(initAds, 500); // Wait for potential layout shifts / hydration
    });
} else {
    setTimeout(initAds, 500);
}
