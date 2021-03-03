import { ShoppingCartState } from "./shoppingCart/types";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (error) {
        return undefined;
    }
}

export const saveState = (state: ShoppingCartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (error) {
        return undefined;
    }
}