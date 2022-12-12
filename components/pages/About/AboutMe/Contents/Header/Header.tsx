// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;
export default function Header() {
  return (
    <h1
      className={
        'py-2 mx-2 sm:mx-0 text-2xl lg:text-4xl font-bold text-white bg-transparent-carbon-black-35 border-b-4 border-b-pink-400'
      }
    >
      I&apos;M A PASSIONATE AESTHETE&nbsp;
      <FontAwesomeIcon icon={faFillDrip} className={'text-2xl lg:text-4xl'} />
    </h1>
  );
}
