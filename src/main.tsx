import { ThemeProvider } from '@mui/material'
import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Layout from "./Layout.tsx"
import theme from './theme.ts'
import MainPage from '@/pages/home/page.tsx'
import AnimalDetailPage from '@/pages/animal/detail/page.tsx'
import AnimalHomePage from '@/pages/animal/page.tsx'
import BlankPage from '@/pages/blank/page.tsx'
import ZustandStateRerenderPage from '@/pages/zustand-state-rerender/page.tsx'

// const MainPage = lazy(() => import("@/pages/home/page.tsx"))
// const BlankPage = lazy(() => import("@/pages/blank/page.tsx"))
// const AnimalDetailPage = lazy(() => import("@/pages/animal/detail/page"))
// const AnimalHomePage = lazy(() => import('@/pages/animal/page'))
// const ZustandStateRerenderPage = lazy(() => import("@/pages/zustand-state-rerender/page.tsx"))

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
      },
      {
        path: "/animal/:animalId",
        element: <AnimalDetailPage />,
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
