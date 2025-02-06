import React from 'react'
// import Spinner from './Spinner'

interface Props {
    size?: number;
    color?: string;
  }
  
  const Loader = ({title}:{title:string}) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
      <div role="status">
        <svg
          className="animate-spin text-darkOrange flex justify-center items-center"
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-darkOrange">Buy N Buy Vibes</h2>
      </div>
      
  );
};

export default Loader

// import React from 'react';

// const Loader = () => {
//   return (
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <div role="status">
//         <svg
//           className="animate-spin text-darkOrange flex justify-center items-center"
//           width={48}
//           height={48}
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//           />
//         </svg>
//       </div>
//       <h2 className="mt-4 text-2xl font-semibold text-darkOrange">Buy N Buy Vibes</h2>
//     </div>
//   );
// };

// export default Loader;
