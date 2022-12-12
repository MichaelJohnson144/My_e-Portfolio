import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Heading() {
  const inputElHeading = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (inputElHeading.current != null) {
      const headingTyped = new Typed(inputElHeading.current, {
        strings: ["I'm Michael"],
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 50,
        startDelay: 300,
        showCursor: false,
      });
      return function () {
        headingTyped.destroy();
      };
    }
  }, []);

  return (
    <h1 className={'mb-2 sm:mb-6 text-5xl sm:text-8xl font-bold'}>
      Hi,{' '}
      <span
        ref={inputElHeading}
        className={'inline-block px-2.5 text-pink-900 bg-transparent-pinkish-white-70'}
      />
    </h1>
  );
}
