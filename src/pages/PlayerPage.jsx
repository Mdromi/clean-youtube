import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VideoPlayer from "../components/video-player/video-player";

const PlayerPage = () => {
  return (
    <div>
      <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
        <Typography variant="h5" color="text.primary" sx={{ marginLeft: 1.5 }}>
          Video Player
        </Typography>
        <Grid container sx={{ alignItems: "stretch" }}>
          <VideoPlayer />
        </Grid>
      </Container>
    </div>
  );
};

export default PlayerPage;
