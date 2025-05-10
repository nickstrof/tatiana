import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Home, NotFound } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App