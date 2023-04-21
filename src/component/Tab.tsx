import React from "react";

import { useTabs } from "./Tabs";

export type TabProps = {
  style?: React.CSSProperties;
  className?: string;
  tab: string | number | boolean;
  children: JSX.Element | JSX.Element[];
};

export function Tab(props: TabProps) {
  const { className, tab, style, children } = props;

  const currentTab = useTabs();

  return tab === currentTab ? (
    <div className={className} style={style}>
      {children}
    </div>
  ) : null;
}
