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

const PartnersView = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (<div className="relative scroll-smooth animate-page-fade-in duration-2000">
    <h1 className="animate-fade-in mx-4 tablet:mx-8 desktop:mx-32 text-6xl desktop:text-8xl text-white pt-40">
      Partners
    </h1>
    <div className="animate-fade-in delay-400">
      <Partner title="Titular - Descripción de sección">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="CryptoMate" className="hover:bg-crypto-mate" more={"/portfolio/cryptomate" + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="Lazo" className="hover:bg-lazo" more={"/portfolio/lazo" + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="La Palma" className="hover:bg-la-palma" more={"/portfolio/lapalma" + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
      <Partner title="Soy Rada" className="hover:bg-soy-rada" more={"/portfolio/soyrada" + (searchParams.get('demo') ? ('?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. Curabitur at cursus justo.
        <br/><br/>Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae diam vitae felis tincidunt tristique.
      </Partner>
    </div>
    <h1 className="mx-4 tablet:mx-8 desktop:mx-32 text-4xl tablet:text-6xl desktop:text-8xl text-white mt-20 flex tablet:block justify-center mb-10 tablet:mb-28 ">
    Let{"'"}s start a<br />
    project together
    </h1>
    <div className="animate-fade-in delay-400 mx-4 tablet:mx-8 desktop:mx-32 grid tablet:grid-cols-2">
      <div>
        <FormInput name="name" index="01" label="What's your name?" placeholder="Name, last name *" />
        <FormInput name="organization" index="02" label="What's the name of your organization?" placeholder="Name of the organization *" />
        <FormInput name="email" index="03" label="What's your email?" placeholder="email@name.com*" />
        <FormInput name="message" index="04" label="Your message" placeholder="Hello, can you help me with... *" />
      </div>
      {isMobile && <SendButton />}
      <div className="mt-16 tablet:mt-0 tablet:flex w-full h-full justify-center items-center">
        <div className="grid gap-8 tablet:gap-16 grid-cols-2 tablet:grid-cols-1 mb-16">
          <div className="font-medium">
            <h5 className="uppercase text-white mb-1">
              Contact Details
            </h5>
            <ul>
              <li>
                <FooterLink type="secondary" href="mailto:fusion.lab@gmail.com">
                  fusion.lab@gmail.com
                </FooterLink>
              </li>
              <li>
                <FooterLink type="secondary" href="tel:+00 0 . 00 00 00 00">
                  +00 0 . 00 00 00 00
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="uppercase text-white mb-1">
              BUSINESS DETAILS
            </h5>
            <ul>
              <li>
                <FooterLink type="secondary" href="#">
                  Location: Lorem Ipsum dolor
                </FooterLink>
              </li>
              <li>
                <FooterLink type="secondary" href="#">
                  Lorem Ipsum dolor
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h5 className="uppercase text-white mb-1">
              SOCIALS
            </h5>
            <ul>
              <li>
                <FooterLink type="secondary" opener href="https://instagram.com">
                  Instagram
                </FooterLink>
              </li>
              <li>
                <FooterLink type="secondary" opener href="https://linkedin.com">
                  LinkedIn
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>        
      </div>
    </div>
    {(!isMobile) && <SendButton />}
    {/* <div className="mx-16 tablet:mx-32 mt-16 inline-flex gap-1.5">
      <Link href={""} className="pointer-events-auto">
        <Button type="primary" notFixedWidth size="xl" onClick={() => {}}>
          <span className="tablet:text-xs whitespace-nowrap">Drop us a line</span>
        </Button>
      </Link>
      <Link href={"/contact/form"} className="pointer-events-auto">
        <Button icon type="primary" notFixedWidth size="xl" onClick={() => {}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
          <path d="M29.641 21.7177L15.9908 21.7177M23.3751 15.3593L29.6454 21.7177L23.3751 28.1288" stroke="currentColor" strokeMiterlimit="8" strokeLinecap="square"/>
        </svg>
        </Button>
      </Link>
    </div> */}
    <Footer />
    <FooterContent />
  </div>);
}

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
              <FooterLinkPartners href={'/culture'}>
                Culture
              </FooterLinkPartners>
            </li>
            <li className="mb-1">
              <FooterLinkPartners href={'/partners'}>
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
              <FooterLinkPartners href={'/culture'}>
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
              <FooterLinkPartners href={'/culture'}>
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

export default PartnersView;