import Image from "next/image";
import { Footer } from "./PartnersView";
import FooterContent from "../FooterContent";

import { Space_Grotesk } from 'next/font/google'
 
const SpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
 
const PortfolioCryptoMate = () => {
  return (
    <div className="relative">
      <div className="h-full mt-40 flex justify-center">
        <div className="w-[94.5rem] overflow-x-hidden">
          <div className="mx-14 flex flex-wrap justify-between">
            <h1 className="text-right text-6xl tablet:text-7xl desktop:text-8xl text-white mb-8 tablet:mb-0">CryptoMate</h1>
            <div className="grid grid-cols-2 gap-x-28 gap-y-8">
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
          <div className="mx-14 grid grid-cols-1 tablet:grid-cols-2 mt-16 desktop:mt-44 text-lg">
            <div>
              <h6 className="desktop:w-96 text-white">About Cryptomate</h6>
              <p className="mt-8 tablet:mt-80 text-white desktop:w-[25.32rem]">
                It also enables the creation of an infrastructure
                where the company acts as a bridge, allowing
                web2 businesses to enter the web3 world.
                Offers an easy-to-use solution for those who
                want to buy or sell cryptocurrencies, without
                the need for technical or advanced knowledge
                in cryptography.
                <br />
                <br />
                The platform allows users to purchase or sell
                cryptocurrencies using a variety of payment
                methods
              </p>
            </div>
            <div className="flex tablet:block flex-col-reverse">
              <p className="text-white mt-8 tablet:mt-0">
                Cryptomate is a company that provides a
                <br />
                regulated exchange for cryptocurrency transactions and offers
                <br />
                solutions through APIs and control dashboards.
              </p>
              <div className="mt-16">
                <Image
                  src={"/assets/images/cryptomate_page.png"}
                  width={836}
                  height={731.5}
                  alt="CryptoMate Tab page by Fusion"
                />
              </div>
            </div>
          </div>
          <div className="tablet:mx-14 tablet:pl-96 mt-8 w-96 tablet:mt-[-6rem] tablet:w-[61rem] tablet:-ml-48 tablet:-ml-32 desktop:ml-14 desktop:w-auto">
            <Image
              className="mix-blend-screen"
              src="/assets/images/cryptomate_pricing.png"
              width={977.103}
              height={782.445}
              alt="CryptoMate pricing by Fusion"
            />
          </div>
          <div className="mx-8 grid tablet:grid-cols-2 gap-y-7 mt-20">
            <div>
              <div className="tablet:w-[592px] h-[411px] bg-[#161616] flex justify-center items-center">
                <Image
                  src="/assets/images/cryptomate_logo.png"
                  width={213.048}
                  height={176}
                  alt="CryptoMate Logo by Fusion"
                />
              </div>
              <Image
                className="mt-7"
                src="/assets/images/cryptomate_brand_logo.png"
                width={592}
                height={411}
                alt="CryptoMate Brand Logo by Fusion"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Image
                className="bg-black"
                src="/assets/images/cryptomate_logo_paths.png"
                width={548}
                height={568.926}
                alt="CryptoMate Logo design paths and dimensions by Fusion"
              />
            </div>
          </div>
          <div className="mx-8 mt-32 grid tablet:grid-cols-2">
            <div>
              <h5 className="text-[#999] font-semibold">Challenge</h5>
              <p className="mt-8 tablet:mt-11 text-white text-lg font-light tablet:w-[34.625]">
                Design a web and dashboard for Cryptomate capturing the
                essence of web 3 and decentralization in the brand identity,
                establishing new design guidelines while prioritizing user
                experience and fulfilling their needs.
                <br />
                <br />
                This multifaceted challenge required to generate a digital
                platform that fully embraced the principles of Web 3 pushing the
                boundaries of innovation while prioritizing user experience and
                interface paradigms.
              </p>
            </div>
            <div>
              <h5 className="text-[#999] mt-16 tablet:mt-0 font-semibold">Objective</h5>
              <p className="mt-8 tablet:mt-11 text-white text-lg font-light tablet:w-[34.625]">
                Develop a cutting-edge digital product that integrates
                decentralized functionalities that empowers users
                from diverse backgrounds to fully participate in the
                Web 3 ecosystem and providing users with
                comprehensive information about their wallets,
                assets, and currencies, enabling them to navigate and
                manage their digital assets with ease.
              </p>
            </div>
          </div>
          <div className="mx-8 mt-16 tablet:mt-32 desktop:mt-52 desktop:flex flex-wrap">
            <Image
              src="/assets/images/cm_all.jpg"
              width={101*4+612}
              height={474}
              alt="CryptoMate Colors by Fusion"
            />
            <div className="flex flex-col justify-end desktop:ml-14">
              <p className="mt-11 text-white text-lg font-light desktop:w-[20.5625rem]">
                These colors are primary to the
                CryptoMate brand and should be used
                sparingly and thoughtfully.
                <br />
                <br />
                They should play a wayfinding role
                throughout the user{"'"}s journey.
                Signaling an important call to action or
                key brand communication.
              </p>
            </div>
          </div>
          <div className="mx-8 grid tablet:grid-cols-2 gap-y-7 mt-28 tablet:mt-52">
            <div className="flex flex-col justify-start">
              <h3 className="text-white text-6xl font-semibold">Solution</h3>
              <p className="text-white mt-16 text-lg font-light desktop:w-[32.6875rem]">
                Introducing our comprehensive dashboard designed to
                simplify access to user wallets and cryptocurrencies. It
                enables users to effortlessly join the Web 3 ecosystem,
                seamlessly integrating their business operations.
                <br />
                <br />
                With Cryptomate, users gain a user-friendly interface making
                it easier than ever to manage and navigate the decentralized
                landscape.
              </p>
            </div>
            <Image
              src="/assets/images/cryptomate_phone.png"
              width={718}
              height={411}
              alt="CryptoMate Mobile by Fusion"
            />
            <div></div>
            <Image
              src="/assets/images/cryptomate_desktop.png"
              width={718}
              height={411}
              alt="CryptoMate Desktop by Fusion"
            />
          </div>
          <div className="mx-8 mt-28 flex flex-wrap justify-center">
            <div>
              <Image
                src="/assets/images/cryptomate_tweeter.png"
                width={466}
                height={466}
                alt="CryptoMate Tweeter by Fusion"
              />
              <Image
                className="mt-3 2xl:mt-6"
                src="/assets/images/cryptomate_bepart_text.png"
                width={469}
                height={263}
                alt="CryptoMate be part text by Fusion"
              />
            </div>
            <div className="tablet:ml-1 mt-2 tablet:mt-0 2xl:ml-4">
              <Image
                src="/assets/images/cryptomate_app_logo.jpg"
                width={348}
                height={368}
                alt="CryptoMate App logo by Fusion"
              />
              <Image
                className="mt-1 2xl:mt-4"
                src="/assets/images/cryptomate_begin_journey.png"
                width={344}
                height={369}
                alt="CryptoMate begin journey by Fusion"
              />
            </div>
            <div className="tablet:ml-1 tablet:mt-8 2xl:mt-0 2xl:ml-4 mt-2 tablet:mt-0">
              <Image
                src="/assets/images/cryptomate_3d_logo.png"
                width={592}
                height={368}
                alt="CryptoMate 3D logo by Fusion"
              />
              <div className="mt-1 2xl:mt-4 flex flex-wrap">
                <Image
                  src="/assets/images/cryptomate_community.jpg"
                  width={359.204}
                  height={369}
                  alt="CryptoMate Community by Fusion"
                />
                <div className="flex justify-center tablet:block">
                  <Image
                    className="tablet:ml-1 mt-1 tablet:mt-0 2xl:ml-4"
                    src="/assets/images/cryptomate_join_circlecuttons.png"
                    width={211}
                    height={369}
                    alt="CryptoMate Join circke buttons by Fusion"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-8 mt-16 tablet:mt-32 tablet:grid grid-cols-2">
            <div className="mr-2">
              <h5 className="text-[#999] font-semibold">Web Design</h5>
              <p className="mt-4 tablet:mt-11 text-white text-lg font-light desktop:w-[37.0625rem]">
                We delve into the crucial significance of web design in forging
                an
                extraordinary user experience and brand influence.
                <br />
                <br />
                Employing user-focused methodologies, our objective was to
                construct a visually captivating website that adeptly conveyed
                the
                brand{"'"}s essence and principles.
              </p>
            </div>
            <div className="tablet:ml-2">
              <h5 className="text-[#999] font-semibold mt-8 tablet:mt-0">Dashboard</h5>
              <p className="mt-4 tablet:mt-11 text-white text-lg font-light desktop:w-[32.1875rem]">
                Our strategically designed dashboard integrates
                decentralized features, providing users the ability to view
                their assets and currency in one location.
                <br />
                <br />
                This comprehensive overview let users know about the
                status of their accounts.
              </p>
            </div>
          </div>
          <div className="desktop:mx-8 font-cryptmate mt-16 desktop:mt-0">
            <Image
              className="mt-[-4rem]"
              src="/assets/images/cryptomate_tablet.png"
              width={1020}
              height={892.757}
              alt="CryptoMate Tablet by Fusion"
            />
            <div className="grid tablet:grid-cols-2 mx-8 tablet:mx-16 desktop:mx-28">
              <div>
                <div className="">
                  <h1 className="text-7xl tablet:text-8xl desktop:text-9xl pb-1 text-[#606060] border-b border-b-[#5E5E5E]">
                    H1
                  </h1>
                  <div className="flex justify-between mt-3">
                    <span className="text-[#808080] text-lg">
                      Space Grotesk <br />
                      Medium
                    </span>
                    <span className="text-white font-medium text-2xl tablet:text-[1.5rem] desktop:text-[2rem] whitespace-nowrap text-end whitespace-nowrap">
                      Space Grotesk - abc123!
                    </span>
                  </div>
                </div>

                <div className="mt-14 pb-6 border-b border-b-[#5E5E5E]">
                  <h1 className="text-7xl tablet:text-8xl desktop:text-9xl pb-1 text-[#606060] border-b border-b-[#5E5E5E]">
                    H2
                  </h1>
                  <div className="flex justify-between mt-3">
                    <span className="text-[#808080] text-lg">
                      Space Grotesk <br />
                      Bold
                    </span>
                    <span className="text-white font-bold text-2xl tablet:text-[1.5rem] desktop:text-[2rem] whitespace-nowrap text-end whitespace-nowrap">
                      Space Grotesk - abc123!
                    </span>
                  </div>

                  <div className="flex justify-end mt-8">
                    <div>
                      <div className="flex justify-between mt-3 border-b border-b-[#5E5E5E]">
                        <span className="text-[#808080] text-xs">
                          Space Grotesk <br />
                          Bold
                        </span>
                        <span className="ml-16 text-[#808080] font-bold text-xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end whitespace-nowrap">
                          Space Grotesk - aAb!
                        </span>
                      </div>
                      <div className="flex justify-between mt-3 border-b border-b-[#5E5E5E]">
                        <span className="text-[#808080] text-xs">
                          Space Grotesk <br />
                          Medium
                        </span>
                        <span className="ml-16 text-[#808080] font-medium text-xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end whitespace-nowrap">
                          Space Grotesk - aAb!
                        </span>
                      </div>
                      <div className="flex justify-between mt-3">
                        <span className="text-[#808080] text-xs">
                          Space Grotesk <br />
                          Regular
                        </span>
                        <span className="ml-16 text-[#808080] font-base text-xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end whitespace-nowrap">
                          Space Grotesk - aAb!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex tablet:block flex-col-reverse">
                <Image
                  className="tablet:mt-[-20.25rem] tablet:ml-16"
                  src="/assets/images/cryptomate_phones.png"
                  width={551.7}
                  height={731.7}
                  alt="CryptoMate Phones by Fusion"
                />
                <div className="font-jost ml-0 tablet:ml-16 desktop:ml-32">
                  <div className="flex justify-between tablet:mt-3 tablet:border-t border-t-[#5E5E5E] pt-6">
                    <span className="text-[#808080] text-xs">
                      Jost <br />
                      Medium
                    </span>
                    <span className="ml-16 text-[#808080] font-medium text-2xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end whitespace-nowrap">
                      Jost Medium - aAb!
                    </span>
                  </div>
                  <div className="flex justify-between mt-3 border-t border-t-[#5E5E5E] pt-6">
                    <span className="text-[#808080] text-xs">
                      Jost <br />
                      Regular
                    </span>
                    <span className="ml-16 text-[#808080] font-base text-2xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end whitespace-nowrap">
                      Jost Regular - aA!
                    </span>
                  </div>
                  <div className="mt-12">
                    <p className="text-[#808080] font-flink text-lg desktop:w-[27.1875rem]">
                      Space Grotest and Jost where selectect for 
                      Cryptomate due to their modern, clean and 
                      versatile design. Both of them align with the brand 
                      value and personality, as well as its functional 
                      requirements for a digital platform. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tablet:mx-8 mt-16 tablet:mt-32">
            <div className="desktop:mx-16 flex flex-wrap desktop:flex-nowrap">
              <Image
                src="/assets/images/cryptomate_mobile_contact.png"
                width={314}
                height={760}
                alt="CryptoMate Mobile contact view by Fusion"
              />
              <Image
                src="/assets/images/cryptomate_mobile_letstalk.png"
                width={345}
                height={760}
                alt="CryptoMate Mobile Lets talk view by Fusion"
              />
              <Image
                src="/assets/images/cryptomate_mobile_plans.png"
                width={330}
                height={760}
                alt="CryptoMate Mobile plans view by Fusion"
              />
              <Image
                src="/assets/images/cryptomate_mobile_conditions.png"
                width={331}
                height={760}
                alt="CryptoMate Mobile conditions view by Fusion"
              />
            </div>
          </div>
          <div className="mx-8 desktop:mt-56">
            <div className="tablet:ml-20 flex flex-wrap">
              <div className="mt-20 tablet:mt-44">
                <p className="text-white font-light font-inter">
                  We had successfully tackled the 
                  <br />multifaceted challenge of designing a web 
                  <br />and dashboard that embody the principles 
                  <br />of Web 3 and decentralization while 
                  <br />prioritizing user experience. 
                </p>
                <p className="text-white font-light font-inter mt-16 tablet:mt-28">
                  By developing a comprehensive dashboard 
                  <br />and intuitive web interface, the result is a 
                  <br />user-friendly platform that empowers 
                  <br />individuals from diverse backgrounds to fully 
                  <br />participate in the Web 3 ecosystem. The 
                  <br />strategic approach involved to establish a 
                  <br />clear brand identity aligned to the essence of 
                  <br />Web 3 such as decentralization and 
                  <br />transparency.
                </p>
              </div>
              <Image
              className="tablet:ml-24"
                src="/assets/images/cryptomate_twitter_account.png"
                width={760.339}
                height={768.438}
                alt="CryptoMate Mobile Twitter account by Fusion"
              />
            </div>
          </div>
          <div className="mx-8 mt-8 tablet:mt-28">
            <div className="tablet:ml-20">
              <h1 className="text-white text-xl tablet:text-3xl desktop:text-5xl text-right tablet:leading-[3.62569rem] tablet:tracking-[-0.01444rem] desktop:w-[82rem]">
                By employing user-focused methodologies, we constructed 
                a visually captivating website that adeptly conveyed its essence 
                and principles, reaching the desired results.
              </h1>
            </div>
          </div>
          <div className="tablet:mx-8 mt-20">
            <Image
              src="/assets/images/cryptomate_banner.png"
              width={1448}
              height={631}
              alt="CryptoMate Banner by Fusion"
            />
          </div>
        </div>
      </div>
      <Footer className="pt-8 tablet:pt-20 bg-opacity-0 bg-black" />
      <FooterContent />
    </div>
  );
};

export default PortfolioCryptoMate;
