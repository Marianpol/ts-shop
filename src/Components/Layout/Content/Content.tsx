import React from 'react';

type ContentProps = {
    children: React.ReactNode,
}

const Content = ({children}: ContentProps ) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default Content;