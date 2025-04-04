"use client"

import { useState } from "react"
import { setTournamentState } from "./actions"

export function ManageTournamentState({ tags, currentTag, currentSeries, currentRound }: { tags: string[], currentTag: string, currentSeries: string, currentRound: number }) {
  const [tag, setTag] = useState(currentTag)
  const [series, setSeries] = useState(currentSeries)
  const [round, setRound] = useState(currentRound)

  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    setStatus('pending')
    console.log('clicked', tag, series, round)
    const isOk = await setTournamentState(tag, series, round)
    if (isOk) {
      setStatus('success')
      setMessage('Saved!')
    } else {

      setStatus('error')
      setMessage('Error :(')
    }
  }

  return <div>
    <h1>Manage Tournament State</h1>

    <div>
      <p>
        Select Tag:
      </p>
      <select value={tag} onChange={(ev) => setTag(ev.currentTarget.value)}>
        {tags.map(tag => {
          return <option key={tag} value={tag}>{tag}</option>
        })}
      </select>
    </div>

    <div>
      <p>
        Select Series:
      </p>
      <select value={series} onChange={(ev) => setSeries(ev.currentTarget.value)}>
        <option value={"day1"}>Day 1</option>
        <option value={"day2"}>Day 2</option>
        <option value={"finals"}>Finals</option>
      </select>
    </div>

    <div>
      <p>
        Select Round:
      </p>
      <select value={round} onChange={(ev) => setRound(parseInt(ev.currentTarget.value))}>
        <option value={1}>Round 1</option>
        <option value={2}>Round 2</option>
        <option value={3}>Round 3</option>
        <option value={4}>Round 4</option>
        <option value={5}>Round 5</option>
      </select>
    </div>

    <div>
      <p>
        <button onClick={handleClick}>save</button>
      </p>
    </div>

    {status === 'success' && <p className="text-green-500">{message}</p>}
    {status === 'error' && <p className="text-red-500">{message}</p>}
  </div>
}