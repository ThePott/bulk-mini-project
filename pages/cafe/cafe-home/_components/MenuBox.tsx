import { Paper, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import type { Menu } from "../../interfaces"
import ImagePlaceholder from "../../cafe-components/ImagePlaceholder"

const MenuBox = ({ menu }: { menu: Menu }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: "START_ORDER", orderInfo: {menu, } })

  }

  return (
    <Paper sx={{borderRadius: "24px"}} className="flex flex-col gap-3 items-center p-6 cursor-pointer" onClick={handleClick}>
      <ImagePlaceholder name={menu.name} />
      <Typography variant="h6">{menu.name}</Typography>
      <Typography>{(menu.price).toLocaleString()} 원</Typography>
    </Paper>
  )
}

export default MenuBox