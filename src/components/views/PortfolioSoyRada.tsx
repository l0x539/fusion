'use client'
import Image from "next/image";
import { Footer } from "./PartnersView";
import FooterContent from "../FooterContent";
import { useSearchParams } from "next/navigation";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const PortfolioSoyRada = () => {
  const searchParams = useSearchParams();

  return (
    <div className="relative">
      <div className="h-full mt-40 flex flex-wrap tablet:flex-nowrap justify-center">
        <div className="w-[94.5rem] overflow-x-hidden">
          <div className="tablet:mx-14 flex flex-wrap tablet:flex-nowrap justify-between">
            <h1 className="mx-4 tablet:text-right text-6xl tablet:text-7xl desktop:text-8xl text-white">
              Soy Rada<br />La Caja Mágica
            </h1>
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
          <div className="mx-2 tablet:mx-8 grid tablet:grid-cols-2 mt-44 text-lg">
            <div className="flex flex-col-reverse tablet:block">
              <h6 className="w-96 text-white">Introduction</h6>
              <Image
                className="relative left-8 mt-[-7.5rem]"
                src={"/assets/images/soyrada_mobiles.png"}
                width={713}
                height={895.369}
                alt="SoyRada Mobiles preview main view by Fusion"
              />
            </div>
            <div>
              <p className="text-white mt-4 desktop:w-[33rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                posuere malesuada. Curabitur at cursus justo. 
                <br />
                Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                Nam vitae diam vitae felis tincidunt tristique.
              </p>
              <div className="flex mt-8 tablet:mt-28">
                <div className="tablet:flex flex-col items-end">
                  <Image
                    src={"/assets/images/soyrada_app_header.png?qsd"}
                    width={347}
                    height={51.871}
                    alt="SoyRada App header by Fusion"
                  />
                  <div className="mt-14">
                    <Image
                      src={"/assets/images/soyrada_tutorial_button.png"}
                      width={177}
                      height={38.618}
                      alt="SoyRada Tutorial button by Fusion"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="tablet:mx-8 mt-16 tablet:mt-0">
            {
              searchParams.has('soyradabg') ?
              <Image
                className="relative"
                src={"/assets/images/soyrada_desktop_bg.png"}
                width={1447}
                height={1137}
                alt="SoyRada Desktop preview by Fusion"
              /> 
              :
              <Image
                className="relative"
                src={"/assets/images/soyrada_desktop.png"}
                width={1447}
                height={921.691}
                alt="SoyRada Desktop preview by Fusion"
              />
            }
          </div>
          <div className="mx-2 tablet:mx-8 mt-12 tablet:mt-32 flex-col">
            <div className="flex">
              <Image
                src={"/assets/images/soyrada_gradients_colors.png"}
                width={365.725+358.536+356.739}
                height={425.032}
                unoptimized
                alt="SoyRada Gradient purple to blue (
                  #24017D
                  71, 99, 0, 51
                  36, 1, 125
                  ) color palette by Fusion"
              />
            </div>
            <div className="grid tablet:grid-cols-2 mt-32 text-lg">
              <div>
                <h6 className="w-96 text-white">Color Palette</h6>
              </div>
              <div>
                <p className="text-white mt-4 tablet:mt-0 desktop:w-[30rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed nec interdum erat. Nulla facilisi. Fusce tincidunt 
                  ante in velit laoreet, ut pellentesque nunc eleifend. Cras 
                  et ex eget justo posuere malesuada. Curabitur at 
                  cursus justo. 
                  <br />
                  <br />Sed auctor justo sed massa convallis, in rhoncus odio 
                  gravida. Nam vitae diam vitae felis tincidunt tristique.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 tablet:mt-56 grid tablet:grid-cols-2 desktop:grid-cols-[1fr_2fr] gap-6">
            <Image
              className="px-8 tablet:px-0 desktop:mt-[-14rem] tablet:pl-10"
              src="/assets/images/soyrada_app_view.png"
              width={635}
              height={1063.754}
              alt="Soyrada Mobile Class App view by Fusion"
            />
            <div>
              <div className="flex flex-wrap desktop:flex-nowrap gap-2.5">
                <Image
                  src="/assets/images/soyrada_video1.png"
                  width={461}
                  height={320}
                  alt="Soyrada Magica Video by Fusion"
                />
                <Image
                  src="/assets/images/soyrada_video2.png"
                  width={461}
                  height={320}
                  alt="Soyrada Magica Video by Fusion"
                />
              </div>
              <p className="mx-2 tablet:mx-0 text-white text-lg desktop:ml-16 mt-16 desktop:mt-40 desktop:w-[33rem]">
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

          <div className={`mt-16 tablet:mt-40 grid tablet:grid-cols-2 mx-2 tablet:mx-8 font-soyrada relative`}>
            <div className="desktop::pr-28">
              <div className="text-white">
                <h1 className="text-7xl tablet:text-8xl desktop:text-9xl pb-1 border-b border-b-[#5E5E5E]">
                  H1
                </h1>
                <div className="flex justify-between mt-3">
                  <span className="text-lg">
                    Montserrat <br />
                    Regular
                  </span>
                  <span className="text-white text-2xl tablet:text-[1.5rem] desktop:text-[2rem] text-end">
                    Montserrat Regular - abc12!
                  </span>
                </div>
              </div>

              <div className="mt-14 pb-6 border-b border-b-[#5E5E5E]">
                <h1 className="font-bold text-[#E22490] text-7xl tablet:text-8xl desktop:text-9xl pb-1 text-[#606060] border-b border-b-[#E22490]">
                  H2
                </h1>
                <div className="flex justify-between mt-3">
                  <span className="text-[#E22490] text-lg">
                    Montserrat <br />
                    Bold
                  </span>
                  <span className="text-[#E22490] font-bold text-2xl tablet:text-[1.5rem] desktop:text-[2rem] text-end">
                    Montserrat Bold - abc123!
                  </span>
                </div>

                <div className="flex justify-end mt-8">
                  <div>
                    <div className="flex justify-between mt-3 border-b border-b-[#5E5E5E]">
                      <span className="text-[#808080] text-xs">
                        Montserrat <br />
                        Medium
                      </span>
                      <span className="ml-16 text-[#808080] font-medium text-xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end">
                        Montserrat Medium!
                      </span>
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-[#808080] text-xs">
                        Montserrat <br />
                        Light
                      </span>
                      <span className="ml-16 text-[#808080] font-light text-xl tablet:text-[1.25rem] desktop:text-[1.75rem] text-end">
                        Montserrat Light!
                      </span>
                    </div>
                    <div className="flex mt-3 mb-4">
                      <span className="text-[#E22490] font-bold text-xs">
                        <span className=" border-b border-b-[#E22490] pb-1.5">CTA Hover</span>
                        <span className="ml-4 font-normal text-white">CTA</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className="tablet:absolute desktop:mt-[-6.5rem] tablet:ml-[-2rem] desktop:ml-[-9rem]"
                src="/assets/images/soyrada_mobile_desktop.png"
                width={919}
                height={798.641}
                alt="Soyrada Mobile And Phone Image by Fusion"
              />
            </div>
          </div>
          <div className="mx-2 tablet:mx-8 mt-16 tablet:mt-40 tablet:flex flex-wrap desktop:flex-nowrap gap-5">
            <Image
              src="/assets/images/soyrada_mobile_tutorial.png"
              width={592}
              height={753}
              alt="Soyrada App on two Mobiles showing tutorial by Fusion"
            />
            <div className="mt-4 tablet:mt-0 w-full flex flex-col">
              <p className="text-white text-lg desktop:w-[33rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
                nec interdum erat. Nulla facilisi. Fusce tincidunt ante in velit 
                laoreet, ut pellentesque nunc eleifend. Cras et ex eget justo 
                posuere malesuada. Curabitur at cursus justo. 
                <br />
                <br />Sed auctor justo sed massa convallis, in rhoncus odio gravida. 
                Nam vitae diam vitae felis tincidunt tristique.
              </p>
              <div className="mt-32 tablet:mt-52 flex flex-wrap tablet:flex-nowrap gap-y-8 justify-evenly">
                <Image
                  src="/assets/images/soyrada_class.png"
                  width={296.}
                  height={300}
                  alt="Soyrada Class by Fusion"
                />
                <Image
                  src="/assets/images/soyrada_dejugar.png"
                  width={296}
                  height={300}
                  alt="Soyrada Class by Fusion"
                />
              </div>
            </div>
          </div>
          <div className="mx-2 desktop:mx-8 mt-28 tablet:mt-48 flex flex-wrap desktop:flex-nowrap gap-5 justify-center desktop:justify-start">
            <div className="flex flex-wrap tablet:flex-nowrap flex-col gap-5 justify-center desktop:justify-start">
              <div className="flex flex-wrap tablet:flex-nowrap gap-5 justify-center desktop:justify-start">
                <Image
                  src="/assets/images/soyrada_trailer.png"
                  width={469}
                  height={411}
                  alt="Soyrada Trailer by Fusion"
                />
                <Image
                  src="/assets/images/soyrada_podcast.png"
                  width={592.}
                  height={411}
                  alt="Soyrada Podcast by Fusion"
                />
              </div>
              <div className="flex flex-wrap tablet:flex-nowrap gap-5 justify-center desktop:justify-start">
                <div className="flex tablet:flex-col tablet:gap-5 justify-center tablet:justify-start">
                  <Image
                    src="/assets/images/soyrada_class1.png"
                    width={212.}
                    height={177}
                    alt="Soyrada Class one by Fusion"
                  />
                  <Image
                    src="/assets/images/soyrada_class2.png"
                    width={212.}
                    height={177}
                    alt="Soyrada Class one by Fusion"
                  />
                </div>
                <Image
                  src="/assets/images/soyrada_card_tab.png"
                  width={489.}
                  height={360.461}
                  alt="Soyrada tutorial card and menu by Fusion"
                />
                <Image
                  src="/assets/images/soyrada_pack.png"
                  width={347.}
                  height={367}
                  alt="Soyrada Pack by Fusion"
                />
              </div>
            </div>
            <div className="flex desktop:flex-col justify-center desktop:justify-start gap-5">
              <Image
                src="/assets/images/soyrada_telleva.png"
                width={347}
                height={260.427}
                alt="Soyrada La Magia Telleva by Fusion"
              />
              <Image
                src="/assets/images/soyrada_tablet.png"
                width={347}
                height={516}
                alt="Soyrada Tablet view by Fusion"
              />
            </div>
          </div>
          <div className="mx-2 tablet:mx-8 mt-14 grid tablet:grid-cols-2">
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
          <div className="mt-16 tablet:mt-20 flex justify-center">
            <Image
              src={"/assets/images/soyrada_footer_banner.png"}
              width={1765}
              height={457.593}
              alt="SoyRada footer banner by Fusion"
            />
          </div>
        </div>
      </div>
      <Footer className="pt-8 tablet:pt-20 bg-opacity-0 bg-black" />
      <FooterContent />
    </div>
  );
};

export default PortfolioSoyRada;