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
  // playlist & favList action from store
  const favPlaylist = useStoreActions((action) => action.favorites);
  const playlistAction = useStoreActions((action) => action.playlists);
  const recentVideosAction = useStoreActions((action) => action.recentVideos);

  // get playlist & favList from store
  const playlists = useStoreState((actions) => actions.playlists.data);
  const favPlaylistsItems = useStoreState((actions) => actions.favorites.items);

  let playlistFind = null;

  // has favorite playlist on playlists store?
  const current = playlists[playlistId];
  if (!current) return;

  // set & remove favorite items on (playlist | favPlaylist)
  const favorites = (playlistId) => {
    playlistFind = favPlaylistsItems.find((ele) => ele === playlistId);
    if (!playlistFind) {
      playlists[playlistId].favorite = true;
      return favPlaylist.addFavorite(playlistId);
    } else {
      playlists[playlistId].favorite = false;
      return favPlaylist.removeFromFavorite(playlistId);
    }
  };

  // remove playlist from store
  const removePlaylist = (playlistId) => {
    const text = "Are you sure delete your playlist?";
    if (confirm(text) == true) {
      playlistAction.removePlaylist(playlistId);
      playlistAction.removeNotes(playlistId);
      favPlaylist.removeFromFavorite(playlistId);
      recentVideosAction.removeRecent(playlistId);
    }
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
        <Typography variant="span" color="text.primary">
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
          {/* {console.log("playlists[playlistId]", playlists[playlistId])} */}
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
