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
  return (
    <main className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.2} pages={6} distance={0.5}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div className="text-3xl" style={{ transform: "translate3d(50vw, 150vh, 0)", color:"white" }}>
              Build a
              <br />
              stunning & futuristic 
              <br />
              Website
              <br />
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
  const nftTexture = useVideoTexture("/assets/images/nft-video.mp4")
  const planetTexture = useVideoTexture("/assets/images/planet-low.mp4")
  const exiadeTexture = useVideoTexture("/assets/images/exiade-low.mp4")

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  useFrame(() => {
    if (!group.current) return;
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[3].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    // group.current.children[6].material.zoom =
    //   1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <mesh
        position={[-width*aspect*0.12, -height, 0]}
        >
        <planeGeometry args={[isTablet ? width*(((1280 / 720))*.8) : width*((1/aspect)*.8), (height*(1/(1280 / 720))*.8)]} />
        <meshBasicMaterial map={planetTexture} toneMapped={false} />
      </mesh>
      <mesh
        position={[width*aspect*0.07, isMobile ? -height*2-(height*(1/aspect)*.6)-2 : -height*2-(height*(1/aspect)*.6), 1]}
        >
        <planeGeometry args={[isMobile ? 1280*.002 : width*.4, isMobile ? 720*0.002 : height*.4]} />
        <meshBasicMaterial map={exiadeTexture} toneMapped={false} />
      </mesh>

      <Videos />

      <mesh
        position={[0, -height * (5), 0]}
        >
        <planeGeometry args={[1280*.002, 720*.002]} />
        <meshBasicMaterial map={nftTexture} toneMapped={false} />
      </mesh>
      {/* <Image
        position={[0, -height * (5-1) - height / (5+1), 0]}
        scale={[width, height / 1.1]}
        url="/assets/images/nft-video.mp4"
      /> */}
    </group>
  );
}

const Videos = () => {
  const { width, height, aspect } = useThree((state) => state.viewport);
  const sceneTexture = useVideoTexture("/assets/images/scene-low.mp4")
  const grassTexture = useVideoTexture("/assets/images/grass-low.mp4")
  const buildingTexture = useVideoTexture("/assets/images/building-low.mp4")
  const group = useRef<Group & {children: (any)[]}>(null);
  const data = useScroll();
  useFrame(() => {
    if (!group.current) return;
    group.current.children[0].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[1].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    // group.current.children[6].material.zoom =
    //   1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return <group ref={group}>
    <mesh
      position={[-width*aspect*0.05, -height*2-(height*(1/aspect)), 7]}
      >
      <planeGeometry args={[isMobile ? 1280*.001 : width*.3, isMobile ? 720*.001 : height*.3]} />
      <meshBasicMaterial map={buildingTexture} toneMapped={false} />
    </mesh>
    <mesh
      position={[isMobile ? -width*aspect*.065+.075 : -width*aspect*.065, isMobile ? -height*0.-(height*(1/aspect)) :  -height*3-(height*(1/aspect)*-.02), 9]}
      >
      <planeGeometry args={[isMobile ? width*(0.25*1/aspect) : width*(0.4*1/aspect), isMobile ? 0.8 :1.3]} />
      <meshBasicMaterial map={sceneTexture} toneMapped={false} />
    </mesh>
    <mesh
      position={[isMobile ? 0 : 0.75, isMobile ? -height*3-(height*(1/aspect)*-.05) : -height*3-(height*(1/aspect)*.08), 10.5]}
      >
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial map={grassTexture} toneMapped={false} />
    </mesh>
  </group>
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
  return (
    <>
      <Text
        anchorX="left"
        position={[-width / 2.5, -height / 200, 12]}
        {...shared}
        fontSize={(aspect)*.2}
        color={"#FFF852"}
      >
        Web Development
      </Text>
      <Text
        anchorX="right"
        position={[width / 2.5, -height * 2.3, 8]}
        fontSize={(aspect)*.2}
        {...shared}
      >Precision</Text>
      <Text
        fontSize={(aspect)*.3}
        position={[0, -height * 4.624, 6]} {...shared} >Innovation</Text>
      <Text
        fontSize={(aspect)*.3}
        position={[0, -height * 8.624, 7]} {...shared} >{'Build the future \nwith Us!'}</Text>
    </>
  );
}
