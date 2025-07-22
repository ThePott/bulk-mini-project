import { Box, TextField } from '@mui/material'
import { getRegExp } from 'korean-regexp'
import React from 'react'
import { useSearchParams } from 'react-router'
import { dataArray } from "./assets/data/data"
import AnimalBox from './components/AnimalBox'
import ReadmeDialog from '@/src/components/ReadmeDialog'
import README from "./animalReadme.md?raw"

const AnimalHomePage = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchName = searchParams.get("name") ?? ""
  const regExp = getRegExp(searchName)
  const isVisibleArray = dataArray.map((data) => !!data.name.match(regExp))


  return (
    <Box className="max-w-5xl w-full flex flex-col overflow-hidden">
      <ReadmeDialog readme={README} />

      <TextField
      sx={{marginTop: "12px"}}
        onChange={(event) => setSearchParams(`name=${event.target.value}`)}
        variant='outlined'
        label="검색"
      />

      <Box sx={{ scrollbarWidth: "none" }} className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 overflow-y-scroll pt-6'>
        {dataArray.map((data, index) => <AnimalBox key={data.id} data={data} isVisible={isVisibleArray[index]} />)}
      </Box>

    </Box>
  )
})

export default AnimalHomePage