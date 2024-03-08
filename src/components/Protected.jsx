import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  // Check if the user is authenticated
  if (!token) {
    console.log("Protected: user is not authenticated");
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the child routes
  return children;
};
export default Protected;
