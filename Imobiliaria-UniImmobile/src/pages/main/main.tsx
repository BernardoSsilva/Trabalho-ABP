import ReactDOM from 'react-dom/client'
import React from 'react'
import '../../styles/index.css'
// import { BrowserRouter, Route, Routes } from 'react-router'

/* CRIANDO OS CAMINHOS DA PAGINA AQUI DENTRO */
import { App } from '../UserPage/App.tsx'

// import { LoginPage } from '../Admin/Login/Login.tsx'

// createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />} />
//       <Route path='/admin' element={<LoginPage />} />
//     </Routes>
//   </BrowserRouter>
// )


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
