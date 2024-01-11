'use client'

import { closeMenu, openMenu, selectApp } from "@/store/features/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { FC, ReactNode, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { setProgress } from "@/store/features/gl/glSlice";

const Menu = () => {
  return (<>
    <div className="visible desktop:hidden"><MenuMobile /></div>
    <div className="hidden desktop:visible desktop:block"><MenuDesktop /></div>
  </>);
};

const MenuDesktop = () => {
  const searchParams  = useSearchParams();
  const pathname  = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const dispatch = useAppDispatch();


  return (<ul className="flex text-white">
    <li>
      <HeaderLink boldHover={searchParams.has('boldhover')} active={pathname.startsWith('/services')} onClick={() => {
        dispatch(setProgress(5));
      }} href={searchParams.get('demo') ? ('/services?' + createQueryString('demo', `${searchParams.get('demo')}`)) : "/services"}>
        Services
      </HeaderLink>
    </li>
    <li className="ml-14">
      <HeaderLink boldHover={searchParams.has('boldhover')} active={pathname.startsWith('/culture')} href={searchParams.get('demo') ? ('/culture?' + createQueryString('demo', `${searchParams.get('demo')}`)) : "/culture"}>
        Portfolio
      </HeaderLink>
    </li>
    <li className="ml-14">
      <HeaderLink boldHover={searchParams.has('boldhover')} active={pathname.startsWith('/partners')} href={searchParams.get('demo') ? ('/partners?' + createQueryString('demo', `${searchParams.get('demo')}`)) : "/partners"}>
        About Us
      </HeaderLink>
    </li>
    <li className="ml-14">
      <SpecialLink boldHover={searchParams.has('boldhover')} active={pathname.startsWith('/contact')} href={searchParams.get('demo') ? ('/contact?' + createQueryString('demo', `${searchParams.get('demo')}`)) : "/contact"}>
        Get in touch
      </SpecialLink>
    </li>
  </ul>);
};

const SpecialLink: FC<{
  href: string;
  children: ReactNode;
  boldHover?: boolean;
  active?: boolean;
}> = ({
  href,
  children,
  active = false,
  boldHover = false,
}) => {
  return (<Link className={`uppercase border rounded-full px-4 py-3 ${boldHover ? 'opacity-100' : (active ? 'opacity-100' : 'opacity-50')} ${boldHover && active? 'font-bold' : 'font-normal'} text-sm ${boldHover ? 'hover:font-bold' : 'hover:opacity-100'} transition-all`} href={href}>{children}</Link>);
}

const HeaderLink: FC<{
  href: string;
  children: ReactNode;
  active?: boolean;
  boldHover?: boolean;
  onClick?: () => void;
}> = ({
  href,
  children,
  active = false,
  boldHover = false,
  onClick = () => {}
}) => {
  return (<Link onClick={onClick} className={`uppercase ${boldHover ? 'opacity-100' : (active ? 'opacity-100' : 'opacity-50')} ${boldHover && active? 'font-bold' : 'font-normal'} text-sm ${boldHover ? 'hover:font-bold' : 'hover:opacity-100'} transition-all`} href={href}>{children}</Link>);
}

const MenuMobile = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false);
  const { isMenuOpen } = useAppSelector(selectApp)
  const dispatch = useAppDispatch();

  const linkVariants = {
    open: {
      transform: "scale(1)", opacity: 1, filter: "blur(0px)",
    },
    closed: {
      transform: "scale(0.5)", opacity: 0, filter: "blur(6px)",
    },
  }

  const menuVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }
  const searchParams  = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const handleOpenMenu = () => {
    dispatch(openMenu())
    // setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    dispatch(closeMenu());
    // setMenuOpen(false);
  };

  return (<>
    <motion.div
      variants={menuVariants}
      animate={isMenuOpen ? 'closed' : 'open'}
      className={isMenuOpen ? 'hidden' : 'block'}
    >
      <BurgerButton onClick={handleOpenMenu} />
    </motion.div>
    {/* <motion.div
      variants={menuVariants}
      animate={isMenuOpen ? 'open' : 'closed'}
      className={`absolute mix-blend-screen top-0 left-0 w-[100dvw] h-[100dvh] py-14 
      px-16 bg-black opacity-[0.99] 
      ${isMenuOpen ? 'block' : 'hidden'}`}
    >

    </motion.div> */}
    <div className={`absolute top-0 left-0 flex justify-between w-[100dvw] h-[100dvh] py-14 px-14 xl:px-28 
    ${isMenuOpen ? 'block' : 'hidden'}`}>
      <div>
        <ul>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0}}
          >
            <NavLink href={searchParams.get('demo') ? ('/?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '/'}>
              Home
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.1}}
          >
            <NavLink href={searchParams.get('demo') ? ('/culture?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '/culture'}>
              Culture
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.2}}
          >
            <NavLink href={searchParams.get('demo') ? ('/services?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '/services'}>
              Services
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.3}}
          >
            <NavLink href={searchParams.get('demo') ? ('/partners?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '/partners'}>
              Partners
            </NavLink>
          </motion.li>
          <motion.li
            variants={linkVariants}
            animate={isMenuOpen ? 'open' : 'closed'}
            transition={{delay: 0.4}}
          >
            <NavLink href={searchParams.get('demo') ? ('/contact?' + createQueryString('demo', `${searchParams.get('demo')}`)) : '/contact'}>
              Contact Us
            </NavLink>
          </motion.li>
        </ul>
      </div>
      <div>
        <motion.div
          variants={menuVariants}
          animate={isMenuOpen ? 'open' : 'closed'}
          className="flex flex-row-reverse"
        >
          <div className="cursor-pointer" onClick={handleCloseMenu}>
            <CloseButton />
          </div>
        </motion.div>
      </div>
    </div>
  </>);
};

const NavLink: FC<{
  href: string;
  children: ReactNode;
}> = ({ href, children }) => {
  const dispatch = useAppDispatch();
  
  return (
    <div className="flex text-white text-4xl xl:text-7xl mb-4 group">
      <Link onClick={() => {
        dispatch(closeMenu());
      }} href={href}>
        {children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-white"></span>
      </Link>
    </div>
  );
};

const CloseButton = () => {
  return (<span className="text-xs text-white">CLOSE X</span>);
};

const Burger = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path d="M18.9 3.5001H2.09998V2.1001H18.9V3.5001Z" fill="white"/>
      <path d="M18.9 11.2001H2.09998V9.8001H18.9V11.2001Z" fill="white"/>
      <path d="M2.09998 18.9001H18.9V17.5001H2.09998V18.9001Z" fill="white"/>
    </svg>
  )
}

const BurgerButton: FC<{
  onClick: () => void
}> = ({onClick}) => {
  return (<button onClick={onClick}>
    <Burger />
  </button>);
}

export default Menu;