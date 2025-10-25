import { fetchBibleVerse } from "../utils/fetchBible.js";

export const getVerse = async (req, res) => {
  const { reference } = req.params;

  try {
    const verseData = await fetchBibleVerse(reference);
    res.json(verseData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching verse" });
  }
};
