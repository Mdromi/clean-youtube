import { action, persist } from 'easy-peasy';

const searchModel = persist({
    items: [],
    addToSearch: action((state, playlist) => {
        state.items = [];
        state.items.push(playlist);
    }),
    removeToSearch: action((state) => {
        state.items = [];
    })
});

export default searchModel;