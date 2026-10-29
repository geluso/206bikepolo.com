import Image from "next/image";
import NAs2026Winners from "../public/img/NAs_2026_winners_first_place_gulls.jpg"
import seattleLogoImage from "../public/img/206_seattle_bike_polo_logo.png";
import DiscordLink from "./components/DiscordLink";

export default function Home() {
  return (
    <div className="page">
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
          newbies! In the winter, we have lights we can set up to play
          after dark. Check the discord for the latest updates on when
          we{"'"}re playing.
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
         <a href="https://www.instagram.com/p/DdtvXu2M2WB/" target="_blank">C-Food Scramble</a>
        <ul className="ps-6 list-disc list-inside">
          <li>One day newbie-focused mixer</li>
          <li>Eugene, OR</li>
          <li>November 15th, 2026</li>
        </ul>

        <a href="https://www.instagram.com/p/DesOwdlCIS3/" target="_blank">Quetza Mixer</a>
        <ul className="ps-6 list-disc list-inside">
          <li>Not local, but a great mixer tournament that{"'"}s open to all skill levels</li>
          <li>Mexico City, MX</li>
          <li>January 9th-10th, 2027</li>
        </ul>
      
      <h2>2026 North Americans Champions!!</h2>
      <p className="mb-2 mt-2">
        <strong>BACK-TO-BACK!</strong> Gulls are <strong>North American champs</strong> for the <strong>second year in a row!</strong>🥇🔥 <br/>
        Congratulations to Carol, B, Julian, and Hamms for playing some <a href="https://www.instagram.com/losangelesbikepolo/reel/DfEZAldJsQb/" target="_blank">great polo</a> out there!
      </p>

      <Image className="m-3 shadow-lg" src={NAs2026Winners} width="350" alt="Gulls hold the trophy"  />

      <h2>Source Code</h2>

      <p className="pb-5 mt-2">
        Check out the source code or edit it on GitHub{" "}
        <a href="https://github.com/geluso/206bikepolo.com" target="_blank">@geluso/206bikepolo</a>.
      </p>
    </div>
  );
}
