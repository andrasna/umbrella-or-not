import { LocationAutcomplete } from "../../ui/LocationAutocomplete/LocationAutocomplete";
import { WeatherPanel } from "../../ui/WeatherPanel/WeatherPanel";
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.container}>
      <LocationAutcomplete />
      <WeatherPanel />
    </div>
  )
}

export { Home }