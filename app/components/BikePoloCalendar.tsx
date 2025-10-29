"use server"

export async function BikePoloCalendar() {
  const poloCalUrl = "https://bikepolocalendar.com/wp-json/tribe/events/v1/events"
  const data = await fetch(poloCalUrl)
    .then(res => res.json())

  const nearbyCities = [
    "Seattle",
    "Bellingham",
    "Portland",
    "Bainbridge",
    "Bremerton",
    "Vancouver",
  ]
  const noteworthyEventTitles = [
    "Emerald City Open",
    "Cascadia Qualifier",
    "Trolls",
    "WHBPC"
  ]
  const isLocalOrNoteworthy = (event: any) => {
    if (nearbyCities.includes(event.venue.city)) {
      return true
    }

    for (let i = 0; i < noteworthyEventTitles.length; i++) {
      const noteworthyEventTitle = noteworthyEventTitles[i]
      if (event.title.includes(noteworthyEventTitle)) {
        return true
      }
    }
    return false
  }
  return <div>
    <h4 className="my-2 text-lg font-bold">Noteworthy Tournaments on BikePoloCalender.com</h4>
    {data.events.filter(isLocalOrNoteworthy).map((event: any ) => {
      return <div key={event.id}>
        <div>
          {event.title} in {event.venue.city} <a href={event.url}>link</a>
        </div>
      </div>
    })}
  </div>
}
