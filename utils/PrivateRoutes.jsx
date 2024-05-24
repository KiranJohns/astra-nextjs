import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from "js-cookie";



const PrivateRoutes = ({ component: Component, authenticated, ...rest }) => {
    // Add your authentication logic here
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    setIsAuthenticated(Cookies.get("login"))
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
  };
  export default PrivateRoutes;
