import fitz  # PyMuPDF
import os

pdf_path = r"E:\niveda-portfolio\req\Niveda_Architectural Portfolio.pdf"
output_dir = r"E:\niveda-portfolio\website\public\images\projects"

os.makedirs(output_dir, exist_ok=True)

# Mapping of page index (0-based) to filename
page_map = {
    3: "panvel-interior.jpg",
    4: "micl-interior.jpg",
    7: "kj-bungalow.jpg",
    8: "gev-building.jpg",
    9: "vrindawan.jpg",
    10: "motel-design.jpg",
    14: "mass-housing.jpg",
    19: "dental-institute.jpg",
}

def extract():
    doc = fitz.open(pdf_path)
    for page_num, filename in page_map.items():
        page = doc.load_page(page_num)
        # Render the page as an image (matrix scales it up for better quality)
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat)
        output_path = os.path.join(output_dir, filename)
        pix.save(output_path)
        print(f"Saved {filename}")

if __name__ == "__main__":
    extract()
