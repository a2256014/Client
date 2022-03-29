import { SERVER_URL } from "../../../Common/Constant/index";
import { Container } from "./Style";

const VideoForm = () => {
	return (
		<Container>
			<video autoPlay muted controls width="90%" height="90%">
				<source src={`${SERVER_URL}/videos/moive.mp4`}></source>
			</video>
		</Container>
	);
};

export default VideoForm;
