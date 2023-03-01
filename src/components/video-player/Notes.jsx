import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useContext, useState } from "react";

import VideoContext from "./videoContext";
import ViewNotes from "./ViewNotes";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  const { playlistId, videoId, currentTime } = useContext(VideoContext);
  const playlistNotes = useStoreState((actions) => actions.playlists.notes);
  const playlistAction = useStoreActions((actions) => actions.playlists);

  console.log(
    "playlistNotes[playlistId].videoId.length",
    playlistNotes[playlistId]?.videoId
  );

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // e.preventDefault;
    if (!value) return setError("Please Write notes");
    const note = {
      playlistId,
      [videoId]: [{ value, time: currentTime }],
    };
    playlistAction.addNotes(note);
    console.log("note", note);
    setError("");
    handleClose();
  };

  return (
    <Box>
      <Stack direction="row">
        <IconButton aria-label="add" onClick={() => handleClickOpen()}>
          <ControlPointIcon />
        </IconButton>
        <Box>
          <Dialog open={open} onClose={() => handleClose()}>
            <DialogTitle>Add Notes</DialogTitle>
            <DialogContent>
              <TextField
                error={error && true}
                autoFocus
                margin="dense"
                id="name"
                label="Write your notes"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => setValue(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => handleClose()}>Cancel</Button>
              <Button onClick={() => handleSubmit()}>Add Notes</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Stack>
      <Stack direction="row">
        <ViewNotes />
      </Stack>
    </Box>
  );
};

export default Notes;
