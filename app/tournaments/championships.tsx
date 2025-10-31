import { warnOptionHasBeenDeprecated } from "next/dist/server/config";
import fetchData, { formatEvent } from "../components/BikePoloCalendar";

export default async function Championships() {
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

    return "TEST CODE"
    return (
      data.events.filter(containsChampKeywords).map((event: any) => {
        return formatEvent(event)
      })
    )
  } else {
    return "Could not fetch data from bikepolocalendar.com... :(";
  }
}
