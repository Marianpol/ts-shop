import {
    ShoppingCartState, 
    ShoppingCartActionTypes, 
    ADD_ITEM, 
    DELETE_ITEM
} from './types';

const initialState: ShoppingCartState = {
    items: [],
}

export const shoppingCartReducer = (state = initialState, action: ShoppingCartActionTypes) : ShoppingCartState => {
    switch(action.type) {
        case ADD_ITEM:
            const isItemInCart = state.items.map((item, i) => {
                if (action.payload.id === item.id){
                    return true;
                }
                return false;
            })

            const indexOfTheSameItem = isItemInCart.indexOf(true);

            if (indexOfTheSameItem === -1) {
                return {
                    items: [...state.items, action.payload]
                }
            }

            else if(indexOfTheSameItem === state.items.length - 1) {
                const item = state.items.slice(-1)[0];
                const stateWithoutItem = state.items.slice(0, indexOfTheSameItem);

                const updatedItem = {
                    ...item,
                    quantity: item.quantity + action.payload.quantity,
                }

                return {
                    items: [...stateWithoutItem, updatedItem]
                }
            }

            else if(indexOfTheSameItem === 0) {
                const [item, ...restOfTheItems] = state.items;

                const updatedItem = {
                    ...item,
                    quantity: item.quantity + action.payload.quantity,
                }

                return {
                    items: [updatedItem, ...restOfTheItems]
                }
            }

            // else (indexOfTheSameItem > 0 && indexOfTheSameItem < state.items.length - 1) {
            else {
                const arrayWithWantedItem = state.items.slice(indexOfTheSameItem)

                const [item, ...secondPartOfTheItems] = arrayWithWantedItem;
                const firstPartOfTheItems = state.items.slice(0, indexOfTheSameItem);

                const updatedItem = {
                    ...item,
                    quantity: item.quantity + action.payload.quantity,
                }

                return {
                    items: [...firstPartOfTheItems, updatedItem, ...secondPartOfTheItems]
                }
            }

        case DELETE_ITEM:
            return {
                items: state.items.filter(
                    item => item.id !== action.meta.id
            )
        }
        default:
            return state;
    }
}