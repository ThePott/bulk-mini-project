import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'

import { Outlet, useNavigate } from 'react-router'

class RouteInfo {
  name: string
  label: string
  navigateTo: string
  constructor(name: string, label: string, navigateTo: string) {
    this.name = name
    this.label = label
    this.navigateTo = navigateTo
  }
}

const routeInfoArray = [
  new RouteInfo("home", "Home", "/"),
  new RouteInfo("blank", "Blank", "/blank"),
  new RouteInfo("animal", "Animal", "/animal"),
  new RouteInfo("zustandStateRerender", "Zustand State Rerender", "/zustand-state-rerender"),
  new RouteInfo("cafe", "Cafe", "/cafe"),
] as const



// Fold Level 2
const Layout = () => {

  const [navigateTo, setNavigateTo] = useState<string>("/")
  const navigate = useNavigate()

  



  const handleChange = (_: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setNavigateTo(newValue)
    navigate(newValue)
  }

  return (
    <Box className="w-[100vw] h-[100vh] overflow-hidden flex flex-col items-center gap-6">
      <Tabs
        component="header"
        value={navigateTo}
        onChange={(event, newValue) => handleChange(event, newValue)}
        variant='fullWidth'
        className='w-full shrink-0'>
        {routeInfoArray.map((routeInfo, index) => <Tab key={index} value={routeInfo.navigateTo} label={routeInfo.label} />)}
      </Tabs>

      <Outlet />
    </Box >
  )
}

export default Layout