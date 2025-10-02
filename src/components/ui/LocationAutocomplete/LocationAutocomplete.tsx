import { useState } from "react"
import { useSearchParams } from "react-router"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import type { Location } from "../../../types/location"
import { useLocations } from "../../../resources/useLocations"
import { LocationSearchParams } from "../../../constants/LocationSearchParams"
import styles from "./LocationAutocomplete.module.css"

function OptionListItem({
  optionProps,
  option,
}: {
  optionProps: React.HTMLAttributes<HTMLLIElement>,
  option: Location
}) {
  return (
    <li {...optionProps}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          {option.name}
          {option.country_code ? `, ${option.country_code}` : ""}
        </span>
        <span style={{ fontSize: '.84rem', opacity: 0.8 }}>
          {(option.admin1 || option.country) ?? ""}
        </span>
      </div>
    </li>
  )
}

function LocationAutcomplete() {
  const [searchParams, setSearchParams] = useSearchParams()
  const locationParam = searchParams.get(LocationSearchParams.Location) ?? ""
  const [inputValue, setInputValue] = useState(locationParam)

  const { data: locations = [], isLoading } = useLocations(inputValue)

  return (
    <div className={styles.container}>
      <Autocomplete
        size="small"
        options={locations}
        loading={isLoading}
        inputValue={inputValue}
        onInputChange={(_, inputValue, reason) => {
          if (reason === "input") setInputValue(inputValue)
        }}
        filterOptions={(x) => x}
        getOptionLabel={(option: Location) => option.name}
        onChange={(_, inputValue) => {
          if (inputValue) {
            setSearchParams({
              [LocationSearchParams.Location]: inputValue.name,
              [LocationSearchParams.Latitude]: String(inputValue.latitude),
              [LocationSearchParams.Longitude]: String(inputValue.longitude),
            },
              { replace: true }
            )
            setInputValue(inputValue.name)
          }
        }}
        renderOption={(liProps, option) => {
          const { key, ...optionProps } = liProps;
          return <OptionListItem key={option.id} {...{ optionProps, option }} />
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Location"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          />
        )}
      />
    </div>
  )
}

export { LocationAutcomplete }