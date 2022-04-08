import { useEffect, useState } from "react";
import { BiArrowToBottom, BiArrowFromBottom } from "react-icons/bi";

import LogHeader from "../../Organisms/LogHeader/index";
import {
  useNavigate,
  useParams,
} from "../../../../node_modules/react-router-dom/index";

import {
  Contain,
  Img,
  ListGroup,
  ListItem,
  ListName,
  LogContainer,
  LogData,
  Next,
  ShowImg,
} from "./style";
import { LOG_GET_URL } from "../../../Common/Constant/index";
import useGetData from "../../../Common/Hook/useGetData";

const LogTemplate = () => {
  const param = useParams();
  const nav = useNavigate();
  const [filterData, setFilterData] = useState([]);
  const [show, setShow] = useState("");

  const data = useGetData(LOG_GET_URL(param.id));

  const onclick = (e) => {
    if (show == e.currentTarget.id) {
      setShow("");
    } else {
      setShow(e.currentTarget.id);
    }
  };

  const onclick2 = (e) => {
    nav(`/log/${param.type}/${e.currentTarget.id}`);
  };

  const CountPage = () => {
    let a = [];
    for (let i = 1; i < data.last_page + 2; i++) {
      a.push(
        <Next id={i - 1} onClick={onclick2}>
          {i}
        </Next>
      );
    }
    return a;
  };

  useEffect(() => {
    if (data.data === undefined) return;
    if (param.type === "all") {
      setFilterData(data.data);
    } else {
      setFilterData(
        data.data.filter(
          (data) => data.emergency_type.type_name_eng === param.type
        )
      );
    }
  }, [param]);

  return (
    <>
      <LogHeader />
      <LogContainer>
        <ListGroup>
          <ListName>종류 시간</ListName>
          {filterData.map((log) => {
            return (
              <>
                <ListItem>
                  <LogData>
                    {`${log.classroom}반`}
                    {log.emergency_type.type_name_kor}
                    {log.capture_file.created_date}
                    {show == log.capture_file.file_id ? (
                      <>
                        <ShowImg
                          id={log.capture_file.file_id}
                          onClick={onclick}
                        >
                          <BiArrowFromBottom />
                        </ShowImg>
                      </>
                    ) : (
                      <ShowImg id={log.capture_file.file_id} onClick={onclick}>
                        <BiArrowToBottom />
                      </ShowImg>
                    )}
                  </LogData>
                </ListItem>
                {show == log.capture_file.file_id && (
                  <Img src={log.capture_file.file_path} />
                )}
              </>
            );
          })}
          <Contain>{CountPage()}</Contain>
        </ListGroup>
      </LogContainer>
    </>
  );
};

export default LogTemplate;
