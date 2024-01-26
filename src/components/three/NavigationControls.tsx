import { selectApp, setScrollBottomHint, setScrolled } from "@/store/features/app/appSlice";
import { selectGl, setProgress } from "@/store/features/gl/glSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { COMING_SOON, disabledPages, progressSpeed, scrollBottom, steps } from "@/utils/constants";
import { range } from "@/utils/func";
import { Handler, useGesture } from "@use-gesture/react";
import { useControls } from "leva";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavigationControls: FC<{
  children: ReactNode;
}> = ({children}) => {
  const pathname = usePathname();
  const router = useRouter();
  const mainRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const {progress} = useAppSelector(selectGl);
  const {scrollHintBottom} = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();

  const {
    scrollSpeed
  } = useControls('ScrollSpeed', {
    scrollSpeed: {
      value: 0.2,
      min: 0,
      max: 1
    }
  })

  const handleScroll: Handler<"scroll" | "wheel" | "drag", UIEvent> = ({
    direction: [_, y],
    intentional,
    event,
    first,
    delta: [deltaX, deltaY],
    type,
    velocity: [__, velocityY]
  }) => {
    console.log(velocityY);
    
    if (y!==0) {
      const newVal = progress + (type.startsWith('pointer') ? Math.min(velocityY, 10)*-y*0.003 : Math.min(velocityY, 10)*y*.003); //(velocityY*(searchParams.has('controls') ? (scrollSpeed*.001) : type.startsWith('pointer') ? progressSpeed.pointer : progressSpeed.wheel));
      dispatch(setProgress(
        Math.min(Math.max(newVal, 0), 1)
      ));
    }
    
    if (pathname == '/culture') {
      if ((window.innerHeight + Math.round(window.scrollY)) >= (mainRef.current?.offsetHeight??0)) {
        if (first && y > 0 && scrollHintBottom) {
          router.push('/contact', 
          {
            scroll: false
          });
          dispatch(setProgress(steps.find(s => s.path === '/contact')?.range[0]??progress))
        }
        dispatch(setScrollBottomHint(true))
      } else {
        dispatch(setScrollBottomHint(false))
      }
    } else {
      dispatch(setScrollBottomHint(false))
    }

    if (y !== 0) {
      dispatch(setScrolled(true));
      const {
        path,
      } = steps.findLast((step) => {
        
        const n = range(progress, step.range[0], step.range[1])
        
        return (progress > step.range[0] && progress < step.range[1]);
      }) ?? {};
      
      if (path && path !== pathname && !disabledPages.some(p => pathname.startsWith(p.path))) {
        router.push(path, 
        {
          scroll: false
        });
      }
    }
  }

  const [passivePathname, setPassvePathname] = useState(pathname);

  useEffect(() => {

    const {
      range,
      path,
      stale
    } = steps.findLast((step) => pathname === step.path) ?? {}
    

    if (range && !((progress > (range[0])) && (progress < range[1]))) {
      dispatch(setProgress(stale??progress));
    }

    if (Object.keys(scrollBottom).some(sb => sb === pathname)) {
      if (passivePathname === scrollBottom[pathname].prev) {

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = document.body.getBoundingClientRect().left || document.documentElement.scrollLeft;
        window.scrollTo(scrollLeft, scrollTop);
    
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    
        setTimeout(() => {
          window.onscroll = function() {};
        }, 500)
      } else if (passivePathname === scrollBottom[pathname].next) {
        window.scrollTo(0, 99999)
        window.onscroll = function(e) {
          e.preventDefault()
          e.stopPropagation();
          window.scrollTo(0, 99999);
        };

        setTimeout(() => {
          window.onscroll = function() {};
        }, 500)
      }
    }

    setPassvePathname(pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const {
      range,
      path,
      stale
    } = steps.findLast((step) => pathname === step.path) ?? {}
    
    if (progress&& range && (progress === 0) && pathname !== "/") {
      setTimeout(() => {
      dispatch(setProgress(stale??progress));
      }, 500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bind = useGesture({
    // onWheel: handleScroll,
    onWheel: handleScroll,
    onScroll: handleScroll,
    onDrag: handleScroll
  }, {
    eventOptions: {
      passive: false
    },
  });

  return <main {...(COMING_SOON ? {} : bind())} className={`touch-pan-y absolute min-h-[100dvh] min-w-[100dvw] overscroll-none overflow-hidden ${(["/", "/contact", "/projects"].includes(pathname) || pathname.startsWith('/services'))  ? 'fullScreen mainWrapper' : 'mainWrapper'}`} ref={mainRef}>
    {children}
  </main>
};

export default NavigationControls;