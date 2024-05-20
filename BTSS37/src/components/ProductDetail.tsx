import React from "react";
interface Product {
  id: number;
  productName: string;
  image: string;
  price: number;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}
export default function ProductDetail(props: Props) {
  if (!props.product || !props.product.image) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.onClose}>
          &times;
        </span>
        <img src={props.product.image} alt="Detail" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
