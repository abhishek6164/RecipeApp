// import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom' 
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import RecipeContext from './context/RecipeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <RecipeContext>
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>,
  </RecipeContext>
)
