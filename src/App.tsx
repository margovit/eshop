import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AppShell } from "@mantine/core";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Products } from "./components";


export default function App(){
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </AppShell>
  )
}
