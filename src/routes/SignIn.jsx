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
import { useCallback } from "react";
import ErrorModal from "../components/ErrorModal";

function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const showErrorModal = useCallback((message) => {
    setErrorMessage(message);
    setModalOpen(true);
  }, []);

  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (error) {
      setErrorMessage("Email or password is incorrect");
      setModalOpen(true);
    }
  }, [error]);
  const handleCloseModal = () => {
    setModalOpen(false);
    setErrorMessage("");
  };
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
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!emailRegex.test(email)) {
      showErrorModal("invalid email format");
    } else if (!passwordRegex.test(password)) {
      showErrorModal(
        "The password must contain at least 8 characters including a lowercase letter and a number"
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
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                id="email"
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
          <ErrorModal
            isOpen={isModalOpen}
            message={errorMessage}
            onClose={handleCloseModal}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
