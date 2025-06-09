import ReactDOM from 'react-dom/client'
import '../../styles/index.css'
import { Home } from '../UserPage/Home/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Admin/Login/Login.tsx'
import { RegisterProperties } from '../Admin/Registers/RegisterProperties.tsx'
import { Details } from '@mui/icons-material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<LoginPage />} />
      <Route path='/admin/register-properties' element={<RegisterProperties />} />
      <Route path='/admin/immobile/{id}/details' element={<Details />} />
    </Routes>
  </BrowserRouter>
)

