import styled from "styled-components";

const SplashScreen = () => {
  return (
    <SplashContainer>
      <h1>✝️</h1>
      <p>The LORD will protect you from all evil; He will keep your life.</p>
      <p>
        The LORD will keep your going out and your coming in from this time
        forth and forevermore.
      </p>
      <p>Psalm 121:7-8</p>
    </SplashContainer>
  );
};

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  text-align: center;
  background: #121212;
  padding: 20px;
  border-radius: 10px;
  > p {
    text-transform: uppercase;
    font-style: italic;
  }
`;

export default SplashScreen;
