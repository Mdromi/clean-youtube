import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useStoreState } from "easy-peasy";
import ListItem from "../ListItem/ListItem";

const SearchItems = () => {
  const searchItems = useStoreState((actions) => actions.searchItems.items);
  console.log("searchItems", searchItems.length);
  return (
    <div>
      <div>
        {searchItems.length > 0 && (
          <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
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
      </div>
    </div>
  );
};

export default SearchItems;
