import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selector";

export default function AppBar() {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  console.log("AppBar Is Logged In:", isLoggedIn); // Додано для діагностики

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
