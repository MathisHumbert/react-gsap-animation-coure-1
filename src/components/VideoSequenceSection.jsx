import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { iphoneimages } from './imageSequence';
import gsapCore from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);

const StyledVideoSequenceWrapper = styled.div`
  background: #080f0f;
  width: 100%;
  position: relative;

  .videosequence__wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }

  .videosequence__container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #080f0f;

    .videosequence__text {
      flex: 0 0 50%;
      max-width: 50%;

      h1 {
        font-size: 96px;
        line-height: 0.875;
        font-weight: 700;
        letter-spacing: 0.008em;
        color: #fff;
      }

      h2 {
        padding-top: 10px;
        font-size: 26px;
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: 0.002em;
        margin-top: 8px;
        color: #fff;
      }

      a.videosequence__button {
        display: inline-block;
        padding: 1em 2em;
        margin: 7em 0.5em 0.5em 0;
        border-radius: 2em;
        text-decoration: none;
        font-weight: 400;
        color: #080f0f;
        background: #00efeb;
        text-align: center;
        transition: all 0.6s;

        &:hover {
          background: #00bcb9;
        }
      }
    }

    .videosequence__image {
      position: relative;
      flex: 0 0 50%;

      canvas {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        height: 80vh;
      }
    }
  }
`;

export default function VideoSequenceSection() {
  const canvaRef = useRef();
  const VideoSequenceTriggerRef = useRef();

  useEffect(() => {
    const canvas = canvaRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 851;
    canvas.height = 1200;

    const frameCount = 71;
    const currentFrame = (index) => iphoneimages[index];

    const iphone = {
      frame: 0,
    };

    const images = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(iphone, {
      frame: frameCount - 1,
      snap: 'frame',
      scrollTrigger: {
        trigger: VideoSequenceTriggerRef.current,
        start: 'center center',
        end: () => '+=' + VideoSequenceTriggerRef.current.offsetHeight,
        scrub: 1,
        pin: true,
        anticipatePin: true,
      },
      onUpdate: () => {
        updateImage();
      },
    });

    images[0].onload = function () {
      console.log('passed');
      context.drawImage(images[0], 0, 0);
    };

    const updateImage = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[iphone.frame], 0, 0);
    };

    images[0].onload = updateImage();
  }, []);

  return (
    <StyledVideoSequenceWrapper ref={VideoSequenceTriggerRef}>
      <div className='videosequence__wrapper'>
        <div className='videosequence__container'>
          <div className='videosequence__text'>
            <h1>ZER&Oslash;</h1>
            <h2>
              How big is your
              <br />
              environmental footprint?
              <br />
              The app for cutting Carbon
              <br />
              and Caring for the Climate
            </h2>
            <a className='videosequence__button'>Download</a>
          </div>
          <div className='videosequence__image'>
            <canvas ref={canvaRef} />
          </div>
        </div>
      </div>
    </StyledVideoSequenceWrapper>
  );
}
