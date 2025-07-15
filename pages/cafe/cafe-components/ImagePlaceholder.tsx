import { Box, Typography } from "@mui/material"

const ImagePlaceholder = ({ name }: { name: string }) => {
  return (
    <Box sx={{border: "1px solid hsl(0 0 30%)"}} className="w-[150px] h-[150px] rounded-[50%] flex justify-center items-center">
      <Typography>{name}</Typography>
    </Box>
  )
}

export default ImagePlaceholder
