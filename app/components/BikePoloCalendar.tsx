export default async function fetchData() {
  const poloCalUrl = "https://bikepolocalendar.com/wp-json/tribe/events/v1/events"
  const data = await fetch(poloCalUrl)
    .then(res => res.json())
    .catch(err => { return null })
  return data
};

function formatDate(event: any) {
  let date;
  let endDateFormatted;

  const startDate = new Date(Date.parse(event.start_date));
  const endDate = new Date(Date.parse(event.end_date));

  //const startDate = new Date(Date.parse("1970-01-01T00:00:00Z"))
  const startDateFormatted = new Intl.DateTimeFormat("en-US",  {month: "short", day: "numeric"}).format(startDate);

  if (startDate.getMonth() == endDate.getMonth()) {
    endDateFormatted = [endDate.getDate(), endDate.getFullYear()].join(", ");
    date = [startDateFormatted, endDateFormatted].join("-")
  } else {
    endDateFormatted = new Intl.DateTimeFormat("en-US", {month: "short", day: "numeric", year: "numeric" }).format(endDate);
    date = [startDateFormatted, endDateFormatted].join(" - ")
  }

  return date
}

export function formatEvent(event: any) {
  const date = formatDate(event)
  console.log(event.venue.city)
   return (
    <ul className="ps-6 list-disc list-inside">
      <li><a href={event.url}>{event.title}</a>.**</li>
      <ul className="ps-6 list-disc list-inside">
        {/*<li>{date}</li>*/}
        <li>{event.venue.city}, {event.venue.state}</li>
      </ul>
    </ul>
  );
}
