import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import validatePlaylistId from "../../utils/validatePlaylistId";

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
  const [state, setState] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    // TODO handle url later
    if (!state) alert("Invalid State");
    else {
      if (!validatePlaylistId(state)) {
        setError("Url Invalid!..");
      } else {
        getPlaylistId(validatePlaylistId(state));
        setState("");
        setError(null);
        handleClose();
      }
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist please insert the playlist id or playlist link.
          Please make sure the link is correct. Otherwise we won't able to fetch
          the playlist information.
        </DialogContentText>
        <TextField
          error={error && true}
          autoFocus
          margin="dense"
          id="name"
          label="Only Playlist id or link"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistForm;
