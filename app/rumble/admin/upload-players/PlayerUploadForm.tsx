"use client"

import { useState } from "react";

export function PlayerUploadForm() {
  const [status, setStatus] = useState('pending')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setStatus('pending')
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/rumble/upload-players', {
      method: 'POST',
      body: formData,
    });
    const json = await response.json()
    console.log({ response, json })
    if (response.ok) {
      setStatus('success')
      setMessage(json.message)
    } else {
      setStatus('error')
      setMessage(json.error)
    }
  }

  return <div>
    <h2>Create New Player Set</h2>
    <p>
      Using a unique version tag allows us to swap datasets in the app non
      destructively, like "trial-test-friday-evening."
    </p>

    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <p>
        Version tag: <input type="text" name="tag" defaultValue={"hotdog" + Math.floor(Math.random() * 1000)} />
      </p>
      <p>
        <input type="file" id="file" name="file" required />
      </p>
      <p>
        <button type="submit">Upload</button>
      </p>
    </form>

    {status === 'success' && <p className="text-green-500">{message}</p>}
    {status === 'error' && <p className="text-red-500">{message}</p>}
  </div>
}