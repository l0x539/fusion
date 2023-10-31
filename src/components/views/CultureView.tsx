'use client'
import FooterContent from "../FooterContent";

const CultureView = () => {

  return (<>
      <div className="">
        <div className="absolute w-[100dvw] top-0 bottom-0 flex justify-center items-center">
          <p className="text-white mx-8 desktop:w-[31.375rem]">
          At Fusion, we believe in a personalized and consultative 
          approach. We work closely with our clients, offering 
          valuable initial consultations within a short timeline.
          <br />
          <br />This allows us to truly understand their needs and advise 
          on the best course of action. Whether it{"'"}s determining the 
          necessity of a VR product or identifying if a new feature is 
          more suitable, we provide thoughtful recommendations to 
          ensure maximum impact and return on investment.
          </p>
        </div>
        <FooterContent />
      </div>
    </>
  );
};

export default CultureView;