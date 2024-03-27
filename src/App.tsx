import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: < HomePage />,
    errorElement : <NotFoundPage />,
  },
  {
    path:"/products",
    element: < Products />,
    
  }
])

function App() {
  return (
    <>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </>
  )
 }
 export default App;