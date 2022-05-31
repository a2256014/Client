import { Navigate } from "../../../node_modules/react-router-dom/index";
import IsLogin from "../../Common/Util/IsLogin/index";

const PublicRoute = ({ component: Component, ...parentProps }) => {
  return IsLogin() ? <Navigate to="/home" /> : Component;
};

export default PublicRoute;
