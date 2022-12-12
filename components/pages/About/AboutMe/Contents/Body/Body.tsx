import Link from 'next/link';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

const faPaintBrushClass = cn('text-sm sm:text-base text-pink-400', 'fa-beat-fade');
export default function Body() {
  return (
    <p
      className={
        'p-2 my-6 lg:my-8 mx-2 sm:mx-0 font-helvetica-now text-base lg:text-xl tracking-wide text-white bg-transparent-carbon-black-35 border-4 border-transparent-pinkish-white-70'
      }
    >
      Are you looking for a flexible and responsive full-stack developer who&apos;s
      meticulous about well-tested clean code, excellent software functionality,
      responsive web design, beautiful aesthetics, good documentation, and exceptional
      customer service and satisfaction? Great!
      <br />
      <br />
      Born and raised in Poudroyen, Guyana, and located in New York City, I&apos;m a
      freelance full-stack developer who takes pride in my inquisitive aforesaid; and who
      prefers simplicity to extravagance as I believe it&apos;s the highest form of
      elegance.
      <br />
      <br />I also, contrary to the traditional approach, enjoy spending some leisure
      drawing using the
      <Link href={'https://www.desmos.com/calculator/ljan6yftky'} title={'faPaintbrush'}>
        &nbsp;&quot;paintbrush&nbsp;
        <FontAwesomeIcon icon={faPaintbrush} className={faPaintBrushClass} />
        &nbsp;of math&quot;&nbsp;
      </Link>
      on &quot;graphical canvases;&quot; it&apos;s one of my favorite, self-expressing
      hobbies.
    </p>
  );
}
