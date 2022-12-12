import Media from './Media';
import Header from './Contents/Header/Header';
import SubHeader from './Contents/SubHeader/SubHeader';
import Body from './Contents/Body/Body';

export default function AboutMe() {
  return (
    <main className={'w-full h-screen bg-transparent-carbon-black-55'}>
      <div
        className={
          'overflow-auto sm:overflow-hidden flex flex-col lg:flex-row flex-nowrap justify-between sm:justify-center content-center items-center pt-[3.2rem] w-full h-screen bg-inherit'
        }
      >
        <Media />
        <div
          className={
            'flex flex-col flex-nowrap justify-center content-center items-center'
          }
        >
          <div className={'pt-0 pb-2 sm:py-0 sm:px-0 flex-auto sm:mx-10'}>
            <Header />
            <Body />
            <SubHeader />
          </div>
        </div>
      </div>
    </main>
  );
}
