import { twMerge } from "tailwind-merge";

interface Props {
    amount: number;
    className: string;
}

const FormatedPrice = ({amount, className}: Props) => {
    const priceFormate = new Number(amount).toLocaleString('en-US', {
        currency: 'USD',
        style: 'currency',
        minimumFractionDigits: 2,})
  return (
<span className={twMerge('text-base font-semibold', className)}>{priceFormate}</span>
  )
}

export default FormatedPrice
