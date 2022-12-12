import cn from 'classnames';

const servicesClass = cn(
  'w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-services',
);

export default function services() {
  return <main className={servicesClass}></main>;
}
