import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SortIcon from "@mui/icons-material/Sort";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RenderRow from "./RenderRow";

const VideoList = () => {
  const [open, setOpen] = useState(true);

  const handleCollapseClick = () => {
    setOpen(!open);
  };

  // get playlist data
  const playlists = useStoreState((actions) => actions.playlists.data);

  // current player action
  const currentPlayer = useStoreActions(
    (actions) => actions.currentPlayerItems
  );

  // get current player items
  const currentPlayerItems = useStoreState(
    (actions) => actions.currentPlayerItems.items
  );

  // get current video
  const currentVideo = useStoreState(
    (actions) => actions.currentPlayerItems.currentVideo
  );

  // get url param id
  const { playlistId } = useParams();
  const current = playlists[playlistId];
  if (!current) return;

  // set current player items
  useEffect(() => {
    currentPlayer.addPlayer(current.playlistItems);
  }, []);

  const { channelTitle, playlistTitle } = { ...current };

  return (
    <>
      <List sx={{ padding: 0 }}>
        <ListItemButton onClick={handleCollapseClick}>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <Box sx={{ flex: "1 0 auto", marginRight: 2 }}>
            <ListItemText primary={playlistTitle} />
            <Typography variant="body2" color="text.secondary" component="span">
              {`${channelTitle} - ${currentVideo} / ${currentPlayerItems.length}`}
            </Typography>
          </Box>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box
          sx={{
            bgcolor: "background.paper",
            height: "400px",
            width: "450px",
            overflowY: "scroll",
          }}
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {currentPlayerItems.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => currentPlayer.addCurrentVideo(index + 1)}
              >
                <RenderRow video={item} index={index + 1} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Collapse>
    </>
  );
};

export default VideoList;
