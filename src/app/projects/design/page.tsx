/* eslint-disable jsx-a11y/alt-text */
'use client'
import { FC, ReactNode, useMemo, useRef, useState } from "react";
import {
  Canvas,
  MeshProps,
  createPortal,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  useFBO,
  useGLTF,
  useScroll,
  Text,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  ImageProps,
  useVideoTexture,
} from "@react-three/drei";
import { easing } from "maath";
import { Group, Mesh, Scene, Vector3 } from "three";
import { useMediaQuery } from "react-responsive";

export default function ProjectDetails() {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <main className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.2} pages={6} distance={1.1}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div className="text-xl md:text-3xl" style={{ transform: isMobile ? "translate3d(52vw, 180vh, 0)" : isTablet ? "translate3d(58vw, 155vh, 0)" : "translate3d(52vw, 155vh, 0)", color:"white" }}>
              Craft a
              <br />
              compeling
              <br />
              brand essence
              <br />
              for your identity
            </div>
          </Scroll>
          {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
               By default threejs will only process objects if they are "seen" by the camera leading 
                to jank as you scroll down. With <Preload> that's solved.  */}
          <Preload />
        </ScrollControls>
      </Canvas>
    </main>
  );
}

function Images() {
  const group = useRef<Group & {children: (any)[]}>(null);
  const data = useScroll();
  const { width, height, aspect } = useThree((state) => state.viewport);
  const bvTexture = useVideoTexture("/assets/images/broadVision.mp4")
  const [showMotto, setMotto] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const vec3Moto = useMemo(() => new Vector3(0.75, -height*3-(height*(1/aspect)*.08), 10.5), [aspect, height]);
  const vec3Moto0 = useMemo(() => new Vector3(0, -height*3-(height*(1/aspect)*.08), 6.5), [aspect, height]);
  
  useFrame(() => {
    if (!group.current) return;
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3, 0.5) / 2;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);

    if (showMotto) {
      group.current.children[4].position.lerp(vec3Moto0, .04)
    } else {
      group.current.children[4].position.lerp(vec3Moto, .04)
    }
    // group.current.children[6].material.zoom =
    //   1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });

  return (
    <group ref={group}>
      <Image position={[isMobile ? 0 : -width*aspect*0.12, -height, 0]} scale={[width*(isMobile?0.9:0.4), width*(isMobile?0.9:0.4)]} url="/assets/images/design1.png" />
      <mesh
        position={[isMobile? 0:width*aspect*0.09, isMobile ? -height*2.3 : -height*2-(height*(1/aspect)*.6), 3]}
        >
        <planeGeometry args={[width*(isMobile ? .8 : .4), width*(isMobile ? .8 : .4)]} />
        <meshBasicMaterial map={bvTexture} toneMapped={false} />
      </mesh>
      <Image
        position={[isMobile ? 0 : -width*aspect*0.08,isMobile ? -height*2-(height*(1/aspect))+3 : -height*2-(height*(1/aspect)), 6]}
        scale={[isMobile? 8*.2*.9 : width*.2*.9, isMobile? 15*.3 *.9 : width*.3*.9]}
        url="/assets/images/Beos - Brand-1.png"
      />
      <Image position={[isMobile ? 0 : -width*aspect*.065, isMobile ? -height*2.8 : -height*3-(height*(1/aspect)*.2), 9]} scale={[width*(0.4*1/aspect), 2]} url="/assets/images/greek.gif" />
      <Image position={[0., -height*3-(height*(1/aspect)*.08), 10.5]} scale={1.5} url="/assets/images/motto.jpg" onClick={(e) => {
        setMotto(!showMotto);
      }} />
      <Image
        position={[0, isMobile? -height * (6.8-1) - height / (5+1) : -height * (6.5-1) - height / (5+1), 0]}
        scale={[width, height / 1.1 + height*2]}
        
        url="/assets/images/disleey.png"
      />
    </group>
  );
}

function Typography() {
  const state = useThree();
  const { width, height, aspect } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  );
  const shared = {
    font: '/assets/fonts/HelveticaNeueMedium.woff',
    letterSpacing: -0.1,
    color: "white",
  };
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <Text
        anchorX="left"
        position={[-width / 2.5, -height / 200, 12]}
        {...shared}
        fontSize={(aspect)*.2}
        color={"#1B71F2"}
      >
        Design & Branding
      </Text>

      <Text
        anchorX="right"
        position={[width / 2.5, -height * 2.3, 8]}
        fontSize={(aspect)*.2}
        {...shared}
      >Aesthetics</Text>
      <Text
        fontSize={(aspect)*.3}
        position={[0, -height * 4.624, 6]} {...shared} >Creativity</Text>
      <Text
        fontSize={(aspect)*.3}
        position={[0, isMobile ? -height * 10.5 : -height * 9.1, 7]} {...shared} >{'Shape your future \nwith fusion.'}</Text>
    </>
  );
}
