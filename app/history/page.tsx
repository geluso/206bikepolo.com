import Image from "next/image";
import judkinsPoloHistory from '../../public/img/judkins_polo_history.jpg'

export default function Page() {
  return(
  <div className="mb-32">
    <h2>206 Bike Polo History</h2>
    <p className="mb-2">
      Some 206 Bike Polo history, and good talking points
      if you ever find yourself at a community meeting.
    </p>

    <p className="mb-2">
      The general bike polo history can be found at
      <a href="https://www.nahardcourt.com/about/" className="text-blue-500"> nahardcourt.com</a> and {" "}
      <a href="https://en.wikipedia.org/wiki/Bike_polo" className="text-blue-500"> wiki/bike_polo</a>.
    </p>

    <ul className="ps-6 my-2 list-disc">
      <li className="my-2 mb-2"><b>1999</b></li>

      Hard court bike polo was <strong>invented in Seattle</strong> in 2000. It is now a competitive sport with a global presence.

      <li className="my-2 mb-2"><b>2010</b></li>

      The boards on both courts have been built, maintained, and paid for by the polo club since 2010.

      <li className="my-2 mb-2"><b>2012</b></li>

      The city designated both tennis courts at Judkins Park for use for bike polo in 2012 following an 18-month pilot, <strong>we have continuously played at and maintained the courts in these 15 years! </strong>

      <li className="my-2 mb-2"><b>2020</b></li>

      Since COVID the polo club has worked with other community groups including Futsal, Street Hockey, and Roll Around Seatown, as part of the Judkins Park Council, a grassroots organization of regular user groups of the space.

      <li className="my-2 mb-2"><b>TODAY</b></li>
      The courts at Judkins are the polo club’s home and the only place in Seattle where we can play.

      As the courts have become open to permit and as the light rail opens we look to retain affordable access
    </ul>

    <div className="pb-5">
      <Image src={judkinsPoloHistory} alt="Judkins Park Bike Polo history community meeting poster timeline" />
    </div>

  </div>
  );
}
