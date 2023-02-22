import { createStore } from 'easy-peasy';
import favoritesModel from './favorite-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';

const store = createStore({
    playlists: playlistModel,
    favorites: favoritesModel,
    recent: recentModel
})

export default store;