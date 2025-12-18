import requests
from bs4 import BeautifulSoup
import json
import time
import os

BASE_URL = "https://www.shl.com/solutions/products/product-catalog/"
OUTPUT_FILE = "app/data/assessments.json"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
}


def crawl_catalog():
    print(f"Loading seed URLs from app/data/seed_urls.txt...")
    product_links = set()
    
    # Load seeds
    try:
        with open('app/data/seed_urls.txt', 'r') as f:
            for line in f:
                url = line.strip()
                if url:
                    product_links.add(url)
    except Exception as e:
        print(f"Error loading seeds: {e}")
        return

    print(f"Found {len(product_links)} unique seed URLs.")
    
    products = []
    count = 0
    
    for url in product_links:
        count += 1
        print(f"[{count}/{len(product_links)}] Crawling {url}...")
        
        try:
            p_response = requests.get(url, headers=HEADERS)
            if p_response.status_code != 200:
                print(f"Error {p_response.status_code} fetching {url}")
                continue
                
            p_soup = BeautifulSoup(p_response.text, 'html.parser')
            
            # extract metadata
            name = p_soup.find('h1').get_text(strip=True) if p_soup.find('h1') else "Unknown Assessment"
            
            description = ""
            meta_desc = p_soup.find('meta', attrs={'name': 'description'})
            if meta_desc:
                description = meta_desc.get('content')
            
            # Try to get more content from main div
            main_content = p_soup.find('article') or p_soup.find('main')
            if main_content:
                description += " " + main_content.get_text(" ", strip=True)
            
            full_text = p_soup.get_text(" ", strip=True)
            
            # Determine type
            test_type = []
            if "personality" in full_text.lower() or "behavior" in full_text.lower():
                test_type.append("Personality & Behavior")
            if "ability" in full_text.lower() or "skill" in full_text.lower() or "knowledge" in full_text.lower():
                test_type.append("Knowledge & Skills")
            if not test_type:
                test_type.append("General")

            product = {
                "name": name,
                "url": url,
                "description": description[:1000].strip(),
                "full_text": full_text[:4000], 
                "test_type": test_type,
                "duration": 30, # Default, harder to extract reliably without specific selectors
                "remote_support": "Yes", 
                "adaptive_support": "No"
            }
            products.append(product)
            
            time.sleep(0.5)
            
        except Exception as e:
            print(f"Error crawling {url}: {e}")
            
    # Save to file
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=2)
        
    print(f"Saved {len(products)} assessments to {OUTPUT_FILE}")

if __name__ == "__main__":
    crawl_catalog()

