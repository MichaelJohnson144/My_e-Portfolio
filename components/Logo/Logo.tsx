import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className={'font-helvetica-now text-2xl font-bold'}>
      Michael&nbsp;&nbsp;Johnson
    </Link>
  );
}
