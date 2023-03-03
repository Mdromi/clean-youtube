import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import formatTime from "../../utils/formatTime";

const NotesView = ({
  currentVideoNotes,
  deleteItem,
  editItem,
  handleTimeClick,
}) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List>
        {currentVideoNotes.map((item, index) => (
          <Fragment key={index}>
            <Box sx={{ padding: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    startIcon={<AccessTimeIcon />}
                    onClick={() => handleTimeClick(item.time)}
                  >
                    {formatTime(item.time)}
                  </Button>
                  <Typography variant="span" color="text.primary">
                    {item.title}
                  </Typography>
                </Stack>
                <Box>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      aria-label="edit"
                      onClick={() => editItem(item.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => deleteItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

export default NotesView;
