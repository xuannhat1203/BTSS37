import currency from "currency.js";
import { useState } from "react";
import "./Cart.css";
interface Items {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

interface Cart {
  cartId: number;
  product: Items;
  amount: number;
}

type PropType = {
  reloadUI: () => void;
  getCartLength: (cart: Cart[]) => void;
};

export default function Cart({ reloadUI, getCartLength }: PropType) {
  const [listProduct, setListProduct] = useState<Items[]>(() => {
    const products = localStorage.getItem("Jobs");
    return products ? JSON.parse(products) : [];
  });

  const [cartLocal, setCartLocal] = useState<Cart[]>(() => {
    const carts = localStorage.getItem("Carts");

    return carts ? JSON.parse(carts) : [];
  });

  const updateCartLocal = (carts: Cart[]) => {
    localStorage.setItem("Carts", JSON.stringify(carts));
    setCartLocal(carts);
  };

  const handleClick = (item: Items) => {
    const findProductOfCarts = cartLocal.find(
      (cart) => cart.product.id === item.id
    );
    if (!findProductOfCarts) {
      cartLocal.push({
        cartId: Math.ceil(Math.random() * 10000000),
        product: item,
        amount: 1,
      });
      updateCartLocal(cartLocal);
      getCartLength(cartLocal);
      reloadUI();
    } else {
      // Tìm vị trí của product trong cart
      const findIndexProduct = cartLocal.findIndex(
        (cart) => cart.product.id === item.id
      );

      // Lấy ra vị trí của phần tử product theo id
      const findProductOfProductLocal = listProduct.findIndex(
        (pro: Items) => pro.id === item.id
      );

      if (findProductOfProductLocal !== -1) {
        if (
          cartLocal[findIndexProduct]?.amount >
          listProduct[findProductOfProductLocal]?.quantity
        ) {
          alert("Vượt quá số lượng trong kho");
        } else {
          cartLocal[findIndexProduct].amount++;
          updateCartLocal(cartLocal);
        }
      }
    }
  };
  return (
    <div>
      <div className="listItem">
        {listProduct.map((item) => (
          <div className="mobilePhone" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <h3>{currency(item.price, { symbol: "đ" }).format()}</h3>
            </div>
            <button onClick={() => handleClick(item)} className="addToCart">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span>Thêm vào giỏ hàng</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
