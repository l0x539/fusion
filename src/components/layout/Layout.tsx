'use client'
import { FC, ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "@/store/store";
import { usePathname, useSearchParams } from "next/navigation";
import { Leva } from "leva";
import MainCanvas from "../three/MainCanvas";
import CookiesConsent from "../CookiesConsent";
import { disabledPages } from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectApp, setScrolled } from "@/store/features/app/appSlice";
import NavigationControls from "../three/NavigationControls";
import LoadingScreen from "../LoadingScreen";

const Layout: FC<{
  children: ReactNode;
}> = ({children}) => {

  return (
    <Provider store={store}>
       <PageContent>
        {children}
       </PageContent>
    </Provider>
    );
};

const PageContent: FC<{
  children: ReactNode;
}> = ({children}) => {
  const { isMenuOpen } = useAppSelector(selectApp);
  const pathname = usePathname();
  const {
    scrollHintBottom,
    isScrolled
  } = useAppSelector(selectApp);
  const searchParams  = useSearchParams();
  const dispatch = useAppDispatch();
  const [initScroll, setInitScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isScrolled) {
        dispatch(setScrolled(false));
      }
      setInitScroll(true);
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>
    <NavigationControls>     
      <div className="pointer-events-auto">
        <Leva collapsed={false} hidden={!searchParams.has('controls')} />
      </div>
      <Header />
      {!isMenuOpen ? children : <></>}
      <ScrollHint scrollHint={!isScrolled && initScroll && !disabledPages.some(p => pathname.startsWith(p.path))} />
      {/* {scrollHintBottom ? <ScrollHint scrollHint={true} /> : false} */}
      <CookiesConsent />
    </NavigationControls>
    <div className="fixed top-0 left-0 w-[100dvw] h-[100dvh] z-[-1] pointer-events-auto">
      <MainCanvas />
    </div>
    <LoadingScreen />
  </>;
}

const ScrollHint: FC<{
  scrollHint: boolean;
}> = ({
  scrollHint
}) => {
  const pathname = usePathname();
  const { isMenuOpen } = useAppSelector(selectApp)

  return (
    <div className={`transition-all duration-800 scroll-hint absolute ${pathname === '/' ? 'bottom-12':'bottom-8'} left-1/2 transition-all ${scrollHint && ! isMenuOpen ? 'opacity-100' : 'opacity-0'}`}><span></span></div>
  )
}

export default Layout;