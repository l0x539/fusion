"use client";
import { progressSpeed } from "@/utils/constants";
import {
  Scroll,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Handler, useGesture } from "@use-gesture/react";
import { useSpring } from "@react-spring/three";

const Projects = () => {
  const {progress} = useProgress();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true)
  }, []);

  return <>{progress >= 100 && <AllProjects />}</>
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
      setProgress(() => 
        Math.min(Math.max(
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
      <Canvas>
        <ScrollControls>
          <ProjectsList setProgress={setProgress} progress={progress} activeTab={Math.round(progress*3)} />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

const ProjectsList: FC<{
  activeTab: number;
  setProgress: (value: number) => void;
  progress: number;
}> = ({activeTab, setProgress, progress}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const { types, screen } = useMemo(() => {
    return {
      types: [
        {
          title: "Web Development",
          tags: ["React", "Three.js", "WebGL"],
          link: "/projects/webdev",
          images: ["/images/image1.png", "/images/image2.png"],
        },
        {
          title: "Design & Branding",
          tags: ["Ps", "Ae", "Ai"],
          link: "/projects/design",
          images: ["/images/image1.png", "/images/image2.png"],
        },
        {
          title: "UI/UX Development",
          tags: ["Figma", "spline", "xd"],
          link: "/projects/uiuix",
          images: ["/images/image1.png", "/images/image2.png"],
        },
        {
          title: "3D & VFX",
          tags: ["Blender", "Unreal Engine", "Ae"],
          link: "/projects/3d",
          images: ["/images/image1.png", "/images/image2.png"],
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


  return <Scroll html>
    <motion.div
    className="absolute top-0 left-0 w-[100dvw] h-[100dvh] z-[-1] flex justify-center">
      <motion.div
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
          {types.length && types.map(({tags, title, images, link}, index) => <Category index={index} setProgress={setProgress} key={index} tags={tags} title={title} images={images} link={link} active={activeTab === index} />)}
        </div>
      </motion.div>
    </motion.div>
  </Scroll>;
};

const Category: FC<{
  title: string;
  tags: string[];
  images: string[];
  link: string;
  active?: boolean;
  setProgress: (value: number) => void;
  index: number;
}> = ({
  title,
  tags,
  active = false,
  setProgress,
  index
}) => {

  const [activeHover, setActiveHover] = useState(false);

  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="mt-20" onMouseEnter={() => {setActiveHover(true)}} onMouseLeave={() => {setActiveHover(false)}} onClick={() => {setProgress(((index)/4))}} >
        <Title title={title} active={active || activeHover} />
        <div className={`flex justify-center mt-6 ${(active || activeHover) ? 'text-white' : 'text-[#666]'}`}>
          {tags.map((tag, index) => <div key={index} className="flex py-2 px-4 justify-center items-center gap-2.5 bg-[#333] rounded-3xl">
            <Tag tag={tag} />
          </div>)}
        </div>
        <motion.div
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
          <ViewButton />
        </motion.div>
      </div>
      <div className=""></div>
    </div>
  );
};

const Title: FC<{
  title: string;
  active?: boolean;
}> = ({
  title,
  active = false
}) => {
  return (
    <h1 className={`text-7xl ${active ? 'text-[#FFF852]' : 'text-[#333]'} uppercase`}>{title}</h1>
  );
}

const ViewButton = () => {
  return (
    <div className="cursor-pointer pointer-events-auto rounded-3xl h-11 border border-white text-white flex justify-center items-center px-6">
      <span className="mt-[1px]">View case study</span>
      <span className="w-4 h-4 ml-3 mt-[-2px]">
        <RightArrow />
      </span>
    </div>
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
