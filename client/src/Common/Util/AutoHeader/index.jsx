export const AutoHeader = () => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return { Authorization: "Bearer " + token };
  }
};
