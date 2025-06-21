import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../../styles/index.css'
import { AdminPages } from '../Admin/adminPages/adminPages.tsx'
import { LoginPage } from '../Admin/Login/Login.tsx'
import { Home } from '../UserPage/Home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<LoginPage />} />
      <Route path='/admin/pages' element={<AdminPages />} />
    </Routes>
  </BrowserRouter>
)

