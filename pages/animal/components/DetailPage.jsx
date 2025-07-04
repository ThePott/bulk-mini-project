import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { data as dataArray } from "../assets/data/data";

const DetailPage = () => {
  const params = useParams()
  const animalIdInString = params.animalId
  const animalIdInNumber = Number(animalIdInString)
  const animalData = dataArray.find((data) => data.id === animalIdInNumber)
  console.log("---- animal data:", animalData)
  const navigate = useNavigate()

  if (!animalIdInString) { return null }
  return (
    <Box sx={{ borderColor: "hsl(0 0 60%)" }} className="w-[600px] h-[600px] rounded-[48px] mx-auto border-1 flex flex-col justify-between p-12 relative">
      <Button sx={{ justifyContent: "start", position: 'absolute', top: "23px", padding: 0, color: "hsl(0 0 60%)", "&:hover": { color: "hsl(0 0 20%)" } }}
        onClick={() => navigate("/")}>
        <ChevronLeftIcon sx={{ fontSize: "100px" }} />
      </Button>

      <Typography component="h1" sx={{ fontSize: "60px", fontWeight: "600", lineHeight: "1", color: "hsl(0 0 30%)" }}>{animalData.name}</Typography>
      <Box>
        <img src={animalData.img} alt={animalData.name} className="shink-1 mx-auto" />
      </Box>
      <Typography sx={{ fontSize: "20px", lineHeight: "1", color: "hsl(0 0 30%)" }}>{animalData.description}</Typography>
    </Box>
  )
}

export default DetailPage