import React from 'react'
import { Navigate, Outlet,useLocation} from "react-router-dom";
import { useSelector } from "react-redux";



export const RestrictAuth = () => {
    const location = useLocation()
    const currentUser =  useSelector((state) => state.auth.currentUser)
    const prevPath = location?.state?.from?.pathname
    return currentUser._id ?<Navigate to={prevPath === undefined ? "/" : prevPath} /> : <Outlet />;
}
