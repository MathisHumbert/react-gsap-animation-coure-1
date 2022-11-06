import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const StyledCrossRevealContainer = styled.section`
  position: relative;
  padding-bottom: 56.25%;

  .cross__reveal__image {
    width: 100%;
    height: 100%;
  }

  .after__image {
    position: absolute;
    overflow: hidden;
    top: 0;
    transform: translate(100%, 0);
  }

  .after__image img {
    transform: translate(-100%, 0);
    object-fit: cover;
  }

  .cross__reveal__image img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
  }

  .person__content {
    color: #080f0f;
    position: absolute;
    top: 45%;
    left: 15vw;

    .person__name {
      font-weight: 700;
      line-height: 1.3;
      font-size: 17px;
    }

    .person__job {
      font-weight: 400;
      line-height: 1.3;
      font-size: 17px;
      letter-spacing: -0.022em;
    }
  }

  .landscape__wrapper {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: 0;

    .quote__sentence {
      line-height: 1.03;
      font-weight: 700;
      font-size: 80px;
      letter-spacing: -0.015em;
      color: white;
    }

    .author__name {
      font-size: 28px;
      line-height: 1.14;
      font-weight: 700;
      letter-spacing: 0;
      color: white;
      padding-top: 20px;
    }
  }
`;

export default function CrossRevealSection({
  face,
  name,
  job,
  landscape,
  sentenceOne,
  sentenceTwo,
  crossReveal,
}) {
  // animate the container one way
  const containerRef = useRef(null);
  // animate the image the opposite way at the same time
  const imageRef = useRef(null);
  // to specify the point we want our animation to start
  const triggerRef = useRef(null);
  // target the person container
  const personRef = useRef(null);
  // target the quote container
  const quoteRef = useRef(null);

  useEffect(() => {
    const crossRevealTween = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'center center',
        end: () => '+=' + triggerRef.current.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    crossRevealTween
      // animate the container one way
      .fromTo(
        containerRef.current,
        { [crossReveal]: 100, x: 0 },
        { [crossReveal]: 0 }
      )
      // animate the image the opposite way at the same time
      .fromTo(
        imageRef.current,
        {
          [crossReveal]: -100,
          x: 0,
        },
        { [crossReveal]: 0 },
        0
      )
      //
      .from(personRef.current, { autoAlpha: 0 }, 0)
      .from(quoteRef.current, { autoAlpha: 0, delay: 0.26 }, 0);
  }, []);

  return (
    <StyledCrossRevealContainer ref={triggerRef}>
      <div className='cross__reveal__image'>
        <img src={face} alt='' />
        <div className='person__content' ref={personRef}>
          <h3 className='person__name'>{name}</h3>
          <p className='person__job'>{job}</p>
        </div>
      </div>
      <div className='cross__reveal__image after__image' ref={containerRef}>
        <img src={landscape} alt='' ref={imageRef} />
      </div>
      <div className='landscape__wrapper' ref={quoteRef}>
        <p className='quote__sentence'>
          {sentenceOne} <br /> {sentenceTwo}
        </p>
        <p className='author__name'>{name}</p>
      </div>
    </StyledCrossRevealContainer>
  );
}
