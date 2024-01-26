"use client";
import { progressSpeed } from "@/utils/constants";
import {
  Image,
  Scroll,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion as m } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useSearchParams } from "next/navigation";
import { Handler, useGesture } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/three";
import { Group } from "three";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { setProjectTab } from "@/store/features/app/appSlice";

const Projects = () => {
  const {progress} = useProgress();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
  }, []);

  return <>{ready && progress >= 100 ? <AllProjects />:<></>}</>
}

const AllProjects = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll: Handler<"scroll" | "wheel" | "drag", UIEvent> = ({
    direction: [_, y],
    delta: [deltaX, deltaY],
    type,
    intentional
  }) => {

    if (y!==0 && intentional) {
      setProgress(Math.min(Math.max(
        progress + 
        (deltaY*10*(type.startsWith('pointer') ? 
        progressSpeed.pointer :
        progressSpeed.wheel))
        , 0), 1)
      );
    }
  }

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
  return (
    <div
    {...bind()}
    className="absolute top-0 left-0 w-[100dvw] h-[100dvh] z-[1]">
      <Canvas shadows>
        <ScrollControls>
          <ProjectsList setProgress={setProgress} progress={progress} activeTab={Math.round(progress*3)} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

const AnimatedImage = animated(Image)

const ProjectsList: FC<{
  activeTab: number;
  setProgress: (value: number) => void;
  progress: number;
}> = ({activeTab, setProgress, progress}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const { width, height } = useThree((state) => state.viewport);

  const { types, screen } = useMemo(() => {
    return {
      types: [
        {
          title: "3D & VFX",
          tags: ["Blender", "Unreal Engine", "Ae"],
          link: "/projects/3d",
          images: ["/images/image1.png", "/images/image2.png"],
          color: 'text-vfx-purple' as 'text-web-yellow' | 'text-design-blue' | 'text-uix-red' | 'text-vfx-purple'
        },
        {
          title: "Web Development",
          tags: ["React", "Three.js", "WebGL"],
          link: "/projects/webdev",
          images: ["/images/image1.png", "/images/image2.png"],
          color: 'text-web-yellow' as 'text-web-yellow' | 'text-design-blue' | 'text-uix-red' | 'text-vfx-purple'
        },
        {
          title: "Design & Branding",
          tags: ["Ps", "Ae", "Ai"],
          link: "/projects/design",
          images: ["/images/image1.png", "/images/image2.png"],
          color: 'text-design-blue' as 'text-web-yellow' | 'text-design-blue' | 'text-uix-red' | 'text-vfx-purple'
        },
        {
          title: "UI/UX Development",
          tags: ["Figma", "spline", "xd"],
          link: "/projects/uix",
          images: ["/images/image1.png", "/images/image2.png"],
          color: 'text-uix-red' as 'text-web-yellow' | 'text-design-blue' | 'text-uix-red' | 'text-vfx-purple'
        },
      ],
      screen: (isMobile ? "mobile" : isTablet ? "tablet" : "desktop") as
        | "tablet"
        | "mobile"
        | "desktop",
    };
  }, [isMobile, isTablet]);

  const ref = useRef<HTMLDivElement>(null);

  const {dampProgress} = useSpring({
    dampProgress: progress*-750,
    stiffness: 100,
    damping: 10,
  });

  useFrame(() => {
    if(!ref.current) return;
    ref.current.style.transform = `translateY(${dampProgress.get()}px)`
  })
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProjectTab(activeTab as 0|1|2|3))
  }, [activeTab, dispatch])

  return <>
    <Scroll>
      {/* 3D & VFX */}
      <motion.group position={[-.5, 0, 0]} scale={0.85} animate={activeTab===0 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              y: -10,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .32,
          }}>
          <AnimatedImage position={[-6, 1.5, -1]} scale={[4, 3]} url="/assets/images/nike.png" />
        </motion.group>
        <motion.group variants={{
            rest: {
              y: -15,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/vertex.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              y: -20,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-9.25, .5, -3]} scale={[4, 3]} url="/assets/images/honey.png" />
          </motion.group>
      </motion.group>
      <motion.group position={[.5, 0, 0]} scale={0.85} animate={activeTab===0 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              y: -10,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .4,
          }}>
          <AnimatedImage position={[6, 1.5, -1]} scale={[4, 3]} url="/assets/images/goli.png" />
        </motion.group>
        <motion.group variants={{
            rest: {
              y: -15,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/rifka.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              y: -20,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[9.25, .5, -3]} scale={[4, 3]} url="/assets/images/nahla.png" />
          </motion.group>
      </motion.group>
      
      {/* Web development */}
      <motion.group position={[-.5, 0, 0]} scale={0.85} animate={activeTab===1 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              x: -10,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .32,
          }}>
          <AnimatedImage position={[-6, 1.5, -1]} scale={[4, 3]} url="/assets/images/scene.png" />
        </motion.group>
        <motion.group variants={{
            rest: {
              x: -15,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/exiade1.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              x: -20,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-9.25, .5, -3]} scale={[4, 3]} url="/assets/images/building.png" />
          </motion.group>
      </motion.group>
      <motion.group position={[.5, 0, 0]} scale={0.85} animate={activeTab===1 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              x: 10,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .4,
          }}>
          <AnimatedImage position={[6, 1.5, -1]} scale={[4, 3]} url="/assets/images/nft.png" />
        </motion.group>
        <motion.group variants={{
            rest: {
              x: 15,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/grass.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              x: 20,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[9.25, .5, -3]} scale={[4, 3]} url="/assets/images/planet.png" />
          </motion.group>
      </motion.group>
 
      {/* Design & Branding */}
       <motion.group position={[-.5, -1, 0]} scale={0.85} animate={activeTab===2 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              y: -10,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .32,
          }}>
          <AnimatedImage position={[-6, 1.5, -1]} scale={[4, 3]} url="/assets/images/greek.gif" />
        </motion.group>
        <motion.group variants={{
            rest: {
              y: -15,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/design1.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              y: -20,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-9.25, .5, -3]} scale={[4, 3]} url="/assets/images/disleey.png" />
          </motion.group>
      </motion.group>
      <motion.group position={[.5, -1, 0]} scale={0.85} animate={activeTab===2 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              y: -10,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .4,
          }}>
          <AnimatedImage position={[6, 1.5, -1]} scale={[4, 3]} url="/assets/images/change.jpg" />
        </motion.group>
        <motion.group variants={{
            rest: {
              y: -15,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/bv.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              y: -20,
            },
            hover: {
              y: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[9.25, .5, -3]} scale={[4, 3]} url="/assets/images/motto.jpg" />
          </motion.group>
      </motion.group>

      {/* UI/UX */}
      {/* <motion.group position={[-.5, -1, 0]} scale={0.85} animate={activeTab===3 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              x: -10,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .32,
          }}>
          <AnimatedImage position={[-6, 1.5, -1]} scale={[4, 3]} url="/assets/images/cryptomate_app_logo.jpg" />
        </motion.group>
        <motion.group variants={{
            rest: {
              x: -15,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/lazo.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              x: -20,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .32,
          }}>
            <AnimatedImage position={[-9.25, .5, -3]} scale={[4, 3]} url="/assets/images/lazo_app.png" />
          </motion.group>
      </motion.group>
      <motion.group position={[.5, -1, 0]} scale={0.85} animate={activeTab===3 ? "hover" : "rest"}
      >
        <motion.group variants={{
            rest: {
              x: 10,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .4,
          }}>
          <AnimatedImage position={[6, 1.5, -1]} scale={[4, 3]} url="/assets/images/cryptomate_app_logo.jpg" />
        </motion.group>
        <motion.group variants={{
            rest: {
              x: 15,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[7.625, 1, -2]} scale={[4, 3]}  url="/assets/images/lazo.png" />
          </motion.group>
          <motion.group variants={{
            rest: {
              x: 20,
            },
            hover: {
              x: 0,
            },
          }} transition={{
            duration: .4,
          }}>
            <AnimatedImage position={[9.25, .5, -3]} scale={[4, 3]} url="/assets/images/lazo_app.png" />
          </motion.group>
      </motion.group> */}
      

    </Scroll>
    <Scroll html>
      <m.div
      className="absolute top-0 left-0 w-[100dvw] h-[100dvh] z-[-1] flex justify-center">
        <m.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
          }
        }}
        className="mt-[9.2rem]">
          <div
            ref={ref}
          >
            {types.length && types.map(({tags, title, images, color, link}, index) => <Category color={color} index={index} setProgress={setProgress} key={index} tags={tags} title={title} images={images} link={link} active={activeTab === index} />)}
          </div>
        </m.div>
      </m.div>
    </Scroll>
  </>;
};

const Category: FC<{
  title: string;
  tags: string[];
  images: string[];
  link: string;
  active?: boolean;
  setProgress: (value: number) => void;
  index: number;
  color: 'text-web-yellow' | 'text-design-blue' | 'text-uix-red' | 'text-vfx-purple'
}> = ({
  title,
  tags,
  active = false,
  setProgress,
  index,
  color,
  link
}) => {

  const [activeHover, setActiveHover] = useState(false);
  
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="group-hover mt-28" onMouseEnter={() => {setActiveHover(true)}} onMouseLeave={() => {setActiveHover(false)}} onClick={() => {setProgress(((index)/4)+0.09)}} >
        <Title color={color} title={title} active={active || activeHover} />
        <div className={`flex justify-center mt-6 ${(active || activeHover) ? 'text-white' : 'text-[#666]'}`}>
          {tags.map((tag, index) => <div key={index} className="flex py-2 px-4 justify-center items-center gap-2.5 bg-[#333] rounded-3xl">
            <Tag tag={tag} />
          </div>)}
        </div>
        <m.div
        initial={false}
        animate={(active || activeHover) ? "active" : "unactive"}
        variants={{
          active: {
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
            }
          },
          unactive: {
            opacity: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        className={`mt-6 flex justify-center`}>
          <ViewButton link={link} />
        </m.div>
      </div>
      <div className=""></div>
    </div>
  );
};

const Title: FC<{
  title: string;
  active?: boolean;
  color: 'text-web-yellow' | 'text-design-blue' | 'text-uix-red' | 'text-vfx-purple'
}> = ({
  title,
  active = false,
  color
}) => {
  return (
    <h1 className={`flex items-center justify-center text-3xl md:text-5xl lg:text-7xl ${active ? color : 'text-[#333]'} uppercase`}>{title}</h1>
  );
}

const ViewButton: FC<{
  link: string;
}> = ({
  link
}) => {
  return (
    <Link href={link} className="cursor-pointer pointer-events-auto rounded-3xl h-11 border border-white text-white flex justify-center items-center px-6">
      <span className="mt-[1px]">View case study</span>
      <span className="w-4 h-4 ml-3 mt-[-2px]">
        <RightArrow />
      </span>
    </Link>
  );
}

const Tag: FC<{tag: string}> = ({tag}) => {
  return (
    <span className="uppercase leading-3 mt-[4px]">
      {tag}
    </span>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <g clipPath="url(#clip0_1076_358)">
        <path
          d="M0.316406 9.35474H15.4111"
          stroke="white"
          strokeWidth="1.64208"
        />
        <path
          d="M8.83984 3.19751L14.9976 9.3553L9.25036 15.1026"
          stroke="white"
          strokeWidth="1.64208"
        />
      </g>
      <defs>
        <clipPath id="clip0_1076_358">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.3125 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Projects;
