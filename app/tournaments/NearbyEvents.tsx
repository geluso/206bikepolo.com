import  fetchData, { formatEvent } from "../components/BikePoloCalendar";

export default async function NearbyEvents() {
  const data = await fetchData()

  if (data) {

    const nearbyCities: Array<string> =
      ["seattle",
        "bellingham",
        "bainbridge",
        "vancouver",
        "portland",
        "east vancouver",
        "hedley"];

    const isNearby = (event: any) => {
      let city = event.venue.city?.toLowerCase()
      if (nearbyCities.includes(city)) {
        return true
      }
    }

    return (
      data.events.filter(isNearby).map((event: any) => {
          return formatEvent(event)
        })
    )
  } else {
      return "Could not fetch data from bikepolocalendar.com... :(";
  }
}
