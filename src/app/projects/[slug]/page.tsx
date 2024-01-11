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
} from "@react-three/drei";
import { easing } from "maath";
import { Group, Mesh, Scene, Vector3 } from "three";

export default function ProjectDetails() {
  return (
    <main className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html>
            <div style={{ transform: "translate3d(65vw, 192vh, 0)" }}>
              PMNDRS Pendant lamp
              <br />
              bronze, 38 cm
              <br />
              CHF 59.95
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
  const { width, height } = useThree((state) => state.viewport);
  useFrame(() => {
    if (!group.current) return;
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image position={[-2, -height, 0]} scale={[4, height]} url="/assets/images/cryptomate_app_logo.jpg" />
      <Image position={[2, -height, 3]} scale={3} url="/assets/images/soyrada_mobile_desktop.png" />
      <Image
        position={[-2.05, -height, 6]}
        scale={[1, 3]}
        url="/assets/images/soyrada_pack.png"
      />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/assets/images/lapalma_desktop.png" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/images/lapalma_card1.png" />
      <Image
        position={[0, -height * 1.5, 7.5]}
        scale={[1.5, 3]}
        url="/assets/images/lazo.png"
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 1.1]}
        url="/assets/images/lazo_app.png"
      />
    </group>
  );
}

function Typography() {
  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
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
        position={[-width / 2.5, -height / 10, 12]}
        {...shared}
      >
        to
      </Text>
      <Text
        anchorX="right"
        position={[width / 2.5, -height * 2, 12]}
        {...shared}
      >be</Text>
      <Text position={[0, -height * 4.624, 12]} {...shared} >home</Text>
    </>
  );
}
