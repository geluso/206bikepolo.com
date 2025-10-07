import { useState } from "react";

interface Tab {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  tabs: Tab[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ tabs }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden relative">
      <button
        className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`block w-8 h-1 bg-gray-600 transform transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-gray-600 transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-gray-600 transform transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#b0ccd7] shadow-lg rounded-lg">
          <ul className="flex flex-col p-2 space-y-2">
            {tabs.map((tab, index) => (
              <li key={index}>
                <a
                  href={tab.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
