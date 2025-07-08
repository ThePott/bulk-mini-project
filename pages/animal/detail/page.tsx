import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { dataArray } from "../assets/data/data";

const AnimalDetailPage = () => {
  const params = useParams()
  const animalIdInString = params.animalId
  const animalIdInNumber = Number(animalIdInString)
  const animalData = dataArray.find((data) => data.id === animalIdInNumber)

  const navigate = useNavigate()

  if (!animalIdInString || !animalData) { return null }
  return (
    <Box className="w-[600px] h-[600px] rounded-[48px] mx-auto border-1 flex flex-col justify-between p-12 relative">
      {/* <Button sx={{ justifyContent: "start", position: 'absolute', top: "23px", padding: 0 }} */}
      <Box className="flex items-center gap-6">
        <Button sx={{ padding: 0 }}
        variant='text'
          onClick={() => navigate("/animal")}>
          <ChevronLeftIcon sx={{ fontSize: "100px" }} />
        </Button>

        <Typography component="h1" sx={{ fontSize: "60px", fontWeight: "600", lineHeight: "1", color: "hsl(0 0 90%)" }}>{animalData.name}</Typography>
      </Box>
      <Box>
        <img src={animalData.imgSrc} alt={animalData.name} className="shink-1 mx-auto" />
      </Box>
      <Typography sx={{ fontSize: "20px", lineHeight: "1", color: "hsl(0 0 60%)" }} align='center'>{animalData.description}</Typography>
    </Box>
  )
}

export default AnimalDetailPage