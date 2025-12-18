import pandas as pd

def extract_urls():
    file_path = 'Gen_AI Dataset.xlsx'
    try:
        df = pd.read_excel(file_path, sheet_name='Train-Set')
        urls = df['Assessment_url'].unique()
        print(f"Found {len(urls)} unique URLs in dataset.")
        
        # Save to file
        with open('app/data/seed_urls.txt', 'w') as f:
            for url in urls:
                f.write(url + '\n')
                
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_urls()
