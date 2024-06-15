import Image from "next/image";
import judkinsPlayTimes from "../public/img/judkins_play_times.png"
import cascadiaQualifier2024 from "../public/img/cascadia_qualifier_2024.png"
import aprilNewbieDay from "../public/img/april_newbie_day.png"

export default function Home() {
  return <div>
    <div className="logo">
      <img src="./img/206_seattle_bike_polo_logo.png" />
    </div>
    <div>
      <ul>
        <li>We play at Judkins Park <a href="https://maps.app.goo.gl/UxkWUMPTLsNPhg5WA">47.591401,-122.302915</a></li>
        <ul>
          <li>Saturdays 2PM till dark</li>
          <li>Sundays 11AM till dark</li>
          <li>Wednesdays 6PM till dark</li>
        </ul>
        <li>Come out June 1st and 2nd 2024 for the <a
            href="https://bikepolocalendar.com/event/nah-cascadia-qualifier">Cascadia Qualifier</a></li>
        <li><a href="https://www.instagram.com/206bikepolo/">@206bikepolo</a> on Instagram</li>
        <li>Talk to everyone on <a
            href="https://join.slack.com/t/seattlebikepolo/shared_invite/zt-2im5od2df-FlTl~Oc9YVC8feu95iVM8g">Slack</a>
        </li>
        <li>
          Rules? Don't be a dick. Also <a href="/docs/2022-nah-ruleset.pdf">official NAH rules</a> and the <a href="/docs/polo_bible.pdf">polo bible</a>.
        </li>
        <li>Edit this website on <a href="">GitHub</a>. FTP and GitHub access avaialble upon request.</li>
      </ul>
    </div>

    <Image src={judkinsPlayTimes} alt="Sign showing Judkins play times" />
    <Image src={cascadiaQualifier2024} alt="Cascadia Qualifiers 2024 poster" />
    <Image src={aprilNewbieDay} alt="Poster for April Newbie Day" />
  </div>
}
