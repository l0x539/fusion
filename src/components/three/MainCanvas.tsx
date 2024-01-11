'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import { ACESFilmicToneMapping, LinearSRGBColorSpace } from "three";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import Background from "./Background";
import { getGPUTier } from "detect-gpu";
import NoiseBackground from "./NoiseBackground";
import { useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "@/store/hooks";
import { selectGl } from "@/store/features/gl/glSlice";
// import { OrbitControls } from "@react-three/drei";

const MainCanvas: FC<{
}> = () => {
  const [gpuTier, setGpuTier] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  useEffect(() => {
    getGPUTier().then((gpuTier) => {
      setGpuTier(gpuTier.tier);
    })
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-[100dvw] h-[100dvh] z-[-1]">
        <Canvas
        gl={{
          outputColorSpace: LinearSRGBColorSpace,
          antialias: true, 
          toneMapping: ACESFilmicToneMapping,
          powerPreference: "high-performance",
          toneMappingExposure: 0.9,
        }}
        camera={{ position: [0, 0, 7], fov: 60 }} dpr={[1, 2]}>
          <color attach="background" args={["black"]} />
          <Background gpuTier={gpuTier} />
          <NoiseBackground />
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;