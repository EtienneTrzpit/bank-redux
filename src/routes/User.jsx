import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Account from "../components/Account";

function User() {
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
          <button className="edit-button" /*onClick={handleEditNameClick}*/>
            Edit Name
          </button>
          {/* modal pour changer le nom */}
          <dialog className="modal-edit">
            <h2>Edit user info</h2>
            <form className="form-edit">
              <div className="input-group">
                <label htmlFor="userName">User name:</label>
                <input id="userName" type="text" />
              </div>
              <div className="input-group">
                <label htmlFor="firstName">First name:</label>
                <input id="firstName" type="text" />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" />
              </div>
            </form>
            <button className="button">Save</button>
            <button className="button">Cancel</button>
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
