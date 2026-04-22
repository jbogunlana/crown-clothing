import { Outlet, Link } from "react-router-dom";
import crown from "../assets/crown.svg";
import "../scss/Navigation.scss";

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img src={crown} alt="logo" />
        </Link>

        <div className="links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
