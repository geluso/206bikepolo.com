import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationTabs from "./components/NavigationTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "206 Seattle Bike Polo",
  description: "206 Seattle Bike Polo",
};

const NAV_TABS = [
  { label: "Home", href: "/" },
  { label: "Rumble", href: "/rumble" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "History", href: "/history" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>206 Seattle Bike Polo</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen" id="main">
          <NavigationTabs tabs={NAV_TABS} />
          <div className="px-4 mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
