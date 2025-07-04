import { Box, TextField, Input } from '@mui/material'
import { getRegExp } from 'korean-regexp'
import { useSearchParams } from 'react-router'
import { data as dataArray } from "../assets/data/data"
import AnimalBox from "./AnimalBox"


const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchName = searchParams.get("name") ?? ""
  const regExp = getRegExp(searchName)
  const filteredDataArray = dataArray.filter((data) => data.name.match(regExp))


  return (
    <Box className="flex flex-col gap-6">
      <TextField
        onChange={(event) => setSearchParams(`name=${event.target.value}`)}
        variant='outlined'
        label="검색"
      />

      <Box className='flex flex-wrap gap-6'>
        {filteredDataArray.map((data) => <AnimalBox key={data.id} data={data} />)}
      </Box>
    </Box>
  )
}

export default HomePage