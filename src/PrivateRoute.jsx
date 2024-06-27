// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./redux/auth/selector";

// /**
//  * - If the route is private and the user is logged in, render the component
//  * - Otherwise render <Navigate> to redirectTo
//  */

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// };
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "./redux/auth/selector";

export default function PrivateRout({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
