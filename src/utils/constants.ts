import { useTexture } from "@react-three/drei";
import { Color, Vector3 } from "three";

export const numberOfBubbles = 2;
export const bubbleDetailFactor = [52, 24];

export const steps = [
  { // Index 1
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('black')),
      color2: new Vector3().setFromColor(new Color('black')),
      color3: new Vector3().setFromColor(new Color('black')),
      alpha: 1
    },
    range: [0.0, 0.0768],
    stale: 0,
    path: '/',
    bubbles: [
      {
        position: new Vector3(),
        rotation:  new Vector3(0, -Math.PI+0.02),
      },
      {
        position: new Vector3(-20, -20, 20),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.15,
      shininess: 2000.0,
      fresnelPower: 7,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 0.6,
      noiseStrength: 0.1,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: -2,
        color: new Color("white")
      }
    }
  },
  // { // Index 2
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('black')),
  //     color2: new Vector3().setFromColor(new Color('black')),
  //     color3: new Vector3().setFromColor(new Color('black')),
  //     alpha: 1
  //   },
  //   range: [0.0, 0.22],
  //   stale: 0,
  //   path: '/',
  //   bubbles: [
  //     {
  //       position: new Vector3(0.2),
  //       rotation:  new Vector3(0, -2*Math.PI/3),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.15,
  //     shininess: 2000.0,
  //     fresnelPower: 7,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 0.6,
  //     noiseStrength: 0.1,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("white")
  //     }
  //   }
  // },
  // { // Index 3
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('black')),
  //     color2: new Vector3().setFromColor(new Color('black')),
  //     color3: new Vector3().setFromColor(new Color('black')),
  //     alpha: 1
  //   },
  //   range: [0.0, 0.22],
  //   stale: 0,
  //   path: '/',
  //   bubbles: [
  //     {
  //       position: new Vector3(0.4),
  //       rotation:  new Vector3(0, -Math.PI/3),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.15,
  //     shininess: 2000.0,
  //     fresnelPower: 7,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 0.6,
  //     noiseStrength: 0.1,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("white")
  //     }
  //   }
  // },
  // { // Index 4
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('black')),
  //     color2: new Vector3().setFromColor(new Color('black')),
  //     color3: new Vector3().setFromColor(new Color('black')),
  //     alpha: 1
  //   },
  //   range: [0.0, 0.22],
  //   stale: 0,
  //   path: '/',
  //   bubbles: [
  //     {
  //       position: new Vector3(0.6),
  //       rotation:  new Vector3(0, 0),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.15,
  //     shininess: 2000.0,
  //     fresnelPower: 7,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 0.6,
  //     noiseStrength: 0.1,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("white")
  //     }
  //   }
  // },
  // { // Index 5
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('black')),
  //     color2: new Vector3().setFromColor(new Color('black')),
  //     color3: new Vector3().setFromColor(new Color('black')),
  //     alpha: 1
  //   },
  //   range: [0.0, 0.22],
  //   stale: 0,
  //   path: '/',
  //   bubbles: [
  //     {
  //       position: new Vector3(1, 0, 2.1),
  //       rotation:  new Vector3(0, Math.PI/3),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.15,
  //     shininess: 2000.0,
  //     fresnelPower: 7,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 0.6,
  //     noiseStrength: 0.1,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -20),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("white")
  //     }
  //   }
  // },
  // { // Index 6
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('black')),
  //     color2: new Vector3().setFromColor(new Color('black')),
  //     color3: new Vector3().setFromColor(new Color('black')),
  //     alpha: 1
  //   },
  //   range: [0.0, 0.22],
  //   stale: 0,
  //   path: '/',
  //   bubbles: [
  //     {
  //       position: new Vector3( 0, 0, 3 ),
  //       rotation:  new Vector3(0, 2*Math.PI/3),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.15,
  //     shininess: 2000.0,
  //     fresnelPower: 7,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 0.6,
  //     noiseStrength: 0.1,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0.2,
  //       color: new Color("white")
  //     }
  //   }
  // },
  { // Services
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: 1
    },
    range: [0.0768, 0.12],
    stale: 0.091,
    path: '/services',
    bubbles: [
      {
        position: new Vector3( 0, 0, 4.2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-20, -20, 20),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: -0.1,
      shininess: 80.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1,
      chromaticAberration: 0.5,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 1.05,
      noiseStrength: 0.02,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 1,
        color: new Color("white")
      }
    }
  },
  // { // Discovery
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#439393')),
  //     color2: new Vector3().setFromColor(new Color('#0c4e23')),
  //     color3: new Vector3().setFromColor(new Color('#245c78')),
  //     alpha: 1
  //   },
  //   range: [0.3, 0.357],
  //   stale: (0.3+0.357)/2,
  //   path: '/services/discovery',
  //   bubbles: [
  //     {
  //       position: new Vector3( -4.5, 0.5, -2 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(-8.5, -2.6, -6),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -3,
  //       y: -4,
  //       z: 1
  //     },
  //     diffuseness: -0.1,
  //     shininess: 30.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 0.8,
  //     chromaticAberration: 0.01,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 2,
  //     noiseStrength: 0.05,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  // { // Development
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#439393')),
  //     color2: new Vector3().setFromColor(new Color('#0c4e23')),
  //     color3: new Vector3().setFromColor(new Color('#245c78')),
  //     alpha: 1
  //   },
  //   range: [0.36, 0.4],
  //   stale: (0.36+0.4)/2,
  //   path: '/services/development',
  //   bubbles: [
  //     {
  //       position: new Vector3( -2.5, 4, 0 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(-10, -3.5, -6),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -3,
  //       y: -4,
  //       z: 1
  //     },
  //     diffuseness: 0.2,
  //     shininess: 30.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 0.3,
  //     chromaticAberration: 0.01,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 2,
  //     noiseStrength: 0.05,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  // { // Team
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#439393')),
  //     color2: new Vector3().setFromColor(new Color('#0c4e23')),
  //     color3: new Vector3().setFromColor(new Color('purple')),
  //     alpha: 1
  //   },
  //   range: [0.41, 0.45],
  //   stale: (0.41+0.45)/2,
  //   path: '/services/team',
  //   bubbles: [
  //     {
  //       position: new Vector3( 4, 3, 2 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(-4., -3.5, 0),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -3,
  //       y: -4,
  //       z: 1
  //     },
  //     diffuseness: 0.2,
  //     shininess: 30.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 0.3,
  //     chromaticAberration: 0.01,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 2,
  //     noiseStrength: 0.05,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  // { // Design
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#439393')),
  //     color2: new Vector3().setFromColor(new Color('#0c4e23')),
  //     color3: new Vector3().setFromColor(new Color('purple')),
  //     alpha: 1
  //   },
  //   range: [0.455, 0.485],
  //   stale: (0.455+0.51)/2,
  //   path: '/services/design',
  //   bubbles: [
  //     {
  //       position: new Vector3( 5.5, 1.5, 0.3 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(7, -4, -8),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -3,
  //       y: -4,
  //       z: 1
  //     },
  //     diffuseness: 0.2,
  //     shininess: 30.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 0.3,
  //     chromaticAberration: 0.01,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 2,
  //     noiseStrength: 0.05,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  // { // Services detail
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#439393')),
  //     color2: new Vector3().setFromColor(new Color('#0c4e23')),
  //     color3: new Vector3().setFromColor(new Color('purple')),
  //     alpha: 1
  //   },
  //   range: [0.485, 0.52],
  //   stale: (0.516+0.537)/2,
  //   path: '/services/services',
  //   bubbles: [
  //     {
  //       position: new Vector3( 4.5, -0.5, 2 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(8.5, 2.6, -4),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -3,
  //       y: -4,
  //       z: 1
  //     },
  //     diffuseness: 0.2,
  //     shininess: 30.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 0.3,
  //     chromaticAberration: 0.01,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 2,
  //     noiseStrength: 0.05,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  { // Our Method 1
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 20.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 2.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 1.6,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: Math.random()*0.2
    },
    range: [0.12, 0.192],
    stale: 0.173,
    path: '/services/our-method/1',
    bubbles: [
      {
        position: new Vector3( 4, 3, 2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-3., -3.5, 0),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 50.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: -2,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Our Method 2
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 20.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 2.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 1.6,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: Math.random()*0.2
    },
    range: [0.192, 0.283],
    stale: 0.249,
    path: '/services/our-method/2',
    bubbles: [
      {
        position: new Vector3( 4, -3, 2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-3., 3.5, 0),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 50.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Our Method 3
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 20.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 2.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 1.6,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: Math.random()*0.2
    },
    range: [0.283, 0.364],
    stale: 0.336,
    path: '/services/our-method/3',
    bubbles: [
      {
        position: new Vector3( 5.5, 3, 1 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(5.5, -2.6, -3),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 50.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Our Method 4
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 20.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 2.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 1.6,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: Math.random()*0.2
    },
    range: [0.364, 0.475],
    stale: 0.4224,
    path: '/services/our-method/4',
    bubbles: [
      {
        position: new Vector3( -2.5, 4, 0 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-8, -3.5, -6),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 50.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Our Method 5
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 20.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 2.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 1.6,
      refraction: 0.22,
      noiseX: 1,
      noiseY: 1,
      noiseZ: 1
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: Math.random()*0.2
    },
    range: [0.475, 0.511],
    stale: 0.475 + (-0.475 + 0.511)*.3,
    path: '/services/our-method/5',
    bubbles: [
      {
        position: new Vector3( -2, 3, 1.2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(4., -3.5, 0),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 50.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Partners 1
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#48a9b9')),
      color2: new Vector3().setFromColor(new Color('#1e274e')),
      color3: new Vector3().setFromColor(new Color('#1c2e2a')),
      alpha: 1
    },
    range: [0.578, 0.88],
    stale: 0.475 + (-0.475 + 0.511)*.3,
    path: '/services/our-method/5',
    bubbles: [
      {
        position: new Vector3( 0, -8 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-20, -20, 20),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 15.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1.03,
      chromaticAberration: 0.04,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 1.05,
      noiseStrength: 0.17,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  // { // Partners 2
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#48a9b9')),
  //     color2: new Vector3().setFromColor(new Color('#1e274e')),
  //     color3: new Vector3().setFromColor(new Color('#1c2e2a')),
  //     alpha: 1
  //   },
  //   range: [0.578, 0.88],
  //   stale: 0.771,
  //   path: '/culture',
  //   bubbles: [
  //     {
  //       position: new Vector3( 0, -8 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.2,
  //     shininess: 15.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 1.05,
  //     noiseStrength: 0.17,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  // { // Partners 3
  //   dropUniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 1,
  //     shininess: 0,
  //     fresnelPower: 8,
  //     iorR: 0,
  //     iorY: 0,
  //     iorG: 0,
  //     iorC: 0,
  //     iorB: 0,
  //     iorP: 0,
  //     saturation: 0,
  //     chromaticAberration: 0,
  //     refraction: 0,
  //     noiseX: 0,
  //     noiseY: 0,
  //     noiseZ: 0
  //   },
  //   bg: {
  //     color1: new Vector3().setFromColor(new Color('#48a9b9')),
  //     color2: new Vector3().setFromColor(new Color('#1e274e')),
  //     color3: new Vector3().setFromColor(new Color('#1c2e2a')),
  //     alpha: 1
  //   },
  //   range: [0.88, 0.89],
  //   stale: 0.771,
  //   path: '/culture',
  //   bubbles: [
  //     {
  //       position: new Vector3( 0, -8 ),
  //       rotation:  new Vector3(0, Math.PI),
  //     },
  //     {
  //       position: new Vector3(-20, -20, 20),
  //       rotation:  new Vector3(),
  //     }
  //   ],
  //   uniforms: {
  //     light: {
  //       x: -1,
  //       y: 1,
  //       z: 1
  //     },
  //     diffuseness: 0.2,
  //     shininess: 15.0,
  //     fresnelPower: 8.0,
  //     iorR: 1.15,
  //     iorY: 1.16,
  //     iorG: 1.18,
  //     iorC: 1.22,
  //     iorB: 1.22,
  //     iorP: 1.22,
  //     saturation: 1.03,
  //     chromaticAberration: 0.04,
  //     refraction: 0.22,
  //     noise: {
  //       x: 1,
  //       y: 1,
  //       z: 1
  //     },
  //     noiseSpeed: 1.05,
  //     noiseStrength: 0.17,
  //   },
  //   images: {
  //     '/assets/images/Logo.png': {
  //       position: new Vector3(0, 0, -5),
  //       rotation: new Vector3(),
  //       scale: new Vector3(90/5, 23/5, 1),
  //       opacity: 0,
  //       color: new Color("#6f6f6f")
  //     }
  //   }
  // },
  { // Contact
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('black')),
      color2: new Vector3().setFromColor(new Color('black')),
      color3: new Vector3().setFromColor(new Color('black')),
      alpha: 1
    },
    range: [0.678, 0.846],
    stale: 0.7985,
    path: '/contact',
    bubbles: [
      {
        position: new Vector3( 0, 0, 2.5 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-20, -20, 20),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 80.0,
      fresnelPower: 15.0,
      iorR: 10,
      iorY: 10,
      iorG: 10,
      iorC: 10,
      iorB: 10,
      iorP: 3,
      saturation: 1.03,
      chromaticAberration: 0.15,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 1.05,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Contact Form
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('black')),
      color2: new Vector3().setFromColor(new Color('black')),
      color3: new Vector3().setFromColor(new Color('black')),
      alpha: 1
    },
    range: [0.846, 0.966],
    stale: 0.9044,
    path: '/contact/form',
    bubbles: [
      {
        position: new Vector3(-2.5, 0, 4),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-20, -20, 20),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 0.15,
      shininess: 200.0,
      fresnelPower: 7.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.5,
      chromaticAberration: 0.2,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 1.05,
      noiseStrength: 0.04,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  { // Contact info
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('black')),
      color2: new Vector3().setFromColor(new Color('black')),
      color3: new Vector3().setFromColor(new Color('black')),
      alpha: 1
    },
    range: [0.966, 1],
    stale: 1,
    path: '/contact/info',
    bubbles: [
      {
        position: new Vector3(0, 0, 4.2),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-20, -20, 20),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: -0.1,
      shininess: 150.0,
      fresnelPower: 15.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 1,
      chromaticAberration: 0.9,
      refraction: 0,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 1.05,
      noiseStrength: 0.02,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  }
];

export const disabledPages = [
  {
    hideBubble: true,
    path: '/culture/',
    bubbles: [
      {
        position: new Vector3(0, -20, 20)
      },
      {
        position: new Vector3(0, -20, 20)
      }
    ],
    bg: {
      color1: new Vector3().setFromColor(new Color('#D14CA6')),
      color2: new Vector3().setFromColor(new Color('#781671')),
      color3: new Vector3().setFromColor(new Color('#89B378')),
      alpha: 0.5
    },
  },
  {
    hideBubble: true,
    path: '/projects',
    bubbles: [
      {
        position: new Vector3(0, -20, 20)
      },
      {
        position: new Vector3(0, -20, 20)
      }
    ],
    bg: {
      color1: new Vector3().setFromColor(new Color('#514f79')),
      color2: new Vector3().setFromColor(new Color('#18131c')),
      color3: new Vector3().setFromColor(new Color('#020303')),
      alpha: 1
    },
    isProjects: true,
    projects: [
      {
        color1: new Vector3().setFromColor(new Color('#822FE5')),
        color2: new Vector3().setFromColor(new Color('#31222B')),
        color3: new Vector3().setFromColor(new Color('#ABCC50')),
        alpha: .4
      },
      {
        color1: new Vector3().setFromColor(new Color('#FFF852')),
        color2: new Vector3().setFromColor(new Color('#545428')),
        color3: new Vector3().setFromColor(new Color('#7a6c49')),
        alpha: .3
      },
      {
        color1: new Vector3().setFromColor(new Color('#514f79')),
        color2: new Vector3().setFromColor(new Color('#18131c')),
        color3: new Vector3().setFromColor(new Color('#020303')),
        alpha: 1.5
      },
      {
        color1: new Vector3().setFromColor(new Color('#210f0f')),
        color2: new Vector3().setFromColor(new Color('#140e0e')),
        color3: new Vector3().setFromColor(new Color('#3e2e2e')),
        alpha: 3
      }
    ]
  },
  {
    hideBubble: true,
    path: '/culture',
    bubbles: [
      {
        position: new Vector3(0, -20, 20)
      },
      {
        position: new Vector3(0, -20, 20)
      }
    ],
    bg: {
      color1: new Vector3().setFromColor(new Color('#48a9b9')),
      color2: new Vector3().setFromColor(new Color('#1e274e')),
      color3: new Vector3().setFromColor(new Color('#1c2e2a')),
      alpha: 1
    },
  },
  {
    hideBubble: true,
    path: '/projects',
    bubbles: [
      {
        position: new Vector3(0, -20, 20)
      },
      {
        position: new Vector3(0, -20, 20)
      }
    ],
    bg: {
      color1: new Vector3().setFromColor(new Color('#48a9b9')),
      color2: new Vector3().setFromColor(new Color('#1e274e')),
      color3: new Vector3().setFromColor(new Color('#1c2e2a')),
      alpha: 1
    },
  },
  {
    hideBubble: false,
    path: '/services/discovery',
    bubbles: [
      {
        position: new Vector3( -4.5, 0.5, -2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-8.5, -2.6, -6),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: -0.1,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.8,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('#245c78')),
      alpha: 1
    },
  },
  {
    hideBubble: false,
    path: '/services/development',
    bubbles: [
      {
        position: new Vector3( -2.5, 4, 0 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-10, -3.5, -6),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('#245c78')),
      alpha: 1
    },
  },
  {
    hideBubble: false,
    path: '/services/team',
    bubbles: [
      {
        position: new Vector3( 4, 3, 2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-4., -3.5, 0),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('purple')),
      alpha: 1
    },
  },
  {
    hideBubble: false,
    path: '/services/design',
    bubbles: [
      {
        position: new Vector3( 5.5, 1.5, 0.3 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(7, -4, -8),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('purple')),
      alpha: 1
    },
  },
  {
    hideBubble: false,
    path: '/services/services',
    bubbles: [
      {
        position: new Vector3( 4.5, -0.5, 2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(8.5, 2.6, -4),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('purple')),
      alpha: 1
    },
  }
]

export const scrollBottom: any = {
  '/culture': {
    active: true,
    range: [0.82, 1],
    startRange: [0.771, 0.772],
    prev: '/services/our-method/5',
    next: '/contact'
  },
}

export const mediaBreakPoints = {
  desktop: {
    fontSize: 1.4,
    textX: -1,
    textY: 0,
    textZ: -3,
    widthExtention: 1.5,
    letterSpacing: -0.025,
    bubbleR: 1
  },
  tablet: {
    fontSize: 0.9,
    textX: -.5,
    textY: 0,
    textZ: -3,
    widthExtention: 1.4,
    letterSpacing: -0.025,
    bubbleR: 0.8
  },
  mobile: {
    fontSize: 0.5,
    textX: 0,
    textY: 0,
    textZ: -3,
    widthExtention: 1.4,
    letterSpacing: -0.025,
    bubbleR: 0.6
  }
}

export const progressSpeed = {
  pointer: -.0025/20,
  wheel: 0.00004*2
}

export const scrollLerp = 0.15;

export const postionScalar = {
  desktop: {
    x: 1,
    y: 1
  },
  tablet: {
    x: 0.5,
    y: 0.7
  },
  mobile: {
    x: 0.3,
    y: 0.6
  }
}

export const scaleScalar = {
  desktop: 1,
  tablet: 0.85,
  mobile: 0.7
}

export const servicesSteps = {
  discovery: { // Discovery
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('#245c78')),
      alpha: 1
    },
    range: [0.3, 0.357],
    stale: (0.3+0.357)/2,
    path: '/services/discovery',
    bubbles: [
      {
        position: new Vector3( -4.5, 0.5, -2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-8.5, -2.6, -6),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: -0.1,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.8,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  dev: { // Development
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('#245c78')),
      alpha: 1
    },
    range: [0.36, 0.4],
    stale: (0.36+0.4)/2,
    path: '/services/development',
    bubbles: [
      {
        position: new Vector3( -2.5, 4, 0 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-10, -3.5, -6),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  team: { // Team
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('purple')),
      alpha: 1
    },
    range: [0.41, 0.45],
    stale: (0.41+0.45)/2,
    path: '/services/team',
    bubbles: [
      {
        position: new Vector3( 4, 3, 2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(-4., -3.5, 0),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  design: { // Design
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('purple')),
      alpha: 1
    },
    range: [0.455, 0.485],
    stale: (0.455+0.51)/2,
    path: '/services/design',
    bubbles: [
      {
        position: new Vector3( 5.5, 1.5, 0.3 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(7, -4, -8),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
  services: { // Services detail
    dropUniforms: {
      light: {
        x: -1,
        y: 1,
        z: 1
      },
      diffuseness: 1,
      shininess: 0,
      fresnelPower: 8,
      iorR: 0,
      iorY: 0,
      iorG: 0,
      iorC: 0,
      iorB: 0,
      iorP: 0,
      saturation: 0,
      chromaticAberration: 0,
      refraction: 0,
      noiseX: 0,
      noiseY: 0,
      noiseZ: 0
    },
    bg: {
      color1: new Vector3().setFromColor(new Color('#439393')),
      color2: new Vector3().setFromColor(new Color('#0c4e23')),
      color3: new Vector3().setFromColor(new Color('purple')),
      alpha: 1
    },
    range: [0.485, 0.52],
    stale: (0.516+0.537)/2,
    path: '/services/services',
    bubbles: [
      {
        position: new Vector3( 4.5, -0.5, 2 ),
        rotation:  new Vector3(0, Math.PI),
      },
      {
        position: new Vector3(8.5, 2.6, -4),
        rotation:  new Vector3(),
      }
    ],
    uniforms: {
      light: {
        x: -3,
        y: -4,
        z: 1
      },
      diffuseness: 0.2,
      shininess: 30.0,
      fresnelPower: 8.0,
      iorR: 1.15,
      iorY: 1.16,
      iorG: 1.18,
      iorC: 1.22,
      iorB: 1.22,
      iorP: 1.22,
      saturation: 0.3,
      chromaticAberration: 0.01,
      refraction: 0.22,
      noise: {
        x: 1,
        y: 1,
        z: 1
      },
      noiseSpeed: 2,
      noiseStrength: 0.05,
    },
    images: {
      '/assets/images/Logo.png': {
        position: new Vector3(0, 0, -5),
        rotation: new Vector3(),
        scale: new Vector3(90/5, 23/5, 1),
        opacity: 0,
        color: new Color("#6f6f6f")
      }
    }
  },
}

export const COMING_SOON = false;

useTexture.preload('/assets/images/Logo.png');
