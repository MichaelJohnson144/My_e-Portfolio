import MenuItem, { MenuItemRecord } from '../MenuItem';
import { useState } from 'react';
import cn from 'classnames';
import { navigationProps } from '../ui/FramerMotionProps/NavigationProps/NavigationProps';
import { AnimatePresence, motion } from 'framer-motion';
import MobileMenuToggle from '../MobileMenuToggle';
import Logo from '../Logo';
import SocialMedia from '../SocialMedia';

const menuItems: MenuItemRecord[] = [
  {
    link: '',
    href: '/',
    label: 'Home',
  },
  {
    link: 'about',
    href: '/about',
    label: 'About',
  },
  {
    link: 'portfolio',
    href: '/portfolio',
    label: 'Portfolio',
  },
  {
    link: 'services',
    href: '/services',
    label: 'Services',
  },
  {
    link: 'contact',
    href: '/contact',
    label: 'Contact',
  },
];

export default function Navigation() {
  const [isShowing, setIsShowing] = useState(false);

  function handleClick() {
    setIsShowing(!isShowing);
  }

  const ulClassList = cn(
    'hidden lg:flex flex-row flex-nowrap justify-center content-center items-center sm:space-x-4',
    {
      ['!flex sm:!flex !flex-col sm:!flex-row !flex-nowrap !justify-start sm:!justify-center !content-center !items-start']:
        isShowing,
    },
  );

  return (
    <header>
      <nav
        className={
          'fixed top-0 z-10 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:content-center lg:items-center w-full h-fit bg-transparent-blue-30'
        }
      >
        <div
          className={
            'flex flex-row flex-nowrap justify-between content-center items-center ml-2'
          }
        >
          <Logo />
          <MobileMenuToggle menuIsOpen={isShowing} onClick={handleClick} />
        </div>
        <AnimatePresence>
          {isShowing ? (
            <motion.ul key={ulClassList} {...navigationProps} className={ulClassList}>
              {menuItems.map((item, index) => {
                return <MenuItem key={index} item={item} />;
              })}
              <SocialMedia />
            </motion.ul>
          ) : (
            <motion.ul className={ulClassList}>
              {menuItems.map((item, index) => {
                return <MenuItem key={index} item={item} />;
              })}
              <SocialMedia />
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
