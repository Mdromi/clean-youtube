import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const ListItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
}) => {
  const favPlaylist = useStoreActions((action) => action.favorites);
  const playlistAction = useStoreActions((action) => action.playlists);

  const playlists = useStoreState((actions) => actions.playlists.data);
  const favPlaylistsItems = useStoreState((actions) => actions.favorites.items);

  let playlistFind = null;

  // set & remove favorite items on (playlist | favPlaylist)
  const favorites = (playlistId) => {
    playlistFind = favPlaylistsItems.find((ele) => ele === playlistId);
    console.log("click");
    if (!playlistFind) {
      playlists[playlistId].favorite = true;
      return favPlaylist.addFavorite(playlistId);
    } else {
      playlists[playlistId].favorite = false;
      return favPlaylist.removeFromFavorite(playlistId);
    }
  };

  // remove playlist
  const removePlaylist = (playlistId) => {
    playlistAction.removePlaylist(playlistId);
    playlistAction.removeNotes(playlistId);
    favPlaylist.removeFromFavorite(playlistId);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {`${
            playlistTitle.length > 50
              ? playlistTitle.substr(0, 50) + "..."
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexBox: 1 }}></Box>
      <CardActions disableSpacing>
        <Stack direction={"row"} spacing={2} alignItems="center">
          <Button to={`/player/${playlistId}`} component={Link}>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <PlayCircleOutline />
              <Typography variant="body2" fontWeight={600}>
                Start Tutorial
              </Typography>
            </Stack>
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton size="medium" onClick={() => favorites(playlistId)}>
              {playlists[playlistId].favorite ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <IconButton
              size="medium"
              onClick={() => removePlaylist(playlistId)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ListItem;
