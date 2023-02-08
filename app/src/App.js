import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css";
import Profile from "./pages/profile/Profile";
import Contact from "./pages/Contact/Contact";
import About from "./pages/Aboutus/About";
import Write from "./pages/write/Write";
import Edit from "./pages/edit/Edit";
const Layout = () => {
  return (
    <div className="app">
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
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts/", element: <Posts /> },
      { path: "/post/:id", element: <Post /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/write/:id", element: <Write /> },
      { path: "/edit/:id", element: <Edit /> },
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
