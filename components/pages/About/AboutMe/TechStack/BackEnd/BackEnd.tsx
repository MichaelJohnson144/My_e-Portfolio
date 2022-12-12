import Link from 'next/link';
import Image from 'next/image';
import Python from '../../../../../../public/assets/images/python.svg';
import PHP from '../../../../../../public/assets/images/php.svg';
import CSharp from '../../../../../../public/assets/images/c-sharp.svg';
import CPlusPlus from '../../../../../../public/assets/images/c-plus-plus.svg';
import Django from '../../../../../../public/assets/images/django.svg';
import NodeJS from '../../../../../../public/assets/images/node.js.svg';
import MySQL from '../../../../../../public/assets/images/mysql.svg';

export default function BackEnd() {
  return (
    <>
      <Link
        href={'https://www.python.org/psf/trademarks/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={Python}
          alt={'Python'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://www.php.net/license/index.php'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={PHP}
          alt={'PHP'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://learn.microsoft.com/en-us/dotnet/csharp/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <picture>
          <Image
            src={CSharp}
            alt={'C#'}
            priority={true}
            className={
              'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
            }
          />
        </picture>
      </Link>
      <Link
        href={'https://cplusplus.com/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={CPlusPlus}
          alt={'C++'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://www.djangoproject.com/trademarks/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={Django}
          alt={'Django'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={
          'https://openjsf.org/wp-content/uploads/sites/84/2021/01/OpenJS-Foundation-Trademark-Policy-2021-01-12.docx.pdf'
        }
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={NodeJS}
          alt={'Node.js'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
      <Link
        href={'https://www.mysql.com/'}
        className={
          'hover:transition-all after:mt-2 hover:after:w-full after:w-0 after:h-1.5 after:bg-white after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-200 flex flex-col flex-wrap justify-center content-center items-center sm:mx-12 md:mx-16 lg:mx-0 xl:mx-[1.05rem]'
        }
      >
        <Image
          src={MySQL}
          alt={'MySQL'}
          priority={true}
          className={
            'hover:-translate-y-4 w-[68px] sm:w-[85px] lg:w-[102.4px] h-[54.4px] sm:h-[68px] lg:h-[81.92px] transition-all ease-in-out'
          }
        />
      </Link>
    </>
  );
}
