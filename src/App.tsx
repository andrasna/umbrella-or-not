import { useQuery } from "@tanstack/react-query"

async function getLocation() {
  const res = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Budapest")
  if (!res.ok) throw new Error("Failed request")
  return res.json()
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