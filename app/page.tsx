import Image from "next/image";
import judkinsPlayTimes from "../public/img/judkins_play_times.png";
import cascadiaQualifier2024 from "../public/img/cascadia_qualifier_2024.png";
import aprilNewbieDay from "../public/img/april_newbie_day.png";
import NAs2025Winners from "../public/img/NAs_2025_winners_first_place_gulls.jpg"
import seattleLogoImage from "../public/img/206_seattle_bike_polo_logo.png";
import crown from "../public/img/2024_eco_3xcrown1.png";


export default function Home() {
  return (
    <div>
      <div className="logo">
        <Image src={seattleLogoImage} alt="206 Seattle Bike Polo Logo" />
      </div>

      <h2 className="my-2 text-2xl font-extrabold">General Info</h2>
      <p className="mb-2">
        Bike polo is a 3v3 team sport, similar to traditional horse polo, except we ride bicycles. 
      </p>

      <p className="mb-2">
        We play at{" "}
        <a href="https://maps.app.goo.gl/KcbNeoC6srRq2T8r7" target="_blank"> 
          Judkins Park
        </a> in Central District, Seattle || near i90 Rainier Ave exit
      </p>

      <ul className="ps-6 my-2 list-disc list-inside">
        <li>Saturdays 2PM till dark</li>
        <li>Sundays 11AM till dark</li>
        <li>Wednesdays 5PM till dark or later w/ lights</li>
      </ul>

      <p>
        Talk to everyone on{" "}
        <a href="https://join.slack.com/t/seattlebikepolo/shared_invite/zt-2m8wd3zl2-RxZBe~fmA_1abfLNSAZ5yg" target="_blank"> 
          Slack 
        </a>{" "}
        and follow us on Instagram{" "}
        <a href="https://www.instagram.com/206bikepolo/" target="_blank">
          @206bikepolo
        </a>
      </p>

      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          Rules? Don&apos;t be a dick. 
          <ul className="ps-6 list-disc list-inside">
            <li>Also{" "} <a href="/docs/2022-nah-ruleset.pdf" target="_blank">official NAH rules</a> and{" "}
            <a href="/docs/polo_bible.pdf" target="_blank">
              polo bible
            </a></li>
          </ul>
        </li>
        <li>
          What is bike polo?{" "}
          <ul className="ps-6 list-disc list-inside">
            <li>
              <a href="https://www.youtube.com/watch?v=g3Fwwe0U1NY" target="_blank">
                Watch the old school 2015 era video
              </a></li>
          </ul>
        </li>
      </ul>

      <h2 className="my-2 text-2xl font-extrabold">New Players</h2>
      <p className="mb-2">We love new players! Come hang out.</p>
      <ul className="ps-6 my-2 list-disc list-inside">
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

      <h2 className="my-2 text-2xl font-extrabold">Getting your own Gear</h2>
      <p>
        Bike polo gear is generally purchased through{" "}
        <a href="https://hecklersalley.com/" target="_blank">
          hecklersalley.com
        </a> maintained out in Portland by Jordan
      </p>

      <ul className="ps-6 my-2 list-disc list-inside">
          <li>But our local seattle club generally has old equipment to sell/give away.</li>
          <li>We often do group orders to save on shipping</li>
      </ul>

      <p className="mb-2 mt-2">
        See <a href="/gear">/gear</a> page for more information.
      </p>


      <h2 className="my-2 text-2xl font-extrabold">Tournaments</h2>
      <ul className="ps-6 my-2 list-disc list-inside">
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

      <h2 className="my-2 text-2xl font-extrabold">2025 North Americans Champions!!</h2>
      <p>
        Congratulations to <strong>Gulls winning 1st place</strong> bringing home glory to Seattle and Cascadia. 
        Carol, Bronco, Julian, and Hamms bring home the gold emblazing SEA back on the trophy forever.
      </p>

      <p className="mt-2">
        Edit this website on{" "}
        <a href="https://github.com/geluso/206bikepolo.com" target="_blank">GitHub</a>.
      </p>
      
      <Image src={NAs2025Winners} alt="Sign showing Judkins play times"  />
      <Image src={crown} alt="..." />
      <Image src={judkinsPlayTimes} alt="Sign showing Judkins play times" />
      <Image src={cascadiaQualifier2024} alt="Cascadia Qualifiers 2024 poster" />
      <Image src={aprilNewbieDay} alt="Poster for April Newbie Day" />

    </div>
  );
}
