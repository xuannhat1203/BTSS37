import { useMemo, useState } from "react";

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}
export default function BT07() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, productName: "Product 1", price: 100, quantity: 2 },
    { id: 2, productName: "Product 2", price: 200, quantity: 5 },
    { id: 3, productName: "Product 3", price: 300, quantity: 1 },
  ]);
  const Products = useMemo(() => products, [products]);
  return (
    <div>
      <ul>
        {Products.map((item: Product) => (
          <li key={item.id}>
            ID: {item.id} - Product: {item.productName} - Price: ${item.price} -
            Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
