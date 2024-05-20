import "./Header.css";
import swal from "sweetalert";
import { useEffect, useState } from "react";
interface Items {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

type PropType = {
  reload: boolean;
  carts: Cart[];
};

interface Cart {
  cartId: number;
  product: Items;
  amount: number;
}

export default function Header({ reload, carts }: PropType) {
  const [cartLocal, setCartLocal] = useState<Cart[]>(() => {
    const carts = localStorage.getItem("Carts");

    return carts ? JSON.parse(carts) : [];
  });

  const totalAmount = (): number => {
    const total = cartLocal.reduce(
      (sum, item: Cart) => sum + item.product.price * item.amount,
      0
    );

    return total;
  };

  const [showCart, setShowCart] = useState(false);

  const updateCartLocal = (updatedCart: Cart[]) => {
    localStorage.setItem("Carts", JSON.stringify(updatedCart));
    setCartLocal(updatedCart);
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCart = cartLocal.map((item: Cart) =>
      item.cartId === itemId ? { ...item, amount: item.amount + 1 } : item
    );
    updateCartLocal(updatedCart);
    totalAmount();
  };

  const decreaseQuantity = (itemId: number) => {
    const updatedCart = cartLocal.map((item: Cart) =>
      item.cartId === itemId && item.amount > 1
        ? { ...item, quantity: item.amount - 1 }
        : item
    );
    updateCartLocal(updatedCart);
    totalAmount();
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartLocal.filter((item) => item.cartId !== itemId);
    updateCartLocal(updatedCart);
    totalAmount();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    setCartLocal(carts);
  }, [reload]);

  return (
    <div>
      <div className="header">
        <div
          style={{
            display: "flex",
            gap: "20px",
            position: "relative",
            left: "15px",
          }}
        >
          <h3>Trang chủ</h3>
          <h3>Danh sách sản phẩm</h3>
        </div>
        <div style={{ display: "flex" }}>
          <button
            onClick={toggleCart}
            style={{
              display: "flex",
              border: "none",
              backgroundColor: "rgb(251,146,60)",
            }}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "red",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "relative",
                bottom: "5px",
                right: "10px",
              }}
              className="total"
            >
              {carts.length}
            </div>
          </button>
        </div>
      </div>
      {showCart == true && (
        <div
          className="stogareItem"
          style={{ width: "300px", border: "1px solid black" }}
        >
          <h4 style={{ textAlign: "center" }}>Cart</h4>
          <hr />
          <div>
            {cartLocal.map((item) => (
              <div
                style={{
                  width: "300px",
                  height: "70px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                key={item.cartId}
              >
                <span>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={item.product.image}
                    alt={item.product.name}
                  />
                </span>
                <span>{item.product.name}</span>
                <button onClick={() => increaseQuantity(item.cartId)}>+</button>
                <span>{item.amount}</span>
                <button onClick={() => decreaseQuantity(item.cartId)}>-</button>
                <button onClick={() => removeFromCart(item.cartId)}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            ))}
          </div>
          <hr />
          <h5>
            Tổng tiền{" "}
            {totalAmount().toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </h5>
        </div>
      )}
    </div>
  );
}
