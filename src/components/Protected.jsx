import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const isAuthentificated = useSelector(
    (state) => state.auth.isAuthentificated
  );
  // Check if the user is authenticated
  if (!isAuthentificated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  // If authenticated, render the child routes
  return children;
};
export default Protected;
