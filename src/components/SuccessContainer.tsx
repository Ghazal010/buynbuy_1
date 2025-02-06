'use client'

import { StoreState } from "@/type"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux"
import { resetCart } from "@/redux/buynbuySlice";
import Loader from "./Loader";
import { HiCheckCircle, HiHome } from "react-icons/hi";
import Link from "next/link";
import { toast } from "react-hot-toast";

const SuccessContainer = ({ id }: { id: string }) => {
    const { cart } = useSelector((state: StoreState) => state?.buynbuy);
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const [totalAmt, setTotalAmt] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let price = 0;
        cart.forEach((item) => {
            price += item?.price * item?.quantity;
            return price;
        });
        setTotalAmt(price);
    }, [cart]);  
    
    const handleSaveOrder = async () => {
        try {
            setLoading(true);
            const responce = await fetch("/api/saveorder", {
                method: "POST",
                headers: {contentType: "application/json"},
                body: JSON.stringify({cart, email: session?.user?.email as string,
                    id: id,
                    totalAmt: totalAmt,
                    
                })
            });

            const data = await responce.json();
            console.log("data", data);

            if(data?.success){
                setLoading(false);
                dispatch(resetCart());
                 
                toast.success(data?.message);
            }

        } catch (error) {
            console.log("error in saving order", error);
        }finally{
            setLoading(false);
        }
    }
    
    useEffect(() => {
        if(session?.user && cart?.length){
            handleSaveOrder();
        }
    },[session?.user, cart?.length])
        
    
    useEffect(() => {
        console.log("Updated Total Amount:", totalAmt);
    }, [totalAmt]); 

//     return (
//         <div>
//             {loading ? (
//                 <Loader title="Payment is in progress.... Please do not press back button" />
//             ) : (
//                 <div className="bg-gradient-to-b from-green-50 to-white flex items-center 
//                 justify-center px-4 
//                 py-28">
//                    <div className="max-w-md w-full space-y-8 text-center">
//                     <div className="relative">
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="w-32 h-32 bg-green-100 rounded-full">
//                             <div className="flex items-center justify-center">
//                             <HiCheckCircle className="mx-auto h-24 w-24 text-green-500 "/>
//                             </div>                           
//                             </div>
                        
//                         </div>
//                     </div>
//                     <h2 className="mt-9 text-3xl font-extrabold text-gray-900">Success!</h2>
//                    </div>
//                 </div>
//             )}
//         </div>
//     );
// }


return (
    <div>
        {loading ? (
            <Loader title="Payment is in progress.... Please do not press the back button" />
        ) : (
            <div className="bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-28">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="relative flex items-center justify-center">
                        <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                            <HiCheckCircle className="h-24 w-24 text-green-500" />
                        </div>
                    </div>
                    <h2 className="mt-9 text-3xl font-extrabold text-gray-900">Success!</h2>
                    <p className="text-gray-500 text-sm mt-2">Your Payment has been completed Successfully!</p>
                    <div className="mt-8 space-y-6">
                        <p className="text-gray-500 text-sm mt-2">Your order has been placed successfully!

Thank you for shopping with us. Your order is being processed, and we will update you once it has been shipped.

 You will receive a confirmation email within a few minutes. Please check your inbox (and spam folder just in case).</p>

 <div>
    <Link href="/">
        <button className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md
         hover:bg-green-600 font-semibold shadow-md transition duration-300 ease-in-out">
            <HiHome/>Home
        </button>
    </Link>
 </div>
 </div>
                </div>
            </div>
        )}
    </div>
);
}

export default SuccessContainer;

