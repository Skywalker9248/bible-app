import styled from "styled-components";
import BibleVerseContainer from "../components/bibleVerseContainer";

const BiblePage = () => {
  return (
    <BibleContainer>
      <h3>Your word is a lamp to my feet and a light to my path.</h3>
      <p>Psalms 119:105</p>
      <BibleVerseContainer />
    </BibleContainer>
  );
};

const BibleContainer = styled.div`
  padding: 80px 50px 50px 50px;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #333;
`;

export default BiblePage;
