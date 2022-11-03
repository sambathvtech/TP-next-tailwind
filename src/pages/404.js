import Link from 'next/link';

function NotFound() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div>
        <h1 className='mb-5 text-3xl font-bold'>404</h1>
        <p>Sorry, the page you visited does not exist.</p>
        <Link href='/' className='underline'>
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
