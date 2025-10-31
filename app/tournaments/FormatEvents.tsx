export default function FormatEvents(firstLine: string,link:string, ...args: string[]){
  const format = (detail:string) => <li>{detail}</li>

  return(
    <div>
      <li><a href={link} target="_blank">
        {firstLine} </a>
      </li>
        <ul className="ps-6 list-disc list-inside">
          {args.map((detail) => format(detail))}
        </ul>
    </div>
  )
}
