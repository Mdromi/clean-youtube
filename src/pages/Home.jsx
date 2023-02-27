import React from "react";
import FavoriteList from "../components/favorite-list/FavoriteList";
import PlaylistCardItem from "../components/playlist-card-item/playlist-card-item";
import SearchItems from "../components/search-items/search-items";

const Home = () => {
  return (
    <div>
      <SearchItems />
      <FavoriteList />
      <PlaylistCardItem />
    </div>
  );
};

export default Home;
