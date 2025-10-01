import { useQuery } from "@tanstack/react-query"
import { searchLocations } from "../endpoints/geocoding"
import type { Location } from "../types/location"

const searchLocationsKey = "searchLocationsKey"

export function useLocations(locationName: string) {
  return useQuery<Location[]>({
    queryKey: [searchLocationsKey, locationName],
    queryFn: () => searchLocations(locationName),
    enabled: locationName.length > 1,
  })
}