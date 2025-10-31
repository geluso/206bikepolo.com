export default async function Champtionships() {
  return "TEST CODE";
}

/*
import fetchData, { formatEvent } from "../components/BikePoloCalendar";

export default async function Championships() {


  return "TEST CODE"
  const data = await fetchData();

  if (data) {
    const championshipKeywords: Array<string> = [
      "CHAMPIONSHIP",
      "AHC",
      "EHC",
      "NAHC",
      "WHBPC"
    ]
    const containsChampKeywords = (event: any) => {
      let title = event.title?.toUpperCase();
      for (let i = 0; i < championshipKeywords.length; i++) {
        if (title.includes(championshipKeywords[i])) {
          return true;
        }
      }
    }
    return (
      data.events.filter(containsChampKeywords).map((event: any) => {
        return formatEvent(event)
      })
    )

  } else {
    return "Could not fetch data from bikepolocalendar.com... :(";
  }
  */
}
