import Image from 'next/image';

import Button from './components/button';

export default function Home() {
  return (
    <div className='h-screen relative'>
      <Image
        src='/hero.jpg'
        height={5000}
        width={5000}
        alt='tan shoes'
        className='object-cover h-4/5'
      />

      <div className='bg-white relative w-screen'>
        <Button className='relative bottom-20 text-center bg-orange-600 text-white w-fit m-auto'>
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}
