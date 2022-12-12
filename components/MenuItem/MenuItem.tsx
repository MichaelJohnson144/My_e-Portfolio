import Link from 'next/link';

export interface MenuItemRecord {
  link: string;
  href?: string;
  label: string;
}

interface MenuItemProps {
  item: MenuItemRecord;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <li>
      <Link
        href={item.href ? item.href : `/${item.link}`}
        passHref
        className={
          'hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600 rounded-[0.25rem] sm:rounded-md hover:animate-pulse inline-block py-1 sm:py-1.5 px-2.5 sm:px-3 my-1.5 mx-2 text-base sm:text-lg font-bold'
        }
      >
        {item.label}
      </Link>
    </li>
  );
}
