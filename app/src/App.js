import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css";
const Layout = () => {
  return (<div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> },
    { path: "/posts/", element: <Posts /> },
    { path: "/post/:id", element: <Post /> },
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />}
    ],
  },


]);

function App() {
  return (
    <>
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
