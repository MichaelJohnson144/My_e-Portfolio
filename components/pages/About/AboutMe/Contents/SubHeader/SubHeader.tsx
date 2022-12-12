import cn from 'classnames';
import Link from 'next/link';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

const faLayerGroupClass = cn('text-2xl lg:text-3xl', 'fa-bounce');
export default function SubHeader() {
  return (
    <h1
      className={
        'py-2 mx-2 sm:mx-0 text-2xl lg:text-4xl font-bold text-white bg-transparent-carbon-black-35 border-t-4 border-t-pink-400'
      }
    >
      SO, WHAT&apos;S MY TECH&nbsp;
      <Link href={'/about/tech-stack'} title={'View my tech-stack'}>
        <FontAwesomeIcon icon={faLayerGroup} className={faLayerGroupClass} />
      </Link>
      ?
    </h1>
  );
}
