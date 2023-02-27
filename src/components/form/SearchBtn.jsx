import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBtn = () => {
  const searchItems = useStoreActions((actions) => actions.searchItems);
  const playlists = useStoreState((actions) => actions.playlists.data);
  const playlistArray = Object.values(playlists);

  const [state, setState] = useState("");

  console.log("playlistArray", playlistArray);

  const handleSearch = (value) => {
    let matches = playlistArray.filter((item) =>
      item.playlistTitle.toLowerCase().includes(value)
    );
    matches = [...new Set(matches)];
    console.log("matches", matches);
    if (!matches.length) searchItems.removeToSearch();
    matches.map((item) => searchItems.addToSearch(item));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value.toLowerCase());
    let value = e.target.value.toLowerCase();

    if (value.length > 0) handleSearch(value);
    else searchItems.removeToSearch();
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Playlist Name..."
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </Search>
  );
};

export default SearchBtn;
