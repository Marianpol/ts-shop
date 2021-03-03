import store from '../index';

export function getItems() {
    return store.getState().items;
}
export function getNumberOfAllItems() {
    const allItems = getItems();
    if (allItems.length) {
        return allItems.map(item => item.quantity)
            .reduce((sum, itemQuantity) => sum + itemQuantity);
    }
    return 0;
}

export function getTotalPrice() {
    const allItems = getItems();
    if (allItems.length) {
        return allItems.map(item => item.quantity * item.price)
            .reduce((total, itemTotal) => total + itemTotal).toFixed(2);
    }
    return '0.00';
}