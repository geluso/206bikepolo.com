import Image from "next/image";
import judkinsPlayTimes from "../public/img/judkins_play_times.png";
import cascadiaQualifier2024 from "../public/img/cascadia_qualifier_2024.png";
import aprilNewbieDay from "../public/img/april_newbie_day.png";
import NAs2025Winners from "../public/img/NAs_2025_winners_first_place_gulls.jpg"

export default function Home() {
  return (
    <div>
      <div className="logo">
        <img src="./img/206_seattle_bike_polo_logo.png" />
      </div>
      <h2 className="my-2 text-2xl font-extrabold">General Info</h2>
      <p>
        We play at Judkins Park{" "}
        <a href="https://maps.app.goo.gl/UxkWUMPTLsNPhg5WA">
          47.591401,-122.302915
        </a>
      </p>
      <ul>
        <ul className="ps-6 my-2 list-disc list-inside">
          <li>Saturdays 2PM till dark</li>
          <li>Sundays 11AM till dark</li>
          <li>Wednesdays 6PM till dark</li>
        </ul>
        <li>
          <a href="https://www.instagram.com/206bikepolo/">@206bikepolo</a> on
          Instagram
        </li>
        <li>
          Talk to everyone on{" "}
          <a href="https://join.slack.com/t/seattlebikepolo/shared_invite/zt-2m8wd3zl2-RxZBe~fmA_1abfLNSAZ5yg">
            Slack
          </a>
        </li>
        <li>
          Rules? Don&apos;t be a dick. Also{" "}
          <a href="/docs/2022-nah-ruleset.pdf">official NAH rules</a> and the{" "}
          <a href="/docs/polo_bible.pdf">polo bible</a>.
        </li>
        <li>
          What is bike polo?{" "}
          <a href="https://www.youtube.com/watch?v=g3Fwwe0U1NY">Watch the old school 2015 era video</a>
        </li>
      </ul>

      <h2 className="my-2 text-2xl font-extrabold">New Players</h2>
      <p className="mb-2">We love new players! Come hang out.</p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          We meet Wednesday evenings around 5pm until sundown, specifically for
          newbies!
        </li>
        <li>We have extra mallets and bicycles to borrow!</li>
        <li>
          Feel free to stop by with your everyday rider and we can get you in a
          couple games that day!
        </li>
      </ul>
      <p className="mt-2">
        When ready, we can help you pick out components to build up a single
        speed, flat bar polo bike!
      </p>
      <h2 className="my-2 text-2xl font-extrabold">Tournaments</h2>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          See tournaments on{" "}
          <a href="https://bikepolocalendar.com/event/the-cascadia-triple-crown-emerald-city-open">
            bikepolocalendar.com
          </a>
        </li>
        <li>
          <a href="https://bikepolocalendar.com/event/whbpc-2025">🌏🏆 World Champs, Taiwan</a> [November 13-16 2025]
        </li>
        <li>
          <a href="https://www.bikereg.com/bellingham-bike-polo?fbclid=PAZXh0bgNhZW0CMTEAAafZI_pj6p5WiBrtLm7j5O0RLiVvia0DRi_pXLIYTj3vprsL8hNcCubCq7oOXQ_aem_nH1Hi9f6v1X8ZCUcui5Opw">🎃👻 Freakoween, Bellingham, WA</a> [October 31-November 2 2025]
        </li>
        <li>
          <a href="https://bikepolocalendar.com/event/soft-serve-swirl-iv">🍦🌀 Soft Swerve Swirl, Vancouver BC</a> [October 4-5, 2025]
        </li>
        <li>
          <a href="https://bikepolocalendar.com/event/no-fun-city-9">🚫🎉 No Fun City 9, Vancouver BC</a> [September 20-21, 2025]
        </li>
        <li>
          <a href="/rumble">🌹 2025 Rose City Royal Rumble 🥀</a> [April 5-6, 2025]
        </li>
        <li>
          Come out October 26th and 27th 2024 for the{" "}
          <a href="https://bikepolocalendar.com/event/the-cascadia-triple-crown-emerald-city-open">
            Emerald City Open: Cascadia Triple Crown
          </a>
        </li>
        <ul className="list-disc list-inside">
          <li>
            Tournament information{" "}
            <a href="/tournaments/2024-emerald-city-open-cascadia-triple-crown">
              here
            </a>
          </li>
          <li>
            Register for ECO{" "}
            <a href="https://forms.gle/6z6ba3aCkqtqJS416">here</a>
          </li>
        </ul>
        <li>
          Come out June 1st and 2nd 2024 for the{" "}
          <a href="https://bikepolocalendar.com/event/nah-cascadia-qualifier">
            Cascadia Qualifier
          </a>
        </li>
      </ul>

      <p className="mt-2">
        Edit this website on{" "}
        <a href="https://github.com/geluso/206bikepolo.com">GitHub</a>.
      </p>

      <h2 className="my-2 text-2xl font-extrabold">2025 North Americans Champions!!</h2>
      <p>Congratulations to Gulls winning 1st place bringing home glory to Seattle and Cascadia. Carol, Bronco, Julian, and Hamms bring home the gold emblazing SEA back on the trophy forever.</p>
      <Image src={NAs2025Winners} alt="Sign showing Judkins play times" />

      <div>
        <a href="/tournaments/2024-emerald-city-open-cascadia-triple-crown">
          <img src="/img/2024_eco_3xcrown1.png" />
        </a>
      </div>

      <Image src={judkinsPlayTimes} alt="Sign showing Judkins play times" />
      <Image
        src={cascadiaQualifier2024}
        alt="Cascadia Qualifiers 2024 poster"
      />
      <Image src={aprilNewbieDay} alt="Poster for April Newbie Day" />
    </div>
  );
}
