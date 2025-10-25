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
  background: #00000;
  border-radius: 12px;
  padding: 20px;
`;

export default BiblePage;
