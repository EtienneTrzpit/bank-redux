import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store.js";
import Home from "./routes/Home.jsx";
import SignIn from "./routes/SignIn.jsx";
import User from "./routes/User.jsx";
import Protected from "./components/Protected.jsx";
import Error from "./routes/Error.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/user"
            element={
              <Protected>
                <User />
              </Protected>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
