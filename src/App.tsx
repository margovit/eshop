import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";



export default function App(){
  return (
    <AppShell>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductPage/>}/>;
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </AppShell>
  )
}
