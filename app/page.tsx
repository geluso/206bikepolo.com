import Image from "next/image";
import judkinsPlayTimes from "../public/img/judkins_play_times.png"
import cascadiaQualifier2024 from "../public/img/cascadia_qualifier_2024.png"
import aprilNewbieDay from "../public/img/april_newbie_day.png"

export default function Home() {
  return <div>
    <div className="logo">
      <img src="./img/206_seattle_bike_polo_logo.png" />
    </div>

    <h1>Seattle Bike Polo</h1>

    <h2>New Players</h2>
    <ul>
      <li>
        We meet Wednesday evenings around 5pm until sundown, specifically for newbies!
      </li>
      <li>
        We have extra mallets and bicycles to borrow!
      </li>
      <li>
        Feel free to stop by with your everyday rider and we can get you in a couple games that day!
      </li>
    </ul>
    <p>
      When ready, we can help you pick out components to build up a single speed, flat bar polo bike!
    </p>

    <h2>  Tournaments </h2>
    <h3>
      <a href="/rumble">🌹 2025 Rose City Royal Rumble 🥀</a> [April 5-6, 2025]
    </h3>

    <h2>News</h2>
    <ul>
      <li>Come out October 26th and 27th 2024 for the <a
          href="https://bikepolocalendar.com/event/the-cascadia-triple-crown-emerald-city-open">Emerald City Open: Cascadia Triple Crown</a>
      </li>
      <li>Tournament information <a href="/tournaments/2024-emerald-city-open-cascadia-triple-crown">here</a></li>
      <li>Register for ECO <a href="https://forms.gle/6z6ba3aCkqtqJS416">here</a></li>
      <li><a href="https://bikepolocalendar.com/event/the-cascadia-triple-crown-emerald-city-open">Bike Polo Calendar Page</a></li>
    </ul>

    <h2>Olds</h2>
    <div>
      <ul>
        <li>We play at Judkins Park <a href="https://maps.app.goo.gl/UxkWUMPTLsNPhg5WA">47.591401,-122.302915</a></li>
        <ul>
          <li>Saturdays 2PM till dark</li>
          <li>Sundays 11AM till dark</li>
          <li>Wednesdays 6PM till dark</li>
        </ul>
        <li><a href="https://www.instagram.com/206bikepolo/">@206bikepolo</a> on Instagram</li>
        <li>Come out June 1st and 2nd 2024 for the <a
            href="https://bikepolocalendar.com/event/nah-cascadia-qualifier">Cascadia Qualifier</a></li>
        <li>
          Talk to everyone on <a href="https://join.slack.com/t/seattlebikepolo/shared_invite/zt-2m8wd3zl2-RxZBe~fmA_1abfLNSAZ5yg">Slack</a>
        </li>
        <li>
          Rules? Don&apos;t be a dick. Also <a href="/docs/2022-nah-ruleset.pdf">official NAH rules</a> and the <a href="/docs/polo_bible.pdf">polo bible</a>.
        </li>
        <li>Edit this website on <a href="">GitHub</a>. FTP and GitHub access avaialble upon request.</li>
      </ul>
    </div>

    <div>
      <a href="http://localhost:3001/tournaments/2024-emerald-city-open-cascadia-triple-crown">
        <img src="/img/2024_eco_3xcrown1.png" />
      </a>
    </div>

    <Image src={judkinsPlayTimes} alt="Sign showing Judkins play times" />
    <Image src={cascadiaQualifier2024} alt="Cascadia Qualifiers 2024 poster" />
    <Image src={aprilNewbieDay} alt="Poster for April Newbie Day" />
  </div>
}
