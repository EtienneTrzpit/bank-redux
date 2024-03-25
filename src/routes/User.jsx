import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Account from "../components/Account";
import { useSelector } from "react-redux";
import { profileUser } from "../reducers/profile.reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editUsername } from "../reducers/profile.reducer";
import { useEffect } from "react";

function User() {
  const token = useSelector((state) => state.auth.token);
  const initialUserName = useSelector((state) => state.profile.userName);
  const [userName, setUsername] = useState(initialUserName);
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const dispatch = useDispatch();
  dispatch(profileUser(token));
  useEffect(() => {
    setUsername(initialUserName);
  }, [initialUserName]);
  const handleEditNameClick = () => {
    const modal = document.querySelector(".modal-edit");
    modal.style.display = "block";
  };
  const handleCloseModalClick = () => {
    const modal = document.querySelector(".modal-edit");
    modal.style.display = "none";
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSaveClick = () => {
    dispatch(editUsername(token, userName));
    const modal = document.querySelector(".modal-edit");
    modal.style.display = "none";
  };
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
          <button className="edit-button" onClick={handleEditNameClick}>
            Edit Name
          </button>
          {/* modal pour changer le nom */}
          <dialog className="modal-edit">
            <h2>Edit user info</h2>
            <form className="form-edit">
              <div className="input-group">
                <label htmlFor="userName">User name:</label>
                <input
                  id="userName"
                  type="text"
                  value={userName || ""}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="firstName">First name:</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName || ""}
                  disabled
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName || ""}
                  disabled
                />
              </div>
            </form>
            <button className="edit-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="edit-button" onClick={handleCloseModalClick}>
              Cancel
            </button>
          </dialog>
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
