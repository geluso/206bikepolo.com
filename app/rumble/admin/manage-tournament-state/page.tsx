export const revalidate = 0;

import { ManageTournamentState } from "./ManageTournamentState";
import getTags, { getCurrentTagSettings } from "../../util/getTags";
import getCurrentTag from "../../util/getCurrentTag";

export default async function Page() {
  const tags = await getTags()
  const currentTag = await getCurrentTag()
  const currentTagSettings = await getCurrentTagSettings()
  return <div>
    <h3>Manage Tournament State</h3>
    <ManageTournamentState tags={tags} currentTag={currentTag} currentTagSettings={currentTagSettings} />
  </div>
}