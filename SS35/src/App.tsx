import StateHook from "./components/StateHook";

export default function App() {
  return (
    <div>
      {/* 
        Hook: móc
        - React Hook bản chất là các hàm, phương thức giúp cho function component có thể
        thực hiện các tính năng như class component
        - React Hook được ra đời ở phiên bản react 16.8(2018);
        - trước khi hook ra đời thì function component chỉ đơn giản là tạo ra cá UI
        function Header () {
          return <>Header<>
        }
        - hook ra đời giúp cho code ngắn gọn, gọn gàng dễ sử dụng hơn so với class component
        - dự án bây giờ đa phần dùng react hook
        - khi làm việc với class thì phải nắm chắc lifecycle
        - khi làm việc với các hook phải để ý đến đầu vào , đầu ra của các phương thức
        - các hook học:
         + useState
         + useEffect
         + useRef
         + useMemo
         + useCallback
         + useReducer
      */}
      <StateHook />
    </div>
  );
}
