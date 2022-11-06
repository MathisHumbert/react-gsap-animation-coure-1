import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function useArrayRef() {
  // create a refs array and initialize it to an empty array
  const refs = useRef([]);
  refs.current = [];

  // then push all the ref in the array
  return [refs, (ref) => ref && refs.current.push(ref)];
}

export default function SplitText({ children }) {
  const [refs, setRef] = useArrayRef();
  const triggerRef = useRef();

  useEffect(() => {
    const splitTextTween = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top bottom',
      },
    });

    splitTextTween.fromTo(
      refs.current,
      {
        autoAlpha: 0,
        display: 'inline-block',
        y: '100%',
      },
      {
        autoAlpha: 1,
        delay: 0.2,
        display: 'inline-block',
        y: '0%',
        duration: 1.5,
        ease: 'back.inOut',
        stagger: 0.05,
      }
    );
  }, [refs]);

  let words = children.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <span
          key={word}
          ref={triggerRef}
          style={{ display: 'inline-block', overflow: 'hidden' }}
        >
          <span
            style={{ display: 'inline-block', willChange: 'transform' }}
            ref={setRef}
          >
            {word + (index !== words.length ? '\u00A0' : '')}
          </span>
        </span>
      ))}
    </>
  );
}
