import React from 'react'
import { Navigate, Outlet,useLocation} from "react-router-dom";
import { useSelector } from "react-redux";



export const RestrictAuth = () => {
    const location = useLocation()
    const currentUser =  useSelector((state) => state.auth.currentUser)
    console.log(currentUser._id)
    const prevPath = location?.state?.from?.pathname
    return currentUser._id ?<Navigate to={prevPath === undefined ? "/feeds" : prevPath} /> : <Outlet />;
}
