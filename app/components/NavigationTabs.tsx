import React from 'react';
import NavItem from './NavItem';

interface Tab {
    label: string;
    href: string;
}

interface NavigationTabsProps {
    tabs: Tab[];
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs }) => {
    return (
        <nav className="py-4 px-6 text-sm font-medium">
            <ul className="flex space-x-3">
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <NavItem label={tab.label} href={tab.href} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationTabs;