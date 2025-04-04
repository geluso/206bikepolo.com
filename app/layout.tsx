import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "206 Seattle Bike Polo",
  description: "206 Seattle Bike Polo",
};

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
        <div id="main">
          <div className="tournament-nav-container">
            <a href="/">
              <button>Home</button>
            </a>
            <a href="/rumble">
              <button>🌹🏙️👑 Rumble</button>
            </a>
            <a href="/tournaments">
              <button>🏆 Tournaments</button>
            </a>
            <a href="/history">
              <button>⏳ History</button>
            </a>
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
