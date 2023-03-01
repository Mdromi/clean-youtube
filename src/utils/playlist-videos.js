
const getPlaylistVideos = async (currentPlaylist) => {
  let videoId = currentPlaylist.playlistItems.map((item) => {
    let videoURL = `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`;
    return videoURL;
  });

  return videoId;
};

export default getPlaylistVideos;