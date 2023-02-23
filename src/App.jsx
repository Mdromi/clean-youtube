import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  const playlist = useStoreActions((actions) => actions.playlists);
  const list = useStoreState((actions) => actions.playlists);
  const Id = "PLG7HKKbpE8RINBexLm8zmniqvXoxS7eqv";
  const Id1 = "PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR";
  const Id2 = "PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP";
  const Id3 = "PL6QREj8te1P5k_kIM2-8E4VP9Sej0Yez3";
  const Id4 = "PLTjRvDozrdlxlMnoG9_yJKPMxMJu8FWRK";
  console.log("list", list);

  useEffect(() => {
    playlist.getPlaylist(Id);
    // playlist.getPlaylist(Id1);
    // playlist.getPlaylist(Id2);
    // playlist.getPlaylist(Id3);
    // playlist.getPlaylist(Id4);
  }, []);

  return <AppRoutes />;
}

export default App;
