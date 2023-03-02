import { action, persist } from 'easy-peasy';

const playerModel = persist({
    items: [],
    currentVideo: 1,
    addPlayer: action((state, videoItem) => {
        state.items = [];
        state.currentVideo = 1
        state.items.push(...videoItem);
    }),
    addCurrentVideo: action((state, index) => {
        if(index > 0 && index <= state.items.length)
        state.currentVideo = index;
    }),
});

export default playerModel;