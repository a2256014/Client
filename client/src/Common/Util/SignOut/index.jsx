import { Navigate } from "../../../../node_modules/react-router-dom/index";

const SignOut = (event) => {
  return event ? (
    <Navigate to="/login">{localStorage.removeItem("accessToken")}</Navigate>
  ) : null;
};

export default SignOut;
