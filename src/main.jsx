import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/homesPage/Home";
import Login from "./pages/logins/Login";

import AuthProvider from "./provider/AuthProvider";
import AddBooks from "./pages/AddBooks";
import AllBooks from "./pages/AllBooks";
import BookByCategory from "./components/bookByCat/BookByCategory";
import BookDetailById from "./pages/bookdetail-pages/BookDetailById";
import AllBorrowers from "./pages/allBorrowers/AllBorrowers";
import MyBorrowedBooks from "./pages/myBorrowedBooks/MyBorrowedBooks";
import Update from "./pages/Update";
import Error404 from "./pages/Error404";
import PrivateRoute from "./routes/PrivateRoute";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://library-server-jade.vercel.app/categories"),
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
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>,
        loader: () => fetch("https://library-server-jade.vercel.app/allBooks"),
      },
      {
        path: "/singleCategory/:category",
        element: <BookByCategory></BookByCategory>,
        loader: ({ params }) =>
          fetch(
            `https://library-server-jade.vercel.app/singleCategory/${params.category}`
          ),
      },
      {
        path: "/bookDetail/:id",
        element: (
          <PrivateRoute>
            <BookDetailById></BookDetailById>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://library-server-jade.vercel.app/bookDetail/${params.id}`
          ),
      },
      {
        path: "/allBorrowers",
        element: (
          <PrivateRoute>
            <AllBorrowers></AllBorrowers>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://library-server-jade.vercel.app/allBorrowers"),
      },
      {
        path: "/myBorrowed",
        element: (
          <PrivateRoute>
            <MyBorrowedBooks></MyBorrowedBooks>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://library-server-jade.vercel.app/allBorrowers"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://library-server-jade.vercel.app/bookDetail/${params.id}`
          ),
      },
      {
        path: "/*",
        element: <Error404></Error404>,
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
