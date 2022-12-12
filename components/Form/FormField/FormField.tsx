import { useState } from 'react';
import CallToAction from './CallToAction';
import Name from './Name';
import Email from './Email';
import Subject from './Subject';
import Message from './Message';
import Button from '../../ui/Button';
// The following imports will "'prevent' a 'Font Awesome icon' ''SSR' bug,'" where an icon would "'flash' from an 'exaggerated' to a 'standard' one:"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// "Prevent" Font Awesome from "'adding' its 'CSS'" since it'd already been "'manually' added:"
config.autoAddCss = false;

export default function FormField() {
  const [wasClicked, setWasClicked] = useState(0);

  function handleClick() {
    console.log('Submit: #', wasClicked);
    setWasClicked((prevCount) => prevCount + 1);
  }

  return (
    <div
      className={
        'flex flex-col flex-nowrap justify-center content-center items-center py-4 px-4 w-4/5 xl:w-fit bg-transparent-carbon-black-55 rounded-2xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
      }
    >
      <CallToAction />
      <div className={'w-full drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
        <Name />
        <div
          className={
            'flex flex-col sm:flex-row flex-nowrap justify-center content-center items-center my-4 sm:space-x-4'
          }
        >
          <Email />
          <Subject />
        </div>
        <Message />
        <Button
          type={'submit'}
          onClick={handleClick}
          variant={'contained'}
          className={
            'w-64 sm:w-full bg-gradient-to-r from-pink-600 via-pink-400 to-pink-500 !important'
          }
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp;SUBMIT
        </Button>
      </div>
    </div>
  );
}
