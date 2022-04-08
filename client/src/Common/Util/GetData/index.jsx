import { useEffect, useState } from "react";
import axios from "axios";
import { ALERT_GET_URL } from "../../Constant/index";
import { AutoHeader } from "../AutoHeader/index";

const GetData = (user_id) => {
  const { id } = user_id;
  const [data, setData] = useState({
    actionType: "",
    upper_leftx: 0,
    upper_lefty: 0,
    bottom_rightx: 0,
    bottom_right: 0,
    capture_file: { created_date: "", file_path: "", file_id: "" },
  });

  const getData = async (id) => {
    const {
      data: {
        emergency_type: { type_name_kor: actionType },
        upper_leftx,
        upper_lefty,
        bottom_rightx,
        bottom_righty,
        capture_file,
      },
    } = await axios.get(ALERT_GET_URL(id), { headers: AutoHeader() });
    setData({
      actionType,
      upper_leftx,
      upper_lefty,
      bottom_rightx,
      bottom_righty,
      capture_file,
    });
  };
  useEffect(() => {
    getData(user_id);
  }, []);

  return data;
};

export default GetData;
