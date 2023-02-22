import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

import { useState } from "react";
// import PlaylistForm from "../playlist-form/playlist-form";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    alert(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const getPlaylistId = (playlistId) => {
  //     getPlaylistById(playlistId);
  //   };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 1 }}>
        <Container>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h5">Clean YouTube</Typography>
              </Link>
              <Link
                href="https://github.com/Mdromi"
                target={"_blank"}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="body1">By Md Romi</Typography>
              </Link>
            </Stack>
            <Box>
              <IconButton
                onClick={handleClickOpen}
                size="medium"
                aria-label="show 4 new mails"
                component="label"
                sx={{ marginLeft: 5 }}
              >
                <GitHubIcon />
              </IconButton>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Playlist
                <MoreHorizIcon />
              </Button>
            </Box>
            {/* <PlaylistForm
              open={open}
              handleClose={handleClose}
              getPlaylistId={getPlaylistId}
            /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;