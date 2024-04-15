import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { MantineProvider } from '@mantine/core';
import "./input.css";
import { SidebarProvider } from './context/SidebarContext.tsx';
import CartProvider from './context/CartContext.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <SidebarProvider>
      <CartProvider>
        <React.StrictMode>
          <BrowserRouter>
            <MantineProvider>
              <App />
            </MantineProvider>
          </BrowserRouter>
        </React.StrictMode >
      </CartProvider>
    </SidebarProvider>
  </QueryClientProvider>,
);
