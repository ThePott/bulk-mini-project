import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, Size } from '../../interfaces'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';

const volumeDict = {
  "TALL": "335 mL",
  "GRANDE": "473 mL",
  "VENTI": "591 mL"
}

const CupIconFromSize = ({ size }: { size: Size }) => {
  switch (size) {
    case "TALL":
      return <LocalCafeRoundedIcon fontSize="small" />
    case "GRANDE":
      return <LocalCafeRoundedIcon fontSize="medium" />
    case "VENTI":
      return <LocalCafeRoundedIcon fontSize="large" />
    default:
      return null
  }
}

const ToggleButtonBox = ({ size }: { size: Size }) => {
  return (
    <ToggleButton value={size}>
      <Box className="max-w-[200px] w-full h-[100px] flex flex-col justify-end items-center">
        <CupIconFromSize size={size} />
        <Typography>{size}</Typography>
        <Typography>{volumeDict[size]}</Typography>
      </Box>
    </ToggleButton>
  )

}

const SizeButtonGroup = () => {
  const orderInfo = useSelector((state: RootState) => state.orderInfo)
  const dispatch = useDispatch()

  if (!orderInfo) { return null }

  const setSize = (_event: React.MouseEvent<HTMLElement, MouseEvent>, newValue: any) => {
    if (newValue === null) { return }

    dispatch({ type: "SET_ORDER", orderInfo: { ...orderInfo, size: newValue } })
  }

  return (
    <ToggleButtonGroup
      fullWidth
      onChange={setSize}
      value={orderInfo.size}
      exclusive>
        <ToggleButtonBox size="TALL" />
        <ToggleButtonBox size="GRANDE" />
        <ToggleButtonBox size="VENTI" />
    </ToggleButtonGroup>
  )
}

export default SizeButtonGroup