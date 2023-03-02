import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const STORAGE_KEY = "cy__playlist__key";

/**
 * note = {
 *  playlistId1: {
 *    videId1: [{item1}, {item2}, {item3}],
 *    videId2: [{item1}, {item2}, {item3}, {item4} ],
 *  }
 *  playlistId2: {
 *    videId: [{item1}, {item2}, {item3}],
 *    videId: [{item1}, {item2}, {item3}, {item4} ],
 *  }
 * }
 * 1. check has video id? then filter and push data
 * 2. not found video id then create new video item
 */

const playlistModel = persist({
  data: {},
  error: "",
  notes: {},
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
  removePlaylist: action((state, playlistId) => {
    delete state.data[playlistId];
  }),
  addNotes: action((state, { payload, videoId }) => {
    let currentNotes = state.notes[payload.playlistId];

    let newNote = Object.values(payload)[1];
    newNote = newNote[newNote.length - 1];

    if (!currentNotes) state.notes[payload.playlistId] = payload;
    else if (currentNotes[videoId])
      state.notes[payload.playlistId][videoId].push(newNote);
    else if (!currentNotes[videoId])
      state.notes[payload.playlistId][videoId] = [newNote];
      
    console.log(
      "Object.values(playlistNotes);",
      Object.values(payload)[1],
      videoId
    );
  }),
  editNotesItem: action(
    (state, { playlistId, videoId, noteId, title, time }) => {
      state.notes[playlistId][videoId] = state.notes[playlistId][
        videoId
      ].filter((item) => {
        if (item.id === noteId) return (item.title = title);
        return item;
      });
    }
  ),
  removeNotesItem: action((state, { playlistId, videoId, noteId }) => {
    state.notes[playlistId][videoId] = state.notes[playlistId][videoId].filter(
      (item) => item.id !== noteId
    );
  }),
  removeNotes: action((state, playlistId) => {
    delete state.notes[playlistId];
  }),
  getPlaylist: thunk(
    async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
      if (getState().data[playlistId]) return;

      setLoading(true);
      try {
        const playlist = await getPlaylist(playlistId);
        // storage.save(STORAGE_KEY, state.data)
        addPlaylist(playlist);
        setError("");
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  ),
});

export default playlistModel;
