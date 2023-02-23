function validatePlaylistId(url) {

  // check is url youtube id?
  if((url.substring(0, 2)) === 'PL') return url

  // Regular expression to match YouTube playlist URLs
  var regex =
    /^https?:\/\/(?:www\.)?youtube\.com\/playlist\?list=([a-zA-Z0-9_-]{18,34})/;

  // Test the URL against the regular expression
  var match = url.match(regex);

  // If a match is found, return the playlist ID
  if (match) return match[1];
  else return false;
}

export default validatePlaylistId;