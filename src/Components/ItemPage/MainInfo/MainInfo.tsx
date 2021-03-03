import React from 'react';
import store from '../../../Store/index';
import { addItem } from '../../../Store/shoppingCart/actions';

import './index.scss';

type MainInfoProps = {
    id: string,
    name: string,
    photo: string,
    price: number,
    itemQuantity: number | string,
    changeItemQuantity: (
        operation: string, 
        quantity?: any
    ) => void,
}

const MainInfo = ({
    id,
    name,
    photo,
    price,
    itemQuantity,
    changeItemQuantity,
}: MainInfoProps
) => {

    return (
        <div className="wrapper">
            <h4>{name}</h4>
            <div className="quantity_selector">
                <div 
                    className="quantity_selector__button 
                        quantity_selector__minus"
                    onClick={() => changeItemQuantity('-')}/>
                <input
                    className="quantity_selector__input"
                    type="number"
                    inputMode="numeric"
                    value={itemQuantity}
                    onInput={(event) => changeItemQuantity('', event.currentTarget.value)}
                    onChange={() => null}
                />
                <div 
                    className="quantity_selector__button 
                        quantity_selector__plus"
                    onClick={() => changeItemQuantity('+')}/>
            </div>
            <button 
                className="to_basket_button"
                onClick={() => store.dispatch(addItem({
                    id,
                    name,
                    photo,
                    price, 
                    quantity: Number(itemQuantity)
                }))}>
                DO KOSZYKA
            </button>
        </div>
    )
}

export default MainInfo;