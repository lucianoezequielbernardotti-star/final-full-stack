import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth} from "../context/auth-context";

const PrivateRouter = (path, element) => {
    const { logout } = useAuth();
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
        logout();
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}

export default PrivateRouter;