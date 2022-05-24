import { useEffect, useRef } from "react";
import { Container } from "./Style";

const VideoForm = ({ path }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!canvasRef || !containerRef) return;

    const canvas = canvasRef.current;
    // canvas.width = containerRef.current.clientWidth;
    // canvas.height = containerRef.current.clientHeight;
    // console.log(containerRef.current.clientHeight);
    const context = canvas.getContext("2d");

    const timer = setInterval(() => {
      const image = new Image();
      image.src = path;
      image.onload = () => {
        context.drawImage(image, 0, 0);
      };
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, [canvasRef]);

  return (
    <Container ref={containerRef}>
      <canvas className="canvas" ref={canvasRef} />
    </Container>
  );
};

export default VideoForm;
