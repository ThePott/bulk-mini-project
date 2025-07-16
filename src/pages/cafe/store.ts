import { legacy_createStore } from "redux"
import type { CafeAction, CafeState, OrderInfo } from "./interfaces"

// Fold Level 3
const cafeReducer = (state: CafeState = { cart: [], orderInfo: null }, action: CafeAction) => {
    switch (action.type) {
        case "ADD":
            if (!state.orderInfo) { return state }
            const copiedOrderInfo = { ...state.orderInfo }
            return { ...state, cart: [...state.cart, copiedOrderInfo] }
        case "DELETE":
            if (!action.orderInfo) { return state }
            const filteredArray = state.cart.filter((orderInfo) => orderInfo.orderId !== action.orderInfo.orderId)
            return { ...state, cart: filteredArray }
        case "START_ORDER":
            if (!action.orderInfo) { return state }
            const orderInfo: OrderInfo = {
                orderId: Number(new Date()),
                menu: action.orderInfo.menu,
                isHot: true,
                shotCount: 2,
                size: "TALL",
                quantity: 1
            }
            return { ...state, orderInfo }
        case "SET_ORDER":
            if (!action.orderInfo) { return state }
            return { ...state, orderInfo: action.orderInfo }
        case "RESET_ORDER":
            return { ...state, orderInfo: null }
        case "SET_SHOT_COUNT":
            if (!state.orderInfo) { return state }
            return { ...state, orderInfo: { ...state.orderInfo, shotCount: action.shotCount } }
        case "SET_QUANTITY":
            if (!state.orderInfo) { return state }
            return { ...state, orderInfo: { ...state.orderInfo, quantity: action.quantity } }
        case "UPDATE_QUANTITY_IN_CART":
            if (state.cart.length === 0) { return state }
            
            const copiedCart = [...state.cart]
            const targetItem = copiedCart.find((cartItem) => cartItem.orderId == action.cartItem.orderId)
            if (!targetItem) { return state }
            
            targetItem.quantity = action.quantity
            return { ...state, cart: copiedCart }
        default:
            return state
    }
}

const store = legacy_createStore(cafeReducer)

export default store