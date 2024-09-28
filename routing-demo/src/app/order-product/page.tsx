"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
    console.log(`placing YOur Order `);
    router.push("/")
    // router.forward()//for going on next page
    // router.back()//for going on previous page
    // router.refresh()//for refresh page
    // router.replace()//for replace page
    // router.push("/products")
    
  };
  return (
    <>
      <h1>Order Products</h1>
      <button onClick={handleClick}>Order</button>
    </>
  );
}
