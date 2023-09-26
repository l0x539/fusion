import React, { FC, ReactNode } from "react";

const Footer = () => {
  return (<footer className="absolute bottom-0 left-0 w-screen flex justify-between px-28 pb-8">
    <ul>
      <li>
        <FooterLink href="mailto:fusion.devlopment@gmail.com">
          Contact@fusion.com
        </FooterLink>
      </li>
      <li>
        <FooterLink href="tel:+213665764655">
          +213 665764655
        </FooterLink>
      </li>
    </ul>
    <ul>
      <li>
        <FooterLink opener href="https://instagram.com/fusion.development">
          LinkedIn
        </FooterLink>
      </li>
      <li>
        <FooterLink opener href="https://www.linkedin.com/company/devsolvers">
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
  return (<a {...(opener ? {target: "_blank", rel:"noopener noreferrer"} : {})} className={`text-flink text-base ${type === 'primary' ? 'text-[#535353] hover:text-white' :'text-white hover:text-white' } transition-all`} href={href}>{children}</a>);
}

export default Footer;