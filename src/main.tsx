import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from '@mantine/core';
import "./input.css";
import ProductProvider from './context/ProductContext.tsx';
import { SidebarProvider } from './context/SidebarContext.tsx';
import  CartProvider  from './context/CartContext.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <SidebarProvider>
    <CartProvider>
    <React.StrictMode>
      <ProductProvider>
        <BrowserRouter>
          <MantineProvider>
            <App />
          </MantineProvider>
        </BrowserRouter>
      </ProductProvider>
    </React.StrictMode >
    </CartProvider>
  </SidebarProvider>
  </QueryClientProvider>,
);
