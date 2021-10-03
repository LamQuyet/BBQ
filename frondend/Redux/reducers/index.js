import { combineReducers } from 'redux';
import Search from '../../screens/Search';
import { GET_NUMBER_CART, GET_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART, GET_DATA } from '../actions';
import * as AsyncStore from '../../components/AsyncStore'

const initProduct = {
    numberCart: 0,
    Carts: [],
}

const todoProduct = (state = initProduct, action) => {
    switch (action.type) {
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload._id,
                    quantity: 1,
                    name: action.payload.Name,
                    image: action.payload.Image,
                    price: action.payload.Cost
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.payload._id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload._id,
                        quantity: 1,
                        name: action.payload.Name,
                        image: action.payload.Image,
                        price: action.payload.Cost
                    }
                    state.Carts.push(_cart);
                }
            }
            AsyncStore.storeData({ ...state, numberCart: state.numberCart + 1 })
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts.map((item, key) => {
                if (item.id == action.payload.id) {
                    state.Carts[key].quantity++;
                }
                console.log('key', action.payload.id)
            });
            return {
                ...state
            }
        case DECREASE_QUANTITY:
            state.Carts.map((item, key) => {
                if (item.id == action.payload.id) {
                    if (item.quantity > 1) {
                        state.numberCart--
                        state.Carts[key].quantity--;
                    }
                }
            });

            return {
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            console.log("quantity", quantity_);
            console.log("cartnumber", state.numberCart.quantity)
            return {
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter((item, index) => {
                    return index != action.payload
                })

            }
        case GET_DATA:
            AsyncStore.storeData()
                .then((res) => {
                    let data = res;
                    console.log('data', data)
                })
        default:
            return state;
    }
}
const ShopApp = combineReducers({
    _todoProduct: todoProduct
});
export default ShopApp;