import { Route, Routes } from 'react-router'
import Layout from './Layout'
import ReadmeAnimalHomePage from "../pages/readme/page"
import AnimalAnimalHomePage from "../pages/animal/page"
import BlankPage from "../pages/blank/page"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ReadmeAnimalHomePage />} />
        <Route path="/animal/*" element={<AnimalAnimalHomePage />} />
        <Route path="/blank/*" element={<BlankPage />} />
        <Route />
      </Route>
    </Routes>
  )
}

export default App
