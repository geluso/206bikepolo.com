"use client"

import { useState } from "react"
import { createTag, setTournamentState } from "./actions"
import { RoyalRumbleTagSettings } from "@prisma/client"
import { saveCurrentTagSettings } from "../../util/getTags"

export function ManageTournamentState({ tags, currentTag, currentTagSettings }: { tags: RoyalRumbleTagSettings[], currentTag: string, currentTagSettings: RoyalRumbleTagSettings }) {
  const [newTag, setNewTag] = useState('')
  const [tag, setTag] = useState(currentTag)

  const [isRound1Up, setIsRound1Up] = useState(currentTagSettings.isRound1Up)
  const [isRound2Up, setIsRound2Up] = useState(currentTagSettings.isRound2Up)
  const [isRound3Up, setIsRound3Up] = useState(currentTagSettings.isRound3Up)
  const [isRound4Up, setIsRound4Up] = useState(currentTagSettings.isRound4Up)
  const [isRound5Up, setIsRound5Up] = useState(currentTagSettings.isRound5Up)
  const [isFinalTeamsUp, setIsFinalTeamsUp] = useState(currentTagSettings.isFinalTeamsUp)

  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')

  const handleLoadSelectedTag = async () => {
    setStatus('pending')
    console.log('clicked', tag)
    const isOk = await setTournamentState(tag)
    if (isOk) {
      setStatus('success')
      setMessage(`Site is now using tag: ${tag}`)
    } else {

      setStatus('error')
      setMessage(`Error loading tag ${tag}`)
    }
  }

  const handleSaveNavbarSettings = async () => {
    setStatus('pending')
    console.log('clicked', tag)
    const isOk = await saveCurrentTagSettings({ isRound1Up, isRound2Up, isRound3Up, isRound4Up, isRound5Up, isFinalTeamsUp })
    if (isOk) {
      setStatus('success')
      setMessage('Navbar settings saved.')
    } else {

      setStatus('error')
      setMessage('Error saving navbar settings.')
    }
  }

  const handleCreateNewTag = async () => {
    setStatus('pending')
    console.log('clicked', tag)
    const isOk = await createTag(newTag)
    if (isOk) {
      setStatus('success')
      setMessage(`Created new tag: ${newTag}`)
    } else {

      setStatus('error')
      setMessage(`Error creating tag: ${newTag}`)
    }
  }

  return <div>
    {status === 'success' && <p className="text-green-500">{message}</p>}
    {status === 'error' && <p className="text-red-500">{message}</p>}
    <div>
      <h4>Select Tag:</h4>
      <p>Switch between different versions of tournament tagged data (like which save file).</p>
      <select value={tag} onChange={(ev) => setTag(ev.currentTarget.value)}>
        {tags.map((tag) => {
          return <option key={tag.id} value={tag.tag}>{tag.tag}</option>
        })}
      </select>
    </div>

    <div>
      <p>
        <button onClick={handleLoadSelectedTag}>load selected tag</button>
      </p>
    </div>

    <hr />

    <h4>Navbar Settings</h4>

    <p>
      Round 1
      <label>
        <input type="radio" name="round1Status" checked={isRound1Up} onChange={() => setIsRound1Up(true)} /> Enabled
      </label>

      <label>
        <input type="radio" name="round1Status" checked={!isRound1Up} onChange={() => setIsRound1Up(false)} /> Disabled
      </label>
    </p>

    <p>
      Round 2
      <label>
        <input type="radio" name="round2Status" checked={isRound2Up} onChange={() => setIsRound2Up(true)} /> Enabled
      </label>

      <label>
        <input type="radio" name="round2Status" checked={!isRound2Up} onChange={() => setIsRound2Up(false)} /> Disabled
      </label>
    </p>

    <p>
      Round 3
      <label>
        <input type="radio" name="round3Status" checked={isRound3Up} onChange={() => setIsRound3Up(true)} /> Enabled
      </label>

      <label>
        <input type="radio" name="round3Status" checked={!isRound3Up} onChange={() => setIsRound3Up(false)} /> Disabled
      </label>
    </p>

    <p>
      Round 4
      <label>
        <input type="radio" name="round4Status" checked={isRound4Up} onChange={() => setIsRound4Up(true)} /> Enabled
      </label>

      <label>
        <input type="radio" name="round4Status" checked={!isRound4Up} onChange={() => setIsRound4Up(false)} /> Disabled
      </label>
    </p>

    <p>
      Round 5
      <label>
        <input type="radio" name="round5Status" checked={isRound5Up} onChange={() => setIsRound5Up(true)} /> Enabled
      </label>

      <label>
        <input type="radio" name="round5Status" checked={!isRound5Up} onChange={() => setIsRound5Up(false)} /> Disabled
      </label>
    </p>

    <p>
      Final Teams
      <label>
        <input type="radio" name="finalStatus" checked={isFinalTeamsUp} onChange={() => setIsFinalTeamsUp(true)} /> Enabled
      </label>

      <label>
        <input type="radio" name="finalStatus" checked={!isFinalTeamsUp} onChange={() => setIsFinalTeamsUp(false)} /> Disabled
      </label>
    </p>

    <div>
      <p>
        <button onClick={handleSaveNavbarSettings}>save navbar settings</button>
      </p>
    </div>

    <hr />

    <h4>Create New Tag</h4>
    <p>
      <input value={newTag} onChange={(ev) => setNewTag(ev.currentTarget.value) }/>
    </p>
    <p>
      <button onClick={handleCreateNewTag}>create new tag</button>
    </p>
  </div>
}