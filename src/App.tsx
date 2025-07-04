import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout'
import ReadmeHomePage from "../pages/readme/page"
import AnimalHomePage from "../pages/animal/page"
import BlankPage from "../pages/blank/page"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ReadmeHomePage />} />
        <Route path="/animal" element={<AnimalHomePage />} />
        <Route path="/blank" element={<BlankPage />} />
        <Route />
      </Route>
    </Routes>
  )
}

export default App
