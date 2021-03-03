import React, {useState} from 'react';
import './index.scss';
import MobileMenu from './MobileMenu/MobileMenu';

type MobileNavigationProps = {
    menu: string[][],
}

const MobileNavigation = ({menu}: MobileNavigationProps) => {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <div
                className="button"
                onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="button__line"/>
                    <div className="button__line"/>
                    <div className="button__line"/>
            </div>
            <MobileMenu
                menu={menu}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    )
}

export default MobileNavigation;