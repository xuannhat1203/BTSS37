import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState<number>(0)
    const [numbers,setNumbers] = useState<number[]>([])
    const [active,setActive] = useState<boolean>(true)

    useEffect(()=> {
        console.log("đang gọi vào useeffect");
    },[count])
    const handleClick = () => {
        setCount(count+1)

        // let randomNumber = Math.floor(Math.random()*100)
        // numbers.push(randomNumber)

        // setNumbers([...numbers])
    }
  return (
    <>
    {/*Tất cả các hook bản chất là những function 
    Khi dùng phải import để dùng
    I. useEffect nhận vào 2 đối số:
    1. là 1 callback (arrow function)
    2. [] || [deps]
    ==>useEffect có 3 cách dùng:
    c1: chỉ chứa callback là 1 arrow function
    - khi component được mount vào dom thì useEffect được gọi
    - mỗi lần component được re-render thì nó cũng được gọi
    c2: chứa callback và []
    - cũng được gọi khi component được mount vào dom
    - khi mỗi lần component re-render thì useEffect sẽ không bị gọi lại
    c3: chứa callback và [dependency: sự phụ thuộc]
    - cũng được gọi khi component được mount vào dom
    - khi dependency thay đổi thì useEffect được gọi 

    II. 
    - useEffect là phương thức thường dùng để xử lý các tác vụ như callAPI để lấy dữ liệu
    - thường dùng để xử lý các side Effect (bên cạnh ảnh hưởng phụ thuộc)
    */}
    <p>Giá trị count: {count}</p>
    <button onClick={handleClick}>click</button>
    </>
  )
}
