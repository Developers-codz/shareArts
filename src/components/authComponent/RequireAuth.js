import React from 'react'
import {Navigate,Outlet,useLocation} from "react-router-dom"
import { useSelector } from "react-redux";

export const RequireAuth = () => {
    const currentUser = useSelector((state)=>state.auth.currentUser)
    const location = useLocation();
  return currentUser._id ?<Outlet />: (<Navigate to="/landing" state={{from: location}} replace />)
}
