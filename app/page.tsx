import Image from "next/image";
import tripleCrown2026 from "../public/img/triplecrown2026.png";
import back2school from "../public/img/back2school.jpg";
import bus from "../public/img/bus.png";
import NAs2025Winners from "../public/img/NAs_2025_winners_first_place_gulls.jpg"
import seattleLogoImage from "../public/img/206_seattle_bike_polo_logo.png";
import DiscordLink from "./components/DiscordLink";

export default function Home() {
  return (
    <div className="page">
      <a href="https://forms.gle/MvtupoShbqBFhZTh6" target="_blank">
      <div className="bg-gradient-to-tl from-yellow-800 to-yellow-500 bg-[length:auto_100px] rounded-xl p-2 mb-4">
        <div className="flex justify-center items-center bg-gray-900 p-2 rounded-xl text-yellow-200 text-lg font-sans font-semibold">
          <div>
              <span className="text-3xl"></span>
          </div>
              <Image className="p-3 transition hover:-skew-x-12" src={bus} height="35" alt="Back to School Bash school bus icon"  />
              Back to School Newbie Tournament Sept 26th-27th
        </div>
      </div>
      </a>

      <div className="logo flex justify-center">
        <Image src={seattleLogoImage} width="400" alt="206 Seattle Bike Polo Logo" />
      </div>

      <h2>General Info</h2>
      <div className="flex justify-center border-2 border-dashed border-gray-900 p-2 m-4 rounded-sm text-lg ">
      <span>
        {">"} Talk to everyone on{" "}
        <DiscordLink />{" "}
        and follow us on Instagram{" "}
        <a href="https://www.instagram.com/206bikepolo/" target="_blank">
          @206bikepolo
        </a>
      </span>
      </div>

      <p className="mb-2">
        Bike polo is a 3v3 team sport, similar to traditional horse polo, except we ride bicycles.
      </p>

      <p className="mb-2">
        We play at{" "}
        <a href="https://maps.app.goo.gl/KcbNeoC6srRq2T8r7" target="_blank">
          Judkins Park
        </a> in Central District, Seattle || near the Judkins Park light rail station
      </p>

      <ul>
        <li>Saturdays 2PM till dark</li>
        <li>Sundays 11AM till dark</li>
        <li>Wednesdays 5PM till dark or later w/ lights</li>
      </ul>

      <ul>
        <li>
          What is bike polo?{" "}
          <ul className="ps-6 list-disc list-inside">
            <li>
              <a href="https://www.youtube.com/watch?v=g3Fwwe0U1NY" target="_blank">
                Watch the old school 2015 era video
              </a></li>
          </ul>
        </li>
        <li>Official <a href="/docs/2022-nah-ruleset.pdf" target="_blank">NAH rules</a> (North America Hardcort) and{" "}
        <a href="/docs/polo_bible.pdf" target="_blank">
          polo bible
        </a></li>
      </ul>

      <h2>New Players</h2>
      <p className="mb-2">We love new players! Come hang out.</p>
      <ul>
        <li>
          We meet Wednesday & Saturday until sundown, specifically for
          newbies!
        </li>
        <li>We have <b>extra mallets and bicycles to borrow!</b></li>
      </ul>

      <p className="mb-2 mt-2">
        When ready, we can help you pick out components to build up a single
        speed, flat bar polo bike!
      </p>

      <h2>Getting your own Gear</h2>

      <ul>
          <li>Our local polo shop is <b><a href="https://www.instagram.com/whisperwheelworks/" target="_blank">Whisper Wheelworks</a></b></li>
          <li>Mallets, balls, and more are found on Portland{"'"}s <b><a href="https://hecklersalley.com/" target="_blank">Heckler{"'"}s Alley</a></b></li>
          <li>We often do group orders to save on shipping</li>
          <li>Our club has old equipment to sell/give away. Ask in the Discord!</li>
      </ul>

      <p className="mb-2 mt-2">
        See <a href="/gear">/gear</a> page for more information.
      </p>

      <h2>Spectate!</h2>

      <p className="mb-2 mt-2">
        We have some bleachers at Judkins Park, so you can just come and watch!
      </p>

      <h2>Tournaments</h2>
      <ul>
        <li>
          See tourney page - {" "}
          <a href="/tournaments" target="_blank">
            /tournaments
          </a>
        </li>
        <li>
          For global tournaments see{" "}
          <a href="https://bikepolocalendar.com/event/the-cascadia-triple-crown-emerald-city-open" target="_blank">
            bikepolocalendar.com
          </a>
        </li>
      </ul>

      <h3>Upcoming Nearby Events</h3>
         <a href="https://www.instagram.com/eastvanbikepolo/" target="_blank">East Van Crown</a>
        <ul className="ps-6 list-disc list-inside">
          <li>Vancouver</li>
          <li>September 19th-20th, 2026</li>
        </ul>

        <a href="https://forms.gle/MvtupoShbqBFhZTh6" target="_blank">Seattle Bike Polo Goes Back to School</a>
        <ul className="ps-6 list-disc list-inside">
          <li>Each team must have at least one newbie (2 years or less experience)</li>
          <li>Seattle</li>
          <li>September 26th-27th, 2026</li>
        </ul>
      
      <Image className="m-3 border border-solid border-gray-600 shadow-lg" src={back2school} width="350" alt="back to school tournament poster"  />
      <Image className="m-3 shadow-lg" src={tripleCrown2026} width="350" alt="cascadia triple crown poster"  />
      
      <h2>2025 North Americans Champions!!</h2>
      <p className="mb-2 mt-2">
        Congratulations to <strong>Gulls winning 1st place</strong> bringing home glory to Seattle and Cascadia.
        Carol, Bronco, Julian, and Hamms bring home the gold emblazing SEA back on the trophy forever.
      </p>

      <Image className="m-3 shadow-lg" src={NAs2025Winners} width="350" alt="Gulls hold the trophy"  />

      <h2>Source Code</h2>

      <p className="pb-5 mt-2">
        Check out the source code or edit it on GitHub{" "}
        <a href="https://github.com/geluso/206bikepolo.com" target="_blank">@geluso/206bikepolo</a>.
      </p>
    </div>
  );
}
