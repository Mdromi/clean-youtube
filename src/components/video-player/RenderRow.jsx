import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStoreState } from "easy-peasy";

const RenderRow = ({ video, index }) => {
  const { thumbnails, title } = { ...video };

  // get current video
  const currentVideo = useStoreState(
    (actions) => actions.currentPlayerItems.currentVideo
  );
  return (
    <Box>
      <Typography
        sx={{ marginRight: 2 }}
        variant="subtitle1"
        color="text.secondary"
        component="span"
      >
        {currentVideo === index ? <PlayArrowIcon /> : index}
      </Typography>
      <Card sx={{ display: "flex", width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 120 }}
          image={thumbnails.medium.url}
          alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="span" variant="subtitle1">
              {`${title.length > 40 ? title.substr(0, 40) + "..." : title}`}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default RenderRow;
