import AnimalDetailPage from "@/pages/animal/detail/page"
import AnimalHomePage from '@/pages/animal/page'
import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Layout from "./Layout.tsx"
import theme from './theme.ts'
import MainPage from "@/pages/MainPage.tsx"
import BlankPage from "@/pages/blank/page.tsx"
import ZustandStateRerenderPage from "@/pages/zustand-state-rerender/page.tsx"

// Fold Level 4 ~ 5
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/blank",
        element: <BlankPage />,
      },
      {
        path: "/animal",
        element: <AnimalHomePage />,
        children: [
          {
            path: ":animalId",
            element: <AnimalDetailPage />
          },
        ]
      },
      {
        path: "/zustand-state-rerender",
        element: <ZustandStateRerenderPage />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
