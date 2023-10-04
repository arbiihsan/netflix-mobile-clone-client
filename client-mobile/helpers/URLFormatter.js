const URLFormatter = (url) => {
  const parts = url.split("/");
  const lastPart = parts[parts.length - 1];

  const queryParams = lastPart.split("?");
  const videoId = queryParams[0];

  return videoId;
};

export default URLFormatter;
