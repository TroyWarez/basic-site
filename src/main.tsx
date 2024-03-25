import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import OrderForum from './components/OrderForm'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <OrderForum/>
    </BrowserRouter>
  </React.StrictMode>,
)
