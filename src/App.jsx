import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  const playlist = useStoreActions((actions) => actions.playlists);
  const list = useStoreState((actions) => actions.playlists);
  const Id = "PLG7HKKbpE8RINBexLm8zmniqvXoxS7eqv";
  console.log("list", list);

  useEffect(() => {
    playlist.getPlaylist(Id);
  }, []);

  return <AppRoutes />;
}

export default App;
