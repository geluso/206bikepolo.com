"use client"

export function ManageTournamentState({ tags }: { tags: string[] }) {
  return <div>
    <h1>Manage Tournament State</h1>

    <div>
      <p>
        Select Tag:
      </p>
      <select>
        {tags.map(tag => {
          return <option key={tag}>{tag}</option>
        })}
      </select>
    </div>

    <div>
      <p>
        Select Series:
      </p>
      <select>
          <option>Day 1</option>
          <option>Day 2</option>
          <option>Final Bracket</option>
      </select>
    </div>

    <div>
      <p>
        Select Round:
      </p>
      <select>
          <option>Round 1</option>
          <option>Round 2</option>
          <option>Round 3</option>
          <option>Round 4</option>
          <option>Round 5</option>
      </select>
    </div>

    <div>
      <p>
        <button>save</button>
      </p>
    </div>
  </div>
}