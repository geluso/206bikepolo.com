export default function FormatEvents(firstLine: string, link: string, ...args: string[]) {
  const format = (detail: string) => <li>{detail}</li>

  return(
    <div>
      <li><a href={link} target="_blank">
        {firstLine} </a>
      </li>
        <ul className={(args.length) ? "mb-2" : ""}>
          {args.map((detail) => format(detail))}
        </ul>
    </div>
  )
}
