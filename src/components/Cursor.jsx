import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCursor = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 100%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: difference;
  transition-property: opacity, background-color, transform;
  transition-duration: 500ms;
  transition-timing-function: ease;
`;

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const _onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const _onMouseDown = () => {
      setClicked(true);
    };

    const _onMouseUp = () => {
      setClicked(false);
    };

    const _onMouseEnter = () => {
      setHidden(false);
    };

    const _onMouseLeave = () => {
      setHidden(true);
    };

    document.addEventListener('mousemove', _onMouseMove);
    document.addEventListener('mousedown', _onMouseDown);
    document.addEventListener('mouseup', _onMouseUp);
    document.body.addEventListener('mouseenter', _onMouseEnter);
    document.body.addEventListener('mouseleave', _onMouseLeave);
    handleLinkHoverEnvets();

    return () => {
      document.removeEventListener('mousemove', _onMouseMove);
      document.removeEventListener('mousedown', _onMouseDown);
      document.removeEventListener('mouseup', _onMouseUo);
      document.body.removeEventListener('mouseenter', _onMouseEnter);
      document.body.removeEventListener('mouseleave', _onMouseLeave);
    };
  }, []);

  const getBackgroundColor = () => {
    if (clicked) {
      return '#ffffff';
    } else if (linkHover) {
      return '#ffffff';
    } else {
      return 'transparent';
    }
  };

  const setScaleLinkHover = () => {
    if (clicked) {
      return 'translate(-50%, -50%) scale(0.9)';
    } else if (linkHover) {
      return 'translate(-50%, -50%) scale(1.5)';
    } else {
      return 'translate(-50%, -50%) scale(1)';
    }
  };

  const handleLinkHoverEnvets = () => {
    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseover', () => setLinkHover(true));
      link.addEventListener('mouseout', () => setLinkHover(false));
    });
  };

  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (
    <StyledCursor
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1,
        backgroundColor: getBackgroundColor(),
        transform: setScaleLinkHover(),
      }}
    />
  );
}
