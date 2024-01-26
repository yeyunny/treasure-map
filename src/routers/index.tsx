import { createBrowserRouter } from "react-router-dom";
import Layout from "components/layout/Layout";
import Main from "pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Main /> }]
  }
]);

export default router;
