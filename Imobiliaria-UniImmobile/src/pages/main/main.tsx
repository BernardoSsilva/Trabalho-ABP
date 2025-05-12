import { createRoot } from 'react-dom/client'
import '../../styles/index.css'
import { App } from '../UserPage/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { LoginPage } from '../Admin/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/admin' element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
)
