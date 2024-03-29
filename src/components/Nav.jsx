import Logo from "../assets/argentBankLogo.png";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth.actions";

function Nav() {
  const isAuthentificated = useSelector(
    (state) => state.auth.isAuthentificated
  );
  const dispatch = useDispatch();
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a
          className="main-nav-item"
          href={isAuthentificated ? "/" : "/sign-in"}
          onClick={(e) => {
            if (isAuthentificated) {
              dispatch(logout());
            }
          }}
        >
          <FontAwesomeIcon icon={faCircleUser} />
          {isAuthentificated ? "Sign Out" : "Sign In"}
        </a>
      </div>
    </nav>
  );
}

export default Nav;
