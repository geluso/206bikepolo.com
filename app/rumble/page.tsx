import Image from "next/image";

import royalRumbleImg from "../../public/img/royal_rumble.jpg"
import img1 from "../../public/img/rumble-gifs/2v2-slam.gif"
import img2 from "../../public/img/rumble-gifs/cage-dive.gif"
import img3 from "../../public/img/rumble-gifs/jake-the-snake.gif"
import img4 from "../../public/img/rumble-gifs/macho-man-randy-savage.gif"
import img5 from "../../public/img/rumble-gifs/royal-rumble.gif"
import img6 from "../../public/img/rumble-gifs/saturday.gif"
import img7 from "../../public/img/rumble-gifs/stone-cold-beer.gif"
import img8 from "../../public/img/rumble-gifs/stone-cold-steve-austin-elbow.gif"
import img9 from "../../public/img/rumble-gifs/takedown.gif"
import img10 from "../../public/img/rumble-gifs/the-belt.gif"

import Link from "next/link";

export default function Page() {
  const images = [royalRumbleImg, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
  const randomImage = images[Math.floor(Math.random() * images.length)]
  return <div>
    <p>Welcome to the Royal Rumble!!</p>
    <Link href="/rumble/players">View players</Link>

    <ul>
      <li>Friday 7PM party at Tough Luck Bar</li>
      <li>Saturday 9AM start games at Alberta Park</li>
      <li>Sunday 9AM start double elimination bracket</li>
    </ul>

    <Image className="w-full" src={randomImage} alt="random wrestling image" />
  </div>
}