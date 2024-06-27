// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./redux/auth/selector";

// /**
//  * - If the route is restricted and the user is logged in,
//  *   render a <Navigate> to redirectTo
//  * - Otherwise render the component
//  */

// export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "./redux/auth/selector";

export default function RestrictedRout({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
