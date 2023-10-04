'use client'
import { TabButton } from "@/components/layout/Tabs";
import { TABS } from "@/components/views/OurMethodView";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export default function OurMethodsLayoutView({ id, children }: { id: '1' | '2' | '3' | '4' | '5', children: React.ReactNode }) {
  const router = useRouter();
  const tabs = TABS.map(tab => tab.label);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();

  const setActiveTab = (tab: string) => {
    const tabIndex = tabs.findIndex(t => t === tab);
    router.push('/services/our-method/' + `${tabIndex+1}`, {
      scroll: false
    });
  };

  const activeTab = useMemo(() => parseInt(`${pathname.at(-1)}`), [pathname]);

  return <>
    {children}
    <div className="fixed bottom-0 w-[100dvw]">
      <div className={`relative bg-white w-[calc(100dvw/5)] h-[1px] transition-all ease-out duration-[400ms] ${
        activeTab === 1 ? 'left-0' :
        activeTab === 2 ? 'left-[calc(100dvw/5)]' : 
        activeTab === 3 ? 'left-[calc(100dvw*2/5)]' : 
        activeTab === 4 ? 'left-[calc(100dvw*3/5)]' : 
        'left-[calc(100dvw*4/5)]'
      }`}></div>
      <div className="grid grid-cols-5">
        {
          TABS.map((_, index) => {
            return <TabButton key={index} onClick={setActiveTab} label={TABS[index].label} isActive={`${pathname.at(-1)}` === `${index+1}`}>
              {isMobile ? TABS[index].icon : TABS[index].title}
            </TabButton>
          })
        }
      </div>
    </div>
  </>;
}