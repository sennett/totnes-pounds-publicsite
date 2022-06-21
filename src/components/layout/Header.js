import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-row justify-between items-center mx-auto py-4 px-8">
      {/* <div className="flex items-center text-2xl"> */}
      <div className="bg-black w-12 mr-3 text-white p-2 items-center text-2xl">
        £T
      </div>
      <div className="hidden md:block">Totnes Pound</div>
      {/* </div> */}
      {/* <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div> */}
      <div className="flex items-right space-x-4">
        <Button className="text-sm" href="#get-involved">Get involved</Button>
      </div>
    </div>
  </header>
);

export default Header;
