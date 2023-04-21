import React, {useContext} from 'react';

export const TabsContext = React.createContext<string | number | boolean | null>(null);

export type TabsProps = {
    style?: React.CSSProperties;
    className?: string;
    tab: string | number | boolean;
    children: JSX.Element | JSX.Element[];
};

export function Tabs(props: TabsProps) {
    const {className, style, tab, children} = props;

    return (
        <TabsContext.Provider value={tab}>
            <div style={style} className={className}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}

export const useTabs = () => useContext(TabsContext);
