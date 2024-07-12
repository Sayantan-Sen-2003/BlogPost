import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
               Blog
              </span>
              Post
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="BlogPost"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <p><b>Sayantan's Profile</b></p>
            <Footer.Icon href='https://github.com/Sayantan-Sen-2003' icon={BsGithub} />
            <Footer.Icon href='https://www.linkedin.com/in/sayantansen05/' icon={BsLinkedin} />
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <p><b>Abhrajit's Profile</b></p>
            <Footer.Icon href='https://github.com/Abhrajitdas02' icon={BsGithub} />
            <Footer.Icon href='https://www.linkedin.com/in/abhrajit-das-53a958231/' icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
