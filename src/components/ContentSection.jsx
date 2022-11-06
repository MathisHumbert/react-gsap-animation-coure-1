import styled from 'styled-components';

import SplitText from '../utils/SplitText.jsx';

const StyledContentSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .content__wrapper {
    max-width: 980px;

    h2 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #acacac;
    }

    h3 {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: -0.015em;
      color: #080f0f;
    }
  }
`;

export default function ContentSection(props) {
  return (
    <StyledContentSection>
      <div className='content__wrapper'>
        <h2>{props.title}</h2>
        <h3>
          <SplitText>{props.text}</SplitText>
        </h3>
      </div>
    </StyledContentSection>
  );
}
