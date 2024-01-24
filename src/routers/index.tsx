import { createBrowserRouter } from "react-router-dom";
import Layout from "components/layout/Layout";
import Main from "pages/Main";
import AddPlace from "pages/AddPlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Main /> }]
  },
  {
    path: "/addPlace",
    element: <AddPlace />
  }
]);

export default router;
