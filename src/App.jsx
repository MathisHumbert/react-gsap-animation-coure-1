import styled from 'styled-components';

import ParallaxHeroSection from './components/ParallaxHeroSection';
import ContentSection from './components/ContentSection';
import CrossRevealSection from './components/CrossRevealSection';
import ProductSection from './components/ProductSection';
import VideoSequenceSection from './components/VideoSequenceSection';

import logo from './assets/logo.svg';
import faceOne from './assets/images/faceOne.png';
import landscapeOne from './assets/images/landscapeOne.png';
import landscapeTwo from './assets/images/landscapeTwo.png';
import Cursor from './components/Cursor';

const StyledHeaderSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <Cursor />
      <StyledHeaderSection>
        <img src={logo} alt='logo' />
        <StyledTitle>back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeaderSection>
      <VideoSequenceSection />
      <ProductSection />
      <ContentSection
        title='Take Care'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem commodi accusamus voluptates nesciunt magnam ducimus quo dicta expedita, aspernatur vita'
      />
      <CrossRevealSection
        face={faceOne}
        landscape={landscapeOne}
        name='Christan Guard'
        job='founder'
        sentenceOne='We only launch'
        sentenceTwo='what we love'
        crossReveal='xPercent'
      />
      <ContentSection
        title='Take Care'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem commodi accusamus voluptates nesciunt magnam ducimus quo dicta expedita, aspernatur vita'
      />
      <CrossRevealSection
        face={faceOne}
        landscape={landscapeTwo}
        name='Christan Guard'
        job='founder'
        sentenceOne='We only launch'
        sentenceTwo='what we love'
        crossReveal='yPercent'
      />
    </>
  );
}

export default App;
