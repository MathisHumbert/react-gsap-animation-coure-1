import { useRef, useEffect } from 'react';
import styled from 'styled-components';

import BackgroundHero from './BackgroundHero';
import ForegroundHero from './ForegroundHero';
import MidgroundHero from './MidgroundHero';

const StyledSVGWrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 30vh;
`;

export default function ParallaxHeroSection() {
  const foregroundHeroRef = useRef();
  const midgroundHeroRef = useRef();
  const backgroundHeroRef = useRef();

  useEffect(() => {
    const onMove = ({ clientX, clientY }) => {
      foregroundHeroRef.current.moveTo(clientX / 4, clientY / 8);
      midgroundHeroRef.current.moveTo(clientX / 8, clientY / 16);
      backgroundHeroRef.current.moveTo(clientX / 12, clientY / 24);
    };

    const onLeave = () => {
      foregroundHeroRef.current.moveTo(0, 0);
      midgroundHeroRef.current.moveTo(0, 0);
      backgroundHeroRef.current.moveTo(0, 0);
    };

    document.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <StyledSVGWrapper>
      <BackgroundHero ref={backgroundHeroRef} />
      <MidgroundHero ref={midgroundHeroRef} />
      <ForegroundHero ref={foregroundHeroRef} />
    </StyledSVGWrapper>
  );
}
