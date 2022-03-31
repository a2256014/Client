import axios from "axios";

const onLoginSuccess = (data) => {
  const {
    response: { access_token: accessToken },
  } = data;
  localStorage.setItem("accessToken", accessToken);

  axios.defaults.headers.common["Authorization"] = `${accessToken}`;
};

export default onLoginSuccess;
