import Image from "next/image";
import { Footer } from "./PartnersView";
import FooterContent from "../FooterContent";

const PortfolioLaPalma = () => {
  return (
    <div className="relative">
      <div className="h-full mt-40 flex justify-center">
        <div className="w-[94.5rem] overflow-x-hidden">
          <div className="mx-1 tablet:mx-8 block tablet:flex flex-wrap tablet:flex-nowrap justify-between">
            <h1 className="mx-4 mt-4 tablet:mt-0 tablet:text-right text-6xl tablet:text-7xl desktop:text-8xl text-white">La Palma</h1>
            <div className="mx-4 mt-4 tablet:mt-0 grid grid-cols-2 gap-x-28 gap-y-8">
              <div className="flex items-end text-white text-lg pb-4">
                Business design
              </div>
              <div className="flex items-end text-white text-lg">
                Website <br />
                Dashboard
              </div>
              <div className="text-white text-lg">Brand design</div>
              <div className="text-white text-lg">
                Branding <br />
                Social Media
              </div>
            </div>
          </div>
          <div className="mx-2 tablet:mx-14 grid tablet:grid-cols-2 mt-32 tablet:mt-44 text-lg">
            <div className="relative">
              <h6 className="w-96 text-white">Introduction</h6>
            </div>
            <div>
              <p className="text-white desktop:w-[33rem] mt-4 tablet:mt-0">
                La Palma FC stands as a pioneering decentralized football 
                club, where decisions are collaboratively crafted by its 
                member community.
              </p>
              <Image
                className="mt-[-5rem] ml-4 mix-blend-screen"
                src={"/assets/images/lapalma_bg_balls.jpg?1"}
                width={726.511}
                height={623}
                alt="LaPalma soccer balls background by Fusion"
              />
            </div>
          </div>
          <div className="tablet:mx-8 mt-[-10rem] tablet:mt-[-29.5rem] relative">
            <Image
              src={"/assets/images/lapalma_desktop.png"}
              width={1467}
              height={879}
              alt="LaPalma Desktop preview by Fusion"
            />
            <Image
              className="absolute hidden tablet:block tablet:w-48 desktop:w-[308.213px] tablet:top-40 desktop:top-80 right-32 shadow-[0px_3.2964px_206.02493px_32.96399px_rgba(0,_0,_0,_0.60)]"
              src={"/assets/images/lapalma_mobile.png?qsd"}
              width={308.213}
              height={595}
              alt="LaPalma mobile preview by Fusion"
            />
          </div>
          <div className="mx-4 tablet:mx-8 mt-16 tablet:mt-56 grid tablet:grid-cols-2 gap-y-4 tablet:gap-x-10">
            <div className="flex flex-wrap justify-center">
              <Image
                className="rounded-[37.72px] shadow-[0px_-5.29px_165.43px_0px_rgba(83,83,83,0.7)]"
                src={"/assets/images/lapalma_web3.png"}
                width={420.18}
                height={489}
                alt="LaPalma web3 by Fusion"
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-[49.55px] shadow-[0px_2.75px_172.04px_0px_rgba(83,83,83,0.5)]"
                src={"/assets/images/lapalma_selection.png"}
                width={662}
                height={502.35}
                alt="LaPalma selection by Fusion"
              />
            </div>
          </div>
          <div className="mx-2 tablet:mx-8 mt-32 tablet:mt-60 grid tablet:grid-cols-2">
            <div>
              <h5 className="text-[#999] font-semibold">Lorem Ipsum</h5>
              <p className="mt-4 tablet:mt-11 text-white text-lg font-light desktop:w-[33rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                Nam vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
            <div className="relative mt-8 tablet:mt-0 z-10 flex gap-3 flex-wrap justify-center tablet:justify-start tablet:flex-nowrap">
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card1.png"}
                width={163}
                height={292}
                alt="LaPalma Card one by Fusion"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card2.png"}
                width={163}
                height={292}
                alt="LaPalma Card two by Fusion"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card3.png"}
                width={163}
                height={292}
                alt="LaPalma Card three by Fusion"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card4.png"}
                width={163}
                height={292}
                alt="LaPalma Card four by Fusion"
              />
              <Image
                className="rounded-[0.875rem]"
                src={"/assets/images/lapalma_card5.png"}
                width={163}
                height={292}
                alt="LaPalma Card five by Fusion"
              />
            </div>
          </div>
          <div className="mx-2 tablet:mx-8 relative flex justify-end">
            <Image
              className="mt-[-10.5rem] tablet:mt-[-18.5rem] mr-[-1.5rem] mix-blend-screen"
              src={"/assets/images/lapalma_bg_balls.jpg?1"}
              width={726.511}
              height={623}
              alt="LaPalma soccer balls background by Fusion"
            />
          </div>
          <div className="tablet:mx-8">
            <Image
              src={"/assets/images/lapalma_mobile_preview.png"}
              width={1448}
              height={898}
              alt="LaPalma mobile preview banner by Fusion"
            />
          </div>
          <div className="mx-2 tablet:mx-8 mt-16 grid tablet:grid-cols-2">
            <div>
              <h5 className="text-[#999] font-semibold">Lorem Ipsum</h5>
              <p className="mt-4 tablet:mt-11 text-white text-lg font-light desktop:w-[33rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                Nam vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
            <div className="mt-8 tablet:mt-0 tablet:ml-32">
              <h5 className="text-[#999] font-semibold">Lorem Ipsum</h5>
              <p className="mt-4 tablet:mt-11 text-white text-lg font-light desktop:w-[33rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                Nam vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
          </div>
          <div className="mt-20 tablet:mt-40">
            <Image
              src={"/assets/images/lapalma_long_banner.png"}
              width={1516}
              height={1671}
              alt="LaPalma long banner by Fusion"
            />
          </div>
          <div className="mx-4 tablet:mx-10 mt-[-1.9rem] tablet:mt-[-2.4rem] desktop:mt-[-2.9rem] flex justify-end">
            <p className="text-3xl tablet:text-4xl desktop:text-5xl text-white desktop:leading-[3.62569rem] desktop:tracking-[-0.01444rem] text-end w-[75.75rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed nec interdum erat. Nulla facilisi. Fusce tincidunt ante 
              in velit laoreet, ut pellentesque nunc eleifend. 
            </p>
          </div>
          <div className="mx-2 tablet:mx-8 mt-32">
            <p className="text-white text-lg font-light desktop:w-[33rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
              nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
              laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
              posuere malesuada. Curabitur at cursus justo. 
              <br />
              <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
              Nam vitae diam vitae felis tincidunt tristique.
            </p>
          </div>
          <div className="desktop:flex flex-wrap gap-x-5 mt-16">
            <div className="relative desktop:flex tablet:grid grid-cols-2 flex-wrap flex-col gap-y-5">
              <div className="desktop:flex flex-wrap gap-x-5">
                <Image
                  src={"/assets/images/lapalma_thentball.png"}
                  width={469}
                  height={411}
                  alt="LaPalma THE N TBALL by Fusion"
                />
                <Image
                  src={"/assets/images/lapalma_newdefi.png"}
                  width={592}
                  height={411}
                  alt="LaPalma the new dotball defi by Fusion"
                />
              </div>
              <div className="flex justify-center desktop:justify-start tablet:block desktop:flex flex-wrap gap-x-5">
                <Image
                  src={"/assets/images/lapalma_universe.png"}
                  width={714}
                  height={367}
                  alt="LaPalma universe by Fusion"
                />
                <Image
                className="desktop:absolute desktop:w-[347px] flex justify-center bottom-0 right-0"
                  src={"/assets/images/lapalma_mobile_web3.png"}
                  width={282}
                  height={577.955}
                  alt="LaPalma universe by Fusion"
                />
              </div>
            </div>
            <Image
              className="hidden desktop:block"
              src={"/assets/images/lapalma_mobile_long_preview.png"}
              width={282}
              height={577.955}
              alt="LaPalma universe by Fusion"
            />
          </div>
          <div className="mx-8 mt-14 grid tablet:grid-cols-2">
            <div></div>
            <p className="text-white text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum erat. 
              <br />Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut pellentesque nunc eleifend. 
              <br />Cras et ex eget justo posuere malesuada. Curabitur at cursus justo. 
              <br />
              <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam vitae 
              <br />diam vitae felis tincidunt tristique.
            </p>
          </div>
          <div className="mt-20 flex justify-center mx-[-9rem] mix-blend-screen">
            <Image
              src={"/assets/images/lapalma_footer_banner.png"}
              width={1765}
              height={457.593}
              alt="LaPalma footer banner by Fusion"
            />
          </div>
        </div>
      </div>
      <Footer className="pt-4 tablet:pt-20 bg-opacity-0 bg-black" />
      <FooterContent />
    </div>
  );
};

export default PortfolioLaPalma;
