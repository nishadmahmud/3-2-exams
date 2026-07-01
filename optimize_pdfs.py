import fitz
import glob
import os

pdf_dir = r"public\courses\data_science\lecture"
for file_path in glob.glob(os.path.join(pdf_dir, "*.pdf")):
    if "optimized" in file_path: continue
    print(f"Processing {file_path}...")
    doc = fitz.open(file_path)
    
    new_doc = fitz.open()
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        # Render page to an image
        # Matrix(1.5, 1.5) scales the resolution. Default is 72 dpi, so this is ~108 dpi. Good enough for web viewing.
        pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5)) 
        img_bytes = pix.tobytes("jpeg", 60) # 60% quality JPEG for maximum compression
        
        # Create a new PDF page with this image
        img_doc = fitz.open("jpeg", img_bytes)
        pdf_bytes = img_doc.convert_to_pdf()
        img_pdf = fitz.open("pdf", pdf_bytes)
        new_doc.insert_pdf(img_pdf)
        
    output_path = file_path.replace(".pdf", "_optimized.pdf")
    new_doc.save(output_path)
    
    old_size = os.path.getsize(file_path)
    new_size = os.path.getsize(output_path)
    print(f"Old size: {old_size / 1024 / 1024:.2f} MB, New size: {new_size / 1024 / 1024:.2f} MB")
    
    # Replace old with new
    doc.close()
    new_doc.close()
    os.remove(file_path)
    os.rename(output_path, file_path)
    print("Done!")
