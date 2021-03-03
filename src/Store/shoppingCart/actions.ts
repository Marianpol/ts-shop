import { Item, ADD_ITEM, DELETE_ITEM, ShoppingCartActionTypes } from './types';

export function addItem(newItem: Item) : ShoppingCartActionTypes {
    return {
        type: ADD_ITEM,
        payload: newItem,
    }
}

export function deleteItem(id: string): ShoppingCartActionTypes {
    return {
        type: DELETE_ITEM,
        meta: {
            id,
        }
    }
}