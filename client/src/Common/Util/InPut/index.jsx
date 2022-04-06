export const initialUser = {
  username: "",
  email: "",
  password: "",
  repassword: "",
};

export const InPutReducer = (state, action) => {
  switch (action.type) {
    case "username":
      return {
        ...state,
        username: action.username,
      };
    case "email":
      return {
        ...state,
        email: action.email,
      };
    case "password":
      return {
        ...state,
        password: action.password,
      };
    case "repassword":
      return {
        ...state,
        repassword: action.repassword,
      };
    //no default
  }
};
