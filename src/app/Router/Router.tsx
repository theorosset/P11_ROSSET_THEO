import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Apropos from "../Pages/Apropos/Apropos";
import ArticlePage from "../Pages/Article/ArticlePage";
import Page404 from "../Pages/Page404/Page404";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/propos',
      element: <Apropos />,
    },
    {
      path: '/article',
      element: <ArticlePage />,
    },
    {
      path: '/*',
      element: <Page404 />
    }
  ])
  
  export default router