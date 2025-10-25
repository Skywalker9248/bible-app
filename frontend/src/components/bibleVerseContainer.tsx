import { useState } from 'react';
import styled from 'styled-components';
import { BIBLE_BOOKS } from '../helpers/constants';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import type { VerseData } from '../types/types';

const BibleVerseContainer = () => {
  const [selectedBookId, setSelectedBookId] = useState(1); // Default to Genesis
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedVerse, setSelectedVerse] = useState(1);
  const [disableSearch, setDisableSearch] = useState(false);
  const [verseData, setVerseData] = useState<VerseData | null>(null);

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

  const getVerse = async () => {
    try {
      const response = await fetch(
        `/api/verses/${selectedBook?.name} ${selectedChapter}:${selectedVerse}`
      );
      const data = await response.json();
      setVerseData(data);
    } catch (error) {
      console.error(error);
      setVerseData(null);
    } finally {
      setDisableSearch(false);
    }
  };

  const handleSearch = () => {
    setDisableSearch(true);
    getVerse();
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
      <button
        className='search-button'
        onClick={handleSearch}
        disabled={disableSearch}
      >
        Search <FaMagnifyingGlass />
      </button>

      {verseData && (
        <div className='verse-data'>
          <h3>{verseData.reference}</h3>
          <p className='verse-text'>{verseData.text}</p>
          <p className='translation-info'>
            {verseData.translation_name} ({verseData.translation_id})
          </p>
        </div>
      )}
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

  .search-button {
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
    background-color: #4a90e2;
    color: white;
    cursor: pointer;
  }

  .search-button:hover {
    background-color: #357abd;
  }

  .search-button:focus {
    outline: none;
    border-color: #357abd;
  }

  .search-button:active {
    background-color: #2a6699;
  }

  .search-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .verse-data {
    max-width: 600px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin-top: 20px;

    h3 {
      margin: 0 0 15px 0;
      color: #4a90e2;
      font-size: 18px;
      font-weight: 600;
    }

    .verse-text {
      margin: 0 0 15px 0;
      font-size: 16px;
      line-height: 1.6;
      color: #333;
    }

    .translation-info {
      margin: 0;
      font-size: 12px;
      color: #666;
      font-style: italic;
    }
  }
`;

export default BibleVerseContainer;
