import React, { useRef, useEffect, useCallback, useMemo, useLayoutEffect } from "react";

import { RootState, useFrame, useThree } from "@react-three/fiber";
import { Object3D, ShaderMaterial, Vector2, Vector3, Clock, BackSide, FrontSide, Color } from "three";
import { sphereVertexShader } from "@/utils/shaders/vertexShaders";
import { sphereFragmentShader } from "@/utils/shaders/fragmentShaders";
import { makeNoise4D } from "open-simplex-noise";
import { MarchingCube, MarchingCubes, useFBO } from "@react-three/drei";
import { MarchingCubes as MC } from "three/examples/jsm/objects/MarchingCubes";

function lerp(v0: number, v1: number, t: number) {
  return v0*(1-t)+v1*t
}

function FusionBlobs() {

  const { scene } = useThree();

  const ref = useRef<MC>();

  const numblobs = 3;
  const subtract = 12;
  const strength = 1.2 / ((Math.sqrt(numblobs) - 1) / 4 + 1);

  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();

  const {
    defaultUniforms,
    positionData,
    v3,
    noise
  } = useMemo(() => ({
    defaultUniforms: {
      uTexture: {
        value: null
      },
      uIorR: { value: 1.15 },
      uIorY: { value: 1.16 },
      uIorG: { value: 1.18 },
      uIorC: { value: 1.22 },
      uIorB: { value: 1.22 },
      uIorP: { value: 1.22 },
      uRefractPower: {
        value: 0.22
      },
      uChromaticAberration: {
        value: 0.04
      },
      uSaturation: { value: 1.03 },
      uShininess: { value: 2000.0 },
      uDiffuseness: { value: 0.15 },
      uFresnelPower: { value: 7.0 },
      uLight: {
        value: new Vector3(-1.0, 1.0, 1.0)
      },
      winResolution: {
        value: new Vector2(
          window.innerWidth,
          window.innerHeight
        ).multiplyScalar(Math.min(window.devicePixelRatio, 2))
      },
      uLoop: {value: navigator.userAgent.indexOf('Mac OS X') == -1 ? 12 : 8}, // TODO: Add gputier
    },
    v3: new Vector3,
    positionData: [] as Vector3[],
    noise: makeNoise4D(Date.now())
    }), []);

  // const init = useCallback(
  //   function init() {
  //     ref.current = new MarchingCubes(
  //       64,
  //       new ShaderMaterial({
  //         vertexShader: sphereVertexShader,
  //         fragmentShader: sphereFragmentShader,
  //         uniforms: defaultUniforms
  //       }),
  //       false,
  //       false
  //     );

  //     scene.add(ref.current);

  //     return () => scene.remove(ref.current ?? new Object3D);
  //   },
  //   [ref, scene]
  // );

  useLayoutEffect(() => {
    if (ref.current) {
      for (let i = 0; i < ref.current.geometry.attributes.position.count; i++){
        v3.fromBufferAttribute(ref.current.geometry.attributes.position, i);
        positionData.push(v3.clone());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame(({ clock, gl, camera }: RootState) => {
    if (!ref.current) return;
    const time = clock.getElapsedTime();


    positionData.forEach((p, idx) => {
      const sNoise = noise(
        p.x,
        p.y,
        p.z,
        time
      );
      v3.copy(p).addScaledVector(p, sNoise);
      ref.current?.geometry.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    });

    // ref.current?.geometry.computeVertexNormals();
    // ref.current.geometry.attributes.position.needsUpdate = true;

    if (ref.current) {
      ref.current.reset();
      
      for (let i = 0; i < numblobs; i++) { 
        const x = Math.sin(
          i + time * (1 + 0.5 * Math.cos(((2 * Math.PI) / 3) * i))
        );
        const z = Math.cos(
          i + time * (1 + 0.5 * Math.cos(((2 * Math.PI) / 3) * i))
        );
        const y = Math.sin(
          i + time * (1 + 0.5 * Math.cos(((2 * Math.PI) / 3) * i))
        );

        const sNoise = noise(
          x,
          y,
          z,
          time
        );
        v3.copy(ref.current.position).addScaledVector(ref.current.position, sNoise);

        const ballx = v3.x;
        const ballz = v3.z;
        const bally = v3.y;
        ref.current.addBall(ballx, bally, ballz, strength, subtract);

      }
    }


    // Reflection / Refraction
    ref.current.visible = false

    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    (ref.current.material as any).uniforms.uTexture = {value: backRenderTarget.texture};
    (ref.current.material as any).side = BackSide;

    ref.current.visible = true;

    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    (ref.current.material as any).uTexture = {value: mainRenderTarget.texture};
    (ref.current.material as any).side = FrontSide;

    ref.current.visible = true
    
    gl.setRenderTarget(null)
  });

  return (
    <group position={[0, 0, 0 ]}>
      <MarchingCubes ref={ref} resolution={64} maxPolyCount={2000} scale={20}>
        <shaderMaterial
          vertexShader={sphereVertexShader}
          fragmentShader={sphereFragmentShader}
          uniforms={{
            ...defaultUniforms
          }}
        />
      </MarchingCubes>
    </group>
  );
}

export default FusionBlobs;
