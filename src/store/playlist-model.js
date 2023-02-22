import { action, persist, thunk } from 'easy-peasy';
import getPlaylist from '../api';

const playlistModel = persist({
    data: {},
    error: '',
    isLoading: false,
    setLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    setError: action((state, payload) => {
        state.error = payload;
    }),
    addPlaylist: action((state, payload) => {
        state.data[payload.playlistId] = payload;
    }),
    getPlaylist: thunk(async({addPlaylist, setLoading, setError}, playlistId, {getState}) => {
        if (getState().data[playlistId]) return;

        setLoading(true);
        try {
            const playlist = await getPlaylist(playlistId);
            addPlaylist(playlist)
        } catch (err) {
            setError(e.response?.data?.error?.message || "Something went wrong");
        } finally{setLoading(false)}
    })
});

export default playlistModel;