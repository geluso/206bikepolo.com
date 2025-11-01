import NearbyEvents from "./NearbyEvents";
import Championships from "./ChampionshipEvents";
import FormatEvents from "./FormatEvents";

function Header() {
  return (
    <div>
      <h2>Tournaments</h2>

      <p>The bike polo tournaments around the world are listed here:</p>
      <ul>
        <li><a href="https://bikepolocalendar.com/" target="_blank">
          https://bikepolocalendar.com/</a></li>
      </ul>
      <p>There is also a map on these websites, but they aren{"'"}t that good or
        up to date tbh...</p>
      <ul>
        <li><a href="https://www.nahardcourt.com/clubs/"  target="_blank">
          https://www.nahardcourt.com/clubs/</a></li>
        <li><a href="whereispolo.com"  target="_blank">
          whereispolo.com</a></li>
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div className="page">
      <Header />

      <h2>Upcoming Nearby Tournaments  </h2>

      <p>**These events are actively pulled from bikepolocalendar.com</p>
      <NearbyEvents />
      <h2>Upcoming Championships </h2>
      <Championships />
      <h2>Championships around the World </h2>

      <ul>
        {FormatEvents(
          "Asian Hardcourt Championships (AHC)",
          "https://bikepolocalendar.com/event/asianhbpc-2025",
          "May",
          "Bangkok, Thailand in 2025"
        )}
        {FormatEvents(
          "European Hardcourt Championships (EHC)",
          "https://bikepolocalendar.com/event/ehbpc-2025",
          "July",
          "Perpignan, France in 2025"
        )}
        {FormatEvents(
          "North American Hardcourt Championships (NAHC)",
          "https://bikepolocalendar.com/event/nahbpc-2025",
          "August",
          "Grand Rapids, MI in 2025"
        )}
        {FormatEvents(
          "World Hardcourt Championships (WHC)",
          "https://bikepolocalendar.com/event/whbpc-2025",
          "November",
          "Taipei, Taiwan in 2025"
        )}
      </ul>

      <h2>Local</h2>

      <p>Common tournaments that Seattlites attend:</p>
      <p><b>NOTE:</b> Sign up links are announced about 1-2 months before the
        event generally via Instagram of club (and seats fill up within a week)</p>
      <ul>

        {FormatEvents(
          "Kiss to Make it Count 2v2",
          "https://bikepolocalendar.com/event/valentines-2v2-mixer",
          "February",
          "Vancouver, BC"
        )}
        <li><a href="https://bikepolocalendar.com/event/tropiclassic-2023" target="_blank">
            Tropiclassic</a></li>
        <ul>
          <li>February</li>
          <li>San Juan, Puerto Rico</li>
        </ul>
        {FormatEvents(
          "Rose City Royal Rumble",
          "https://bikepolocalendar.com/event/rose-city-royal-rumble",
          "March/April",
          "Portland, OR"
        )}
        {FormatEvents(
          "Bike Polo Camp",
          "https://bikepolocalendar.com/event/bike-polo-camp",
          "April",
          "Locations varies yearly in US"
        )}
        {FormatEvents(
          "Polo Retreat",
          "https://bikepolocalendar.com/event/polo-retreat",
          "End of May",
          "Hedley, BC"
        )}
        {FormatEvents(
          "Jefferson Joust",
          "https://bikepolocalendar.com/event/jefferson-joust",
          "June",
          "Ashland, OR"
        )}
        {FormatEvents(
          "Polo Trolls",
          "https://bikepolocalendar.com/event/polo-trolls",
          "June",
          "Eugene, OR"
        )}
        {FormatEvents(
          "Battle Point",
          "https://bikepolocalendar.com/event/battle-point",
          "July",
          "Bainbridge, WA"
        )}
        {FormatEvents(
          "Emerald City Open",
          "https://bikepolocalendar.com/event/emerald-city-open",
          "Sometime near Summer",
          "Seattle, WA"
        )}
        {FormatEvents(
          "No Fun City",
          "https://bikepolocalendar.com/event/no-fun-city-9",
          "September",
          "Vancouver, BC"
        )}
        {FormatEvents(
          "Soft Serve Swirl",
          "https://bikepolocalendar.com/event/soft-serve-swirl-iv",
          "October",
          "Vancouver, BC"
        )}
        {FormatEvents(
          "Bellingham Halloween",
          "https://bikepolocalendar.com/event/bellingham-halloween-tournament",
          "October",
          "Bellingham, WA"
        )}
      </ul>

      <p className="mb-2"><strong>Seattle Bike Polo hosts</strong> several tournaments each year.
      Here are some from previous years:</p>

      <ul>
        {FormatEvents(
          "2024 Emerald City Open: Cascadia Triple Crown",
          "/tournaments/2024-emerald-city-open-cascadia-triple-crown",
        )}

        {FormatEvents(
        "2024 Cascadia Qualifier",
        "/tournaments/2024-cascadia-qualifier",
        )}
      </ul>

      <h2>Nearby Clubs</h2>
      <h4>Washington</h4>

      <ul>
        {FormatEvents(
          "Kitsap",
          "https://www.instagram.com/kitsapbikepolo/"
        )}
        {FormatEvents(
          "Bellingham",
          "https://www.instagram.com/bhambikepolo/"
        )}
      </ul>

      <h4>Oregon</h4>

      <ul>
        {FormatEvents(
          "Portland",
          "https://www.instagram.com/portlandbikepolo/"
        )}
        {FormatEvents(
          "Eugene",
          "https://www.instagram.com/eugene_bikepolo/"
        )}
        {FormatEvents(
          "Ashland",
          "https://www.instagram.com/roguevalley.bikepolo/"
        )}
      </ul>

      <h4>Montana and Alaska</h4>

      <ul>
        {FormatEvents(
          "Missoula",
          "https://www.instagram.com/missoula.bikepolo/"
        )}
        {FormatEvents(
          "Anchorage",
          "https://www.instagram.com/anchoragesfinestbikepolo/"
        )}
      </ul>

      <h4>Canada</h4>

      <ul>
        {FormatEvents("Vancouver",
          "https://www.instagram.com/eastvanbikepolo/?hl=en")}
        {FormatEvents("Victoria",
          "https://www.instagram.com/victoriabikepolo/")}
        {FormatEvents("Fernie",
          "https://www.instagram.com/ferniebikepolo/")}
        {FormatEvents("Nelson",
          "https://www.instagram.com/nelsonbc_bikepolo")}
        {FormatEvents("Calgary",
          "https://www.instagram.com/calgarybikepolo/")}
        {FormatEvents("Whitehorse",
          "https://www.instagram.com/whitehorsebikepolo/")}

      </ul>
      <h4>Canada</h4>
      <ul>
        {FormatEvents("Vancouver",
          "https://www.instagram.com/eastvanbikepolo/?hl=en")}
        {FormatEvents("Victoria",
          "https://www.instagram.com/victoriabikepolo/")}
        {FormatEvents("Fernie",
          "https://www.instagram.com/ferniebikepolo/")}
        {FormatEvents("Nelson",
          "https://www.instagram.com/nelsonbc_bikepolo")}
        {FormatEvents("Calgary",
          "https://www.instagram.com/calgarybikepolo/")}
        {FormatEvents("White Horse",
          "https://www.instagram.com/whitehorsebikepolo/")}
      </ul>

      <h4>California</h4>

      <ul>
        {FormatEvents("San Francisco",
          "https://www.instagram.com/sf.bike.polo/")}
        {FormatEvents("Los Angeles",
          "https://www.instagram.com/losangelesbikepolo/")}
        {FormatEvents("Fresno",
          "https://www.instagram.com/fresnobikepolo/")}
        {FormatEvents("San Jose",
          "https://www.instagram.com/sanjosebikepolo/")}
        {FormatEvents("San Diego",
          "https://www.instagram.com/sandiegobikepolo/")}
        {FormatEvents("Sacramento",
          "https://www.facebook.com/sacramento.bikepolo/")}
        {FormatEvents("Santa Cruz",
          "https://www.instagram.com/santacruzbikepolo/")}
      </ul>

      <h2>Popular US Clubs</h2>

      <ul>
        {FormatEvents("San Jose",
          "https://www.instagram.com/sanjosebikepolo/")}
        {FormatEvents("San Diego",
          "https://www.instagram.com/sandiegobikepolo/")}
        {FormatEvents("Sacramento",
          "https://www.facebook.com/sacramento.bikepolo/")}
        {FormatEvents("Santa Cruz",
          "https://www.instagram.com/santacruzbikepolo/")}
      </ul>

      <h2>Popular US Clubs</h2>

      <ul>
        {FormatEvents("Grand Rapids",
          "https://www.instagram.com/grbikepolo/")}
        {FormatEvents("Lexington",
          "https://www.instagram.com/lexingtonbikepolo/")}
        {FormatEvents("Washington, D.C.",
          "https://www.instagram.com/dcbikepolo/")}
        {FormatEvents("Salt Lake City",
          "https://www.instagram.com/beehivebikepolo/")}
        {FormatEvents("San Francisco",
          "https://www.instagram.com/sf.bike.polo/")}
        {FormatEvents("Los Angeles",
          "https://www.instagram.com/losangelesbikepolo/")}
        {FormatEvents("Boston",
          "https://www.instagram.com/bostonbikepolo/")}
        {FormatEvents("New York City",
          "https://www.instagram.com/nycbikepolo/")}
      </ul>

      <h2>Popular Global Clubs</h2>

      <ul>
        {FormatEvents("Montreal, QC, CA",
          "https://www.instagram.com/montrealbikepolo/")}
        <li>more to be added...</li>
      </ul>

      <h2>Links</h2>

      <ul className="ps-6 my-2 list-disc list-inside pb-5">
        <li><a href="https://en.wikipedia.org/wiki/Hardcourt_Bike_Polo" target="_blank">
            Wikipedia page</a>{" "}
          on Hardcourt Bike Polo</li>
        <li><a href="https://www.reddit.com/r/BIKEPOLO/" target="_blank">
            Reddit page</a>{" "}
          on Bike Polo</li>
      </ul>

    </div>
  );
}
