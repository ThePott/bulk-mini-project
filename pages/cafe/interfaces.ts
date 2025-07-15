import store from "./store"

interface CafeState {
    cart: OrderInfo[]
    orderInfo: OrderInfo | null
}

type CafeActionType = "ADD"
 | "DELETE"
 | "START_ORDER"
 | "RESET_ORDER"
 | "SET_ORDER"
 | "SET_SHOT_COUNT"
 | "SET_QUANTITY"
 | "UPDATE_QUANTITY_IN_CART"

interface CafeAction {
    type: CafeActionType
    orderInfo: OrderInfo
    shotCount: number
    quantity: number
    cartItem: OrderInfo
}

interface Menu {
    id: number
    name: string
    price: number
}

type Size = "TALL" | "GRANDE" | "VENTI"
interface OrderInfo {
    orderId: number
    menu: Menu
    isHot: boolean
    shotCount: number
    size: Size
    quantity: number
}

// ======== components props ========
interface OrderModalProps {
    onClose: () => void
    open: boolean
}

interface CounterProps {
    label: string | null
    count: number
    minCount: number
    maxCount: number
    setCount: (count: number) => void
}

// ======== store ========
type RootState = ReturnType<typeof store.getState>

export type { Menu, OrderModalProps, CafeAction, CafeState, OrderInfo, RootState, Size, CounterProps }