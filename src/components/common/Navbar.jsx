import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
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
import AddPlaylist from "../form/AddPlaylist";
import SearchBtn from "../form/SearchBtn";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "inline-flex", justifyContent: "space-between" }}>
      <AppBar position="fixed" color="default" sx={{ py: 1 }}>
        <Container>
          <Toolbar>
            <Stack sx={{ flexGrow: 1, display: "inline-block" }}>
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <SearchBtn />
              <Link
                href="https://github.com/Mdromi/clean-youtube"
                target={"_blank"}
              >
                <IconButton size="medium">
                  <GitHubIcon />
                </IconButton>
              </Link>

              <Button
                onClick={handleClickOpen}
                variant="outlined"
                color="inherit"
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Playlist
              </Button>
            </Box>
            <AddPlaylist open={open} handleClose={handleClose} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
