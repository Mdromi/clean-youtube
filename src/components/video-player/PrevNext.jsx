import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PrevNext = ({ currentPlayerVideo, currentVideo, current }) => {
  return (
    <Box
      sx={{ marginTop: 3, display: "flex", justifyContent: "space-between" }}
    >
      <Button
        color="inherit"
        variant="outlined"
        startIcon={<ArrowLeftIcon />}
        onClick={() => currentVideo.addCurrentVideo(currentPlayerVideo - 1)}
        disabled={currentPlayerVideo === 1}
      >
        Prev
      </Button>
      <Button
        color="inherit"
        variant="outlined"
        endIcon={<ArrowRightIcon />}
        onClick={() => currentVideo.addCurrentVideo(currentPlayerVideo + 1)}
        disabled={currentPlayerVideo === current.playlistItems.length}
      >
        Next
      </Button>
    </Box>
  );
};

export default PrevNext;
