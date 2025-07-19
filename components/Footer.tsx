import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white py-8 mt-12'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0 flex items-center space-x-3'>
          <span className='font-bold text-xl'>Contact Manager</span>
          <span className='bg-white text-pink-700 px-2 py-1 rounded-full text-xs'>
            v1.0
          </span>
        </div>
        <nav className='flex space-x-6'>
          <Link
            href='/'
            className='hover:underline'
          >
           Home
          </Link>
          <Link
            href='/contacts'
            className='hover:underline'
          >
            Contacts
          </Link>
        </nav>
        <div className='min-w-60 flex justify-center space-x-4 mt-4 md:mt-0'>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <svg
              className='w-6 h-6 hover:scale-110 transition-transform'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z' />
            </svg>
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <svg
              className='w-6 h-6 hover:scale-110 transition-transform'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.51 2.01-4.51 4.5 0 .35.04.7.12 1.03C7.69 5.4 4.07 3.67 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.56 1.74 2.18 3.01 4.1 3.05A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.94 2.03c8.32 0 12.88-6.89 12.88-12.88 0-.2-.01-.39-.02-.58A9.22 9.22 0 0 0 23 3z' />
            </svg>
          </a>
        </div>
      </div>
      <div className='mt-8 text-center text-xs text-gray-300'>
        &copy; {new Date().getFullYear()} NextProject. All rights reserved. 
      </div>
    </footer>
  )
}
export default Footer
