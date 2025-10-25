import { useState } from 'react';
import styled from 'styled-components';
import { BIBLE_BOOKS } from '../helpers/constants';

const BibleVerseContainer = () => {
  const [selectedBookId, setSelectedBookId] = useState(1); // Default to Genesis
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedVerse, setSelectedVerse] = useState(1);

  // Find the currently selected book
  const selectedBook = BIBLE_BOOKS.find((book) => book.id === selectedBookId);

  // Get the number of verses for the selected chapter
  const verseCount = selectedBook?.verses[selectedChapter - 1] || 0;

  const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBookId = parseInt(e.target.value);
    setSelectedBookId(newBookId);
    setSelectedChapter(1); // Reset to chapter 1
    setSelectedVerse(1); // Reset to verse 1
  };

  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newChapter = parseInt(e.target.value);
    setSelectedChapter(newChapter);
    setSelectedVerse(1); // Reset to verse 1
  };

  const handleVerseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVerse(parseInt(e.target.value));
  };

  return (
    <BibleVerseContainerWrapper>
      <div className='selection-controls'>
        <select
          name='book'
          id='book'
          value={selectedBookId}
          onChange={handleBookChange}
        >
          {BIBLE_BOOKS.map((book) => (
            <option key={book.id} value={book.id}>
              {book.name}
            </option>
          ))}
        </select>

        <select
          name='chapter'
          id='chapter'
          value={selectedChapter}
          onChange={handleChapterChange}
        >
          {selectedBook &&
            Array.from({ length: selectedBook.chapters }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
        </select>

        <select
          name='verse'
          id='verse'
          value={selectedVerse}
          onChange={handleVerseChange}
        >
          {Array.from({ length: verseCount }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className='verse-display'>
        <p>
          {selectedBook?.name} {selectedChapter}:{selectedVerse}
        </p>
      </div>
    </BibleVerseContainerWrapper>
  );
};

const BibleVerseContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .selection-controls {
    display: flex;
    gap: 10px;
    align-items: center;

    select {
      padding: 8px 12px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 14px;
      background-color: white;
      cursor: pointer;

      &:hover {
        border-color: #888;
      }

      &:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
      }
    }
  }

  .verse-display {
    padding: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
`;

export default BibleVerseContainer;
