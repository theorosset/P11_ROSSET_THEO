import { createBrowserRouter } from "react-router-dom";
import App from '../../App';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/propos',
      element: "",
    },
    {
      path: '/article',
      element: "",
    },
  ])
  
  export default router