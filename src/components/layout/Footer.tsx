import React, { FC, ReactNode } from "react";

const Footer = () => {
  return (<footer className="absolute bottom-0 left-0 w-[100dvw] flex justify-between px-8 tablet:px-16 desktop:px-28 pb-8">
    <ul>
      <li>
        <FooterLink href="mailto:contact@fusion.bi">
          Contact@fusion.bi
        </FooterLink>
      </li>
      <li>
        <FooterLink href="tel:+213663349840">
          +213 663349840
        </FooterLink>
      </li>
    </ul>
    <ul>
      <li>
        <FooterLink opener href="https://linkedin.com/company/fusiondotbi">
          LinkedIn
        </FooterLink>
      </li>
      <li>
        <FooterLink opener href="https://instagram.com/fusion.bi">
          Instagram
        </FooterLink>
      </li>
    </ul>
  </footer>);
};

export const FooterLink: FC<{
  href: string;
  children: ReactNode;
  opener?: boolean;
  type?: 'primary' | 'secondary';
}> = ({href, children, opener = false, type = 'primary'}) => {
  return (<a {...(opener ? {target: "_blank", rel:"noopener noreferrer"} : {})} className={`text-flink text-base ${type === 'primary' ? 'text-[#535353] hover:text-white' :'text-white hover:text-white' } transition-all pointer-events-auto`} href={href}>{children}</a>);
}

export default Footer;