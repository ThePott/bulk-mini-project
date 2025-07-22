import { Box, Typography } from '@mui/material'
import FruitBox from './components/FruitBox'
import { logAtStart } from './assets/asciiArt'
import { useEffect } from 'react'
import README from "./zustandReadme.md?raw"
import ReadmeDialog from '@/src/components/ReadmeDialog'

const ZustandStateRerenderPage = () => {
  setTimeout(
    () => console.log(logAtStart),
    500
  )
  useEffect(
    () => {
      return () => console.log("---- app re-rendered")
    }
  )
  
  return (
    <Box sx={{scrollbarColor: "hsl(0 0 30) transparent"}} className='h-full py-6 flex justify-center overflow-y-scroll flex-wrap gap-6'>
      <ReadmeDialog readme={README} />
      
      <Box className="flex flex-col gap-6 items-center">

        <Typography variant='h5' className='font-semibold'>Zustand Store State을 어떻게 할당할까</Typography>
        <Typography variant='h6'>개발자 도구에서 콘솔창을 열어보세요</Typography>

        <Box className='flex gap-6 flex-wrap justify-center items-start'>
          <FruitBox usage='DESTRUCTURED'>
            <FruitBox.Apple />
            <FruitBox.Banana />
          </FruitBox>

          <FruitBox usage='ONE_BY_ONE'>
            <FruitBox.Apple />
            <FruitBox.Banana />
          </FruitBox>
        </Box>

      </Box>
    </Box>
  )
}

export default ZustandStateRerenderPage
