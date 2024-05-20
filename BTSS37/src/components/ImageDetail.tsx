import React from "react";
interface Props {
  image: string | null;
  onClose: () => void;
}
export default function ImageDetail(product: Props) {
  if (!product.image) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={product.onClose}>
          &times;
        </span>
        <img src={product.image} alt="Detail" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
