'use client'
import { useGesture, useWheel } from "@use-gesture/react";
import { Children, FC, ReactNode, cloneElement, isValidElement, useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TABS } from "../views/OurMethodView";

interface ITab {
  children: ReactNode;
  label: string;
  title: string;
};

const Tabs: FC<{
  children: ReactNode;
  tab: string;
}> = ({
  children,
  tab,
}) => {

  return (<div>
    {Children.map(children, (child, index) => {
      if (!isValidElement<ITab>(child)) {
        return child
      }
      let elementChild: React.ReactElement<ITab> = child;
      if (elementChild.props.label === tab)
        return elementChild;
    })}
  </div>);
};

export const TabButton: FC<{
  children: ReactNode;
  onClick: (value: string) => void;
  label: string;
  isActive?: boolean;
}> = ({
  children,
  onClick,
  label,
  isActive = false
}) => {
  return (<button
    onClick={() => onClick(label)}
    className={`pointer-events-auto py-2.5 tablet:py-5 flex border-t justify-center ${isActive ? 'text-white font-extrabold border-slate-700 opacity-100 tablet:opacity-50' : 'text-[#5E5E5E] border-slate-700'} hover:text-white text-sm hover:font-extrabold transition-all duration-300`}
    >
    {children}
  </button>);
};

export const Tab: FC<ITab> = ({
  children,
}) => {
  return (<>
    {children}
  </>);
}

export default Tabs;