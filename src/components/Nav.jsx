import Logo from "../assets/argentBankLogo.png";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { logout } from "..//reducers/auth.reducer";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  const isAuthentificated = useSelector((state) => state.isAuthentificated);
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
            if (!isAuthentificated) {
              console.log("is not authentificated");
            } else {
              console.log("is authentificated");
              localStorage.removeItem("token");
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
