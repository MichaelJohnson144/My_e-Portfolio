import { CardMedia } from '@mui/material';

export default function Media() {
  return (
    <CardMedia
      component={'img'}
      image={'/assets/images/me.jpg'}
      alt={''}
      className={
        'lg:!py-1.5 lg:!pl-1.5 !my-6 sm:!mt-0 sm:!mb-6 lg:!my-0 !w-52 lg:!min-w-fit !h-52 lg:!min-h-full !rounded-full lg:!rounded-none !border-4 lg:!border-none !border-transparent-pinkish-white-70 !drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'
      }
    />
  );
}
