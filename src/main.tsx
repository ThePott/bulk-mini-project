import AnimalDetailPage from '@/pages/animal/detail/page.tsx'
import AnimalHomePage from '@/pages/animal/page.tsx'
import BlankPage from '@/pages/blank/page.tsx'
import CafeMainPage from '@/pages/cafe/cafe-home/CafeMainPage.tsx'
import MainPage from '@/pages/home/page.tsx'
import ZustandStateRerenderPage from '@/pages/zustand-state-rerender/page.tsx'
import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Layout from "./Layout.tsx"
import theme from './theme.ts'
import CafeLayout from '@/pages/cafe/CafeLayout.tsx'
import CafeCartPage from '@/pages/cafe/cafe-cart/CartPage.tsx'

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
      {
        path: "/cafe",
        element: <CafeLayout />,
        children: [
          {
            path: "",
            element: <CafeMainPage />,
          },
          {
            path: "cart",
            element: <CafeCartPage />,
          },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
