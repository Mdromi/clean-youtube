import { useStoreActions } from "easy-peasy";
import PlaylistForm from "./PlaylistForm";

const AddPlaylist = ({ open, handleClose }) => {
  const playlist = useStoreActions((actions) => actions.playlists);
  const getPlaylistId = (playlistId) => {
    playlist.getPlaylist(playlistId);
  };

  return (
    <PlaylistForm
      open={open}
      handleClose={handleClose}
      getPlaylistId={getPlaylistId}
    />
  );
};

export default AddPlaylist;
