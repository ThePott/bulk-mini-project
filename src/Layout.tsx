import { Box } from '@mui/material'

import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <Box>
      <Box component="header">
        <Link to="/">Home</Link>
        <Link to="/animal">Animal</Link>
        <Link to="/blank">Blank</Link>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Layout