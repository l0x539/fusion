"use client";
import FooterContent from "../FooterContent";

const CultureView = () => {
  return (
    <>
      <div className="text-sm md:text-lg  ">
        <div className="absolute w-[100dvw] top-0 bottom-0 flex justify-center items-center smmax:bottom-7">
          <p className="text-white mx-8 desktop:w-[50.375rem]  smmax:text-[2vh] smmax:text-ellipsis smmax:leading-snug smmax:tracking-tight smmax:overflow-hidden">
            At Fusion, we{"'"}re a dynamic team of young, ambitious developers,
            and creative designers, hailing from Algeria. Passionate about
            technology and driven by innovation, we{"'"}re dedicated to pushing
            the boundaries of what{"'"}s possible in the digital landscape. Our
            diverse backgrounds and skill sets come together to form a
            powerhouse of creativity, expertise, and ingenuity. With a deep
            understanding of our clients{"'"} needs and a commitment to
            excellence, we strive to deliver cutting-edge solutions that elevate
            brands and businesses to new heights.
            <br />
            <br />
            We blend creativity with technology to craft bespoke digital
            experiences that captivate audiences and drive results. Our
            collaborative approach ensures that every project is infused with
            fresh perspectives, innovative ideas, and meticulous attention to
            detail. We believe in transparency, communication, and
            collaboration, working closely with our clients to bring their
            visions to life. With a focus on quality, creativity, and client
            satisfaction, we{"'"}re dedicated to making a lasting impact in the
            digital world. Join us as we embark on this journey of creativity,
            innovation, and growth.
          </p>
        </div>
        <FooterContent />
      </div>
    </>
  );
};

export default CultureView;
