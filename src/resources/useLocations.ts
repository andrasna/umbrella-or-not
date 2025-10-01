import { useQuery } from "@tanstack/react-query"
import { getLocations } from "../endpoints/geocoding"
import type { Location } from "../types/location"

const locationsQueryKey = "locationsQueryKey"

export function useLocations(locationName: string) {
  return useQuery<Location[]>({
    queryKey: [locationsQueryKey, locationName],
    queryFn: () => getLocations(locationName),
    enabled: locationName.length > 1,
  })
}