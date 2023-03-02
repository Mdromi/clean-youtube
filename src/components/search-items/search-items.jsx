import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "../ListItem/ListItem";

const SearchItems = ({ searchItems, margin }) => {
  return (
    <Box>
      <Box>
        {searchItems.length > 0 && (
          <Container maxWidth={"md"} sx={{ marginTop: margin }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ marginLeft: 1.5 }}
            >
              {`Search Items (${searchItems.length})`}
            </Typography>
            <Grid container sx={{ alignItems: "stretch" }}>
              {searchItems.map((item, index) => (
                <Grid item xs={12} md={5} lg={4} mb={2} key={index}>
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
    </Box>
  );
};

export default SearchItems;
