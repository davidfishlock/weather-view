export type Location = { lat: number; lon: number; name: string; state?: string; country?: string }

export function getFullLocationName(location: Location): string {
  let output = location.name
  if (location.state) output += `, ${location.state}`
  if (location.country) output += `, ${location.country}`
  return output
}
