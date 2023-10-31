import { steps } from "@/utils/constants";
import { dropFragmentShader } from "@/utils/shaders/fragmentShaders";
import { dropVertexShader } from "@/utils/shaders/vertexShaders";
import { Text, useFBO, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BackSide, CatmullRomCurve3, FrontSide, Group, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3 } from "three";

const DropEffect: FC<{
  // uniforms: {
  //   diffuseness: number;
  //   fresnelPower: number;
  //   iorR: number;
  //   iorY: number;
  //   iorG: number;
  //   iorC: number;
  //   iorB: number;
  //   iorP: number;
  //   chromaticAberration: number;
  //   refraction: number;
  // };
}> = ({}) => {
  const mesh = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null);
  const dotRef = useRef<Group>(null);
  const dotRef1 = useRef<Group>(null);
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();
  const pathname = usePathname();

  const {
    defaultUniforms,
    v3,
  } = useMemo(
    () => ({
      defaultUniforms: {
        uTexture: {
          value: null
        },
        uIorR: { value: 1.15 },
        uIorY: { value: 1.16 },
        uIorG: { value: 1.18 },
        uIorC: { value: 2.22 },
        uIorB: { value: 1.22 },
        uIorP: { value: 1.22 },
        uRefractPower: {
          value: 0.22
        },
        uChromaticAberration: {
          value: 1.4
        },
        uSaturation: { value: 0.0 },
        uShininess: { value: 40.0 },
        uDiffuseness: { value: 0.2 },
        uFresnelPower: { value: 20.0 },
        uLight: {
          value: new Vector3(-1.0, 1.0, 1.0)
        },
        winResolution: {
          value: new Vector2(
            window.innerWidth,
            window.innerHeight
          ).multiplyScalar(Math.min(window.devicePixelRatio, 2))
        },
        noiseStrength: {value: 0},
        noiseSpeed: {value: 0},
        noiseX: {value: 0},
        noiseY: {value: 0},
        noiseZ: {value: 0},
        uLoop: {value: navigator.userAgent.indexOf('Mac OS X') == -1 ? 12 : 8}, // TODO: Add gputier
      },
      v3: new Vector3,
    }),
    []
  );

  const [currentStep, setCurrentStep] = useState({
    diffuseness: defaultUniforms.uDiffuseness.value,
    fresnelPower: defaultUniforms.uFresnelPower.value,
    iorR: defaultUniforms.uIorR.value,
    iorY: defaultUniforms.uIorY.value,
    iorG: defaultUniforms.uIorG.value,
    iorC: defaultUniforms.uIorC.value,
    iorB: defaultUniforms.uIorB.value,
    iorP: defaultUniforms.uIorP.value,
    chromaticAberration: defaultUniforms.uChromaticAberration.value,
    refraction: defaultUniforms.uRefractPower.value,
  });

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const step = steps.findLast((s) => s.path === pathname);
    setCurrentStep((prevState) => ({
      diffuseness: step?.dropUniforms.diffuseness ?? prevState.diffuseness,
      fresnelPower: step?.dropUniforms.fresnelPower ?? prevState.fresnelPower,
      iorR: step?.dropUniforms.iorR ?? prevState.iorR,
      iorY: step?.dropUniforms.iorY ?? prevState.iorY,
      iorG: step?.dropUniforms.iorG ?? prevState.iorG,
      iorC: step?.dropUniforms.iorC ?? prevState.iorC,
      iorB: step?.dropUniforms.iorB ?? prevState.iorB,
      iorP: step?.dropUniforms.iorP ?? prevState.iorP,
      chromaticAberration: step?.dropUniforms.chromaticAberration ?? prevState.chromaticAberration,
      refraction: step?.dropUniforms.refraction ?? prevState.refraction
    }));
    setReady(true);
  }, [pathname])
  
  useFrame(({gl, scene, camera, clock}) => {
    if (!mesh.current) return;
    const bubbles = scene.getObjectsByProperty("name", "bubble");
    
    const {
      diffuseness,
      fresnelPower,
      iorR,
      iorY,
      iorG,
      iorC,
      iorB,
      iorP,
      chromaticAberration,
      refraction,
    } = currentStep;
    mesh.current.visible = chromaticAberration > 0;

    mesh.current.material.uniforms.uIorR.value = iorR;
    mesh.current.material.uniforms.uIorY.value = iorY;
    mesh.current.material.uniforms.uIorG.value = iorG;
    mesh.current.material.uniforms.uIorC.value = iorC;
    mesh.current.material.uniforms.uIorB.value = iorB;
    mesh.current.material.uniforms.uIorP.value = iorP;
    
    mesh.current.material.uniforms.uRefractPower.value = refraction;

    mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
    mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;
    mesh.current.material.uniforms.uChromaticAberration.value = (chromaticAberration + (Math.cos(clock.getElapsedTime()))*.1);

    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
    mesh.current.material.side = BackSide;

    bubbles.forEach((bubble) => {
      bubble.visible = false
    })

    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
    mesh.current.material.side = FrontSide;

    bubbles.forEach((bubble) => {
      bubble.visible = true;
    });
    
    gl.setRenderTarget(null);

    if (!dotRef.current || !dotRef1.current) return;
    dotRef.current.position.setY(dotRef.current.position.y+(Math.cos(clock.getElapsedTime()))*.01)
    dotRef.current.scale.setScalar(1+(Math.cos(clock.getElapsedTime()))*.1)

    dotRef1.current.position.setY(dotRef.current.position.y+(Math.cos(clock.getElapsedTime()))*.01)
    dotRef1.current.scale.setScalar(1+(Math.cos(clock.getElapsedTime()))*.1)
  });

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isLaptop = useMediaQuery({ minWidth: 991, maxWidth: 1560 });
  const screen = useMemo(() => (isMobile ? 'mobile' : isTablet ? 'tablet' : isLaptop ? 'laptop' : 'desktop') as 'tablet' | 'mobile' | 'desktop', [isLaptop, isMobile, isTablet])

  const {
    d1Pos,
    d2Pos,
    d3Pos
  } = useMemo(() => ({
    d1Pos: {
      mobile: [-11*.4, 4*.4, -.1] as [number, number, number],
      tablet: [-11*.6, 4*.6, -.1] as [number, number, number],
      laptop: [-11*.8, 4*.8, -.1] as [number, number, number],
      desktop: [-11, 4, -.1] as [number, number, number],
    },
    d2Pos: {
      mobile: [-11.5*.4, -1.5*.4, -.1] as [number, number, number],
      tablet: [-11.5*.6, -1.5*.6, -.1] as [number, number, number],
      laptop: [-11.5*.8, -1.5*.8, -.1] as [number, number, number],
      desktop: [-11.5, -1.5, -.1] as [number, number, number],
    },
    d3Pos: {
      mobile: [8*.4, 3*.4, -.1] as [number, number, number],
      tablet: [8*.6, 3*.6, -.1] as [number, number, number],
      laptop: [8*.8, 3*.8, -.1] as [number, number, number],
      desktop: [8, 3, -.1] as [number, number, number],
    }
  }), [])

  return (
    <group position={[0., 0., -10]} scale={1.6} visible={(currentStep.chromaticAberration > 0) && ready}>
      <group ref={dotRef}>
        <Text position={d1Pos[screen]} anchorX="center" anchorY="middle" fontSize={13} letterSpacing={-0.025} color="white" fillOpacity={currentStep.chromaticAberration > 0 ? 0.8:0}>
          .
        </Text>
      </group>
      <group>
        <Text position={d2Pos[screen]} anchorX="center" anchorY="middle" fontSize={13} letterSpacing={-0.025} color="white" fillOpacity={currentStep.chromaticAberration > 0 ? 0.8:0}>
          .
        </Text>
      </group>
      <group ref={dotRef1}>
        <Text position={d3Pos[screen]} anchorX="center" anchorY="middle" fontSize={40} letterSpacing={-0.025} color="white" fillOpacity={currentStep.chromaticAberration > 0 ? 0.8:0}>
          .
        </Text>
      </group>
      {ready && <mesh ref={mesh} position={[0, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <shaderMaterial fragmentShader={dropFragmentShader} vertexShader={dropVertexShader} 
        uniforms={defaultUniforms}
        />
      </mesh>}
    </group>
  );
};

export default DropEffect;