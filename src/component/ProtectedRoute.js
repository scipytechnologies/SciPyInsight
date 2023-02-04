import React from "react";
import { Navigate ,useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const ProtectedRoute = ({ user, children }) => {
  const location =useLocation()
  console.log(location);
  const active = useSelector((state) => state.loginedUser.role)
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  else{
    if(location.pathname.includes(active)){
       //do nothing
    }
    else {
      return <Navigate to="/" replace />;
    }
    
  }
  return children;
};

export default ProtectedRoute;
