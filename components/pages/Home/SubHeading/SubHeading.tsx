import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function SubHeading() {
  const inputElSubHeading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (inputElSubHeading.current != null) {
      const subHeadingTyped = new Typed(inputElSubHeading.current, {
        strings: ['A Full-Stack Developer'],
        typeSpeed: 20,
        backSpeed: 20,
        backDelay: 50,
        startDelay: 1400,
        showCursor: false,
      });
      return function () {
        subHeadingTyped.destroy();
      };
    }
  }, []);
  return (
    <h2
      ref={inputElSubHeading}
      className={'py-2 font-helvetica-now text-xl sm:text-4xl text-white'}
    />
  );
}
