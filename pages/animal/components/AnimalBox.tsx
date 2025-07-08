import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import type { Animal } from "../interfaces"

const AnimalBox = ({ data }: { data: Animal }) => {
  const [doShowName, setDoShowName] = useState(false)
  const navigate = useNavigate()
  
  return (
    <Button
      sx={{
        borderRadius: "24px",
        padding: "12px",
      }}
      className="h-[200px] relative overflow-hidden"
      variant="contained"
      onClick={() => navigate(`/animal/${data.id}`)}
      onMouseEnter={() => setDoShowName(true)}
      onMouseLeave={() => setDoShowName(false)}>

      <img src={data.imgSrc} alt={data.name} className="h-full" />
      {
        doShowName &&
        <Typography
          variant='h6'
          color="hsl(0 0 30%)"
          className="absolute bg-white w-full bottom-0 p-2" >{data.name}</Typography>
      }
    </Button >
  )
}

export default AnimalBox