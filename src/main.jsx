import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import ErrorPage from './routes/errorPage.jsx'
import Home from './routes/home.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App/>, errorElement: <ErrorPage/> },
  { path: "home", element: <Home/>, errorElement: <ErrorPage/>},
  { path: "search"}, //puede buscar entre restaurantes o platillos
  { path: "orderDetails"}, //se muestran los productos contenidos en la orden, los precios de cada uno y
                          // el monto total de la orden
  { path: "profile"}, // informacion sobre el perfil del usuario
  { path: "signUp"}, // luego de darle click al boton de "other sign in methods"
  { path: ":productID"} // puede ver la informacion del producto, agregar cantidad al carrito y ver productos sugeridos
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
