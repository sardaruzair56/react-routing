import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Rootpage from "./pages/Rootpage";
import Error from "./pages/error";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage />,
      errorElement: <Error />,
      children: [
        { path: index=true, element: <HomePage /> },
        { path: "products", element: <ProductPage /> },
        { path: "products/:productId", element: <ProductDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
