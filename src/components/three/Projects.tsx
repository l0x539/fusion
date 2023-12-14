import { mediaBreakPoints } from "@/utils/constants";
import { RoundedBox, Shape as ShapeDrei, Text } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { Shape } from "three";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  const { types, screen, shape } = useMemo(() => {
    const x = 1;
    const y = 1;
    const width = 50;
    const height = 50;
    const radius = 20;

    let shape = new Shape();
    shape.moveTo(x, y + radius);
    shape.lineTo(x, y + height - radius);
    shape.quadraticCurveTo(x, y + height, x + radius, y + height);
    shape.lineTo(x + width - radius, y + height);
    shape.quadraticCurveTo(
      x + width,
      y + height,
      x + width,
      y + height - radius
    );
    shape.lineTo(x + width, y + radius);
    shape.quadraticCurveTo(x + width, y, x + width - radius, y);
    shape.lineTo(x + radius, y);
    shape.quadraticCurveTo(x, y, x, y + radius);

    // let geometry = new THREE.ShapeBufferGeometry(shape);

    // this.mesh = new THREE.Mesh(geometry, material);
    // this.mesh.rotation.x = -Math.PI / 2;
    // this.container.add(this.mesh);
    return {
      types: [
        {
          title: "Web Development",
          tags: ["React", "Three.js", "WebGL"],
          link: "/projects/webdev",
          images: ["/images/image1.png", "/images/image2.png"],
        },
        {
          title: "Design & Branding",
          tags: ["Ps", "Ae", "Ai"],
          link: "/projects/design",
          images: ["/images/image1.png", "/images/image2.png"],
        },
        {
          title: "UI/UX Development",
          tags: ["Figma", "spline", "xd"],
          link: "/projects/uiuix",
          images: ["/images/image1.png", "/images/image2.png"],
        },
        {
          title: "3D & VFX",
          tags: ["Blender", "Unreal Engine", "Ae"],
          link: "/projects/3d",
          images: ["/images/image1.png", "/images/image2.png"],
        },
      ],
      screen: (isMobile ? "mobile" : isTablet ? "tablet" : "desktop") as
        | "tablet"
        | "mobile"
        | "desktop",
      shape
    };
  }, [isMobile, isTablet]);

  const {
    spacing,
    charSpacing,
    smoothness,
    radius,
    bevelSegments,
    creaseAngle,
    fontSize,
  } = useControls("Tags", {
    spacing: 0.3,
    charSpacing: 0.36,
    smoothness: 16,
    radius: 0.45,
    bevelSegments: 0.1,
    creaseAngle: 4,
    fontSize: 0.22,
  });

  return (
    <>
    <ShapeDrei
      args={[shape]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshBasicMaterial color="#333" />
    </ShapeDrei>
      {types.map((type, i) => (
        <group position={[0, -i * 1, 0]} key={i}>
          <Text
            fontSize={0.5}
            position={[0, 0, 0]}
            font={"/assets/fonts/HelveticaNeueMedium.woff"}
            color="#FFF852"
          >
            {type.title}
          </Text>
          <group position={[-charSpacing * type.tags[0].length, -0.5, 0]}>
            {type.tags.map((tag, index) => {
              return (
                <group
                  key={index}
                  position={[
                    type.tags.slice(0, index).join("").length * 0.2 +
                      (index > 0 ? spacing : 0),
                    0,
                    0,
                  ]}
                >
                  {" "}
                  {/** -(((types[2].tags.join().length/2)*charSpacing)+spacing) */}
                  {/* <RoundedBox
                    args={[charSpacing * tag.length, 1, 1]}
                    smoothness={smoothness}
                    radius={radius}
                    bevelSegments={bevelSegments}
                    creaseAngle={creaseAngle}
                    scale={0.5}
                  >
                    <meshBasicMaterial color="#333" />
                  </RoundedBox> */}
                  <Text fontSize={fontSize} position={[0, -0.03, 0]}>
                    {tag.toUpperCase()}
                  </Text>
                </group>
              );
            })}
          </group>
        </group>
      ))}
    </>
  );
};

export default Projects;
