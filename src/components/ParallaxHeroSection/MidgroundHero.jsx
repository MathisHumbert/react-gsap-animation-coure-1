import { useRef, useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const StyledParallaxWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

const MidgroundHero = forwardRef((props, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y });
        },
      };
    },
    []
  );

  return (
    <StyledParallaxWrapper ref={el}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 625'>
        <g id='LEAVE2_BACKGROUND'>
          <path
            d='M549.885,36.513c-61.6,41.86-96.3,90.549-115.785,130.354-7.117-.509-17.514-1.878-25.6-5.445,0,0,8.009,11.766,19.553,18.6-16.337,37.958-18.5,65.058-18.5,65.058-4.84,46.11,8.55,127.09,18.517,174.936,0,.032,0,.047.016.063A118.08,118.08,0,0,1,202.1,488.016c-9.33-21.893-11.75-55.154-11.75-55.154-5-98.877,36.334-193.756,100.277-261.887a438.443,438.443,0,0,1,44.423-41.317,83.155,83.155,0,0,0,44.454,14.2c-11.941-8.869-18.438-20.715-21.861-31.207C412.573,74.185,475.879,49.792,549.885,36.513Z'
            fill='#49F2EF'
          />
          <path
            d='M549.885,36.513c-6.962,3.736-145.755,66.832-183.747,170.446-23.3,63.537-7,148.962-3.177,166.255,22.238,100.6-9.779,147.068-43.666,195.78'
            fill='none'
            stroke='#fff'
            strokeMiterlimit='10'
            strokeWidth='1.592'
          />
        </g>
        <g id='LEAVE1_BACKGROUND'>
          <path
            d='M302.073,567.642C176.67,528.856,133.2,420.331,122.965,314c19.186-6.448,34.822-24.774,34.822-24.774-13.868,1.592-26.909-2.8-37-8.1-4.188-113.8,24.615-216.3,24.615-216.3s3.424,49.39,82,149.524a284.537,284.537,0,0,1-25.842,37.815,108.778,108.778,0,0,0,32.561-29.329q15.858,19.7,35.618,41.891C439.767,454.9,302.073,567.642,302.073,567.642Z'
            fill='#00EFEB'
          />
          <path
            d='M145.4,64.829S139.779,206.637,206.493,321c21.314,36.537,48.341,69.6,66.128,108.12,19.786,42.849,31.827,91.181,29.334,138.518'
            fill='none'
            stroke='#080F0F'
            strokeMiterlimit='10'
            strokeWidth='1.592'
          />
        </g>
      </svg>
    </StyledParallaxWrapper>
  );
});

export default MidgroundHero;
