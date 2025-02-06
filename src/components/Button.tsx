import React from 'react'
import { twMerge } from 'tailwind-merge';
interface props{
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: any;
}

const Button = ({children, className, disabled, onClick}: props) => {
   function twmerge(): string | undefined {
        throw new Error('Function not implemented.');
    }

  return (
    <button onClick={onClick}
    disabled={disabled} className={twMerge('bg-lightOrange text-white hover:bg-darkOrange hoverEffect md:px-8 md:py-3 rounded-full font-semibold', className)}>{children}</button>
  )
}

export default Button


// {/* <Link href='/shop' className='text-white font-semibold hover:bg-green-600 px-4 py-2 text-sm bg-darkOrange rounded-full max-w-32 text-center'>
//             Shop Now
//         </Link> */}

// import React from 'react';
// import { twMerge } from 'tailwind-merge';

// interface props {
//   children: React.ReactNode;
//   className?: string;
//   disabled?: boolean;
// }

// const Button = ({ children, className, disabled }: props) => {
//   return (
//     <button
//       disabled={disabled}
//       className={twMerge('bg-lightOrange text-white hover:bg-darkOrange hoverEffect md:px-8 md:py-3 rounded-full font-semibold', className)}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;
