import './styles/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import icon from './assets/logo.svg';
import icon_dark from './assets/logo-dark.svg';

import { RouterProvider } from 'react-router-dom';
import { app } from './router/index.jsx';

document.querySelector("link[rel=icon]").href = window.matchMedia('(prefers-color-scheme: dark)').matches ? icon : icon_dark;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={app} />
  </StrictMode>,
)
