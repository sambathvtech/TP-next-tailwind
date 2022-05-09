import { useState, useEffect } from 'react';

export const MainLayout = ({ children }) => {
  // State
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className='w-full relative bg-black'>
      {scrollBtn && (
        <button
          type='button'
          className='fixed bottom-10 right-10 flex justify-center items-center w-10 h-10 bg-white rounded-lg'
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        >
          <BiUpArrow />
        </button>
      )}
      <div>{children}</div>
    </div>
  );
};
