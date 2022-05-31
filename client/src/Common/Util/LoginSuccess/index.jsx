const onLoginSuccess = (data) => {
  const { token: accessToken } = data;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("userid", 100);
  window.location.reload();
};

export default onLoginSuccess;
