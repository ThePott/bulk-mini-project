import { Box } from "@mui/material"
import dummyDataArray from "../cafe-assets/dummyData"
import MenuBox from "./_components/MenuBox"
import OrderModal from "./_components/OptionModal"

const CafeMainPage = () => {
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