import { createStore } from 'easy-peasy';
import favoritesModel from './favorite-model';
import playerModel from './player-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';
import searchModel from './search-model';

const store = createStore({
    playlists: playlistModel,
    favorites: favoritesModel,
    searchItems: searchModel,
    currentPlayerItems: playerModel,
    recentVideos: recentModel
})

export default store;