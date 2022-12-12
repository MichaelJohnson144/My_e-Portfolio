import cn from 'classnames';
import AboutMe from './AboutMe';

const about = cn('w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-about');

export default function About() {
  return (
    <main className={about}>
      <AboutMe />
    </main>
  );
}
