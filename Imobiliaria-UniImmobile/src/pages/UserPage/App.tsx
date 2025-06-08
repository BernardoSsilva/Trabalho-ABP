  // import { createRoot, } from 'react-dom/client'
  import '../../styles/index.css'
  // import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'

  /* CRIANDO OS CAMINHOS DA PAGINA AQUI DENTRO */

  // import { NavBar } from '../../utilities/NavBar.tsx':
  // import { App } from './App.tsx'
  import { LoginPage } from '../Admin/Login/Login.tsx'
  import { RegisterProperties } from '../Admin/Registers/RegisterProperties.tsx'
  import { Details } from '../Admin/ImmobileDetail/ImmobileDetail.tsx'
  import { Home } from '../UserPage/Home/Home.tsx'
  // createRoot(document.getElementById('root')!).render(
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<App />} />
  //       <Route path='/admin' element={<LoginPage />} />
  //     </Routes>
  //   </BrowserRouter>
  // )

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <LoginPage />,
    },
    {
      path: '/register-properties',
      element: <RegisterProperties />,
    },
    {
      path:'/Details',
      element: <Details/>
    },
    {
      path:'/home',
      element: <Home/>
    }
    // {
    //   path: '/app',
    //   element: <NavBar />,
    //   children: [
    //     {
    //       path: 'register-properties',
    //       element: <RegisterProperties />,
    //     },
    //   ],
    // },
  ]);


  export function App() {
    return <RouterProvider router={router} />
  }