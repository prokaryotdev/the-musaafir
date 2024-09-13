import Image from 'next/image';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import X from '../../public/X.svg'; // Assuming X.svg is a static asset
import Link from 'next/link';

const Footer = () => {
  const icons = [
    <Image key="x-icon" src={X} alt="X icon" width={24} height={24} className='invert size-5 sm:size-6' />, 
    <Instagram key="instagram-icon" className='size-5 sm:size-6' />,
    <Linkedin key="linkedin-icon" className='size-5 sm:size-6' />,
    <Youtube key="youtube-icon" className='size-5 sm:size-6' />,
  ];

  return (
    <footer className="w-full py-14 border-t bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-x-5 justify-center items-center mb-5">
            {icons.map((icon) => (
              <Link
                key={icon.props.key}
                href=""
                aria-label={`Icon ${icon.props.key}`}
              >
                {icon}
              </Link>
            ))}
          </div>
          <span className=" text-gray-800 text-center block">
            ©2024 <b>The Musaafir</b> <span className='hidden sm:inline-block'>|</span>  <br className='sm:hidden' /> All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
