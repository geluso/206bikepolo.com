'use client';
import React from "react";
import NavItem from "./NavItem";
import HamburgerMenu from "./HamburgerMenu";

import Image from "next/image";
import seattleWhitePoloLogo from '../../public/img/206_white_seattle_polo_logo.png'

interface Tab {
  label: string;
  href: string;
}

interface NavigationTabsProps {
  tabs: Tab[];
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs }) => {
  return (
    <nav className="bg-gray-900 sticky w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
            <Image 
              src={seattleWhitePoloLogo} 
              alt="Judkins Park Bike Polo history community meeting poster timeline"
              width={70}
              height={70}
            /> 
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Bike Polo
          </span>
        </a>
        <HamburgerMenu tabs={tabs}/>
        <div className="hidden sm:flex sm:w-auto">
          <ul className="flex space-x-2 md:space-x-4">
            {tabs.map((tab, index) => (
              <li className="mb-px mr-1" key={index}>
                <NavItem label={tab.label} href={tab.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTabs;
