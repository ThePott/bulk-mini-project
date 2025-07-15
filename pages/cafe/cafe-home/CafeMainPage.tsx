import dummyDataArray from "../cafe-assets/dummyData"
import { Box } from "@mui/material"
import MenuBox from "./_components/MenuBox"
import OrderModal from "./_components/OptionModal"
import { useSelector } from "react-redux"
import type { RootState } from "../interfaces"

const CafeMainPage = () => {
  const cart = useSelector((state: RootState) => state.cart)
  console.log("---- dummy:", dummyDataArray)
  
  return (
    <>
      <OrderModal />
      <Box className="max-w-5xl w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 mx-auto">
        {dummyDataArray.map((data, index) => <MenuBox key={index} menu={data} />)}
      </Box>
    </>
  )
}

export default CafeMainPage