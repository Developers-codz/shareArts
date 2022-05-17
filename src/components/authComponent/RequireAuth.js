import React from 'react'
import {Navigate,Outlet,useLocation} from "react-router-dom"
import { useSelector } from "react-redux";

export const RequireAuth = () => {
    const currentUser = useSelector((state)=>state.auth.currentUser)
    console.log(currentUser._id)
    const location = useLocation();
    console.log(location)
    console.log(currentUser._id)
  return currentUser._id ?<Outlet />: (<Navigate to="/login" state={{from: location}} replace />)
}
