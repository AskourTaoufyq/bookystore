import react from 'react'
import reactdom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'

reactdom.createRoot(document.getElementById('root')).render(
  <react.StrictMode>
    <RouterProvider router={router}/>
  </react.StrictMode>,
)
