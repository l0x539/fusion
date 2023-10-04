'use client'
import { FC, ReactNode } from "react";

const ScopeButton: FC<{
  children: ReactNode;
  className?: string;
  number: number;
}> = ({children, number, className = ''}) => {
  return (<button className={`group fixed left-1/2 top-1/2 bg-transparent cursor-pointer ${['animate-[float_6s_ease-in-out_infinite_0ms]', 'animate-[float_6s_ease-in-out_infinite_400ms]',
  'animate-[float_6s_ease-in-out_infinite_800ms]', 
  'animate-[float_6s_ease-in-out_infinite_1200ms]', 
  'animate-[float_6s_ease-in-out_infinite_1600ms]'][Math.floor(Math.random() * 5)]} ${className}`}>
    <div>
      <span className='absolute flex justify-center backdrop-blur-sm rounded-full w-[calc(60/16*1rem)] tablet:w-[calc(82/16*1rem)] desktop:w-[calc(95/16*1rem)] h-[calc(60/16*1rem)] tablet:h-[calc(82/16*1rem)] desktop:h-[calc(95/16*1rem)] -translate-1/2 opacity-100'>
        <span className="relative text-white top-[4.75rem] tablet:top-28 desktop:top-32 w-28 tablet:ml-4 text-center left-0.5 tablet:-left-1 desktop:-left-2 text-xs tablet:text-base">
          {children}
        </span>
      </span>
      <div className='absolute left-0 top-0 right-0 bottom-0 translate-0 opacity-100'>
        <span className='absolute rounded-full cursor-pointer text-white -translate-1/2 flex justify-center items-center transition-all duration-1000 ease w-[calc(60/16*1rem)] tablet:w-[calc(82/16*1rem)] desktop:w-[calc(95/16*1rem)] h-[calc(60/16*1rem)] tablet:h-[calc(82/16*1rem)] desktop:h-[calc(95/16*1rem)] text-xl'>
          <span className="relative left-0.5 top-1">
            {number}
          </span>
        </span>
        <i className='absolute left-0 top-0 rounded-full border border-solid border-[#D5D0CA] h-[calc(64/16*1rem)] tablet:h-[calc(86/16*1rem)] desktop:h-[calc(100/16*1rem)] w-[calc(64/16*1rem)] tablet:w-[calc(86/16*1rem)] desktop:w-[calc(100/16*1rem)]'></i>
        <i className='absolute left-0 top-0 rounded-full border border-solid border-[#D5D0CA] h-[calc(64/16*1rem)] tablet:h-[calc(86/16*1rem)] desktop:h-[calc(100/16*1rem)] w-[calc(64/16*1rem)] tablet:w-[calc(86/16*1rem)] desktop:w-[calc(100/16*1rem)] -translate-1/2 scale-110 group-hover:animate-ping'></i>
      </div>
    </div>
  </button>);
};

export default ScopeButton;