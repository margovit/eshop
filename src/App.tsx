import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HomePage from './pages/HomePage';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";


export default function App(){
  return (
    <AppShell>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage/>}/>;
        <Route path="*" element={<Navigate to="/product" />} />
      </Routes>
      <Sidebar />
      <Footer />
    </AppShell>
  )
}
