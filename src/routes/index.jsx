import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import PlayerPage from "../pages/PlayerPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:playlistId" element={<PlayerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

{
  /* <BrowserRouter>
<CssBaseline />
<Navbar getPlaylistById={getPlaylistById} />
<Routes>
  <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
  <Route
    path="/player/:playListId"
    element={<PlayerPage playlists={playlists} />}
  />
  <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter> */
}
