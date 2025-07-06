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
        color: "hsl(0 0 30%)",
        borderColor: "hsl(0 0 30%)",
        borderRadius: "24px",
        padding: "12px",
        "&:hover": { borderColor: "hsl(0 0 60%)" }
      }}
      className="w-[200px] h-[200px] relative overflow-hidden"
      variant="contained"
      onClick={() => navigate(`/detail/${data.id}`)}
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