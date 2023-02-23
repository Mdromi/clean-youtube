const validateYoutubeUrl = (url) => {
    // Regular expression to match YouTube URLs
  let regex = /^https?:\/\/(?:www\.)?youtube\.com\/playlist\?list=([a-zA-Z0-9_-]{18,34})/;

  // Test the URL against the regular expression
  return regex.test(url);
}

export default validateYoutubeUrl;