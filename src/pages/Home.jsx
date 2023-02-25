import React from "react";
import FavoriteList from "../components/favorite-list/FavoriteList";
import PlaylistCardItem from "../components/playlist-card-item/playlist-card-item";

const Home = () => {
  return (
    <div>
      <FavoriteList />
      <PlaylistCardItem />
    </div>
  );
};

export default Home;
