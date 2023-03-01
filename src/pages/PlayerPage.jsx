import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import VideoList from "../components/video-player/video-list";
import VideoPlayer from "../components/video-player/video-player";

const PlayerPage = () => {
  return (
    <div>
      <Container sx={{ marginTop: 16 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <VideoPlayer />
          </Box>
          <Box>
            <VideoList />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PlayerPage;
