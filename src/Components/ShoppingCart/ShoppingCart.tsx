import React, { useState } from 'react';
import store from '../../Store';
import { deleteItem } from '../../Store/shoppingCart/actions';
import { getItems, getTotalPrice } from '../../Store/shoppingCart/getters';
import './ShoppingCart.scss';

type ShoppingCartProps = {
    isVisible: boolean,
}

const ShoppingCart = ({isVisible} : ShoppingCartProps) => {

    const [shoppingCartItems, setShoppingCartItems] = useState(getItems());

    isVisible = true;

    return (
        <div 
            className="shopping-cart-container"
            style={isVisible ? {
                visibility: 'visible',
                opacity: 1,
            }: {
                visibility: 'hidden',
                opacity: 0,
            }}
        >
            {shoppingCartItems.map((item) => {
                return (
                    <div 
                        key={item.id}
                        className="shopping-cart-container__item"
                    >
                        <span className="shopping-cart-container__item__img-box">
                            <img src={item.photo} alt={item.name}/>
                        </span>
                        <span className="shopping-cart-container__item__details">
                            <span className="shopping-cart-container__item__details__name">
                                {item.name}
                            </span>
                            <div className="shopping-cart-container__item__details__main">
                                <span className="shopping-cart-container__item__details__quantity">
                                    {item.quantity} szt.
                                </span>
                                <span className="shopping-cart-container__item__details__price">
                                    {item.price} zł
                                </span>
                            </div>
                        </span>
                        <button 
                            className="shopping-cart-container__item__delete-btn"
                            onClick={() => store.dispatch(deleteItem(item.id))}
                        >
                        +
                        </button>
                    </div>
                )
            })}
            <div className="shopping-cart-container__total">
                <span>Do zapłaty:</span>
                <span>{getTotalPrice()} zł</span>
            </div>
            <button className="shopping-cart-container__review-btn">Przejdź do koszyka</button>
        </div>
    )
}

export default ShoppingCart;