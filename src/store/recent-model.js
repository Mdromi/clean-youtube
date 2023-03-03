import { action, persist } from 'easy-peasy';

const recentModel = persist({
    items: [],
    addToRecent: action((state, playlistId) => {
        if(!state.items.includes(playlistId))  state.items.unshift(playlistId);
        state.items = state.items.slice(0, 5)
    }),
    removeRecent: action((state, playlistId) => {
        // if(state.items.includes(playlistId))  
        state.items.splice(state.items.indexOf(playlistId), 1);
    }),
});

export default recentModel;