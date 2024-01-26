import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from "react";
import Logo from "../Logo";
import { Close } from "../Icons";
import Menu from "../Menu";
import { useAppSelector } from "@/store/hooks";
import { selectApp } from "@/store/features/app/appSlice";
import { COMING_SOON } from "@/utils/constants";

const Header = () => {
  const searchParams  = useSearchParams();
  const pathname  = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMenuOpen } = useAppSelector(selectApp)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(() => document.body.getBoundingClientRect().top !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerOpacity = isScrolled ? 1 : 0;

  return (<header className={`fixed top-0 z-80 w-[100dvw] px-6 tablet:px-16 desktop:px-28 flex justify-between z-[100] transition-all pointer-events-auto bg-black ${(pathname.startsWith('/portfolio') || pathname.startsWith('/culture')) && isScrolled ? 'bg-opacity-95' : 'bg-opacity-0'}`}>
    <Link href={searchParams.get('demo') ? ((pathname.startsWith('/services/') ? '/services?' : '/?') + createQueryString('demo', `${searchParams.get('demo')}`)) : (pathname.startsWith('/services/') ? '/services' : '/')} className="py-12">
      {pathname.startsWith('/services/') && !pathname.startsWith('/services/our-method') ? 
      <CloseServices /> :
      !isMenuOpen ? <div className="animate-fade-in"><Logo width={90} height={13} /></div> : <></>}
    </Link>
    {((pathname.startsWith('/services/') && pathname !== '/services/our-method/1')) ? <></>: COMING_SOON ? <></> : <div className="py-12">
      <Menu />
    </div>}
  </header>);
};

const CloseServices = () => {
  const [hovered, setHovered] = useState(false);

  return <div onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} className="animate-fade-in">
    <Close hovered={hovered} />
  </div>
}

export default Header;