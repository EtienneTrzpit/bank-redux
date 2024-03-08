import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { loginUser } from "..//reducers/auth.reducer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthentificated = useSelector((state) => state.isAuthentificated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email: email, password: password };
    dispatch(loginUser(userData)).then((res) => {
      if (isAuthentificated) {
        localStorage.setItem("token", res.payload.body.token);
        navigate("/user");
      }
    });
  };
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                required
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
          <dialog className="modal-error">
            <p>Wrong username or password</p>
            <button>OK</button>
          </dialog>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;