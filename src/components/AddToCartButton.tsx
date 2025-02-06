'use client'
import { twMerge } from "tailwind-merge"
import { productsData } from "../../type"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/buynbuySlice"
import toast from "react-hot-toast"

interface Props {
  item: productsData
  className?: string
}

const AddToCartButton = ({item, className}: Props) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item.title.substring(0, 30)} added successfully`)
  }
  return (
    <div>
      <button onClick={handleAddToCart} className={twMerge("w-full bg-accent text-white py-2 border boreder-px border-accent hover:bg-darkOrange hover:border-yellow-500 hoverEffect font-semibold tracking-wide flex item-center justify-center gap-1", className)}>Add to Cart</button>
    </div>
  )
}

export default AddToCartButton
 