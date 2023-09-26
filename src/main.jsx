import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import icon from './assets/logo.svg';
import icon_dark from './assets/logo-dark.svg';
import './styles/index.css'
document.querySelector("link[rel=icon]").href = window.matchMedia('(prefers-color-scheme: dark)').matches ? icon : icon_dark;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
