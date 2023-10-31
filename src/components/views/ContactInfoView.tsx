import { FC, ReactNode } from "react";
import { Mail, Paper, Phone } from "../Icons";
import FooterContent from "../FooterContent";

const ContactInfoView = () => {
  return (
    <>
      <div className="py-32 tablet:py-48 desktop:py-56">
        <h1 className="animate-fade-in mx-4 tablet:mx-8 desktop:mx-16 tablet:mx-32 desktop:mx-32 mb-0 tablet:mb-8 desktop:mb-28 text-6xl tablet:text-7xl desktop:text-8xl text-white">
          What{"'"}s next?
        </h1>
        <div className="animate-fade-in delay-400 mt-16 mx-4 tablet:mx-8 desktop:mx-16 tablet:mx-32 desktop:mx-32 grid grid-cols-1 tablet:grid-cols-2 gap-4 desktop:grid-cols-3">
          <Section title="Promt response" icon={<div className="w-[2rem] h-[2rem]"><Mail /></div>}>
            We are notoriusly quick at 
            getting back to emails. You{"'"}ll 
            get a reply withing 3 business 
            hours.
          </Section>
          <Section title="Schedule a call" icon={<div className="w-[1.795rem] h-[1.77438rem]"><Phone /></div>}>
              Dive into your vision for the 
              project on a quick call/Dive 
              into the vision for your project 
              on a quick call.
          </Section>
          <Section title="Get a quote" icon={<div className="w-[1.4375rem] h-[1.82rem]"><Paper /></div>}>
            A whole team dedicated to calculating 
            the quote will be working on our 
            proposal, analysing, calculating and 
            estimating. You{"'"}ll get a full-fledged 
            document from us, fair and square.
          </Section>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

const Section: FC<{
  children: ReactNode;
  icon: ReactNode;
  title: ReactNode;
}> = ({
  children,
  icon,
  title
}) => {
  return (
    <div className="">
      <div className="border-b border-white pb-0 tablet:pb-4 desktop:pb-5 h-16 w-16 desktop:mt-0 flex items-center">
        {icon}
      </div>
      <h3 className="my-4 tablet:my-6 text-xl tablet:text-2xl text-white">
        {title}
      </h3>
      <p className="text-[#5E5E5E] text-lg tablet:text-2xl desktop:w-[26.9375rem]">
        {children}
      </p>
    </div>
  )
}

export default ContactInfoView;