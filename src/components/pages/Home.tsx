import { LocationAutcomplete } from "../ui/LocationAutocomplete";
import { WeatherPanel } from "../ui/WeatherPanel";

function Home() {
  return (
    <>
      <LocationAutcomplete />
      <WeatherPanel />
    </>
  )
}

export { Home }