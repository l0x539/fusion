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
        <ScrollControls damping={0.2} pages={5} distance={2}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div className="text-3xl" style={{ transform: "translate3d(50vw, 155vh, 0)", color:"white" }}>
              Elevate you concept
              <br />
              with CGI mastery. 
              <br />
              Bring it to life
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
  const nikeTexture = useVideoTexture("/assets/images/nike.mp4")
  const rifkaTexture = useVideoTexture("/assets/images/rifka.mp4")
  const nahlaTexture = useVideoTexture("/assets/images/nahla.mp4")

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
        position={[-width*0.2, -height, 0]}
        >
        <planeGeometry args={[width*(480*.0006*(1/aspect)), (width*(848)*.0006*(1/aspect))]} />
        <meshBasicMaterial map={nikeTexture} toneMapped={false} />
      </mesh>
      <mesh
        position={[isMobile ? width*aspect*-0.4 : width*aspect*0.07, isMobile ? -height*2-(height*(1/aspect)*.5) : -height*2-(height*(1/aspect)*.6), 1]}
        >
        <planeGeometry args={[width*(480*.0006*(1/aspect)), width*(848*.0006*(1/aspect))]} />
        <meshBasicMaterial map={rifkaTexture} toneMapped={false} />
      </mesh>

      <Videos />

      <mesh
        position={[isMobile ? 0.2 : 0, -height * (5-1) - height / (5+1), 0]}
        >
        <planeGeometry args={[width*(480*(isMobile ? .0015 : .0008)), width*(848*(isMobile ? .0015 : .0008))]} />
        <meshBasicMaterial map={nahlaTexture} toneMapped={false} />
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
  const wahaTexture = useVideoTexture("/assets/images/waha.mp4")
  const shoeTexture = useVideoTexture("/assets/images/shoe.mp4")
  const vertexTexture = useVideoTexture("/assets/images/vertex.mp4")
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
      position={[isMobile ? -width*aspect*0.3 : -width*aspect*0.05, isMobile ? -height*2-(height*(1/aspect)*0.93) : -height*2-(height*(1/aspect)), 7]}
      >
      <planeGeometry args={[isMobile ? width*(480*.0006) : width*(480*.0003), isMobile ? width*(848*.0006) : width*(848*.0003)]} />
      <meshBasicMaterial map={wahaTexture} toneMapped={false} />
    </mesh>
    <mesh
      position={[-width*aspect*.065, isMobile ? -height*3-(height*(1/aspect)*-.38) : -height*3-(height*(1/aspect)*-.02), 9]}
      >
      <planeGeometry args={[isMobile ? width*(480*.0006) : width*(480*.0002), isMobile ? width*(848*.0006) : width*(848*.0002)]} />
      <meshBasicMaterial map={vertexTexture} toneMapped={false} />
    </mesh>
    <mesh
      position={[isMobile ? 0.3 : 0.75, isMobile ? -height*3+(height*(1/aspect)*.14) : -height*3-(height*(1/aspect)*.08), 10.5]}
      >
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial map={shoeTexture} toneMapped={false} />
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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return (
    <>
      <Text
        anchorX="left"
        position={[-width / 2.5, -height / 200, 12]}
        {...shared}
        fontSize={(aspect)*.2}
        color={"#6E3F52"}
      >
        CGI / VFX Creation
      </Text>
      <Text
        anchorX="right"
        position={[isMobile ? width/1.2 : width / 2, -height * 2.3, 4]}
        fontSize={(aspect)*.25}
        {...shared}
      >Imagination</Text>
      <Text
        fontSize={(aspect)*.3}
        position={[0, -height * 4.624, 6]} {...shared} >Dedication</Text>
      <Text
        fontSize={(aspect)*.3}
        position={[0, isMobile ? -height * 9.6 : -height * 8.5, 7]} {...shared} >{'bring what you \nimagine to life!'}</Text>
    </>
  );
}
