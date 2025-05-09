'use client'

import Link from "next/link";
import FooterContent from "../FooterContent";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ContactView = () => {
  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  );

  return (
    <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh]">
      <div className="animate-fade-in flex flex-col w-full h-full items-center">
        <h1 className="absolute top-[40%] text-7xl tablet:text-8xl desktop:text-9xl text-white mb-28">
          Let{'’'}s talk
        </h1>
        <Link href={'/contact/form' + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')} className="absolute bottom-[30%] tablet:bottom-[25%] desktop:bottom-[20%] group w-24 h-24 hover:cursor-pointer select-none pointer-events-auto">
          <div  className={`absolute left-0 top-0 w-24 h-24 flex justify-center items-center rounded-full border group-hover:bg-[#5E5E5E] group-hover:border-transparent mix-blend-difference shadow-[0px_2.2926828861236572px_2.2926828861236572px_0px_rgba(0,0,0,0.25)_inset] backdrop-opacity-70`}></div>
          <div className={`absolute top-0 w-24 h-24 flex justify-center items-center group-hover:text-white text-base font-gothic font-light`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
              <g filter="url(#filter0_bi_331_1650)">
                <rect width="100" height="100" rx="50" fill="#D9D9D9" fillOpacity="0.1" />
                <rect x="0.2" y="0.2" width="99.6" height="99.6" rx="49.8" stroke="white" strokeWidth="0.4" />
              </g>
              <path d="M49.3199 34.8809L49.3199 65.8809M34.8799 49.1109L49.3199 34.8709L63.8799 49.1109" stroke="white" strokeWidth="1.25" strokeMiterlimit="8" strokeLinecap="square" />
            </svg>
          </div>
        </Link>
      </div>
      <FooterContent />
    </div>
  );
};

export default ContactView;