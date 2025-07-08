import { Box, TextField } from '@mui/material'
import { getRegExp } from 'korean-regexp'
import { useSearchParams } from 'react-router'
import { dataArray } from "./assets/data/data"
import AnimalBox from "./components/AnimalBox"


const AnimalHomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchName = searchParams.get("name") ?? ""
  const regExp = getRegExp(searchName)
  const filteredDataArray = dataArray.filter((data) => data.name.match(regExp))


  return (
    <Box className="max-w-5xl w-full flex flex-col gap-6">
      <TextField
        onChange={(event) => setSearchParams(`name=${event.target.value}`)}
        variant='outlined'
        label="검색"
      />

      <Box className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6'>
        {filteredDataArray.map((data) => <AnimalBox key={data.id} data={data} />)}
      </Box>
    </Box>
  )
}

export default AnimalHomePage