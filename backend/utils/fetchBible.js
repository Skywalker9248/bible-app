import axios from "axios";

export const fetchBibleVerse = async (reference) => {
  const url = `https://bible-api.com/${encodeURIComponent(reference)}`;
  const response = await axios.get(url);
  return response.data;
};
