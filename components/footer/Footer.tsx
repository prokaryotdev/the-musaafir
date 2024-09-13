import Image from 'next/image';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import X from '../../public/X.svg'; // Assuming X.svg is a static asset
import Link from 'next/link';

const Footer = () => {
  const icons = [
    <Image key="x-icon" src={X} alt="X icon" width={24} height={24} className='invert' />, 
    <Instagram key="instagram-icon" />,
    <Linkedin key="linkedin-icon" />,
    <Youtube key="youtube-icon" />,
  ];

  return (
    <footer className="w-full py-14 border-t bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-x-10 justify-center items-center mb-14">
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
          <span className="text-lg text-gray-800 text-center block">
            ©2024 <b>The Musaafir</b> | All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
