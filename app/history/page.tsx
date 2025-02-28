import Image from "next/image";

import judkinsPoloHistory from '../../public/img/judkins_polo_history.jpg'

export default function Page() {
  return <div>
    <h1>206 Bike Polo History</h1>
    <p>Some 206 Bike Polo history, and good talking points if you ever find yourself at a community meeting.</p>
    <ul>
      <li>Hard court bike polo was invented in Seattle in 2000. It is now a competitive sport with a global presence.</li>
      <li>The boards on both courts have been built, maintained, and paid for by the polo club since 2010.</li>
      <li>The city designated both tennis courts at Judkins Park for use for bike polo in 2012 following an 18-month pilot, we have continuously played at and maintained the courts in these 15 years.</li>
      <li>Since COVID the polo club has worked with other community groups including Futsal, Street Hockey, and Roll Around Seatown, as part of the Judkins Park Council, a grassroots organization of regular user groups of the space.</li>
      <li>The courts at Judkins are the polo club’s home and the only place in Seattle where we can play.</li>
      <li>As the courts have become open to permit and as the light rail opens we look to retain affordable access</li>
    </ul>
    <div>
      <Image src={judkinsPoloHistory} alt="Judkins Park Bike Polo history community meeting poster timeline" />
    </div>
  </div>
}