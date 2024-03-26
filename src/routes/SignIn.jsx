import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/auth.reducer";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function SignIn() {
  //variable pour vérifier si la chackbox est cochée
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const isAuthentificated = useSelector(
    (state) => state.auth.isAuthentificated
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!emailRegex.test(email)) {
      alert("format d'email invalide");
    } else if (!passwordRegex.test(password)) {
      alert(
        "Le mot de passe doit contenir au moins 8 caractères, dont une lettre majuscule, une lettre minuscule et un chiffre"
      );
    } else {
      if (checked) {
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("email");
      }
      const userData = { email: email, password: password };
      dispatch(loginUser(userData));
    }
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      setChecked(true);
    }
  }, []);
  if (isAuthentificated) {
    return <Navigate to="/user" />;
  }
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
                autoComplete="off"
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
                autoComplete="off"
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={checked}
                onChange={handleCheckboxChange}
              />
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
