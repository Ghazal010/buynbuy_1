import { productsData } from "../../type";
import {ImCross} from 'react-icons/im'
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/buynbuySlice";
import toast from "react-hot-toast";
import FormatedPrice from "./FormatedPrice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
    cart : productsData[];
    item : productsData;
}

const CartItem = ({cart, item}: Props) => {
    const [existingProduct, setExistingProduct] = useState<productsData | null>(null);
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {const availableProduct = cart.find((product)=> product._id === item._id);
        if(availableProduct){
            setExistingProduct(availableProduct);
        }
    },[cart, item])

    const handleMinus = () => {
        if((existingProduct?.quantity as number)>1){
            dispatch(decreaseQuantity(item._id))
        toast.success('quantity decreased successfully');
    }else{
        toast.error('quantity cannot be less than 1');
    };
    }
    return (
        <div className="w-full grid grid-cols-5 mb-4 border py-2">
            <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
                <ImCross onClick={() =>{dispatch(removeFromCart(item._id));
                    toast.success(`${item.title.substring(0,20)}...removed from cart`);
                }} 
                className="text-accent hover:text-lightRed cursor-pointer duration-300"/>
                <Link href={`/product/${item.slug.current}`}>
                    <Image src={urlFor(item.image).url()} alt={item.title} width={200} height={200}
                    className="w-32 h-32 object-cover"/>
                </Link>
                <h1 className="font-semibold text-lg">
                    {item.title.substring(0,25)}
                </h1>
            </div>

            <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4
            md:py-0 px-4 lg:px-0">
                <p className="flex w-1/3 items-center text-lg font-semibold">
                    <FormatedPrice amount={item.price} className={""} /></p>
                    <div className="w-1/3 flex items-center gap-4 text-lg font-semibold">
                        <button onClick={handleMinus} className="w-8 h-8 bg-gray-100 text-sm flex items-center 
                        justify-center hover:bg-darkOrange/10 cursor-pointer border-[1px]
                        hover:border-darkOrange hoverEffect"><FaMinus/></button>

                        <p className="text-sm font-semibold">{item.quantity}</p>

                        <button onClick={()=>{dispatch(increaseQuantity(item._id))
                        toast.success('quantity increased successfully')}} className="w-6 h-6 bg-gray-100 text-sm 
                        flex items-center justify-center hover:bg-darkOrange/10 cursor-pointer border-[1px]
                        hover:border-darkOrange hoverEffect"><FaPlus/></button>
                    </div>
                    <div className="w-1/3 flex items-center font-bold text-lg">
                        <FormatedPrice amount={item.price * item.quantity} className={""} />
                    </div>
                
            </div>
        </div>
    );
};

export default CartItem;
