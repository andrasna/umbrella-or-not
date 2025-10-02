import { LocationAutcomplete } from "../../ui/LocationAutocomplete/LocationAutocomplete";
import { WeatherWidget } from "../../ui/WeatherWidget/WeatherWidget";
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.container}>
      <LocationAutcomplete />
      <WeatherWidget />
    </div>
  )
}

export { Home }