"use client";
import { useDispatch, useSelector } from "react-redux";
import { productsData, StoreState } from "../../type";
import CartItem from "./CartItem";
import { resetCart } from "@/redux/buynbuySlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import FormatedPrice from "./FormatedPrice";
import Button from "./Button";
import { useEffect, useState } from "react";

const CartContainer = ({session} : any) => {
    const {cart} = useSelector((state : StoreState) => state.buynbuy);
    const [totalAmt, setTotalAmt] = useState(0);
    const dispatch = useDispatch();
    const handleResetCart = () => {
        const confirmReset = window.confirm("Are you sure you want to reset the cart?");
        if(confirmReset){
            dispatch(resetCart());
            toast.success("Cart reset successfully");
        }
    };

    useEffect(() => {
        let price = 0;
        cart.forEach((item) => {
            price += item?.price * item?.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [cart]); 
 
    const handleCheckout = async() => {
        const responce = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",   
            },
            body: JSON.stringify({
                items: cart,
                email: session?.user?.email,
            })
        })
        
        const {url} = await responce.json();
        if(url){
            window.location.href = url;
        }
    }
  return (
    <div>
        {cart?.length > 0 ? (   
            <div className="pb-20">
                <div className="w-full h-20 bg-gray-400 text-accent hidden lg:grid grid-cols-5 place-content-center
                px-6 text-lg font-semibold">
                <h2 className="col-span-2">Product</h2>
                <h2 className="">Price</h2>
                <h2 className="">Quantity</h2>
                <h2 className="">Sub Total</h2>
                </div>
                <div className="mt-5 ">{cart.map((item : productsData) => (
                    <CartItem key={item._id} cart={cart} item={item} />
                ))}
                </div>
                <button onClick={handleResetCart} className="bg-lightRed text-white px-10 py-3 rounded-md font-semibold uppercase 
                mb-4 hover:bg-darkOrange hoverEffect text-sm">
                    Reset Cart
                </button>
                <div className="max-w-7xl flex justify-end">
                    <div className="w-96 flex flex-col gap-4">

                        <div>
                        <h2 className="text-2xl font-semibold text-right">Cart Totals</h2>
                        <div>
                        <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 rounded-md py-1.5 px-4 text-lg font-medium">SubTotal <FormatedPrice amount={totalAmt} className="text-lg"/> </p>
                        <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 rounded-md py-1.5 px-4 text-lg font-medium">Shipping Charges <FormatedPrice amount={0} className="text-lg"/> </p>
                        <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 px-4 text-lg font-medium">Total <FormatedPrice amount={totalAmt} className="text-lg"/> </p>
                        </div>


                        </div>
                        <Button onClick={handleCheckout}
                         disabled={!session?.user} className="py-3 px-8 rounded-md disabled:bg-slate-500">
                            Proceed to Checkout
                            </Button>
                        

                        
                            {!session?.user && (<p className="text-center text-darkOrange text-sm font-medium">Please Sign in to make Checkout</p>)}
                        
                    </div>
                    
                </div>
               
            </div>
        ) : (
            <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}
            className="flex justify-center items-center py-20">
                <div className="p-4 py-8 gap-4  flex flex-col items-center justify-center h-auto border-2 border-gray-300 shadow-lg rounded-md">
                   <h1 className="text-2xl font-bold">Your Cart Feels Lonely</h1>
                   <p className="text-gray-500">Your Cart is Empty. Add Some Items to it Now.</p>
                   <Link href="/">
                    <button className="bg-lightRed text-white px-6 py-2 rounded-md font-semibold uppercase 
                    mb-4 hover:bg-darkOrange hoverEffect text-sm">
                        Continue Shopping
                    </button>
                   </Link>
                </div>
            </motion.div>
        )}
    </div>
  )
}

export default CartContainer;