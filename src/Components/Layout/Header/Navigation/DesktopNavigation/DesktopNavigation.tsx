import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';

type DesktopNavigationProps = {
    menu: string[][];
}

const DesktopNavigation = ({menu}: DesktopNavigationProps) => {

    return (
        <nav className="navigation">
            {menu.map(([path, text]) => {
                return (
                    <NavLink 
                        key={text}
                        className="navigation__link"
                        to={path}>
                            {text}
                    </NavLink>
                )
            })}
        </nav>
    )
}

export default DesktopNavigation;