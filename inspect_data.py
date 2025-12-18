import pandas as pd
import os

file_path = 'Gen_AI Dataset.xlsx'

try:
    xl = pd.ExcelFile(file_path)
    print(f"Sheet names: {xl.sheet_names}")
    
    for sheet in xl.sheet_names:
        print(f"\n--- Sheet: {sheet} ---")
        df = xl.parse(sheet)
        print(f"Columns: {list(df.columns)}")
        print(f"Shape: {df.shape}")
        print("First 3 rows:")
        print(df.head(3).to_string())
        
except Exception as e:
    print(f"Error reading file: {e}")
