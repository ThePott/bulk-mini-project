import { Box } from "@mui/material"
import { Provider } from "react-redux"
import { Outlet } from "react-router"
import Header from "./CafeHeader"
import store from "./store"
import ReadmeDialog from "@/src/components/ReadmeDialog"
import README from "./cafeReadme.md?raw"

const CafeLayout = () => {
  return (
    <Provider store={store}>
      <Box className="max-w-5xl w-full h-screen mx-auto">
        <ReadmeDialog readme={README} />
        <Header />
        <Outlet />
      </Box>
    </Provider>
  )
}

export default CafeLayout
