'use client'

import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { FooterLink } from "../layout/Footer";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { Bounce, toast } from "react-toastify";

const ContactFormView = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const onSubmit = async () => {
    if (email.trim().length < 3) {
      toast.warn('Email missing', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    if (message.trim().length < 1) {
      toast.warn('the message is missing', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const res = await fetch("/contact/form/submit", {
      method: 'POST',
      body: JSON.stringify({
        name,
        organization,
        email,
        message
      })
    });

    if (res.status === 200) {
      toast.success('Thank for contacting us!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      setTimeout(() => {
        router.push('/contact/info')
      }, 1000);
    } else if (res.status === 500) {
      toast.error('Try later or email us at: contact@fusion.bi', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        router.push('/contact/info')
      }, 1000);
    } else {
      toast.error('unknow error', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  return (<>
  <div className="pt-40">
    <h1 className="animate-fade-in mx-4 tablet:mx-8 desktop:mx-32 mb-10 tablet:mb-28 text-4xl tablet:text-7xl desktop:text-8xl text-white">
      Let{"'"}s start a<br />
      project together
    </h1>
    <div className="animate-fade-in delay-400 mx-4 tablet:mx-8 desktop:mx-32 grid tablet:grid-cols-2">
      <div>
        <FormInput name="name" index="01" label="What's your name?" placeholder="Name, last name *" onChange={setName} />
        <FormInput name="organization" index="02" label="What's the name of your organization?" placeholder="Name of the organization *" onChange={setOrganization} />
        <FormInput name="email" index="03" label="What's your email?" placeholder="email@name.com*" onChange={setEmail} />
        <FormInput name="message" index="04" label="Your message" placeholder="Hello, can you help me with... *" onChange={setMessage} />
      </div>
      {isMobile && <SendButton onClick={onSubmit} />}
      <div className="mt-16 tablet:mt-0 tablet:flex w-full h-full justify-center items-center">
        <div className="grid gap-8 tablet:gap-16 grid-cols-2 tablet:grid-cols-1 mb-16">
          <div className="font-medium">
            <h5 className="uppercase text-[#5E5E5E] mb-1">
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
            <h5 className="uppercase text-[#5E5E5E] mb-1">
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
            <h5 className="uppercase text-[#5E5E5E] mb-1">
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
    {(!isMobile) && <SendButton onClick={onSubmit} />}
  </div>
  </>);
};

export const SendButton: FC<{
  className?: string;
  onClick: () => void;
}> = ({className, onClick}) => {

  return <div className={`animate-fade-in flex w-full justify-center tablet:pb-14 pt-8 tablet:py-14 ${className}`}>
    <div onClick={onClick} className="relative group hover:cursor-pointer select-none pointer-events-auto">
      <div  className={`h-full w-full absolute top-0 flex justify-center items-center rounded-full border mix-blend-difference shadow-[0px_2.2926828861236572px_2.2926828861236572px_0px_rgba(0,0,0,0.25)_inset] backdrop-opacity-70 group-hover:animate-ping`}></div>
      <div className={`flex justify-center items-center text-white font-gothic font-semibold text-2xl tablet:text-5xl px-8 py-4 tablet:px-16 tablet:py-8`}>
        Send it!
      </div>
    </div>
  </div>
}

export default ContactFormView;

export const FormInput: FC<{
  index: string;
  label: string;
  placeholder: string;
  name: string;
  onChange: (value: string) => void;
}> = ({
  index,
  label,
  placeholder,
  name,
  onChange,
}) => {
  return (
    <>
      <div className="flex pt-5 mb-8 border-t border-[#5E5E5E] pointer-events-auto">
        <span className="h-full flex justify-center items-center text-[#5E5E5E] font-medium mr-16">{index}</span>
        <div className="w-full">
          <label className="text-white font-medium" htmlFor={name}>{label}</label>
          <input onChange={(e) => {
            onChange(e.target.value)
          }} className="block placeholder:text-[#5E5E5E] bg-transparent focus:outline-none font-medium text-[#8E8E8E] mt-1 w-full" type="text" name={name} placeholder={placeholder} />
        </div>
      </div>
    </>
  );
};