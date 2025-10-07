import Image from "next/image";

import judkinsPoloHistory from '../../public/img/judkins_polo_history.jpg'

export default function Page() {
  return <div className="mb-10">
    <h2 className=" my-2 text-2xl font-extrabold">206 Bike Polo History</h2>
    <p className="mb-2">
      Some 206 Bike Polo history, and good talking points 
      if you ever find yourself at a community meeting.
    </p>

      Hard court bike polo was <strong>invented in Seattle</strong> in 2000. It is now a competitive sport with a global presence.

      The boards on both courts have been built, maintained, and paid for by the polo club since 2010.

      <p className="mt-2">
      The city designated both tennis courts at Judkins Park for use for bike polo in 2012 following an 18-month pilot, <strong>we have continuously played at and maintained the courts in these 15 years! </strong>

      Since COVID the polo club has worked with other community groups including Futsal, Street Hockey, and Roll Around Seatown, as part of the Judkins Park Council, a grassroots organization of regular user groups of the space.
      </p>
      <p className="mt-2">
      The courts at Judkins are the polo club’s home and the only place in Seattle where we can play.

      As the courts have become open to permit and as the light rail opens we look to retain affordable access
      </p> 
    <div>
      <Image src={judkinsPoloHistory} alt="Judkins Park Bike Polo history community meeting poster timeline" />
    </div>

    <h2 className="my-2 text-2xl font-extrabold">Other Clubs</h2>
    <p className="pb-5">
      See <a href="/tournaments" className="text-blue-500">Tournaments page</a> for links to other clubs.
    </p>

  </div>
}