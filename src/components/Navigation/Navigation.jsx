import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  console.log("Is Logged In:", isLoggedIn); // Додано для діагностики
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
