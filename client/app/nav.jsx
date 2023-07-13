'use client';

import Link from 'next/link';
import { useState } from 'react';

import PagePadding from './components/page-padding';

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
  const closeNav = () => (showNav ? setShowNav(!showNav) : null);
  const [isSliding, setIsSliding] = useState(false);

  return (
    <PagePadding>
      <div className='flex h-16 items-center justify-between'>
        <div className='w-screen gap-16 lg:flex'>
          {/* Logo */}
          <Link href='/' className='flex gap-2'>
            <PiPackageLight className='text-2xl text-red-600' />
            <div className='font-medium'>e-commerce</div>
          </Link>

          {/* Desktop nav list */}
          <ul className='hidden items-center gap-8 text-sm font-normal lg:flex'>
            {navLinks.map((navLink) => (
              <li>
                <Link href={`/category/${navLink.slug}`}>{navLink.name}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile nav background */}
          {showNav && (
            <div className='fixed left-0 top-0 z-10 h-screen w-screen bg-black/50'></div>
          )}

          {/* Mobile nav list */}
          <div
            className={`fixed left-0 top-0 z-10 h-screen w-full duration-300 ease-in-out lg:hidden ${
              showNav ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul
              className={`fixed right-0 top-0 flex h-full w-3/4 flex-col gap-4 bg-white px-6 pt-16`}
            >
              <li className='fixed right-6 top-4'>
                <button onClick={closeNav}>
                  <PiXLight className='text-2xl' />
                </button>
              </li>
              {navLinks.map((navLink) => (
                <li>
                  <Link href={`/category/${navLink.slug}`} onClick={closeNav}>
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cart, account, mobile nav toggle */}
        <ul className='relative flex gap-6 text-2xl'>
          <li>
            <PiShoppingCartLight className='z-0' />
          </li>
          <li>
            <PiUserLight />
          </li>
          <li className='lg:hidden'>
            <button onClick={() => setShowNav(!showNav)}>
              <PiRowsLight />
            </button>
          </li>
        </ul>
      </div>
    </PagePadding>
  );
}
