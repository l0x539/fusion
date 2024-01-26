'use client'
import { FC, useCallback, useEffect } from "react";
import Tabs, { Tab } from "../layout/Tabs";
import { useRouter, useSearchParams } from "next/navigation";
import OurMethodTab from "../OurMethodTab";
import Image from "next/image";

export const TABS = [
  {
    label: 'research',
    title: 'IMMERSION & INSIGHT',
    icon: <Image src={"/assets/images/research-and-development.png"} className="invert" width={32} height={32} alt="IMMERSION & INSIGHT" />,
    content: <OurMethodTab tab={0} />
  },
  {
    label: 'strategy',
    title: 'STRATEGY & INNOVATION',
    icon: <Image src={"/assets/images/seo.png"} className="invert" width={32} height={32} alt="STRATEGY & INNOVATION" />,
    content: <OurMethodTab tab={1} />
  },
  {
    label: 'design',
    title: 'CREATION & CRAFTSMANSHIP',
    icon: <Image src={"/assets/images/coding.png"} className="invert" width={32} height={32} alt="CREATION & CRAFTSMANSHIP" />,
    content: <OurMethodTab tab={2} />
  },
  {
    label: 'finesse',
    title: 'REFINEMENT & LAUNCH',
    icon: <Image src={"/assets/images/startup.png"} className="invert" width={32} height={32} alt="REFINEMENT & LAUNCH" />,
    content: <OurMethodTab tab={3} />
  },
  {
    label: 'support',
    title: 'PARTNERSHIP & SUPPORT',
    icon: <Image src={"/assets/images/support.png"} className="invert" width={32} height={32} alt="PARTNERSHIP & SUPPORT" />,
    content: <OurMethodTab tab={4} />
  },
];

const OurMethodView: FC<{
  tab: '1' | '2' | '3' | '4' | '5'
}> = ({tab}) => {

  const router = useRouter();
  const searchParams  = useSearchParams();  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  );
  const tabs = TABS.map(tab => tab.label);

  return (
    <div>
      <Tabs tab={tabs[parseInt(`${tab}`)-1]??'research'}>
        {TABS.map(({content, label, title}, index) => <Tab key={index} label={label} title={title}>
          {content}
        </Tab>)}
      </Tabs>
    </div>
    );
};

export default OurMethodView;