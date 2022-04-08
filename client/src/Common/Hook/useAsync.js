import { useEffect, useReducer } from "react";

export const Initialcase = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    //no default
  }
};

const useAsync = (callback, id) => {
  const [state, dispatch] = useReducer(reducer, Initialcase);
  console.log(callback);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback(id);
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    if (id === 0) return;
    fetchData();
  }, [id]);

  return [state, fetchData];
};

export default useAsync;
