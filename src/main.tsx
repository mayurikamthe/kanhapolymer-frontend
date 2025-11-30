import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Faq from "./pages/Faq.tsx";
import Error from "./pages/Error.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext.tsx";

// 👜 Bags By Type Pages
import BagsByType from "./pages/BagsByType.tsx";
import NonWovenBags from "./pages/BagTypes/NonWovenBags.tsx";
import JuteBags from "./pages/BagTypes/JuteBags.tsx";
import CottonBags from "./pages/BagTypes/CottonBags.tsx";
import PaperBags from "./pages/BagTypes/PaperBags.tsx";
import LoopHandleBags from "./pages/BagTypes/LoopHandleBags.tsx";
import DCutBags from "./pages/BagTypes/DCutBags.tsx";
import BoxTypeBags from "./pages/BagTypes/BoxTypeBags.tsx";
import DesignYourBags from "./pages/DesignYourBags.tsx"; 

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
