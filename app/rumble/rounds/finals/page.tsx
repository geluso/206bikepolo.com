import PublicRoundView from "../PublicRoundView";

export const revalidate = 0;

export default async function Page() {
  return <PublicRoundView displayName="Final Teams" series="finals" />
}