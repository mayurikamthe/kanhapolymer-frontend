import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";

// 👜 Bags By Type Pages
import BagsByType from "./pages/BagsByType";
import NonWovenBags from "./pages/BagTypes/NonWovenBags";
import JuteBags from "./pages/BagTypes/JuteBags";
import CottonBags from "./pages/BagTypes/CottonBags";
import PaperBags from "./pages/BagTypes/PaperBags";
import LoopHandleBags from "./pages/BagTypes/LoopHandleBags";
import DCutBags from "./pages/BagTypes/DCutBags";
import BoxTypeBags from "./pages/BagTypes/BoxTypeBags";
import DesignYourBags from "./pages/DesignYourBags"; 

// ✅ Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/design-your-bags", element: <DesignYourBags /> },
      { path: "/faq", element: <Faq /> },

      // 👜 Bags by Type Routes
      { path: "/bags-by-type", element: <BagsByType /> }, // ✅ directly shows dropdown
      { path: "/bags-by-type/non-woven", element: <NonWovenBags /> },
      { path: "/bags-by-type/jute", element: <JuteBags /> },
      { path: "/bags-by-type/cotton", element: <CottonBags /> },
      { path: "/bags-by-type/paper", element: <PaperBags /> },
      { path: "/bags-by-type/loop-handle", element: <LoopHandleBags /> },
      { path: "/bags-by-type/d-cut", element: <DCutBags /> },
      { path: "/bags-by-type/box-type", element: <BoxTypeBags /> },
    ],
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <Error />,
  },
]);

// ✅ React Query Client
const queryClient = new QueryClient();

// ✅ Render Root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
