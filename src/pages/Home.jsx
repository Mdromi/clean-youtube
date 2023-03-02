import Box from "@mui/material/Box";
import { useStoreState } from "easy-peasy";
import React from "react";
import FavoriteList from "../components/favorite-list/FavoriteList";
import PlaylistCardItem from "../components/playlist-card-item/playlist-card-item";
import SearchItems from "../components/search-items/search-items";

const Home = () => {
  // get all playlist from store & convert array
  const playlistArray = Object.values(
    useStoreState((actions) => actions.playlists.data)
  );

  // get all favoriteList from store
  const favoriteList = useStoreState((actions) => actions.favorites.items);

  // get all searchItems from store
  const searchItems = useStoreState((actions) => actions.searchItems.items);

  // set default margin
  const DEFAULT_MARGIN = 12;
  const SET_MARGIN = 14;

  const getMargin = (items) => {
    switch (items) {
      case "PlaylistCardItem":
        if (favoriteList.length > 0 || searchItems.length > 0)
          return SET_MARGIN;
        return DEFAULT_MARGIN;

      case "FavoriteList":
        if (searchItems.length > 0) return SET_MARGIN;
        return DEFAULT_MARGIN;
      default:
        return DEFAULT_MARGIN;
    }
  };

  return (
    <Box>
      <SearchItems searchItems={searchItems} margin={DEFAULT_MARGIN} />
      <FavoriteList
        playlistArray={playlistArray}
        favPlaylist={favoriteList}
        margin={getMargin("FavoriteList")}
      />
      <PlaylistCardItem
        playlistArray={playlistArray}
        margin={getMargin("PlaylistCardItem")}
      />
    </Box>
  );
};

export default Home;
