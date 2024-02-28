"use client";
import { Canvas, GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Hands, VRButton, XR } from "@react-three/xr";
import {
  OrbitControls,
  Plane,
  Sky,
  Sphere,
  useVideoTexture,
} from "@react-three/drei";
import { usePlane, Physics, useSphere } from "@react-three/cannon";
import { FC, Fragment, useEffect, useState } from "react";
import { Mesh, VideoTexture } from "three";

function HandsReady(props: any) {
  const [ready, setReady] = useState(false);
  const { gl } = useThree();
  useEffect(() => {
    if (ready) return;
    const joint = (gl.xr as any).getHand(0).joints["index-finger-tip"];
    if (joint?.jointRadius !== undefined) return;
    const id = setInterval(() => {
      const joint = (gl.xr as any).getHand(0).joints["index-finger-tip"];
      if (joint?.jointRadius !== undefined) {
        setReady(true);
      }
    }, 500);
    return () => clearInterval(id);
  }, [gl, ready]);

  return ready ? props.children : null;
}

function JointCollider({ index, hand }: { index: number; hand: number }) {
  const { gl } = useThree();
  const handObj = (gl.xr as any).getHand(hand);
  const joint = handObj.joints[joints[index]] as any;
  const size = joint.jointRadius ?? 0.0001;
  const [tipRef, api] = useSphere<Mesh>(() => ({
    args: [size],
    position: [-1, 0, 0],
  }));
  useFrame(() => {
    if (joint === undefined) return;
    api.position.set(joint.position.x, joint.position.y, joint.position.z);
  });

  return (
    <Sphere ref={tipRef} args={[size]}>
      <meshBasicMaterial transparent opacity={0} attach="material" />
    </Sphere>
  );
}

const HandsColliders = (): any =>
  [...Array(25)].map((_, i) => (
    <Fragment key={i}>
      <JointCollider index={i} hand={0} />
      <JointCollider index={i} hand={1} />
    </Fragment>
  ));

function Screen({
  width,
  height,
  texture,
  position,
  rotation,
}: {
  width: number;
  height: number;
  texture: VideoTexture;
  position: [number, number, number];
  rotation: [number, number, number];
}) {
  const [screenRef] = usePlane<Mesh>(() => ({
    position,
    rotation,
    mass: 1,
    args: [width, height],
    type: "Kinematic",
  }));

  return (
    <mesh position={position} rotation={rotation} ref={screenRef}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Kitchen from "./Kitchen";

const Logo: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/fusion.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={5.646}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002_1.geometry}
          material={materials.SVGMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve002_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/fusion.glb");

const Scene = () => {
  const nikeTexture = useVideoTexture("/assets/images/nike.mp4");
  const rifkaTexture = useVideoTexture("/assets/images/rifka.mp4");
  const nahlaTexture = useVideoTexture("/assets/images/nahla.mp4");
  const [floorRef] = usePlane<Mesh>(() => ({
    args: [10, 10],
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: "Static",
  }));

  return (
    <>
      <ambientLight intensity={1.5 * Math.PI} />
      <Sky />
      <Plane ref={floorRef} args={[10, 10]} receiveShadow>
        <meshStandardMaterial attach="material" color="#fff" />
      </Plane>
      <Kitchen
        scale={1.5}
        position={[0, 0.01, 3]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Hands />
      <HandsReady>
        <HandsColliders />
      </HandsReady>
      <Logo rotation={[0, -Math.PI / 2, 0]} position={[0, 3, -2]} />
      {[
        {
          width: 480 * 0.003,
          height: 848 * 0.003,
          texture: rifkaTexture,
          position: [1.5, 1.5, -2] as [number, number, number],
          rotation: [0, -Math.PI / 3, 0] as [number, number, number],
        },
        {
          width: 480 * 0.003,
          height: 848 * 0.003,
          texture: nikeTexture,
          position: [0, 1.5, -2 - 0.9] as [number, number, number],
          rotation: [0, 0, 0] as [number, number, number],
        },
        {
          width: 480 * 0.003,
          height: 848 * 0.003,
          texture: nahlaTexture,
          position: [-1.5, 1.5, -2] as [number, number, number],
          rotation: [0, Math.PI / 3, 0] as [number, number, number],
        },
      ].map(({width, height, texture, position, rotation}, index) => (
        <Screen
          key={index}
          width={width}
          height={height}
          texture={texture}
          position={position}
          rotation={rotation}
        />
      ))}
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[1, 8, 1]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </>
  );
};

const VrProjects = () => {
  return (
    <>
      <main className="w-screen h-screen">
        <VRButton />
        <Canvas flat dpr={[1, 1.5]} gl={{ antialias: false }}>
          <XR>
            <Physics
              gravity={[0, -2, 0]}
              iterations={20}
              defaultContactMaterial={{
                friction: 0.09,
              }}
            >
              <Scene />
            </Physics>
          </XR>
        </Canvas>
      </main>
    </>
  );
};

export default VrProjects;

export const joints = [
  "wrist",
  "thumb-metacarpal",
  "thumb-phalanx-proximal",
  "thumb-phalanx-distal",
  "thumb-tip",
  "index-finger-metacarpal",
  "index-finger-phalanx-proximal",
  "index-finger-phalanx-intermediate",
  "index-finger-phalanx-distal",
  "index-finger-tip",
  "middle-finger-metacarpal",
  "middle-finger-phalanx-proximal",
  "middle-finger-phalanx-intermediate",
  "middle-finger-phalanx-distal",
  "middle-finger-tip",
  "ring-finger-metacarpal",
  "ring-finger-phalanx-proximal",
  "ring-finger-phalanx-intermediate",
  "ring-finger-phalanx-distal",
  "ring-finger-tip",
  "pinky-finger-metacarpal",
  "pinky-finger-phalanx-proximal",
  "pinky-finger-phalanx-intermediate",
  "pinky-finger-phalanx-distal",
  "pinky-finger-tip",
];
