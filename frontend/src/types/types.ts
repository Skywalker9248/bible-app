type BibleBook = {
  id: number;
  name: string;
  chapters: number;
  verses: number[]; // Array of verse counts for each chapter
}

type VerseData = {
  reference: string;
  verses: Array<{
    book_id: string;
    book_name: string;
    chapter: number;
    verse: number;
    text: string;
  }>;
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

type DashboardWidget = {
  id: number;
  name: string;
  description: string;
  icon: string;
  route: string;
}

export type { BibleBook, VerseData, DashboardWidget };
