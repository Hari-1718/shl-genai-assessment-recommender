import requests
import xml.etree.ElementTree as ET

def check_sitemap():
    urls = [
        "https://www.shl.com/sitemap.xml",
        "https://www.shl.com/sitemap_index.xml"
    ]
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    found_links = []
    
    for url in urls:
        print(f"Checking {url}...")
        try:
            r = requests.get(url, headers=headers)
            if r.status_code == 200:
                print(f"Success grabbing {url}")
                # simple string find for quick check
                if "product-catalog/view/" in r.text:
                    print(f"Found product catalog links in {url}!")
                    
                # Parsing
                try:
                    # simplistic parsing or just simple split
                    # XML parsing can be brittle depending on namespaces
                    lines = r.text.split('\n')
                    for line in lines:
                        if "loc" in line and "product-catalog/view/" in line:
                            clean = line.replace("<loc>", "").replace("</loc>", "").strip()
                            found_links.append(clean)
                except Exception as e:
                    print(f"Parse error: {e}")
                    
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            
    print(f"Found {len(found_links)} unique links.")
    if found_links:
        print("Sample links:")
        print(found_links[:5])
        
        # Save them so we can use them in the crawler
        with open('app/data/sitemap_links.txt', 'w') as f:
            for l in found_links:
                f.write(l + '\n')

if __name__ == "__main__":
    check_sitemap()
