import { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";

import { AutoHeader } from "../Util/AutoHeader/index";

const useGetData = (address) => {
  const [data, setData] = useState("");
  const [, , , , , , uri] = address.split("/");
  useEffect(() => {
    if (uri === "undefined") return;
    if (address.substr(-2) === "-1") return;
    Getdata(address);
  }, [address]);

  const Getdata = async (id) => {
    const response = await axios
      .get(id, {
        headers: AutoHeader(),
      })
      .catch((error) => {
        if (error.response.status === 500 || error.response.status === 400) {
          console.log("잘못된 id로 요청");
        }
      });
    setData(response.data);
  };

  return data;
};

export default useGetData;
