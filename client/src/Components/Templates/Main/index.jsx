import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import VideoForm from "../../Molecules/Video";
import { _Modal } from "../../Molecules/Modal";

import { VideoContainer } from "./Style";

const MainTemplate = () => {
  const navigator = useNavigate();

  setTimeout(() => navigator("/info/1"), 5000);

  return (
    <>
      <VideoContainer>
        {new Array(8).fill(0).map(() => (
          <VideoForm />
        ))}
      </VideoContainer>
    </>
  );
};

export default MainTemplate;
