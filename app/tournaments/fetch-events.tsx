export default async function fetchData() {
  const url = "https://bikepolocalendar.com/wp-json/tribe/events/v1/events"

    try {
      const response = await fetch(url);
      const result = await response.json();
      return result

    } catch (error) {
      return null
    }
};

export function formatEvent(event: any, index: number) {
  let fetchedData = event;

  const startDate = new Date(Date.parse(fetchedData.events[index].start_date));
  const endDate = new Date(Date.parse(fetchedData.events[index].end_date));
  //const startDate = new Date(Date.parse("1970-01-01T00:00:00Z"))
  const startDateFormatted = new Intl.DateTimeFormat("en-US", {month: "short", day: "numeric"}).format(startDate);
  let endDateFormatted;
  if (startDate.getMonth() == endDate.getMonth()) {
    endDateFormatted = endDate.getDate() + ", " + endDate.getFullYear();
  } else {
    endDateFormatted = new Intl.DateTimeFormat("en-US", {month: "short", day: "numeric", year: "numeric" }).format(endDate);
  }

  return (
    <ul className="ps-6 list-disc list-inside">
      <li><a href={fetchedData.events[index].url}>{fetchedData.events[index].title}</a>.**</li>
      <ul className="ps-6 list-disc list-inside">
        <li>{startDateFormatted}-{endDateFormatted}</li>
        <li>{fetchedData.events[index].venue.city}, {fetchedData.events[index].venue.state}</li>
      </ul>
    </ul>
  );
}
