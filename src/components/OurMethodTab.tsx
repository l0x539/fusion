import { FC, useMemo } from "react";

const OurMethodTab: FC<{
  tab: number;
}> = ({
  tab = 0
}) => {
  const {
    titleClassName,
    title,
    ourProcess,
    description
  } = useMemo(() => {
    return {
      titleClassName: tab === 0 ? 'transition-transform translate-y-[0dvh] w-fit	h-fit' :  
      tab === 1 ? 'transition-transform tablet:translate-y-[50dvh] desktop:translate-y-[40dvh] w-fit	h-fit' :
      tab === 2 ? 'transition-transform w-fit	h-fit':
      tab === 3 ? 'transition-transform tablet:translate-y-[55dvh] desktop:translate-y-[8dvh] w-fit	h-fit': 
      'transition-transform tablet:translate-y-[40dvh] w-fit	h-fit',
      title: tab === 0 ? 'Immersion\n&Insight' :  
      tab === 1 ? 'Strategy\n& Innovation' :
      tab === 2 ? 'Creation\n& Craftsmanship':
      tab === 3 ? 'Refinement\n& Launch': 
      'Partnership\n& Support',
      ourProcess: tab === 0 ? ' transition-transform tablet:-translate-y-0 translate-x-[0vw] w-fit	h-fit' :  
      tab === 1 ? ' transition-transform tablet:-translate-y-32 desktop:-translate-y-60 translate-x-[0vw] desktop:translate-x-[30vw] w-fit	h-fit' :
      tab === 2 ? ' transition-transform tablet:-translate-y-8 desktop:-translate-y-0 translate-x-[0vw] w-fit	h-fit':
      tab === 3 ? ' transition-transform tablet:-translate-y-32 translate-x-[0vw] desktop:translate-x-[30vw] w-fit	h-fit': 
      ' transition-transform tablet:-translate-y-16 desktop:-translate-y-60 translate-x-[0vw] desktop:translate-x-[30vw] w-fit	h-fit',
      description: tab === 0 ? <><p className="text-sm tablet:text-base desktop:mr-0 desktop:ml-16 desktop:w-[410px] text-white font-light">
      Dive deep into the essence of your project through immersive research and insightful discovery. We embark on a journey to understand your unique objectives, audience dynamics, market trends, and competitor landscape. By delving into your brand{"'"}s DNA and industry nuances, we lay the groundwork for a strategic approach.
      </p></> :  
      tab === 1 ? <><p className="text-sm tablet:text-base desktop:mr-0 desktop:ml-16 desktop:w-[410px] text-white font-light">
      Harnessing the insights gleaned, we craft a bespoke strategy that serves as the compass guiding our creative endeavors. Our innovative approach ensures that every facet of your project aligns with your overarching goals and resonates with your target audience. From visionary concepts to actionable plans, we pave the way for transformative outcomes.
      </p></> :
      tab === 2 ? <><p className="text-sm tablet:text-base desktop:mr-0 desktop:ml-16 mb-8 desktop:w-[410px] text-white font-light">
      Enter the realm of boundless creativity and meticulous craftsmanship. Here, ideas spring to life as we sculpt captivating brand identities, sculpt seamless user experiences, and weave compelling narratives. With precision and passion, we breathe life into your vision, crafting assets that captivate and inspire.
      </p>
      <p className="text-sm tablet:text-base hidden tablet:visible desktop:mr-0 desktop:ml-18 desktop:w-[410px] text-white font-light">
      Every aspect is meticulously tailored to align with your objectives and capture the hearts of your target audience. Get ready to witness the transformation and see your vision come to life in the most extraordinary way.
      </p></>:
      tab === 3 ? <><p className="text-sm tablet:text-base desktop:ml-16 desktop:w-[410px] text-white font-light">
      As we near the culmination of our journey, we refine and polish every detail to perfection. Through iterative refinement and meticulous quality assurance, we ensure that your project exudes excellence from every angle. With our eyes set on the horizon, we prepare for a triumphant launch that sets the stage for your brand{"'"}s ascent.
      <br/><br/>
      <span className="text-sm tablet:text-base hidden tablet:visible">I{"'"}m fully committed to ensuring that you have all the necessary elements at your fingertips to achieve remarkable success on the day of your launch.</span>

      </p></>: 
      <><p className="text-sm tablet:text-base desktop:ml-16 desktop:w-[410px] text-white font-light">
      Beyond the launch, our commitment to your success endures. We stand by your side, offering unwavering support and guidance as you navigate the digital landscape. From ongoing maintenance to strategic insights, we{"'"}re here to empower you on your journey to sustained growth and prosperity.
      </p></>,
    }
  }, [tab])

  return (
    <div className="flex w-[100dvw] justify-center">
      <div className="animate-fade-in mt-32 tablet:mt-40 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] px-6 tablet:pl-14">
        <h1 className={`mb-4 tablet:mb-16 desktop:mb-[15dvh] duration-500 2xl:text-8xl xl:text-6xl text-white font-semibold desktop:leading-[86.558px] tracking-[-0.456px] whitespace-pre 
        ${titleClassName}`}>
          {title}
        </h1>
        <div className={`flex flex-wrap duration-500 ${ourProcess}`}>
          <span className="desktop:w-[153px] mb-8 text-lg text-white font-semibold leading-[21.156px] tracking-[-0.09px]">
            (Our Process)
          </span>
          {description}
        </div>
      </div>
    </div>
  );
};

export default OurMethodTab;