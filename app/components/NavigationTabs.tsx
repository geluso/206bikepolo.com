'use client';
import React from "react";
import NavItem from "./NavItem";
import HamburgerMenu from "./HamburgerMenu";

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
      <div className="max-w-screen-xl flex flex-wrap items-center md:justify-between justify-evenly mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Seattle Bike Polo
          </span>
        </a>
        <HamburgerMenu tabs={tabs}/>
        <div className="hidden sm:flex sm:w-auto">
          <ul className="flex space-x-2 md:space-x-8">
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
