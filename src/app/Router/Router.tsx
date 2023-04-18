import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Apropos from "../Pages/Apropos/Apropos";
import ArticlePage from "../Pages/Article/ArticlePage";

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
  ])
  
  export default router