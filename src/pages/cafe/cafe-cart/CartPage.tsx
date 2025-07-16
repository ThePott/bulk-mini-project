import type { OrderInfo, RootState } from '../interfaces'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../cafe-components/Counter'
import ImagePlaceholder from "../cafe-components/ImagePlaceholder"

const EmptyPage = () => {

  return (
    <Typography textAlign="center" sx={{ margin: "auto" }}>장바구니에 담은 상품이 없습니다</Typography>
  )
}


const CartItemBox = ({ cartItem }: { cartItem: OrderInfo }) => {
  const dispatch = useDispatch()
  
  const isHotString = cartItem.isHot ? "HOT" : "ICED"
  const optionString = `${isHotString} __${cartItem.size} __${cartItem.shotCount} 샷`
  
  const setQuantity = (quantity: number) => {
    dispatch({type: "UPDATE_QUANTITY_IN_CART", cartItem, quantity})
  }

  return (
    <Paper sx={{ borderRadius: "24px" }} className="p-6 flex gap-6">
      <ImagePlaceholder name={cartItem.menu.name} />

      <Box className="grow flex flex-col gap-3">
        <Typography variant='h6'>{cartItem.menu.name}</Typography>
        <Typography>{optionString}</Typography>

        <Box className="flex justify-between">
          <Counter count={cartItem.quantity} label={null} maxCount={20} minCount={1} setCount={setQuantity} />
          <Typography variant="h6">{(cartItem.menu.price * cartItem.quantity).toLocaleString()} 원</Typography>
        </Box>
        
      </Box>

    </Paper>
  )
}

// 얘를 스티키로 만들면 참 좋겠다! 밑에 스티키로 있어서 얼마인지 항상 보이게
const SummaryBox = ({ cart }: { cart: OrderInfo[] }) => {
  const totalPrice = cart.reduce(
    (acc, cartItem) => {
      const partialSum = cartItem.menu.price * cartItem.quantity
      return acc + partialSum
    },
    0
  )

  return (
    <Box className="flex gap-3 justify-end py-3">
      <Typography variant='h4'>{totalPrice.toLocaleString()} 원</Typography>

      <Button variant="contained">
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          주문하기
        </Typography>
      </Button>

    </Box>
  )
}

const CafeCartPage = () => {
  const cart = useSelector((state: RootState) => state.cart)
  if (cart.length === 0) { return <EmptyPage /> }

  return (
    <Box className="flex flex-col gap-3">
      {cart.map((cartItem, index) => <CartItemBox key={index} cartItem={cartItem} />)}
      <SummaryBox cart={cart} />
    </Box>
  )
}

export default CafeCartPage