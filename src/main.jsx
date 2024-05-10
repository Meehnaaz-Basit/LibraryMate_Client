import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/homesPage/Home";
import Login from "./pages/logins/Login";
import Register from "./pages/logins/Register";
import AuthProvider from "./provider/AuthProvider";
import AddBooks from "./pages/AddBooks";
import AllBooks from "./pages/AllBooks";
import BookByCategory from "./components/bookByCat/BookByCategory";
import BookDetailById from "./pages/bookdetail-pages/BookDetailById";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBooks",
        element: <AddBooks></AddBooks>,
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
        loader: () => fetch("http://localhost:5000/allBooks"),
      },
      {
        path: "/singleCategory/:category",
        element: <BookByCategory></BookByCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleCategory/${params.category}`),
      },
      {
        path: "/bookDetail/:id",
        element: <BookDetailById></BookDetailById>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookDetail/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
