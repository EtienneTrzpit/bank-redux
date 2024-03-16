import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Account from "../components/Account";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function User() {
  const isAuthentificated = useSelector((state) => state.isAuthentificated);
  if (!isAuthentificated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" />
      </main>
      <Footer />
    </>
  );
}

export default User;
