'use client'
import { COMING_SOON, bubbleDetailFactor, disabledPages, mediaBreakPoints, postionScalar, scaleScalar, scrollLerp, steps } from "@/utils/constants";
import { sphereFragmentShader } from "@/utils/shaders/fragmentShaders";
import { sphereVertexShader } from "@/utils/shaders/vertexShaders";
import { Scroll, Text, useFBO, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { usePathname, useSearchParams } from "next/navigation";
import { makeNoise4D } from "open-simplex-noise";
import { FC, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { BackSide, CatmullRomCurve3, Color, Euler, FrontSide, Group, Mesh, Quaternion, ShaderMaterial, SphereGeometry, Sprite, Texture, Vector2, Vector3 } from "three";
import { useSpring, config } from "@react-spring/three";
import HomeEffects from "./effects/HomeEffects";
import DropEffect from "./effects/DropEffect";
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "@/store/hooks";
import { selectApp } from "@/store/features/app/appSlice";
import { selectGl } from "@/store/features/gl/glSlice";
import { useControls } from "leva";

function lerp(a: number, b: number, alpha: number ) {
  return a + alpha * (b - a)
}

const Background: FC<{
  gpuTier: number;
}> = ({gpuTier}) => {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const {
    lerpScroll
  } = useControls('ScrollLerp', {
    lerpScroll: .02
  });

  return <>
    {COMING_SOON ? <ComingSoonText /> : <Texts lerpScroll={lerpScroll} />}
    {(gpuTier > 0) && isReady ? <>
      <Bubble lerpScroll={lerpScroll} index={0} detail={gpuTier} />
      {COMING_SOON ? <></> : <Bubble lerpScroll={lerpScroll} index={1} detail={gpuTier} />}
    </>: <></>}
    {COMING_SOON ? <></> : <Images lerpScroll={lerpScroll} />}
    <HomeEffects />
    <DropEffect />
  </>;
}

const images = steps.map((step) => step.images).reduce<{
  [value: string]: {
    position: Vector3[];
    rotation: Vector3[];
    scale: Vector3[];
    opacity: number[];
    color: Color[];
  };
}>((prevImage, image) => {
  const keys = Object.keys(image);
  const imgs: any = {}
  for (let key of keys) {
    imgs[key] = {
      position : [...(prevImage[key]?.position??[]), image[key as keyof typeof image].position],
      rotation : [...(prevImage[key]?.rotation??[]), image[key as keyof typeof image].rotation],
      scale : [...(prevImage[key]?.scale??[]), image[key as keyof typeof image].scale],
      opacity : [...(prevImage[key]?.opacity??[]), image[key as keyof typeof image].opacity],
      color : [...(prevImage[key]?.color??[]), image[key as keyof typeof image].color],
    }
  }
  return imgs;
}, {});

const Images: FC<{
  lerpScroll: number;
}> = ({
  lerpScroll
}) => {
  const {progress} = useAppSelector(selectGl);
  
  const adjustedImages = useMemo(() => {
    
    const keys = Object.keys(images);
    const newImages: {
      [value: string]: {
        position: CatmullRomCurve3;
        rotation: CatmullRomCurve3;
        scale: CatmullRomCurve3;
        opacity: CatmullRomCurve3;
        color: CatmullRomCurve3;
      }
    } = {};
    for (let key of keys) {
      newImages[key] = {
        position: new CatmullRomCurve3(images[key].position),
        rotation: new CatmullRomCurve3(images[key].rotation),
        scale: new CatmullRomCurve3(images[key].scale),
        opacity: new CatmullRomCurve3(images[key].opacity.map(s => new Vector3(s))),
        color: new CatmullRomCurve3(images[key].color.map((c) => new Vector3(c.r, c.g, c.b))),
      }
    }
    return newImages;
  }, [])

  const paths = useTexture(Object.keys(images));

  return<>
    {Object.keys(adjustedImages).map((image, index) => <SpriteImage lerpScroll={lerpScroll}
      key={index}
      path={image}
      images={adjustedImages}
      map={paths[index]}
    />)}
  </>;
}

const SpriteImage: FC<{
  path: keyof typeof images;
  images: {
    [value: string]: {
      position: CatmullRomCurve3;
      rotation: CatmullRomCurve3;
      scale: CatmullRomCurve3;
      opacity: CatmullRomCurve3;
      color: CatmullRomCurve3;
    };
};
  map: Texture;
  lerpScroll: number;
  // color: Color;
  // position: Vector3;
  // rotation: Vector3;
  // scale: Vector3;
}> = ({
  lerpScroll,
  path,
  images,
  map,
  // color,
  // position,
  // rotation,
  // scale
}) => {
  const meshSprite = useRef<Sprite>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const { isMenuOpen } = useAppSelector(selectApp);
  const {progress} = useAppSelector(selectGl);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const screen = useMemo(() => (isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop') as 'tablet' | 'mobile' | 'desktop', [isMobile, isTablet])

  const scaleScalar = {
    desktop: 1,
    tablet: 0.7,
    mobile: 0.35
  }

  const isDisabledPage = disabledPages.some((p) => pathname.startsWith(p.path));

  useFrame(() => {
    if (!meshSprite.current) return;
    meshSprite.current?.material.color.setFromVector3(images[path].color.getPoint(progress));
    const opacity = images[path].opacity.getPoint(progress).x;
    meshSprite.current.material.opacity = !isDisabledPage ? isMobile ? opacity*.5 : opacity : 0;
    meshSprite.current.visible = (opacity > 0.07) && !isMenuOpen && !disabledPages.some((p) => pathname.startsWith(p.path));
    meshSprite.current.position.lerp(images[path].position.getPoint(progress), searchParams.has('controls') ? lerpScroll : scrollLerp);
    meshSprite.current.rotation.setFromVector3(images[path].rotation.getPoint(progress));
    meshSprite.current.scale.lerp(images[path].scale.getPoint(progress).multiplyScalar(scaleScalar[screen]), searchParams.has('controls') ? lerpScroll : scrollLerp);
  });

  return <sprite
    ref={meshSprite}
    visible={!isMenuOpen && !isDisabledPage}
    // position={position}
    // scale={scale}
    // rotation={(new Euler()).setFromVector3(rotation)}
  >
    <spriteMaterial map={map} />
  </sprite>
}

const Bubble: FC<{
  index?: number;
  detail: number;
  lerpScroll: number;
}> = ({
  index = 0,
  detail,
  lerpScroll
}) => {
  const pathname = usePathname();
  const mesh = useRef<Mesh<SphereGeometry, ShaderMaterial>>(null);
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();
  const { isMenuOpen } = useAppSelector(selectApp)
  const searchParams = useSearchParams();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const {progress} = useAppSelector(selectGl);
  
  const screen = useMemo(() => (isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop') as 'tablet' | 'mobile' | 'desktop', [isMobile, isTablet])
  const {
    defaultUniforms,
    path,
    uniforms: {
      chromaticAberration,
      diffuseness,
      fresnelPower,
      iorB,
      iorC,
      iorG,
      iorP,
      iorR,
      iorY,
      light,
      noise: bubbleNoise,
      refraction,
      saturation,
      shininess,
      noiseSpeed,
      noiseStrength
    },
    positionData,
    rotation,
    v3,
    q,
    euler,
    noise
  } = useMemo(() => ({
    defaultUniforms: {
      uTexture: {
        value: null
      },
      uIorR: { value: 1.0 },
      uIorY: { value: 1.0 },
      uIorG: { value: 1.0 },
      uIorC: { value: 1.0 },
      uIorB: { value: 1.0 },
      uIorP: { value: 1.0 },
      uRefractPower: {
        value: 0.0
      },
      uChromaticAberration: {
        value: 0.0
      },
      uSaturation: { value: 0.0 },
      uShininess: { value: 40.0 },
      uDiffuseness: { value: 0.2 },
      uFresnelPower: { value: 8.0 },
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
    path: new CatmullRomCurve3(steps.map((step) => step.bubbles[index].position)),
    rotation: new CatmullRomCurve3(steps.map((step) => step.bubbles[index].rotation)),
    uniforms: steps.reduce<{
      light: {
        x: number;
        y: number;
        z: number;
      }[],
      diffuseness: number[],
      shininess: number[],
      fresnelPower: number[],
      iorR: number[],
      iorY: number[],
      iorG: number[],
      iorC: number[],
      iorB: number[],
      iorP: number[],
      saturation: number[],
      chromaticAberration: number[],
      refraction: number[],
      noiseSpeed: number[],
      noiseStrength: number[];
      noise: {
        x: number,
        y: number,
        z: number
      }[],
    }>(
      (prevStep, step) => ({
      light: [
        ...prevStep.light,
        step.uniforms.light
      ],
      diffuseness: [
        ...prevStep.diffuseness,
        step.uniforms.diffuseness
      ],
      shininess: [
        ...prevStep.shininess,
        step.uniforms.shininess
      ],
      fresnelPower: [
        ...prevStep.fresnelPower,
        step.uniforms.fresnelPower
      ],
      iorR: [
        ...prevStep.iorR,
        step.uniforms.iorR
      ],
      iorY: [
        ...prevStep.iorY,
        step.uniforms.iorY
      ],
      iorG: [
        ...prevStep.iorG,
        step.uniforms.iorG
      ],
      iorC: [
        ...prevStep.iorC,
        step.uniforms.iorC
      ],
      iorB: [
        ...prevStep.iorB,
        step.uniforms.iorB
      ],
      iorP: [
        ...prevStep.iorP,
        step.uniforms.iorP
      ],
      saturation: [
        ...prevStep.saturation,
        step.uniforms.saturation
      ],
      chromaticAberration: [
        ...prevStep.chromaticAberration,
        step.uniforms.chromaticAberration
      ],
      refraction: [
        ...prevStep.refraction,
        step.uniforms.refraction
      ],
      noise: [
        ...prevStep.noise,
        step.uniforms.noise
      ],
      noiseSpeed: [
        ...prevStep.noiseSpeed,
        step.uniforms.noiseSpeed
      ],
      noiseStrength: [
        ...prevStep.noiseStrength,
        step.uniforms.noiseStrength
      ]
    }), {
      light: [],
      diffuseness: [],
      shininess: [],
      fresnelPower: [],
      iorR: [],
      iorY: [],
      iorG: [],
      iorC: [],
      iorB: [],
      iorP: [],
      saturation: [],
      chromaticAberration: [],
      refraction: [],
      noise: [],
      noiseSpeed: [],
      noiseStrength: [],
    }),
    v3: new Vector3,
    q: new Quaternion,
    euler: new Euler,
    positionData: [] as Vector3[],
    noise: makeNoise4D(Date.now())
    }), [index]);

  const adjustedUniforms = {
    chromaticAberration: new CatmullRomCurve3(chromaticAberration.map((s) => new Vector3(s, 0, 0))),
    diffuseness: new CatmullRomCurve3(diffuseness.map((s) => new Vector3(s, 0, 0))),
    fresnelPower: new CatmullRomCurve3(fresnelPower.map((s) => new Vector3(s, 0, 0))),
    iorB: new CatmullRomCurve3(iorB.map((s) => new Vector3(s, 0, 0))),
    iorC: new CatmullRomCurve3(iorC.map((s) => new Vector3(s, 0, 0))),
    iorG: new CatmullRomCurve3(iorG.map((s) => new Vector3(s, 0, 0))),
    iorP: new CatmullRomCurve3(iorP.map((s) => new Vector3(s, 0, 0))),
    iorR: new CatmullRomCurve3(iorR.map((s) => new Vector3(s, 0, 0))),
    iorY: new CatmullRomCurve3(iorY.map((s) => new Vector3(s, 0, 0))),
    light: new CatmullRomCurve3(light.map((s) => new Vector3(s.x, s.y, s.z))),
    noise: new CatmullRomCurve3(bubbleNoise.map((s) => new Vector3(s.x, s.y, s.z))),
    refraction: new CatmullRomCurve3(refraction.map((s) => new Vector3(s, 0, 0))),
    saturation: new CatmullRomCurve3(saturation.map((s) => new Vector3(s, 0, 0))),
    shininess: new CatmullRomCurve3(shininess.map((s) => new Vector3(s, 0, 0))),
    noiseSpeed: new CatmullRomCurve3(noiseSpeed.map((s) => new Vector3(s, 0, 0))),
    noiseStrength: new CatmullRomCurve3(noiseStrength.map((s) => new Vector3(s, 0, 0)))
  }

  useLayoutEffect(() => {
    if (mesh.current) {
      for (let i = 0; i < mesh.current.geometry.attributes.position.count; i++){
        v3.fromBufferAttribute(mesh.current.geometry.attributes.position, i);
        positionData.push(v3.clone());
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {isDisabledPage, hideBubble} = useMemo(() => {
    return {
      isDisabledPage: disabledPages.some((p) => pathname.startsWith(p.path)),
      hideBubble: disabledPages.find((p) => pathname.startsWith(p.path))?.hideBubble
    }
  }, [pathname]);

  const scalarKey = useMemo(() => isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop', [isMobile, isTablet])

  useFrame(({
    clock,
    gl,
    scene,
    camera
  }) => {
    
    if (!mesh.current) return;
    mesh.current.scale.setScalar(mediaBreakPoints[screen].bubbleR);
    const position = path.getPoint(progress);
    const positionView = position.clone().set(position.x * postionScalar[scalarKey].x, position.y * postionScalar[scalarKey].y, position.z);
    if (hideBubble || (position.y < -15 && !isDisabledPage)) {
      if (hideBubble) {
        mesh.current.visible = false;
      } else {
        mesh.current.visible = true;
      }
      mesh.current.position.copy(position);
      return;
    }

    
    
    
    const time = clock.getElapsedTime();

    const bubbles = scene.getObjectsByProperty("name", "bubble");
    
    positionData.forEach((p, idx) => {
      const sNoise = noise(
        p.x * adjustedUniforms.noise.getPoint(progress).x,
        p.y * adjustedUniforms.noise.getPoint(progress).y,
        p.z * adjustedUniforms.noise.getPoint(progress).z,
        time
      );
      v3.copy(p).addScaledVector(p, sNoise * adjustedUniforms.noiseStrength.getPoint(progress).x);
      mesh.current?.geometry.attributes.position.setXYZ(idx, v3.x, v3.y, v3.z);
    });

    mesh.current.geometry.computeVertexNormals();
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Bubble Position
      
    if (isMenuOpen) {
      mesh.current.position.lerp(new Vector3(2, -5, 4), searchParams.has('controls') ? lerpScroll : scrollLerp)
    }
    // else {
    //   const destIndex = steps.findIndex((step) => pathname === step.path);
    //   const currIndex = steps.findIndex((step) => ((progress >= step.range[0]) && (progress < step.range[1])));
    //   if (index === 0)
    //     console.log(pathname, destIndex, currIndex,Math.abs(destIndex-currIndex), (destIndex >= 0) && (currIndex >= 0) && (Math.abs(destIndex-currIndex) > 1), path.getPoint(steps[destIndex].stale), path.getPoint(steps[destIndex].stale));
      
    //   if ((destIndex >= 0) && (currIndex >= 0) && (Math.abs(destIndex-currIndex) > 1)) {
    //     mesh.current.position.lerp(path.getPoint(steps[destIndex].range[0]), 0.2)
    //   } else {
    //     mesh.current.position.copy(path.getPoint(progress))
    //   }
      
    // }
    // else {
    //   const destIndex = steps.findIndex((step) => pathname === step.path);
    //   const destStep = steps[destIndex];
    //   const currIndex = steps.findIndex((step) => ((progress >= step.range[0]) && (progress < step.range[1])));
    //   const currStep = steps[currIndex];
      
    //   if (destStep?.path && currStep?.path && destStep?.path !== currStep?.path && !adjustedCurve.active && (Math.abs(destStep.stale - currStep.stale)) && (Math.abs(destIndex-currIndex) > 3)) {
    //     adjustedCurve.active = true;
    //     const newPath = new CatmullRomCurve3([
    //       path.getPoint(currStep?.stale ?? progress),
    //       path.getPoint(destStep?.range[0] ?? progress),
    //       path.getPoint(destStep?.stale ?? progress),
    //     ]);
    //     adjustedCurve.fromStale = currStep?.stale ?? progress;
    //     adjustedCurve.fromRange = currStep?.range ?? [0, 0];
    //     adjustedCurve.destStale = destStep?.stale ?? progress;
    //     adjustedCurve.destRange = currStep?.range ?? [0, 0];
    //     adjustedCurve.path = newPath.clone();
    //   } else {
    //     if (adjustedCurve.active) {
    //       if (((progress > adjustedCurve.destRange[0]) && (progress < adjustedCurve.destRange[1])) || (currStep?.path === pathname)) {
    //         adjustedCurve.active = false;
    //       }
    //       const newOffset = data.range(adjustedCurve.fromStale, adjustedCurve.destStale);
          
    //       mesh.current.position.copy(adjustedCurve.path.getPoint(newOffset))
    //     }
    //   }

    // }

    // Step uniforms
    if (isDisabledPage) {
      const settings = disabledPages.findLast(p => pathname.startsWith(p.path))
      mesh.current.position.lerp(settings?.bubbles[index].position?? new Vector3, searchParams.has('controls') ? lerpScroll : scrollLerp);

      mesh.current.material.uniforms.uChromaticAberration.value = settings?.uniforms?.chromaticAberration;
      mesh.current.material.uniforms.uDiffuseness.value = settings?.uniforms?.diffuseness;
      mesh.current.material.uniforms.uFresnelPower.value = settings?.uniforms?.fresnelPower;
      mesh.current.material.uniforms.uIorB.value = settings?.uniforms?.iorB;
      mesh.current.material.uniforms.uIorC.value = settings?.uniforms?.iorC;
      mesh.current.material.uniforms.uIorG.value = settings?.uniforms?.iorG;
      mesh.current.material.uniforms.uIorP.value = settings?.uniforms?.iorP;
      mesh.current.material.uniforms.uIorR.value = settings?.uniforms?.iorR;
      mesh.current.material.uniforms.uIorY.value = settings?.uniforms?.iorY;
      mesh.current.material.uniforms.uLight.value = settings?.uniforms?.light;
      mesh.current.material.uniforms.uRefractPower.value = settings?.uniforms?.refraction;
      mesh.current.material.uniforms.uSaturation.value = settings?.uniforms?.saturation;
      mesh.current.material.uniforms.uShininess.value = settings?.uniforms?.shininess;
      mesh.current.material.needsUpdate = true;
    } else {
      mesh.current.position.lerp(positionView, searchParams.has('controls') ? lerpScroll : scrollLerp)
      mesh.current.material.uniforms.uChromaticAberration.value = adjustedUniforms.chromaticAberration.getPoint(progress).x;
      mesh.current.material.uniforms.uDiffuseness.value = adjustedUniforms.diffuseness.getPoint(progress).x;
      mesh.current.material.uniforms.uFresnelPower.value = adjustedUniforms.fresnelPower.getPoint(progress).x;
      mesh.current.material.uniforms.uIorB.value = adjustedUniforms.iorB.getPoint(progress).x;
      mesh.current.material.uniforms.uIorC.value = adjustedUniforms.iorC.getPoint(progress).x;
      mesh.current.material.uniforms.uIorG.value = adjustedUniforms.iorG.getPoint(progress).x;
      mesh.current.material.uniforms.uIorP.value = adjustedUniforms.iorP.getPoint(progress).x;
      mesh.current.material.uniforms.uIorR.value = adjustedUniforms.iorR.getPoint(progress).x;
      mesh.current.material.uniforms.uIorY.value = adjustedUniforms.iorY.getPoint(progress).x;
      mesh.current.material.uniforms.uLight.value = adjustedUniforms.light.getPoint(progress);
      mesh.current.material.uniforms.uRefractPower.value = adjustedUniforms.refraction.getPoint(progress).x;
      mesh.current.material.uniforms.uSaturation.value = adjustedUniforms.saturation.getPoint(progress).x;
      mesh.current.material.uniforms.uShininess.value = adjustedUniforms.shininess.getPoint(progress).x;

    }

    // Bubble Rotation
    const vec = v3.clone().setFromEuler(mesh.current.rotation);
    const destVec = rotation.getPoint(progress);
    const newRot = vec.lerp(destVec, searchParams.has('controls') ? lerpScroll : scrollLerp)
    
    mesh.current.rotation.setFromVector3(newRot)

    // Bubble scale
    mesh.current.scale.multiplyScalar(scaleScalar[scalarKey])

    // Reflection / Refraction
    bubbles.forEach((bubble) => {
      bubble.visible = false
    })

    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
    mesh.current.material.side = BackSide;

    mesh.current.visible = true;

    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
    mesh.current.material.side = FrontSide;

    bubbles.forEach((bubble) => {
      bubble.visible = true
    })
    
    gl.setRenderTarget(null)

    mesh.current.material.needsUpdate = true;
  });

  // Resize bubble resolution
  useEffect(() => {
    const handleResize = () => {
      defaultUniforms.winResolution = {
        value: new Vector2(
          window.innerWidth,
          window.innerHeight
        ).multiplyScalar(Math.min(window.devicePixelRatio, 2))
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('resize touchmove', handleResize)
  }, [defaultUniforms]);

  useEffect(() => {
    if (!mesh.current) return;

    mesh.current.matrixWorldNeedsUpdate = true;
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.material.needsUpdate = true;
    mesh.current.updateMatrix();
    mesh.current.updateMatrixWorld();
  }, [detail])

  return (
    <mesh ref={mesh} name={"bubble"} rotation={[Math.PI/2,0,0]}>
      {isMobile ? <icosahedronGeometry args={[2.5, 1]} />: <sphereGeometry args={[2.5, detail * bubbleDetailFactor[index], detail * bubbleDetailFactor[index]]} />}
      {/* <sphereGeometry args={[2.5, detail * bubbleDetailFactor[index], detail * bubbleDetailFactor[index]]} /> */}
      {/* <icosahedronGeometry args={[2.5, 5]} /> */}
      <shaderMaterial
        vertexShader={sphereVertexShader}
        fragmentShader={sphereFragmentShader}
        uniforms={defaultUniforms}
      />
    </mesh>
  );
}

const Texts: FC<{
  lerpScroll: number
}> = ({
  lerpScroll
}) => {
  const { width } = useThree(({viewport}) => viewport)
  const ref = useRef<Group>(null);
  const {progress} = useAppSelector(selectGl);
  const pathname = usePathname();
  const { isMenuOpen } = useAppSelector(selectApp);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const {
    TEXTS,
    defaultPos,
    v3,
    screen
  } = useMemo(() => {
    return {
      defaultPos: new Vector3(-(width+3), 0, 0),
      TEXTS: [
        "We take brands\ntoward sustainable\nsuccess through\ninnovation.",
        // "Lorem\nContent Lab\n& Ipsum dolor\n/Sit amet\n2022—2023",
        // "We help \nfounders \nmake profits \nthat match \ntheir passions.",
        // "We empowering \ncompanies to \nembrace \ndisruptive ideas",
        // "We reduce the gap \nfor innovation and \nguide our clients \ntowards sustainable \nsuccess",
        ...(Array.from({length: steps.length-7}, (_, i) => ""))
        // ...(Array.from({length: steps.length-4}, (_, i) => ""))
      ],
      v3: new Vector3,
      screen: (isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop') as 'tablet' | 'mobile' | 'desktop'
    }
  }, [isMobile, isTablet, width]);

  const searchParams = useSearchParams();

  useFrame(({clock}) => {
    if (!ref.current) return;
    v3.setX(-progress*(width*steps.length))
    ref.current.position.lerp(v3, searchParams.has('controls') ? lerpScroll : scrollLerp)
  });

  return <group ref={ref} visible={!disabledPages.some(dp => pathname.startsWith(dp.path)) && !isMenuOpen} >
    {TEXTS.map((text, index) => {
      return <Text key={index} fontSize={mediaBreakPoints[screen].fontSize} position={[(index*(width*mediaBreakPoints[screen].widthExtention))+mediaBreakPoints[screen].textX, mediaBreakPoints[screen].textY, mediaBreakPoints[screen].textZ]} letterSpacing={mediaBreakPoints[screen].letterSpacing} font={'/assets/fonts/HelveticaNeueMedium.woff'} color="white">
        {text}
      </Text>
    })}
  </group>
}


const ComingSoonText = () => {
  const pathname = usePathname();
  const [logo] = useTexture(['/assets/images/Logo.png']);

  return (<group position={[0, -0.5, -3]}>
    <sprite
        position={[0, 0.8, -5]} /* position */
        scale={new Vector3(90/10, 23/10, 1)}
      >
      <spriteMaterial map={logo} color={"#FFF"} alphaTest={0} opacity={1} />
    </sprite>

    <Text position={[0, -0.5, 0]} anchorX="center" anchorY="middle" visible={pathname === '/'} fontSize={0.375} letterSpacing={-0.025} font={'/assets/fonts/HelveticaNeueMedium.woff'} color="white">
      COMING SOON!
    </Text>
  </group>);
};

export default Background;