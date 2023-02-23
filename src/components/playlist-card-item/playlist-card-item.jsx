import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useStoreState } from "easy-peasy";
import ListItem from "../ListItem/ListItem";

const PlaylistCardItem = () => {
  const playlists = useStoreState((actions) => actions.playlists.data);
  const playlistArray = Object.values(playlists);
  return (
    <div>
      <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
        <Typography variant="h5" color="text.primary" sx={{ marginLeft: 1.5 }}>
          All Playlist
        </Typography>
        {playlistArray.length > 0 && (
          <Grid container sx={{ alignItems: "stretch" }}>
            {playlistArray.map((item) => (
              <Grid item xs={12} md={5} lg={4} mb={2} key={item.playlistId}>
                <ListItem
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default PlaylistCardItem;
