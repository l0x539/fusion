'use client'
import Image from "next/image";
import {motion}  from "framer-motion";
import { useProgress } from "@react-three/drei";
import { useLayoutEffect, useState } from "react";
import { config, useSpring, animated, easings } from "@react-spring/web";
import useMeasure from "react-use-measure";
import Logo from "./Logo";

const LoadingScreen = () => {

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(0);
  const {progress} = useProgress();
  const [ref, { height }] = useMeasure();

  const screenVariants = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: 300
    },
  }

  const props = useSpring({ height: ready ? (height*progress/100) : 0,
    config: {
      ...config.molasses,
      precision: 1,
      duration: 1000,
      clamp: true,
      progress: 0.005,
      easing: easings.easeOutCirc
    },
  });

  useLayoutEffect(() => {
    setReady(true);
    setInterval(() => {
      setLoading(props.height.get());
    }, 0);
  }, [props.height]);

  const logoVariants = {
    open: {
      transform: "translateY(0px)", opacity: 1, filter: "blur(0px)",
    },
    closed: {
      transform: "translateY(30px)", opacity: 0, filter: "blur(10px)",
    },
    done: {
      transform: "translateY(-30px)", opacity: 0, filter: "blur(10px)",
    },
  }

  const finalProgress = Math.floor((((loading??0)/(parseInt(`${height}`)??0))*100));

  const final = String(finalProgress).padStart(3, "0");

  return <div className="pointer-events-none fixed top-0 left-0 overflow-hidden">
      <motion.div
        className="bg-black w-[100dvw] h-[100dvh] flex justify-center items-center"
        variants={screenVariants}
        transition={{
          delay: 0.5
        }}
        animate={finalProgress >= 100 ? 'closed' : 'open'}
      >
      <motion.div
        key={"loading-logo"}
        variants={logoVariants}
        animate={finalProgress > 0 ? finalProgress === 100 ? 'done' : 'open' : 'closed'}
        transition={{
          delay: 0.2
        }}
        initial="closed"
        hidden={finalProgress < 100}
        className="flex items-center justify-center">
        <Logo width={90*10} height={13*10} />
      </motion.div>
      <animated.h6 ref={ref} className="absolute right-8 bottom-0 font-main text-9xl font-extrabold bg-white text-white flex justify-end items-center">
        <animated.div className="absolute top-0 bottom-0 w-full bg-black" style={props} ></animated.div>
        <animated.span className="mix-blend-difference p-1">{final==="NaN"? "000" : final}</animated.span>
      </animated.h6>
    </motion.div>
  </div>;
};

export default LoadingScreen;