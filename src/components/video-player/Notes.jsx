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

import shortid from "shortid";
import NotesView from "./NotesView";
import VideoContext from "./videoContext";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState({});

  const { playlistId, videoId, currentTime, handleTimeClick } =
    useContext(VideoContext);
  const playlistNotes = useStoreState((actions) => actions.playlists.notes);
  const playlistAction = useStoreActions((actions) => actions.playlists);

  let currentVideoNotes = [];
  const playlistNotesArray = Object.values(playlistNotes);
  if (playlistNotes[playlistId] && playlistNotesArray.length > 0) {
    currentVideoNotes = playlistNotes[playlistId][videoId];
  }

  console.log("currentVideoNotes", currentVideoNotes);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  let note = {
    id: shortid.generate(),
    title: value,
    time: currentTime,
  };

  const handleSubmit = (e) => {
    // e.preventDefault;
    if (!value) return setError("Please Write notes");

    if (edit) {
      playlistAction.editNotesItem({ ...editNote, title: value });
      setEditNote({});
    } else {
      const payload = {
        playlistId,
        [videoId]: currentVideoNotes ? [...currentVideoNotes, note] : [note],
      };
      playlistAction.addNotes({ payload, videoId });
    }
    setError("");
    setEdit(false);
    setValue("");
    handleClose();
    setOpen(false);
  };

  const editItem = (noteId) => {
    const { id, title, time } = currentVideoNotes.find(
      (item) => item.id === noteId
    );
    setEditNote({ playlistId, videoId, noteId, time });
    setValue(title);
    setOpen(true);
    setEdit(true);
  };

  const deleteItem = (id) => {
    const deletedNote = {
      playlistId,
      videoId,
      noteId: id,
    };
    alert("Deleted SuccessFully");
    playlistAction.removeNotesItem(deletedNote);
  };

  return (
    <Box>
      <Stack direction="row">
        <IconButton aria-label="add" onClick={() => handleClickOpen()}>
          <ControlPointIcon />
        </IconButton>
        <Box>
          <Dialog open={open} onClose={() => handleClose()}>
            <DialogTitle>{edit ? "Edit Notes" : "Add Notes"}</DialogTitle>
            <DialogContent>
              <TextField
                error={error && true}
                value={value}
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
              <Button onClick={() => handleSubmit()}>
                {edit ? "Edit Notes" : "Add Notes"}
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Stack>
      <Stack direction="row">
        {currentVideoNotes && (
          <NotesView
            currentVideoNotes={currentVideoNotes}
            deleteItem={deleteItem}
            editItem={editItem}
            handleTimeClick={handleTimeClick}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Notes;
