import { useCallback, useState } from "react";

export default function BT04() {
  const [number, setNumber] = useState<number>(0);
  const handleRandom = useCallback(() => {
    setNumber(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div>
      <h4>Number random: {number}</h4>
      <button onClick={handleRandom}>Generate</button>
    </div>
  );
}
