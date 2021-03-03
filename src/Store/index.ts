import { createStore } from 'redux';
import { shoppingCartReducer } from './shoppingCart/reducers';
import { loadState, saveState } from './localStorage';

const presistedState = loadState();

const store = createStore(shoppingCartReducer, presistedState);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;