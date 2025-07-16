import { Box } from "@mui/material"
import { Provider } from "react-redux"
import { Outlet } from "react-router"
import Header from "./CafeHeader"
import store from "./store"

const CafeLayout = () => {
  return (
    <Provider store={store}>
      <Box className="max-w-5xl w-full h-screen mx-auto">
        <Header />
        <Outlet />
      </Box>
    </Provider>
  )
}

export default CafeLayout
