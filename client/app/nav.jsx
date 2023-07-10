'use client';

import Link from 'next/link';
import { useState } from 'react';

import Padding from './components/padding';

import {
  PiPackageLight,
  PiShoppingCartLight,
  PiUserLight,
  PiRowsLight,
  PiXLight,
} from 'react-icons/pi';

const navLinks = [
  { name: 'NEW', slug: 'new' },
  { name: 'POPULAR', slug: 'popular' },
  { name: 'SALE', slug: 'sale' },
];

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Padding>
      <div className='flex justify-between bg-white h-16 items-center'>
        <div className='lg:flex gap-16 w-screen'>
          <Link
            href='/'
            className='z-10 relative flex gap-2'
            onClick={() => (showNav ? setShowNav(!showNav) : null)}
          >
            <PiPackageLight className='text-2xl' />
            <div className='font-bold text-orange-600'>e-commerce</div>
          </Link>
          <ul className='hidden lg:flex gap-6 font-normal text-sm items-center'>
            {navLinks.map((navLink) => (
              <li>
                <Link href={`/category/${navLink.slug}`}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
          {showNav && (
            <div className='lg:hidden absolute text-center top-0 left-0 pl-6 bg-white h-screen w-screen'>
              <ul className='pt-16 flex flex-col gap-4'>
                {navLinks.map((navLink) => (
                  <li>
                    <Link
                      href={`/category/${navLink.slug}`}
                      onClick={() => setShowNav(!showNav)}
                      className='w-fit'
                    >
                      {navLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <ul className='flex gap-6 z-10 relative text-2xl'>
          <li>
            <PiShoppingCartLight />
          </li>
          <li>
            <PiUserLight />
          </li>
          <li className='lg:hidden'>
            <button onClick={() => setShowNav(!showNav)}>
              {showNav ? <PiXLight /> : <PiRowsLight />}
            </button>
          </li>
        </ul>
      </div>
    </Padding>
  );
}
