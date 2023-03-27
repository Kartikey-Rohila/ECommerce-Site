import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./App.scss";

const Layout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <div style={{ marginBottom: "80px" }} />
        <Outlet />
        <Footer />
      </div>
      <div className="mob">
        <div className="center">
          CERTYSTORE
        </div>
        <span>Sorry for the inconvenience!</span>
        <span>This site is currently available for screen width of more than 1440px.</span>
        <br />
        {/* <span>In the meantime, star this project on{` `}
          <Link className="link" style={{ textDecoration: "underline" }} to="https://github.com/CERTIFIED2003/ECommerce-Site-v1">Github</Link>
        </span> */}
      </div>
    </>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <span>404 | Error</span>
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
