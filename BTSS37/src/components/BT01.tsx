import { useCallback, useState } from "react";
export default function BT01() {
  const [count, setCount] = useState<number>(0);
  const hanldClick = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  return (
    <div>
      <h3>Bài 1 - Count: {count}</h3>
      <button onClick={hanldClick}>Increass</button>
    </div>
  );
}
