import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import SingleCard from "./components/Pages/SingleCard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/PrivateRoute/Checkout";
import ErrorPage from "./components/Pages/ErrorPage";
import Blog from "./components/Pages/Blog";
import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("https://server-side-seven.vercel.app/languages"),
    children: [
      {
        path: "/",
        loader: () => fetch("https://server-side-seven.vercel.app/languages"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("https://server-side-seven.vercel.app/languages"),
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://server-side-seven.vercel.app/languages"),
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/language/:id",
        loader: ({ params }) =>
          fetch(`https://server-side-seven.vercel.app/language/${params.id}`),
        element: <SingleCard></SingleCard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout> </Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

function App() {
  const [mode, setMode] = useState('')
  useEffect(() => {
    setMode(localStorage.getItem("mode"))
  }, []);
  return (
    <div className={` px-10 pb-5 ${mode === "light" && "bg-slate-100 "} ${mode === "dark" && "bg-slate-900 "} `}>
      <div className="container mx-auto">
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
