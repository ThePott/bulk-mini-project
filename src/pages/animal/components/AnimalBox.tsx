import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import type { Animal } from "../interfaces"

const AnimalBox = ({ data, isVisible = true }: { data: Animal, isVisible: boolean }) => {
  const [doShowName, setDoShowName] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  return (
    <Button
      sx={{
        borderRadius: "24px",
        padding: "12px",
        display: isVisible ? "block" : "none",
      }}
      className={`h-[200px] relative overflow-hidden`}
      variant="contained"
      onClick={() => navigate(`/animal/${data.id}`)}
      onMouseEnter={() => setDoShowName(true)}
      onMouseLeave={() => setDoShowName(false)}>

      <img
        src={data.imgSrc} alt={data.name} onLoad={() => setIsLoaded(true)}
        className={`transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {
        doShowName &&
        <Typography
          variant='h6'
          color="hsl(0 0 30%)"
          className="absolute bottom-0 left-0 bg-white w-full p-2" >{data.name}</Typography>
      }

    </Button >
  )
}

export default AnimalBox