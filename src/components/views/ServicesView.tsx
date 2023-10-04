'use client'

import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ScopeButton from "../ScopeButton";
import FooterContent from "../FooterContent";

const ServicesView = () => {

  return (<>
      <div className="">
        <Link className="animate-fade-in pointer-events-auto" href={'/services/discovery'}>
          <ScopeButton number={1} className='-ml-[32vw] desktop:-ml-[30vw] -mt-[30dvh]' >
            Discovery
          </ScopeButton>
        </Link>
        <Link className="animate-fade-in pointer-events-auto" href={'/services/development'}>
          <ScopeButton number={2} className='-ml-[7vw] desktop:-ml-[11vw] -mt-[11dvh]' >
            MVP Development
          </ScopeButton>
        </Link>
        <Link className="animate-fade-in pointer-events-auto" href={'/services/team'}>
          <ScopeButton number={3} className='ml-[18vw] desktop:ml-[20vw] -mt-[31dvh]' >
            Product Team
          </ScopeButton>
        </Link>
        <Link className="animate-fade-in pointer-events-auto" href={'/services/design'}>
          <ScopeButton number={4} className='-ml-[33vw] desktop:-ml-[31vw] mt-[4dvh]' >
            Product Design
          </ScopeButton>
        </Link>
        <Link className="animate-fade-in pointer-events-auto" href={'/services/services'}>
          <ScopeButton number={5} className='-ml-[5vw] desktop:-ml-[3vw] mt-[14dvh]' >
            All services
          </ScopeButton>
        </Link>
        <Link className="animate-fade-in pointer-events-auto" href={'/services/our-method/1'}>
          <ScopeButton number={6} className='ml-[19vw] desktop:ml-[17vw] mt-[7dvh]' >
            Our method
          </ScopeButton>
        </Link>
        <FooterContent />
      </div>
    </>
  );
};

export default ServicesView;