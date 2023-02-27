import { createStore } from 'easy-peasy';
import favoritesModel from './favorite-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';
import searchModel from './search-model';

const store = createStore({
    playlists: playlistModel,
    favorites: favoritesModel,
    recent: recentModel,
    searchItems: searchModel
})

export default store;