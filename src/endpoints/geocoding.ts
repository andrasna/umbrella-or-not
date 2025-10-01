import axios from "axios"
import type { Location } from "../types/location"

export async function searchLocations(name: string, count = 5): Promise<Location[]> {
  if (!name) return []
  const { data } = await axios.get(`${import.meta.env.VITE_GEO_BASE_URL}/search`, {
    params: { name, count },
    timeout: 10000,
  })
  return data?.results ?? []
}