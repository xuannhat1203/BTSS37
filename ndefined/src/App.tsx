import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";

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

export default function App() {
  const [reload, setReload] = useState<boolean>(false);
  const [carts, setCarts] = useState<Cart[]>(() => {
    const carts = localStorage.getItem("Carts");

    return carts ? JSON.parse(carts) : [];
  });

  const reloadUI = (): void => {
    setReload(!reload);
  };

  const getCartLength = (listCart: Cart[]): void => {
    setCarts(listCart);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Header reload={reload} carts={carts} />
      <br />
      <Cart reloadUI={reloadUI} getCartLength={getCartLength} />
    </div>
  );
}
