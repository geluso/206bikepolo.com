import { warnOptionHasBeenDeprecated } from "next/dist/server/config";
import fetchData, { formatEvent } from "./fetch-events";

export default async function Championships() {

  const fetchedData = await fetchData();

  if (fetchedData) {
    const championships: Array<string> = [
      "Championships",
      "AHC",
      "EHC",
      "NAHC",
      "WHBPC"
    ]
    let event = [];

    for (let i = 0; i < fetchedData.events.length; i++) {
      for (let j = 0; j < championships.length; j++){
        if (fetchedData.events[i].title.includes(championships[j])) {
          event.push(formatEvent(fetchedData, i));
        }
      }
    }
    return event;

  } else {
      return "Could not fetch data from bikepolocalendar.com... :(";
  }
}
