import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logoContainer" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="navLinksContainer">
          <Link className="navLinks" to="/shop">
            SHOP
          </Link>
          <Link className="navLinks" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
