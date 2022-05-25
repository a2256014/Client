import { useEffect, useRef } from "react";
import { Container } from "./Style";

const VideoForm = ({ path }) => {
  // const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef) return;

    const timer = setInterval(() => {
      const image = new Image();
      image.className = "img";
      image.src = path + `?${performance.now()}`;
      image.onload = () => {
        if (!containerRef.current) return;
        const $img = containerRef.current.querySelector(".img");
        if ($img) containerRef.current.removeChild($img);
        containerRef.current.appendChild(image);
      };
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [path]);

  return <Container ref={containerRef}></Container>;
};

export default VideoForm;
