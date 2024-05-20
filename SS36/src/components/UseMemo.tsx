import React, { useMemo, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  quantity: number
}
let cart:Product[] = [
  {
    id:1,
    name: 'ip8',
    price: 5000,
    quantity: 5
  },
  {
    id:1,
    name: 'ip6',
    price: 7000,
    quantity: 9
  },   
  {
    id:1,
    name: 'ip10',
    price: 3000,
    quantity: 2
  }
]


export default function UseMemo() {
  const [count, setCount] = useState<number>(0)
  const [myCart,setMyCart] = useState<Product[]>(cart)

 

 let price = useMemo(() => {
    let payment = cart.reduce((acccumulator,curentValue)=>{
      return acccumulator + curentValue.price*curentValue.quantity
    },0)
    return payment
  },[myCart])

  const AutoCart = () => {
  let newProduct: Product = 
    {
      id:11,
      name:"ip15",
      price: 8888,
      quantity: 7
    }
    myCart.push(newProduct)
    setMyCart([...myCart])
}
  

  return (
    <>
    {/*  Memory: ghi nhớ
    Đây là 1 hook trong ReactJS
    - Sinh ra để giúp ghi nhớ những tính toán phức tạp và chỉ tính toán lại khi cần thiết
    */}
    <p>Giá phải trả: {price}</p>
    <button onClick={() => setCount(count+1)}>ChangeCount</button>
    <button onClick={AutoCart}>Add Product</button>
    </>
  )
}
