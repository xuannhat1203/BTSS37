import { useState } from "react";

export default function StateHook() {
  const [name, setName] = useState<string>("xuân nhất");
  const [count, setCount] = useState<number>(0);
  const hanldClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{name}</h1>
      {/* 
        useState = use + state (sử dụng trạng thái)
        trạng thái của dữ liệu tức là khi dữ liệu thay đổi thì giao diện thay đổi theo
        các hook là các phương thức được react cung cấp nên khi sử dụng phải import vào để dùng
        bản chất useState là 1 function trả về 1 cái mảng có 2 phần tử
        khi setCount thì component re-render lại 
        khi có nhiều useState giống nhau chạy cùng 1 lúc thì sẽ đưa hết các useState vào 1 cái quêu (hàng đợi) để xử lí
        đối với kĩ thuộc batch-update thì nó sẽ lấy giá trị trả về của useState
      */}
      <p>{count}</p>
      <button onClick={hanldClick}>Increase</button>
    </div>
  );
}
