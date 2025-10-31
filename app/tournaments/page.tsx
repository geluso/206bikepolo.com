import NearbyEvents from "./NearbyEvents";
//import { Championships } from "./Championships";

function TestFunction() {
  return <div>TEST CODE</div>;
}

export default function Page() {
  return (
    <div className="mb-32">
      <h2 className="my-2 text-2xl font-extrabold">Tournaments</h2>
      <p>
        The bike polo tournaments around the world are listed here:
      </p>
      <ul className="mb-2 ps-6 list-disc list-inside">
        <li>
          <a href="https://bikepolocalendar.com/" target="_blank">
            https://bikepolocalendar.com/
          </a>
        </li>
      </ul>
      <p>
        There is also a map on these websites, but they aren{"'"}t that good or
        up to date tbh...
      </p>
      <ul className="ps-6 list-disc list-inside">
        <li><a href="https://www.nahardcourt.com/clubs/">
            https://www.nahardcourt.com/clubs/</a>
        </li>
        <li>
          <a href="whereispolo.com">whereispolo.com</a>
        </li>
      </ul>
      <h2 className="my-2 text-2xl font-extrabold">Upcoming Cascadia Tournaments  </h2>
      <p className="mb-2">
        **These events are actively pulled from bikepolocalendar.com
      </p>
      <NearbyEvents />
      <h2 className="my-2 text-2xl font-extrabold">Upcoming Championships </h2>
      <TestFunction />
      <h2 className="my-2 text-lg font-bold">Championships around the World </h2>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://bikepolocalendar.com/event/asianhbpc-2025" target="_blank">
              Asian Hardcourt Championships (AHC)
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>May</li>
            <li>Bangkok, Thailand in 2025</li>
          </ul>
        </li>
        <li>
          <a href="https://bikepolocalendar.com/event/ehbpc-2025" target="_blank">
             European Hardcourt Championships (EHC)
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>July</li>
            <li>Perpignan, France in 2025</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/nahbpc-2025"
            target="_blank"
          >
            North American Hardcourt Championships (NAHC)
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>August</li>
            <li>Grand Rapids, MI in 2025</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/whbpc-2025"
            target="_blank"
          >
            World Hardcourt Bike Polo Championships (WHBPC)
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>November</li>
            <li>Taipei, Taiwan in 2025</li>
        </ul>
        </li>
      </ul>

      <h2 className="my-2 text-2xl font-extrabold">Local</h2>
      <p className="mb-2">Common tournaments that Seattlites attend:</p>
      <p>
        <b>NOTE:</b> Sign up links are announced about 1-2 months before the
        event generally via Instagram of club (and seats fill up within a week)
      </p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://bikepolocalendar.com/event/valentines-2v2-mixer"
            target="_blank">
            Kiss to Make it Count 2v2
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>February</li>
            <li>Vancouver, BC</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/tropiclassic-2023"
            target="_blank"
          >
            Tropiclassic
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>February</li>
            <li>San Juan, Puerto Rico</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/rose-city-royal-rumble"
            target="_blank"
          >
            Rose City Royal Rumble
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>March/April</li>
            <li>Portland, OR</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/bike-polo-camp"
            target="_blank"
          >
            Bike Polo Camp
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>April</li>
            <li>Locations varies yearly in US</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/polo-retreat"
            target="_blank"
          >
            Polo Retreat
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>End of May</li>
            <li>Hedley, BC</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/jefferson-joust"
            target="_blank"
          >
            Jefferson Joust
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>June</li>
            <li>Ashland, OR</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/polo-trolls"
            target="_blank"
          >
            Polo Trolls
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>June</li>
            <li>Eugene, OR</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/battle-point"
            target="_blank"
          >
            Battle Point
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>July</li>
            <li>Bainbridge, WA</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/emerald-city-open"
            target="_blank"
          >
            Emerald City Open
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>Sometime near Summer</li>
            <li>Seattle, WA</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/no-fun-city-9"
            target="_blank"
          >
            No Fun City
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>September</li>
            <li>Vancouver, BC</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/soft-serve-swirl-iv"
            target="_blank"
          >
            Soft Serve Swirl
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>October</li>
            <li>Vancouver, BC</li>
          </ul>
        </li>
        <li>
          <a
            href="https://bikepolocalendar.com/event/bellingham-halloween-tournament"
            target="_blank"
          >
            Bellingham Halloween
          </a>
          <ul className="ps-6 list-disc list-inside">
            <li>October</li>
            <li>Bellingham, WA</li>
          </ul>
        </li>
      </ul>
      <strong>Seattle Bike Polo hosts</strong> several tournaments each year.
      Here are some from previous years:
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="/tournaments/2024-emerald-city-open-cascadia-triple-crown">
            2024 Emerald City Open: Cascadia Triple Crown
          </a>
        </li>
        <li>2024 Cascadia Qualifier</li>
      </ul>
      <h2 className="my-2 text-2xl font-extrabold">Nearby Clubs</h2>
      <p className="font-bold my-2">Washington</p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://www.instagram.com/kitsapbikepolo/" target="_blank">
            Kitsap
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bhambikepolo/" target="_blank">
            Bellingham
          </a>
        </li>
      </ul>
      <p className="font-bold my-2">Oregon</p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://www.instagram.com/portlandbikepolo/" target="_blank">
            Portland
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eugene_bikepolo/?hl=en"
            target="_blank"
          >
            Eugene
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/roguevalley.bikepolo/?hl=en"
            target="_blank"
          >
            Ashland
          </a>
        </li>
      </ul>
      <p className="font-bold my-2">Montana and Alaska</p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a
            href="https://www.instagram.com/missoula.bikepolo/"
            target="_blank"
          >
            Missoula, MT
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/anchoragesfinestbikepolo/?hl=en"
            target="_blank"
          >
            Anchorage, AK
          </a>
        </li>
      </ul>
      <p className="font-bold my-2">Canada</p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a
            href="https://www.instagram.com/eastvanbikepolo/?hl=en"
            target="_blank"
          >
            Vancouver, BC
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/victoriabikepolo/" target="_blank">
            Victoria, BC
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ferniebikepolo/" target="_blank">
            Fernie, BC
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nelsonbc_bikepolo" target="_blank">
            Nelson, BC
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/calgarybikepolo/" target="_blank">
            Calgary, AB
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/whitehorsebikepolo/"
            target="_blank"
          >
            White Horse, YT
          </a>
        </li>
      </ul>
      <p className="font-bold my-2">California</p>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://www.instagram.com/sf.bike.polo/" target="_blank">
            San Francisco
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/losangelesbikepolo/"
            target="_blank"
          >
            Los Angeles
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fresnobikepolo/" target="_blank">
            Fresno
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sanjosebikepolo/" target="_blank">
            San Jose
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sandiegobikepolo/" target="_blank">
            San Diego
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sacramento.bikepolo/" target="_blank">
            Sacramento
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/santacruzbikepolo/" target="_blank">
            Santa Cruz
          </a>
        </li>
      </ul>
      <h2 className="my-2 text-2xl font-extrabold">Popular US Clubs</h2>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://www.instagram.com/grbikepolo/" target="_blank">
            Grand Rapids, MI
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lexingtonbikepolo/"
            target="_blank"
          >
            Lexington, KT
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dcbikepolo/" target="_blank">
            Washington, D.C.
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/beehivebikepolo/" target="_blank">
            Salt Lake City, UT
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sf.bike.polo/?hl=en"
            target="_blank"
          >
            SF, CA
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/losangelesbikepolo/?hl=en"
            target="_blank"
          >
            LA, CA
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bostonbikepolo/?hl=en"
            target="_blank"
          >
            Boston, MA
          </a>
        </li>
        <li>
          <a href="http://www.nycbikepolo.com/" target="_blank">
            NYC, NY
          </a>
        </li>
      </ul>
      <h2 className="my-2 text-2xl font-extrabold">Popular Global Clubs</h2>
      <ul className="ps-6 my-2 list-disc list-inside">
        <li>
          <a href="https://www.instagram.com/montrealbikepolo/" target="_blank">
            Montréal, QC, CA
          </a>
        </li>
        <li>more to be added...</li>
      </ul>
      <h2 className="my-2 text-2xl font-extrabold">Links</h2>
      <ul className="ps-6 my-2 list-disc list-inside pb-5">
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Hardcourt_Bike_Polo"
            target="_blank"
          >
            Wikipedia page
          </a>{" "}
          on Hardcourt Bike Polo
        </li>
        <li>
          <a href="https://www.reddit.com/r/BIKEPOLO/" target="_blank">
            Reddit page
          </a>{" "}
          on Bike Polo
        </li>
      </ul>
    </div>
  );
}
