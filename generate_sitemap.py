import os

BASE_URL = "https://www.multitoolshub.co.in/"
TOOLS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tools")

sitemap_entries = [
    f"<url><loc>{BASE_URL}index.html</loc><priority>1.0</priority></url>",
    f"<url><loc>{BASE_URL}about.html</loc><priority>0.8</priority></url>",
    f"<url><loc>{BASE_URL}privacy.html</loc><priority>0.8</priority></url>",
    f"<url><loc>{BASE_URL}contact.html</loc><priority>0.8</priority></url>",
    f"<url><loc>{BASE_URL}terms.html</loc><priority>0.8</priority></url>",
    f"<url><loc>{BASE_URL}disclaimer.html</loc><priority>0.8</priority></url>"
]

for root, dirs, files in os.walk(TOOLS_DIR):
    for file in files:
        if file.endswith(".html"):
            # Get path relative to the script directory
            rel_path = os.path.relpath(os.path.join(root, file), os.path.dirname(os.path.abspath(__file__)))
            url = f"{BASE_URL}{rel_path.replace(os.sep, '/')}"
            sitemap_entries.append(f"<url><loc>{url}</loc><priority>0.6</priority></url>")

sitemap_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{"".join(sitemap_entries)}
</urlset>
"""

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print("Sitemap generated successfully.")
