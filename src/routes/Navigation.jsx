import { Outlet, Link } from "react-router-dom";
import crown from "../assets/crown.svg";
import "../scss/Navigation.scss";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { signOutUser } from "../utils/firebase/firebase";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img src={crown} alt="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
