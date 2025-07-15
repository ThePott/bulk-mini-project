import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../interfaces"


const getSx = (isHot: boolean) => {
  const sx = {
    "&.Mui-selected": {
      backgroundColor: isHot ? "oklch(0.7 0.17 31.06)" : "oklch(0.7 0.17 255.78)",
      "&:hover": {
        backgroundColor: isHot ? "oklch(0.6 0.17 31.06)" : "oklch(0.6 0.17 255.78)",
      }
    }
  }
  return sx
}

const HotIcedButtonGroup = () => {
  const orderInfo = useSelector((state: RootState) => state.orderInfo)
  const dispatch = useDispatch()

  const isHot = orderInfo?.isHot
  const setIsHot = (_event: React.MouseEvent<HTMLElement, MouseEvent>, newValue: boolean | null) => {
    if (newValue === null) { return }

    dispatch({ type: "SET_ORDER", orderInfo: { ...orderInfo, isHot: newValue } })
  }

  return (
    <ToggleButtonGroup
      value={orderInfo?.isHot}
      exclusive
      onChange={setIsHot}
      fullWidth>
      <ToggleButton
        sx={getSx(isHot ?? true)}
        value={true} aria-label="hot">HOT</ToggleButton>
      <ToggleButton
        sx={getSx(isHot ?? false)}
        value={false} aria-label="iced">ICED</ToggleButton>
    </ToggleButtonGroup>
  )
}

export default HotIcedButtonGroup