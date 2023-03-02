import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "../ListItem/ListItem";

const FavoriteList = ({ playlistArray, favPlaylist, margin }) => {
  return (
    <div>
      {favPlaylist.length > 0 && (
        <Container maxWidth={"md"} sx={{ marginTop: margin }}>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ marginLeft: 1.5 }}
          >
            {`Favorites (${favPlaylist.length})`}
          </Typography>
          <Grid container sx={{ alignItems: "stretch" }}>
            {playlistArray.map((item, index) => (
              <>
                {item.favorite && (
                  <Grid item xs={12} md={5} lg={4} mb={2} key={index}>
                    <ListItem
                      playlistId={item.playlistId}
                      playlistThumbnail={item.playlistThumbnail}
                      playlistTitle={item.playlistTitle}
                      channelTitle={item.channelTitle}
                    />
                  </Grid>
                )}
              </>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default FavoriteList;
