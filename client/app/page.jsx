import Image from 'next/image';

import Button from './components/button';

export default function Home() {
  return (
    <div className='h-screen'>
      <div className='relative'>
        <Image
          src='/hero.jpg'
          height={5000}
          width={5000}
          alt='tan shoes'
          className='h-4/5 object-cover brightness-75'
        />

        <div className='absolute top-1/4 w-full text-center text-3xl text-white'>
          A variety of products available
        </div>

        <div className='absolute bottom-1/4 flex w-full justify-center'>
          <Button>SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
}
