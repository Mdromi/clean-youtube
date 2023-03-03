import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useStoreState } from "easy-peasy";
import React from "react";
import ListGroup from "../components/ListItem/ListGroup";

const Home = () => {
  // get all playlist from store & convert array
  const playlistArray = Object.values(
    useStoreState((actions) => actions.playlists.data)
  );

  // get all favoriteList from store
  const favoriteList = useStoreState((actions) => actions.favorites.items);

  // get all searchItems from store
  const searchItems = useStoreState((actions) => actions.searchItems.items);

  // get recent videos from store
  const recentVideosId = useStoreState((actions) => actions.recentVideos.items);
  const recentVideos = playlistArray.filter((item) =>
    recentVideosId.includes(item.playlistId)
  );

  // get and set margin
  const DEFAULT_MARGIN = 16;
  const SET_MARGIN = 10;
  const getMargin = (items) => {
    switch (items) {
      case "PlaylistCardItem":
        if (favoriteList.length > 0 || searchItems.length > 0)
          return SET_MARGIN;
        return DEFAULT_MARGIN;

      case "FavoriteList":
        if (recentVideos.length > 0 || searchItems.length > 0)
          return SET_MARGIN;
        return DEFAULT_MARGIN;
      case "RecentVideos":
        if (recentVideos.length > 0 || searchItems.length > 0)
          return SET_MARGIN;
        return DEFAULT_MARGIN;
      default:
        return DEFAULT_MARGIN;
    }
  };

  return (
    <Box>
      {playlistArray.length == 0 ? (
        <Container
          maxWidth={"md"}
          sx={{ marginTop: getMargin("") + 10, textAlign: "center" }}
        >
          <Typography variant="h2" color="text.primary">
            ADD NEW PLAYLIST...
          </Typography>
        </Container>
      ) : (
        <Box>
          <ListGroup
            title={"Search Items"}
            listArray={searchItems}
            margin={getMargin("")}
          />
          <ListGroup
            title={"Recent"}
            listArray={recentVideos}
            margin={getMargin("RecentVideos")}
          />
          {favoriteList.length > 0 && (
            <ListGroup
              title={"Favorites"}
              listArray={playlistArray}
              favoriteList={favoriteList}
              fav={true}
              margin={getMargin("FavoriteList")}
            />
          )}
          <ListGroup
            title={"All Playlist"}
            listArray={playlistArray}
            margin={getMargin("PlaylistCardItem")}
          />
        </Box>
      )}
    </Box>
  );
};

export default Home;
