import axios from "axios";
// import getChanelName from "./getChanelName";

const key = import.meta.env.VITE_BASE_KEY;

const getPlayListItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken)
    result = getPlaylistItem(playlistId, data.nextPageToken, result);

  return result;
};

const getChanelName = async (channelId) => {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${key}`;
  const {data}= await axios.get(url);
  return data.items[0].snippet.title
}

const getPlayList = async (playlistId) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlayListItem(playlistId);
  let favorite = false


  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items[0]?.snippet;

  const chanelName = await getChanelName(channelId)
  console.log('chanelName', chanelName);

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      favorite,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnails: { medium },
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    channelId,
    chanelName,
    channelTitle,
    playlistItems,
  };
};

export default getPlayList;
