import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import OrderForm from './components/OrderForm/OrderForm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    {
          <OrderForm/>
    }
    </BrowserRouter>
  </React.StrictMode>,
)
