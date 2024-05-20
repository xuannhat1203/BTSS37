import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0)
    const useRef1 = useRef(0)
    const forcusInput = useRef<HTMLInputElement>(null)
    console.log(11111, useRef1);
    

    let index = 0
    const handelClick = () => {
        index++
        setCount(count+1)
        useRef1.current = useRef1.current + 1
    }
    console.log("giá trị index", useRef1.current);

    useEffect(()=>{
        forcusInput.current?.focus()
    },[])

  return (
    <>
    {/* useRef là hook được React cung cấp
    - Cách dùng: cứ import vào để dùng
    - kết quả trả về của useRef là 1 đối tượng
    và trong đối tượng đó có 1 thuộc tính mặc định đó là current
    - Có 2 cách dùng chính:
    + khi mỗi lần component re-render thì nó không tạo ra 1 referentype mà
    vẫn giữ nguyên giá trị referentype ban đầu
    + giúp mặc định focus vào ô input mà mình muốn
    */}
    <label htmlFor="">Nhập email</label>
    <input ref={forcusInput} type="text" />
    <label htmlFor="">Nhập password</label>
    <input type="text" />
    <button>login</button>
    <h4>{count}</h4>
    <button onClick={handelClick}>click</button>
    </>
  )
}
