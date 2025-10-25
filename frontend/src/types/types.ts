type BibleBook = {
  id: number;
  name: string;
  chapters: number;
  verses: number[]; // Array of verse counts for each chapter
}

export type { BibleBook };
