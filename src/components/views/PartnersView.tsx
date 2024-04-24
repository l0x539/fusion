'use client'

import Button from "@/components/Button";
import Link from "next/link";
import { FC, ReactNode, useCallback, useEffect } from "react";
import FooterContent from "../FooterContent";
import Logo from "../Logo";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { FormInput, SendButton } from "./ContactFormView";
import { FooterLink } from "../layout/Footer";



const Partner: FC<{
  children: ReactNode;
  title: string;
  className?: string;
  more?: string;
}> = ({
  children,
  title,
  className = "",
  more
}) => {
  return (
    <div className={`relative px-4 tablet:px-8 desktop:px-32 hover:bg-cover grid grid-cols-partner-mobile tablet:grid-cols-2 py-24 border-b last:border-b-0 first:cursor-auto bg-transparent h-full ${className}`}>
      <div className="">
        <h4 className="text-white font-semibold">
          {title}
        </h4>
      </div>
      <div className="text-white">
        <p className="text-sm desktop:text-base desktop:w-[37rem]">
          {children}
        </p>
        <div className="mt-7 inline-flex gap-1.5 pointer-events-auto">
          {more && <>
            <Link href={more}>
              <Button type="secondary" notFixedWidth size="xl" onClick={() => {}}>
                <span className="text-xs">Find out more</span>
              </Button>
            </Link>
            <Link href={more}>
              <Button icon type="secondary" notFixedWidth size="xl" onClick={() => {}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path d="M29.641 21.7177L15.9908 21.7177M23.3751 15.3593L29.6454 21.7177L23.3751 28.1288" stroke="currentColor" strokeMiterlimit="8" strokeLinecap="square"/>
              </svg>
              </Button>
            </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export const Footer: FC<{
  className?: string;
}> = ({
  className = "pt-48"
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <div className={`pb-32 tablet:pb-48 ${className}`}>
      <div className="grid px-0 desktop:px-32 w-[100dvw] grid-cols-2 tablet:grid-cols-footer">
        <FooterSection>
          <Logo width={90} height={13} />
          <span className="absolute pb-9 text-sm text-[#5E5E5E] bottom-0">2022 - 2023 - All rights reserved</span>
        </FooterSection>
        {!isMobile ? <FooterSection>
          <h6 className="text-white mb-8">Main</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLinkPartners href={'/services'}>
                Services
              </FooterLinkPartners>
            </li>
            <li className="mb-1">
              <FooterLinkPartners href={'/projects'}>
                Culture
              </FooterLinkPartners>
            </li>
            <li className="mb-1">
              <FooterLinkPartners href={'/culture'}>
                Partners
              </FooterLinkPartners>
            </li>
          </ul>
        </FooterSection>:<></>}
        {!isMobile ? <FooterSection>
          <h6 className="text-white mb-8">Contact</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLinkPartners href={'/services'}>
                Contact@fusion.bi
              </FooterLinkPartners>
            </li>
            <li className="mb-1">
              <FooterLinkPartners href={'/projects'}>
                info@fusion.bi
              </FooterLinkPartners>
            </li>
            <li className="mb-1 text-white mt-6">
              Ciudad Autónoma de<br /> Buenos Aires
            </li>
          </ul>
        </FooterSection> : <></>}
        <FooterSection>
        <h6 className="text-white mb-8">Contact</h6>
          <ul className="">
            <li className="mb-1">
              <FooterLinkPartners href={'/services'}>
                Contact@fusion.bi
              </FooterLinkPartners>
            </li>
            <li className="mb-1">
              <FooterLinkPartners href={'/projects'}>
                info@fusion.bi
              </FooterLinkPartners>
            </li>
            <li className="mb-1 text-white mt-6">
              Ciudad Autónoma de<br /> Buenos Aires
            </li>
          </ul>
        </FooterSection>
      </div>
    </div>
  );
}

const FooterLinkPartners: FC<{
  children: ReactNode;
  href: string;
}> = ({
  children,
  href
}) => {
  return (<Link href={href} className="relative">
      <span className="text-white after:content-[''] after:block after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:ease-out after:transition-transform after:origin-left hover:after:scale-x-100 transition-all pointer-events-auto">{children}</span>
    </Link>);
}

const FooterSection: FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  return (
    <div className="relative px-2 tablet:px-6 pb-12 first:ml-0 font-flink border-l first:border-l-0 border-b border-[#6C6C6C]/50">
      {children}
    </div>
  );
}
