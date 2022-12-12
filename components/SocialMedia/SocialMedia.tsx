import { useState } from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function SocialMedia() {
  const [wasClicked, setWasClicked] = useState(false);

  function handleClick() {
    setWasClicked(!wasClicked);
  }

  return (
    <div
      className={
        'hidden lg:flex flex-row flex-nowrap justify-center content-center items-center space-x-4'
      }
    >
      <Button type={'button'} onClick={handleClick}>
        <Link href={`https://www.linkedin.com/in/michael-johnson-88ba77a8/`}>
          <FontAwesomeIcon
            icon={faLinkedin}
            className={'text-4xl text-[#0072B1] !important'}
          />
        </Link>
      </Button>
      <Button type={'button'} onClick={handleClick}>
        <Link href={`https://github.com/MichaelJohnson144`}>
          <FontAwesomeIcon icon={faGithub} className={'text-4xl text-white !important'} />
        </Link>
      </Button>
    </div>
  );
}
