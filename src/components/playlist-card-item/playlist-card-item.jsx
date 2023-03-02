import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "../ListItem/ListItem";

const PlaylistCardItem = ({ playlistArray, margin }) => {
  return (
    <Box>
      {playlistArray.length > 0 && (
        <Container maxWidth={"md"} sx={{ marginTop: margin }}>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ marginLeft: 1.5 }}
          >
            {`All Playlist (${playlistArray.length})`}
          </Typography>
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
        </Container>
      )}
    </Box>
  );
};

export default PlaylistCardItem;
