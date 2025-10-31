import  fetchData, { formatEvent } from "./fetch-events";

export default async function CascadiaEvents() {

  const fetchedData = await fetchData()

  if (fetchedData) {
    const nearbyCities: Array<string> =
      ["seattle",
        "bellingham",
        "bainbridge",
        "vancouver",
        "portland",
        "east vancouver",
        "hedley"];
    let event = []

    for (let i = 0; i < fetchedData.events.length; i++){
      const city = fetchedData.events[i].venue.city?.toLowerCase()

      if (nearbyCities.includes(city)) {
        event.push(formatEvent(fetchedData, i));
      }
    }
    return event

  } else {
    return "Could not fetch data from bikepolocalendar.com... :(";
  }



}
