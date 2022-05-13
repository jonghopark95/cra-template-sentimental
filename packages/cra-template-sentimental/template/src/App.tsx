import { css } from '@emotion/react';
import styled from '@emotion/styled';

// You can use css prop, object styles, styled components style, ...
// whatever you want within Emotion supports.
function App() {
  return (
    <Background>
      <p css={[pStyles, { fontSize: 120 }]}>Be Sentimental.</p>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background: linear-gradient(to top, #f9ebd4, #c89fb0, #d1b2bf, #9793ac);
`;

const pStyles = css`
  all: unset;
  display: block;
  line-height: 100vh;
  text-align: center;

  color: #fff;
  font-family: 'Gill Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`;
