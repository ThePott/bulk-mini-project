import type { RootState } from "../../interfaces";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useDispatch, useSelector } from "react-redux";
import HotIcedButtonGroup from "./HotIcedButtonGroup";
import SizeButtonGroup from "./SizeButtonGroup"
import Counter from "../../cafe-components/Counter"
import { Button, Typography, Box } from "@mui/material";

const OrderModal = () => {
  const orderInfo = useSelector((state: RootState) => state.orderInfo)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch({ type: "RESET_ORDER" })
  }
  
  const setShotCount = (shotCount: number) => {
    dispatch({ type: "SET_SHOT_COUNT", shotCount })
  }
  const setQuantityCount = (quantity: number) => dispatch({ type: "SET_QUANTITY", quantity })
  
  const addToCart = () => {
    dispatch({ type: "ADD" })
    dispatch({ type: "RESET_ORDER" })
  }
  
  if (!orderInfo) { return null }
  
  return (
    <Dialog onClose={handleClose} open={orderInfo !== null} className="w-[600px] h-[600px] m-auto" fullWidth>
      <DialogTitle>{orderInfo.menu.name}</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem>
          <HotIcedButtonGroup />
        </ListItem>
        <ListItem>
          <SizeButtonGroup />
        </ListItem>
        <ListItem>
          <Counter count={orderInfo.shotCount} label="에스프레소 샷" maxCount={9} minCount={1} setCount={setShotCount} />
        </ListItem>
        <ListItem>
          <Counter count={orderInfo.quantity} label={null} maxCount={20} minCount={1} setCount={setQuantityCount} />
          <Box className="grow"></Box>
          <Typography variant="h4">{`${(orderInfo.quantity * orderInfo.menu.price).toLocaleString()} 원`}</Typography>
        </ListItem>
        <ListItem sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={addToCart}>담기</Button>
        </ListItem>
      </List>
    </Dialog>
  )
}

export default OrderModal