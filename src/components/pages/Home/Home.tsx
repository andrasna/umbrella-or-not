import { LocationAutcomplete } from "../../ui/LocationAutocomplete/LocationAutocomplete";
import { WeatherChartWidget } from "../../ui/WeatherChartWidget/WeatherChartWidget";
import { WeatherForecastWidget } from "../../ui/WeatherForecastWidget/WeatherForecastWidget";
import { WeatherWidget } from "../../ui/WeatherWidget/WeatherWidget";
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.container}>
      <LocationAutcomplete />
      <WeatherWidget />
      <WeatherForecastWidget />
      <WeatherChartWidget />
    </div>
  )
}

export { Home }