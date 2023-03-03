import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ item }) => {
  return (
    <Grid item xs={12} md={5} lg={4} mb={2}>
      <ListItem
        playlistId={item.playlistId}
        playlistThumbnail={item.playlistThumbnail}
        playlistTitle={item.playlistTitle}
        channelTitle={item.channelTitle}
      />
    </Grid>
  );
};

const ListGroup = ({
  title,
  listArray,
  margin,
  favoriteList = [],
  fav = false,
}) => {
  return (
    <Box>
      {listArray.length > 0 && (
        <Container maxWidth={"md"} sx={{ marginTop: margin }}>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ marginLeft: 1.5 }}
          >
            {`${title} (${fav ? favoriteList.length : listArray.length})`}
          </Typography>
          <Grid container sx={{ alignItems: "stretch" }}>
            {fav
              ? listArray.map((item, index) => (
                  <Fragment key={index}>
                    {item.favorite && <List item={item} />}
                  </Fragment>
                ))
              : listArray.map((item, index) => (
                  <List key={index} item={item} />
                ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default ListGroup;
