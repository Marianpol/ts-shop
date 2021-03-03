import React from 'react';
import Content from './Content/Content';
import Header from './Header/Header';

type LayoutProps = {
    children: React.ReactNode,
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Header/>
            <Content>
                {children}
            </Content>
        </>
    )
}

export default Layout;