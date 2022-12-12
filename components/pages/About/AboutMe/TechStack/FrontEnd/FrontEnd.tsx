import Link from 'next/link';
import Image from 'next/image';
import React from '../../../../../../public/assets/images/react.js.svg';
import NextJs from '../../../../../../public/assets/images/next.js.svg';
import TypeScript from '../../../../../../public/assets/images/typescript.svg';
import JavaScript from '../../../../../../public/assets/images/javascript.svg';
import Bootstrap from '../../../../../../public/assets/images/bootstrap.svg';
import HTML5 from '../../../../../../public/assets/images/html5.svg';
import TailwindCSS from '../../../../../../public/assets/images/tailwindcss-mark.svg';
import CSS3 from '../../../../../../public/assets/images/css3.svg';

export default function FrontEnd() {
  return (
    <>
      <Link
        href={'https://beta.reactjs.org/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={React}
          alt={'React'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://nextjs.org/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={NextJs}
          alt={'Next.js'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://www.typescriptlang.org/branding/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={TypeScript}
          alt={'TypeScript'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={JavaScript}
          alt={'JavaScript'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://getbootstrap.com/docs/5.2/about/brand/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={Bootstrap}
          alt={'Bootstrap'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://html.spec.whatwg.org/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={HTML5}
          alt={'HTML5'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://tailwindcss.com/brand/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={TailwindCSS}
          alt={'Tailwind CSS'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://www.w3.org/Style/CSS/Overview.en.html'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={CSS3}
          alt={'CSS3'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
    </>
  );
}
