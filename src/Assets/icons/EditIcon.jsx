import React from 'react'
import { getAsideColor } from "../../utils/Functions/getColor"
import { useTheme } from "../../context/theme-context";

export const EditIcon = () => {
  const {theme} = useTheme();
  return (
    <svg width="1.5em" height="1.5em"  color={getAsideColor(theme)}  viewBox="0 0 24 24"><path fill="currentColor" d="m14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg>
  )
}
