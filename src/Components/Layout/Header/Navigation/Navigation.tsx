import React from 'react';
import useWidthClue from '../../../../Utilities/hooks/useWidthClue';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import UpperNavigation from './DesktopNavigation/UpperNavigation/UpperNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';

const navLinks = [
    ['/', 'STRONA GŁÓWNA'],
    ['/handgun', 'PISTOLETY'],
    ['/rifle', 'KARABINY'],
    ['/shotgun', 'STRZELBY'],
    ['/accessories', 'AKCESORIA'],
    ['/contact', 'KONTAKT'],
]

const Navigation = () => {

    const isMobile = useWidthClue(768);

    return (
        <div style={{marginBottom: '1rem'}}>
            {isMobile ? 
                <MobileNavigation
                    menu={navLinks}/> 
                : 
                (<div style={{display:'flex', flexDirection: 'column'}}>
                    <UpperNavigation/>
                    <DesktopNavigation
                        menu={navLinks}
                    />
                </div>)
            }
        </div>
    )
}

export default Navigation;