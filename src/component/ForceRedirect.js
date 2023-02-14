import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const ForceRedirect = ({ user, children }) => {
  const active = useSelector((state) => state.loginedUser.role)
  console.log(user)
  console.log(active);
  if (user == true) {
    switch(active) {
      case 'student': 
      return <Navigate to="/student/home" replace />;
      case 'admin': 
      return <Navigate to="/admin/home" replace />;
      case 'teacher' :
      return <Navigate to="/teacher/home" replace />;
      case '' :
        return <Navigate to="/" replace />;
    }
    
  }
  return children;
};

export default ForceRedirect;