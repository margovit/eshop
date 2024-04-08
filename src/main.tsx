import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from '@mantine/core';
import "./input.css";
import ProductProvider from './context/ProductContext.tsx';
import { SidebarProvider } from './context/SidebarContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <SidebarProvider>
    <React.StrictMode>
      <ProductProvider>
        <BrowserRouter>
          <MantineProvider>
            <App />
          </MantineProvider>
        </BrowserRouter>
      </ProductProvider>
    </React.StrictMode >
  </SidebarProvider>

);
