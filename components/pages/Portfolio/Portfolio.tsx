import cn from 'classnames';

const portfolioClass = cn(
  'w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-portfolio',
);

export default function portfolio() {
  return <main className={portfolioClass}></main>;
}
