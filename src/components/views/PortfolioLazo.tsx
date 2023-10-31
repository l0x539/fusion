import Image from "next/image";
import { Footer } from "./PartnersView";
import FooterContent from "../FooterContent";

const PortfolioLazo = () => {
  return (
    <div className="relative">
      <div className="h-full mt-40 flex flex-wrap tablet:flex-nowrap justify-center">
        <div className="w-[94.5rem] overflow-x-hidden">
          <div className="mx-4 mt-4 tablet:mt-0 mx-1 tablet:mx-14 block tablet:flex flex-wrap tablet:flex-nowrap justify-between">
            <h1 className="tablet:text-right text-6xl tablet:text-7xl desktop:text-8xl text-white tablet:mr-4">
              Lazo<br />Startups + VC
            </h1>
            <div className="mx-4 mt-4 tablet:mt-0 grid grid-cols-2 place-content-center tablet:place-content-start tablet:gap-x-28 gap-y-8 tablet:ml-4">
              <div className="flex items-end text-white text-lg pb-4">
                Business design
              </div>
              <div className="flex items-end text-white text-lg">
                Website <br />
                Site VDR solution
              </div>
              <div className="text-white text-lg">
                Brand design
              </div>
              <div className="text-white text-lg">
                Content Strategy
              </div>
            </div>
          </div>
          <div className="mx-2 tablet:mx-14 flex flex-wrap tablet:flex-nowrap mt-44 text-lg">
            <h6 className="w-96 text-white">Introduction</h6>
            <div>
              <p className="text-white">
                Lazo is your financial partner, making 
                <br />the process seamless and managing 
                <br />your fund in one place.
                <br />
                <br />Lazo allows you to focus on building 
                <br />your business, as they take care of the 
                <br />financial and legal aspects.
              </p>
              <div className="mt-16">
                <Image src={"/assets/images/lazo_app.png"} width={1079} height={1026} alt="Lazo App by Fusion" />
              </div>
            </div>
          </div>
          <div className="tablet:mx-8 grid tablet:grid-cols-2 gap-y-7 mt-20">
            <Image src="/assets/images/lazo_desktop.png" width={592} height={411} alt="Lazo Desktop by Fusion" />
            <div></div>
            <div className="h-[411px] flex w-full">
              <Image src="/assets/images/lazo_mobile.png" className="object-cover object-center" width={592} height={411} alt="Lazo Mobile by Fusion" />
            </div>
            <div className="flex flex-col justify-end ml-8">
              <h3 className="text-white text-6xl font-semibold">Strategy</h3>
              <p className="text-white mt-16 text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec 
                <br />interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut 
                <br />pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. 
                <br />Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam 
                <br />vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
          </div>
          <div className="mx-4 desktop:mx-8 mt-24">
            <h1 className="text-white text-3xl tablet:text-4xl desktop:text-5xl desktop:leading-[3.62569rem] desktop:tracking-[-0.01444rem] desktop:w-[64.5rem]">“The All-in-One Financial, legal, and fundraising 
            SAAS Platform for VC-Backed Startups”</h1>
            <div className="mt-24 grid tablet:grid-cols-2 gap-y-11">
              <div></div>
              <Image src="/assets/images/lazo_graph.png" width={718} height={414} alt="Lazo graph by Fusion" />
              <p className="text-white text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec 
                <br />interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut 
                <br />pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. 
                <br />Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam 
                <br />vitae diam vitae felis tincidunt tristique.
              </p>
              <p className="text-white text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec 
                <br />interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut 
                <br />pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. 
                <br />Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam 
                <br />vitae diam vitae felis tincidunt tristique.
              </p>
            </div>
          </div>
          <div className="mx-8 mt-16 grid tablet:grid-cols-[2fr_1fr]">
            <div className="flex flex-wrap">
              <Image className="mr-4" src="/assets/images/lazo_tabs.png" width={592} height={354} alt="Lazo tabs by Fusion" />
              <Image src="/assets/images/lazo_card.png" width={348} height={354} alt="Lazo card by Fusion" />
              <Image className="mr-4 mt-4" src="/assets/images/lazo_logo.png" width={347} height={367} alt="Lazo logo by Fusion" />
              <Image className="mt-4" src="/assets/images/lazo_faq.jpg" width={592} height={367} alt="Lazo faq by Fusion" />
            </div>
            <Image className="mt-4 tablet:mt-0 tablet:ml-2" src="/assets/images/lazo_phones.png" width={469} height={739} alt="Lazo phones by Fusion" />
          </div>
          <div className="tablet:mx-8 mt-7 relative">
            <Image src="/assets/images/lazo_brand.jpg" unoptimized width={1446} height={655} alt="Lazo brand by Fusion" />
            {/* <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0 flex justify-center items-center">
              <Image src="/assets/images/lazo_logo_name.png" width={413} height={134} alt="Lazo brand by Fusion" />
              <div className="absolute bottom-0 h-[504px] w-full bg-lazo-brand mix-blend-lighten"></div>
            </div> */}

          </div>
          <div className="mx-8 mt-20 grid tablet:grid-cols-2">
            <div></div>
            <p className="text-white text-lg font-light desktop:w-[37.0625rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec 
              interdum erat. Nulla facilisi. Fusce tincidunt ante in velit laoreet, ut 
              pellentesque nunc eleifend. Cras et ex eget justo posuere malesuada. 
              Curabitur at cursus justo. 
              <br />
              <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. Nam 
              vitae diam vitae felis tincidunt tristique.
            </p>
          </div>
          <div className="tablet:mx-8 mt-20">
            <Image src="/assets/images/lazo_preview.png" width={1448} height={1248} alt="Lazo preview by Fusion" />

          </div>
        </div>
      </div>
      <Footer className="pt-20 bg-opacity-0 bg-black" />
      <FooterContent />
    </div>
  );
};

export default PortfolioLazo;