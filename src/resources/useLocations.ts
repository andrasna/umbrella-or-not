import { useQuery } from "@tanstack/react-query"
import { getLocations } from "../endpoints/geocoding"
import type { Location } from "../types/location"

const getLocationsKey = "getLocationsKey"

export function useLocations(locationName: string) {
  return useQuery<Location[]>({
    queryKey: [getLocationsKey, locationName],
    queryFn: () => getLocations(locationName),
    enabled: locationName.length > 1,
  })
}