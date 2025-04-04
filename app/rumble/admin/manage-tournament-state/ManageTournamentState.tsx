"use client"

import { useState } from "react"
import { resetDefaultTournamentState, setTournamentState } from "./actions"

export function ManageTournamentState({ tags, currentTag, currentSeries }: { tags: string[], currentTag: string, currentSeries: string }) {
  const [tag, setTag] = useState(currentTag)
  const [series, setSeries] = useState(currentSeries)

  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')

  const handleClick = async () => {
    setStatus('pending')
    console.log('clicked', tag, series)
    const isOk = await setTournamentState(tag, series)
    if (isOk) {
      setStatus('success')
      setMessage('Saved!')
    } else {

      setStatus('error')
      setMessage('Error :(')
    }
  }

  const handleReset = async () => {
    setStatus('pending')
    console.log('clicked', tag, series)
    const isOk = await resetDefaultTournamentState()
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
        {tags.map((tagOption) => {
          return <option key={tagOption} value={tagOption}>{tagOption}</option>
        })}
      </select>
    </div>

    <div>
      <p>
        Select Series:
      </p>
      <select value={series} onChange={(ev) => setSeries(ev.currentTarget.value)}>
        <option value={'round1'}>Round 1</option>
        <option value={'round2'}>Round 2</option>
        <option value={'round3'}>Round 3</option>
        <option value={'round4'}>Round 4</option>
        <option value={'round5'}>Round 5</option>
        <option value={'finals'}>Finals</option>
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