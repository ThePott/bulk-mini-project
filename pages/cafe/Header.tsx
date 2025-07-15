import { Box, Typography } from '@mui/material'
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import { Link, useLocation } from 'react-router';

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useSelector } from 'react-redux';
import type { RootState } from './interfaces';

import { useTheme } from '@mui/material/styles';

const RoundNumber = ({ number }: { number: number }) => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const textColor = theme.palette.primary.contrastText;
  
  if (number <= 0) { return null }
  return (
    <Box 
    sx={{backgroundColor: primaryColor}}
    className="w-[30px] h-[30px] rounded-3xl flex items-center justify-center absolute -bottom-3 -right-3">
      <Typography sx={{ lineHeight: 1, fontWeight: 600, color: textColor }} variant='h6' textAlign="center">{number}</Typography>
    </Box>
  )
}

const CartIconButton = () => {
  const cart = useSelector((state: RootState) => state.cart)

  return (
    <Link to="cart" className="relative">
      <ShoppingCartRoundedIcon fontSize="large" />
      <RoundNumber number={cart.length} />
    </Link>
  )
}


const Header = () => {
  const location = useLocation()
  console.log("---- current location:", location.pathname)
  return (
    <Box className="flex gap-3 py-6 px-3 items-center">

      <Link to="/" className="flex gap-3 items-center">
        <LocalCafeRoundedIcon fontSize='large' />
        <Typography variant="h4">여우원숭이 카페</Typography>
      </Link>

      <Box className="grow" />

      {!location.pathname.includes("cart") && <CartIconButton />}

    </Box>
  )
}

export default Header