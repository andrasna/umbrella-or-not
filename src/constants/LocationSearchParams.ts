const LocationSearchParams = {
  Location: "location",
  Latitude: "latitude",
  Longitude: "longitude",
} as const;

type LocationSearchParam =
  typeof LocationSearchParams[keyof typeof LocationSearchParams];

export { LocationSearchParams }
export { type LocationSearchParam }