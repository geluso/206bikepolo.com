import fetchData, { formatEvent } from "./../components/BikePoloCalendar";

export default async function Championships() {

  const data = await fetchData();

  if (data) {
    const championships: Array<string> = [
      "Championships",
      "AHC",
      "EHC",
      "NAHC",
      "WHBPC"
    ]

    const containsChampKeywords = (event: any) => {
      let title = event.title;
      for (let i = 0; i < championships.length; i++) {
        if (title.includes(championships[i])) {
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
}
