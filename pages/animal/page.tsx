import { Route, Routes } from 'react-router'
import DetailPage from './components/DetailPage'
import HomePage from './components/HomePage'

const AnimalHomePage = () => {
  return (
     <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:animalId" element={<DetailPage />} />
      </Routes>
    </>
  )
}

export default AnimalHomePage

