import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home-page';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Layout from './components/layout';
import Article from './pages/article';
import SingleArticle from './pages/single-article';
import ErrorPage from './pages/error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/blog",
        element: <Blog />,
        children: [
          {
            path: '',
            element: <div><h1>My Blog</h1></div>,
            loader: () => fetch('https://jisonplaceholder.typicode.com/posts?_limit=10')
          },
          {
            path: ":id",
            element: <SingleArticle />
          },
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


// children: [
//   {
//     path: ":id",
//     element: <Article />
//   }
// ]