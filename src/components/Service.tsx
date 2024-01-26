'use client'
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { Next } from "./Icons";

const SERVICES = {
  discovery: 0,
  development: 1,
  team: 2,
  design: 3,
  services: 4,
}

const Service = () => {
  
  return (<div className="animate-fade-in w-[100dvw] h-[50dvh] flex justify-center mt-64 tablet:mt-80 overflow-x-hidden pointer-events-none">
    <div className="tablet:ml-72 tablet:w-96">
      <Carousel />
    </div>
  </div>);
};

const Carousel= () => {

  const router = useRouter();
  const {
    slug
  } = useParams() as {
    slug: 'discovery' | 'development' | 'team' | 'design' | 'services';
  };

  const defaultSelected = SERVICES[slug];

  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const onNextButton = () => {
    router.push(`/services/${Object.keys(SERVICES)[(defaultSelected + 1) % 5] + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}`, {
      scroll: false
    })
  }

  return (<>
    <div className="flex relative">
      <Pan current={0} selected={defaultSelected}>
        <h3 className="text-3xl tablet:text-5xl text-white mb-6">Explore</h3>
        <p className="tablet:w-96 text-base tablet:text-lg text-white mb-16">
          Embark on a journey of discovery with Fusion. Dive deep into innovative solutions, creative concepts, and cutting-edge technologies. Explore new possibilities and unlock the potential for your next project. Let Fusion guide you through the realms of creativity and innovation, shaping the future together.
        </p>
      </Pan>
      <Pan current={1} selected={defaultSelected}>
        <h3 className="text-2xl tablet:text-4xl text-white mb-6">Prototype & Dev</h3>
        <p className="tablet:w-96 text-base tablet:text-lg text-white mb-16">
          Turn your vision into reality with Fusion{"'"}s Prototype & Development. From concept to creation, we craft robust prototypes, bringing ideas to life with attention to detail and advanced techniques. Partner with us to prototype, iterate, and refine projects to meet high standards.
        </p>
      </Pan>
      <Pan current={2} selected={defaultSelected}>
        <h3 className="text-3xl tablet:text-5xl text-white mb-6">Collab Solutions</h3>
        <p className="tablet:w-96 text-base tablet:text-lg text-white mb-16">
        Collaborative Solutions: Join forces for innovation and success. Fusion empowers teams to overcome challenges and achieve goals, from custom software to immersive experiences. Partner with us for exceptional results in innovation and growth.
        </p>
      </Pan>
      <Pan current={3} selected={defaultSelected}>
        <h3 className="text-3xl tablet:text-5xl text-white mb-6">Design Solutions</h3>
        <p className="tablet:w-96 text-base tablet:text-lg text-white mb-16">
        Our Design Solutions deliver innovative outcomes, combining user-centric design with cutting-edge aesthetics. From conceptualization to implementation, we craft engaging experiences that elevate your brand.
        </p>
      </Pan>
      <Pan current={4} selected={defaultSelected}>
        <h3 className="text-3xl tablet:text-5xl text-white mb-6">All services</h3>
        <p className="tablet:w-96 text-base tablet:text-lg text-white mb-16">
          Explore Fusion{"'"}s comprehensive suite of services, including design, development, branding, and more. Unlock the full potential of your project with our diverse expertise and tailored solutions.
        </p>
      </Pan>
    </div>
    <div>
      <ul className="relative -bottom-72 inline-flex gap-3.5">
        {[0, 1, 2, 3, 4].map((number) => (
          <SelectButton onClick={() => {
            router.push(`/services/${Object.keys(SERVICES)[number] + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}`, {
              scroll: false
            })
          }} key={number} active={number === defaultSelected}>{number+1}</SelectButton>
        ))}
        <li onClick={onNextButton} className="flex cursor-pointer items-center rounded-full pointer-events-auto">
          <Next />
        </li>
      </ul>
    </div>
  </>);
};

const Pan: FC<{
  current: number;
  selected: number;
  children: ReactNode;
}> = ({
  current,
  selected,
  children
}) => {
  return (<div className={`
  absolute left-0 transition-all duration-1000 top-0 ${selected === current ? 'translate-x-0' : selected > current ? `translate-x-[-${200*(current+1)}vw]` : `translate-x-[${200*(current+1)}vw]`}`}>
    {children}
  </div>);
};

export const SelectButton: FC<{
  children: ReactNode;
  active?: boolean;
  onClick: () => void;
}> = ({
  children,
  active = false,
  onClick
}) => {
  return (
    <>
      <li onClick={onClick} className="group w-10 h-10 tablet:w-12 tablet:h-12 hover:cursor-pointer select-none pointer-events-auto">
        <div  className={`absolute w-10 h-10 tablet:w-12 tablet:h-12 flex justify-center items-center rounded-full border group-hover:bg-[#5E5E5E] group-hover:border-transparent ${active ? 'bg-[#5E5E5E] text-white border-transparent' : 'bg-transparent text-[#2E2E2E] border-[#959595]'}  mix-blend-difference shadow-[0px_2.2926828861236572px_2.2926828861236572px_0px_rgba(0,0,0,0.25)_inset] backdrop-opacity-70`}></div>
        <div className={`absolute w-10 h-10 tablet:w-12 tablet:h-12 flex justify-center items-center group-hover:text-white ${active ? 'text-white' : 'text-[#2E2E2E]'} text-sm tablet:text-base font-gothic font-light`}>{children}</div>
      </li>
    </>
  );
}

export default Service;