import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import SinglePost from './pages/SinglePost/SinglePost.tsx';
import MainLayout from './layouts/MainLayout/MainLayout.tsx';
import ListView from './pages/ListView/ListView.tsx';
import ContentLayout from './layouts/ContentLayout/ContentLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts',
        element: <ContentLayout />,
        handle: {
          crumb: () => <Link to="/posts">Posts</Link>,
        },
        children: [
          {
            path: '/posts',
            element: <ListView />,
          },
          {
            path: '/posts/:id',
            element: <SinglePost />,
            handle: {
              crumb: () => <span>Single Post</span>,
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
