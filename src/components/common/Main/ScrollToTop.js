import React from 'react';
import { BiUpArrow } from 'react-icons/bi';

export default function ScrollToTop({ scrollBtn }) {
  return (
    scrollBtn && (
      <button
        type='button'
        className='fixed bottom-10 right-10 z-40 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black drop-shadow-lg'
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        <BiUpArrow color='#000' />
      </button>
    )
  );
}
