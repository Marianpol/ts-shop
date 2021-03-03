export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export type Item = {
    id: string,
    name: string,
    photo: string,
    price: number,
    quantity: number,
}

export type ShoppingCartState = {
    items: Item[],
}

interface AddItemAction {
    type: typeof ADD_ITEM,
    payload: Item,
}

interface DeleteItemAction {
    type: typeof DELETE_ITEM,
    meta: {
        id: string,
    }
}

export type ShoppingCartActionTypes = AddItemAction | DeleteItemAction