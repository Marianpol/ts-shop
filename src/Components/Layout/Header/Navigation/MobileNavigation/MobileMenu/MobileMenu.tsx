import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.scss';

type MobileMenuProps = {
    menu: string[][],
    isOpen: boolean,
    setIsOpen: (open: boolean) => void,
}

const MobileMenu = ({menu, isOpen, setIsOpen}: MobileMenuProps) => {

    return (
        <div 
            className="menu"
            style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}
            onClick={() => setIsOpen(!isOpen)}>
            <div className="button close_button">
                <div className="button__line close_button__line"/>
                <div className="button__line close_button__line"/>
                <div className="button__line close_button__line"/>
            </div>
            <nav className="menu__navigation">
                {menu.map(([path, text]) => {
                    return (
                        <NavLink
                            key={text}
                            className="menu__navigation__link"
                            to={path}>
                                {text}
                        </NavLink>
                    )
                })}
            </nav>
        </div>
    )
}

export default MobileMenu;