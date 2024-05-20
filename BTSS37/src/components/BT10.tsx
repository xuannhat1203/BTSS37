import { useState, useCallback } from "react";
import ProductDetail from "./ProductDetail";

interface Product {
  id: number;
  productName: string;
  image: string;
  price: number;
}

export default function BT010() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      productName: "Car 1",
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg",
      price: 5000,
    },
    {
      id: 2,
      productName: "Car 2",
      image: "https://www.freepngimg.com/thumb/audi/24-audi-png-car-image.png",
      price: 6000,
    },
    {
      id: 3,
      productName: "Car 3",
      image:
        "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?cs=srgb&dl=lights-car-vehicle-244206.jpg&fm=jpg",
      price: 4000,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product, index) => (
          <li key={index} style={{ display: "inline-block", margin: "10px" }}>
            <img
              src={product.image}
              alt={`Thumbnail ${index}`}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
              onClick={() => handleProductClick(product)}
            />
          </li>
        ))}
      </ul>
      <ProductDetail product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}
