import pandas as pd
import sys

file_path = 'Gen_AI Dataset.xlsx'

with open('data_inspection.txt', 'w', encoding='utf-8') as f:
    try:
        xl = pd.ExcelFile(file_path)
        f.write(f"Sheet names: {xl.sheet_names}\n")
        
        for sheet in xl.sheet_names:
            f.write(f"\n--- Sheet: {sheet} ---\n")
            df = xl.parse(sheet)
            f.write(f"Columns: {list(df.columns)}\n")
            f.write(f"Shape: {df.shape}\n")
            f.write("First 3 rows:\n")
            f.write(df.head(3).to_string() + "\n")
            
    except Exception as e:
        f.write(f"Error reading file: {e}\n")
