import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { getNumberOfAllItems } from '../../../../../../Store/shoppingCart/getters';
import ShoppingCart from '../../../../../ShoppingCart/ShoppingCart';
import './index.scss';

const UpperNavigation = () => {

    const [isShoppingCartVisible, setIsShoppingCartVisible] = useState<boolean>(false);

    return (
        <div className="upper-navigation">
            <Link 
                className="upper-navigation__account"
                to="/login"
                >
                ZALOGUJ SIĘ
            </Link>
            <div 
                className="upper-navigation__basket"
                onClick={() => setIsShoppingCartVisible(!isShoppingCartVisible)}
                onMouseEnter={() => setIsShoppingCartVisible(true)}
                onMouseLeave={() => setIsShoppingCartVisible(false)}
                style={{width: '32px', height:'32px'}}>
                <svg style={{width: '100%',height: '100%'}} 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M22 22a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-10 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM8.098 6H4.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .488.393l3.5 16a.5.5 0 1 1-.976.214L8.098 6zM9.5 9a.5.5 0 0 1 0-1h15a.5.5 0 0 1 .488.608l-2 9A.5.5 0 0 1 22.5 18h-11a.5.5 0 1 1 0-1h10.599l1.778-8H9.5zm2 13v-1H22v1H11.5z"
                        fill="#000000"
                        fillRule='nonzero'
                    />
                </svg>
                <i className="upper-navigation__quantity">{getNumberOfAllItems()}</i>
                <ShoppingCart isVisible={isShoppingCartVisible}/>
            </div>
        </div>
    )
}

export default UpperNavigation;