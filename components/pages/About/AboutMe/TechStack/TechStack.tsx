import cn from 'classnames';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';

const techStack = cn(
  'bg-about',
  'w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover',
);

export default function AboutMeTechStack() {
  return (
    <section className={techStack}>
      <div className={'w-full h-screen bg-transparent-carbon-black-55'}>
        <div
          className={
            'pt-12 mx-auto w-fit h-screen grid place-content-center place-items-center'
          }
        >
          <div
            className={
              'grid grid-cols-3 lg:grid-cols-5 gap-20 sm:gap-11 md:gap-14 lg:gap-[7.64rem] xl:gap-36 2xl:gap-52'
            }
          >
            <FrontEnd />
            <BackEnd />
          </div>
        </div>
      </div>
    </section>
  );
}
