import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { CatmullRomCurve3, Color, MathUtils, Vector2, Vector3 } from "three";
import { useControls } from "leva";
import { bgVertexShader } from "@/utils/shaders/vertexShaders";
import { bgFragmentShader } from "@/utils/shaders/fragmentShaders";
import { useScroll } from "@react-three/drei";
import { COMING_SOON, disabledPages, scrollLerp , steps } from "@/utils/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { selectGl } from "@/store/features/gl/glSlice";
import { useAppSelector } from "@/store/hooks";
import { useSpring, config } from "@react-spring/three";

const NoiseBackground: FC<{
}> = () => {
  const shaderMaterialRef: any = useRef();
  const bgRef: any = useRef();
  const {progress} = useAppSelector(selectGl);
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const {
    uniforms,
    fragmentShader,
    vertexShader,
    colors1,
    colors2,
    colors3,
    alpha,
    v3,
    color,
    color1,
    color2,
    color3
  } = useMemo(
    () => ({
      colors1: new CatmullRomCurve3(steps.map((step) => step.bg.color1)),
      colors2: new CatmullRomCurve3(steps.map((step) => step.bg.color2)),
      colors3: new CatmullRomCurve3(steps.map((step) => step.bg.color3)),
      alpha: new CatmullRomCurve3(steps.map((step) => new Vector3(step.bg.alpha))),
      v3: new Vector3,
      color: new Color,
      color1: new Color,
      color2: new Color,
      color3: new Color,
      uniforms: {
        uTime: {
            value: 1
        },
        uBlackPosition: {
            value: new Vector2(.0,.0)
        },
        uBlackRadius: {
            value: .141
        },
        uBlackBorderFade: {
            value: .12
        },
        uBlackTimeScale: {
            value: .4
        },
        uBlackAlpha: {
            value: 0
        },
        uColor1: {
            value: new Color("#000") // 54aba5
        },
        uColor2: {
            value: new Color("#000")
        },
        uTimeScale: {
            value: .19
        },
        uScale: {
            value: 1.08
        },
        uColor3: {
            value: new Color("#000")
        },
        uScale3: {
            value: 1.08
        },
        uScaleVignette: {
            value: .523
        },
        uVignetteBorderFade: {
            value: .216
        },
        uAlpha: {
            value: 1
        },
        uactive: {
          value: false
      }
    },
      fragmentShader: bgVertexShader,
      vertexShader: bgFragmentShader
    }),
    []
  );

  useEffect(() => {
    const stale = steps.find(step => step.path === pathname)?.stale;
    color1.setFromVector3(colors1.getPoint(stale??0));
    color2.setFromVector3(colors2.getPoint(stale??0));
    color3.setFromVector3(colors3.getPoint(stale??0));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const {
    uBlackRadius,
    uBlackBorderFade,
    uBlackTimeScale,
    uScale,
    uScale3,
    uScaleVignette,
    uVignetteBorderFade,
    uAlpha,
    uTimeScale,
    uBlackPosition,
    uBlackAlpha,
    uColor1,
    uColor2,
    uColor3,
    useConstrolsColors
  } = useControls('Background', {
    uBlackRadius: {
      value: .141,
      min: 0,
      max: 1,
      step: .001
    },
    uBlackBorderFade: {
      value: .12,
      min: 0,
      max: 1,
    },
    uBlackTimeScale: {
      value: .4,
      min: 0,
      max: 1,
    },
    uScale: {
      value: 1.08,
      min: 0,
      max: 2,
    },
    uScale3: {
      value: 1.08,
      min: 0,
      max: 2,
    },
    uScaleVignette: {
      value: .523,
      min: 0,
      max: 1,
    },
    uVignetteBorderFade: {
      value: .216,
      min: 0,
      max: 1,
    },
    uAlpha: {
      value: 1,
      min: 0,
      max: 1,
    },
    uTimeScale: {
      value: .19,
      min: 0,
      max: 1,
    },
    uBlackPosition: {
      value: {
        x: 0,
        y: 0
      },
    },
    uBlackAlpha: {
      value: 0,
      min: 0,
      max: 1,
    },
    useConstrolsColors: {
      value: false
    },
    uColor1: {
      value: {
        r: 0x0,
        g: 0x0,
        b: 0x0
      },
    },
    uColor2: {
      value: {
        r: 0x0,
        g: 0x0,
        b: 0x0
      },
    },
    uColor3: {
      value: {
        r: 0x0,
        g: 0x0,
        b: 0x0
      },
    },
  });

  const {
    lerpScroll
  } = useControls('ScrollLerp', {
    lerpScroll: .02
  });

  const {
    springProgress
  } = useSpring({
    springProgress: progress,
    config: {
      ...config.gentle,
      clamp: true
    }
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let cycleColors = 0;
    if (COMING_SOON) {
      interval = setInterval(() => {
        console.log(cycleColors);
        
        switch ((cycleColors+1)%3) {
          case 0:
            color1.copy(new Color('#439393'));
            color2.copy(new Color('#0c4e23'));
            color3.copy(new Color('#245c78'));
            break;
          case 1:
            color1.copy(new Color('#48a9b9'));
            color2.copy(new Color('#1e274e'));
            color3.copy(new Color('#1c2e2a'));
            break;
          case 2:
            color1.copy(new Color('#D14CA6'));
            color2.copy(new Color('#781671'));
            color3.copy(new Color('#89B378'));
            break;
          default:
            color1.copy(new Color('#439393'))
            color2.copy(new Color('#0c4e23'))
            color3.copy(new Color('#245c78'))
            break;
        }
        cycleColors++;
      }, 15000)
    }

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color1, color2, color3])

  useEffect(() => {
    if (COMING_SOON) {
      setTimeout(() => {
        color1.copy(new Color('#439393'))
        color2.copy(new Color('#0c4e23'))
        color3.copy(new Color('#245c78'))
      }, 3000)
    }
  }, [color1, color2, color3])

  useFrame(({clock}) => {
    if (!shaderMaterialRef.current) return;
    shaderMaterialRef.current.uniforms.uTime.value =  clock.elapsedTime;
    if (!bgRef.current) return;
    
    shaderMaterialRef.current.uniforms.uBlackRadius.value = uBlackRadius
    shaderMaterialRef.current.uniforms.uScale.value = uScale
    shaderMaterialRef.current.uniforms.uScale3.value = uScale3
    shaderMaterialRef.current.uniforms.uScaleVignette.value = uScaleVignette
    shaderMaterialRef.current.uniforms.uVignetteBorderFade.value = uVignetteBorderFade
    shaderMaterialRef.current.uniforms.uAlpha.value = uAlpha
    shaderMaterialRef.current.uniforms.uTimeScale.value = uTimeScale
    shaderMaterialRef.current.uniforms.uBlackAlpha.value = uBlackAlpha

    const dp = disabledPages.find((dp) => pathname.startsWith(dp.path));

    if (useConstrolsColors) {
      
      shaderMaterialRef.current.uniforms.uBlackPosition.value = uBlackPosition
      shaderMaterialRef.current.uniforms.uColor1.value = {
        r: uColor1.r/255, g: uColor1.g/255, b: uColor1.b/255
      }
      shaderMaterialRef.current.uniforms.uColor2.value = {
        r: uColor2.r/255, g: uColor2.g/255, b: uColor2.b/255
      }
      shaderMaterialRef.current.uniforms.uColor3.value = {
        r: uColor3.r/255, g: uColor3.g/255, b: uColor3.b/255
      }
    } else if (!COMING_SOON && dp?.path) {
      v3.copy(dp.bg.color1)
      color.set(shaderMaterialRef.current.uniforms.uColor1.value.r, shaderMaterialRef.current.uniforms.uColor1.value.g, shaderMaterialRef.current.uniforms.uColor1.value.b)
      shaderMaterialRef.current.uniforms.uColor1.value = {
        r: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).r,
        g: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).g,
        b: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).b
      };
      v3.copy(dp.bg.color2)
      color.set(shaderMaterialRef.current.uniforms.uColor2.value.r, shaderMaterialRef.current.uniforms.uColor2.value.g, shaderMaterialRef.current.uniforms.uColor2.value.b)
      shaderMaterialRef.current.uniforms.uColor2.value = {
        r: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).r,
        g: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).g,
        b: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).b
      };
      v3.copy(dp.bg.color3)
      color.set(shaderMaterialRef.current.uniforms.uColor3.value.r, shaderMaterialRef.current.uniforms.uColor3.value.g, shaderMaterialRef.current.uniforms.uColor3.value.b)
      shaderMaterialRef.current.uniforms.uColor3.value = {
        r: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).r,
        g: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).g,
        b: color.lerp((color.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).b
      };
      // v3.set(shaderMaterialRef.current.uniforms.uAlpha.value, 0, 0);
      shaderMaterialRef.current.uniforms.uAlpha.value = dp.bg.alpha;
    } else if (!COMING_SOON) {
      v3.copy(colors1.getPoint(progress))
      color.set(shaderMaterialRef.current.uniforms.uColor1.value.r, shaderMaterialRef.current.uniforms.uColor1.value.g, shaderMaterialRef.current.uniforms.uColor1.value.b)
      shaderMaterialRef.current.uniforms.uColor1.value = {
        r: color.lerp((color1.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).r,
        g: color.lerp((color1.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).g,
        b: color.lerp((color1.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).b
      };
      v3.copy(colors2.getPoint(progress))
      color.set(shaderMaterialRef.current.uniforms.uColor2.value.r, shaderMaterialRef.current.uniforms.uColor2.value.g, shaderMaterialRef.current.uniforms.uColor2.value.b)
      shaderMaterialRef.current.uniforms.uColor2.value = {
        r: color.lerp((color2.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).r,
        g: color.lerp((color2.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).g,
        b: color.lerp((color2.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).b
      };
      v3.copy(colors3.getPoint(progress))
      color.set(shaderMaterialRef.current.uniforms.uColor3.value.r, shaderMaterialRef.current.uniforms.uColor3.value.g, shaderMaterialRef.current.uniforms.uColor3.value.b)
      shaderMaterialRef.current.uniforms.uColor3.value = {
        r: color.lerp((color3.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).r,
        g: color.lerp((color3.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).g,
        b: color.lerp((color3.clone()).setFromVector3(v3), searchParams.has('controls') ? lerpScroll : scrollLerp).b
      };
      v3.set(shaderMaterialRef.current.uniforms.uAlpha.value, 0, 0);
      shaderMaterialRef.current.uniforms.uAlpha.value = alpha?.getPoint(progress)?.x;
    } else if (COMING_SOON) {
      color.set(shaderMaterialRef.current.uniforms.uColor1.value.r, shaderMaterialRef.current.uniforms.uColor1.value.g, shaderMaterialRef.current.uniforms.uColor1.value.b)
      shaderMaterialRef.current.uniforms.uColor1.value = {
        r: color.lerp(color1, 0.01).r,
        g: color.lerp(color1, 0.01).g,
        b: color.lerp(color1, 0.01).b
      };
      color.set(shaderMaterialRef.current.uniforms.uColor2.value.r, shaderMaterialRef.current.uniforms.uColor2.value.g, shaderMaterialRef.current.uniforms.uColor2.value.b)
      shaderMaterialRef.current.uniforms.uColor2.value = {
        r: color.lerp(color2, 0.01).r,
        g: color.lerp(color2, 0.01).g,
        b: color.lerp(color2, 0.01).b
      };
      shaderMaterialRef.current.uniforms.uColor3.value = {
        r: color.lerp(color3, 0.01).r,
        g: color.lerp(color3, 0.01).g,
        b: color.lerp(color3, 0.01).b
      };
      shaderMaterialRef.current.uniforms.uAlpha.value = 0.6;
    }
    shaderMaterialRef.current.uniforms.uBlackBorderFade.value = uBlackBorderFade
    shaderMaterialRef.current.uniforms.uBlackTimeScale.value = uBlackTimeScale

    
    shaderMaterialRef.current.uniforms.uBlackPosition = {
      value: bgRef.current.position
    }
  })

  return (<>
    <mesh ref={bgRef} position={[0, 0, -50]}>
      <planeGeometry args={[2, 2]} attach="geometry" />
      <shaderMaterial
        ref={shaderMaterialRef}
        attach="material"
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        depthTest={false}
        alphaTest={0}
      />
    </mesh>
  </>);
}

export default NoiseBackground;