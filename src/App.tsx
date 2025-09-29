import { useQuery } from "@tanstack/react-query"
import axios from "axios"

async function getLocation() {
  const res = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
    params: { name: "Budapest" },
  })
  return res.data
}

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getLocation"],
    queryFn: getLocation,
  })

  console.log("data:", data)

  if (isLoading) return <p>Loading…</p>
  if (error) return <p>Error: {(error as Error).message}</p>

  return <>Searching...</>
}

export default App