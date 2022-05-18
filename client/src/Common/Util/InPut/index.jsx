export const initialUser = {
  username: "",
  email: "",
  phone_number: "",
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
    case "phone_number":
      return {
        ...state,
        phone_number: action.phone_number,
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
