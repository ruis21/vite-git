import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/Abous.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/", // 어떠한 url 경로로 접속했을 때
    element: <App />,
    children: [
      {
        path: "", // 어떠한 url 경로로 접속했을 때
        element: <Home />
      },
      {
        path: "About", // 어떠한 url 경로로 접속했을 때
        element: <About />
      },
      {
        path: "Contact", // 어떠한 url 경로로 접속했을 때
        element: <Contact />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
