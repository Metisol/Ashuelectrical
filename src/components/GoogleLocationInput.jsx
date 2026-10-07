import { useEffect, useRef, useState } from 'react'

let placesLibraryPromise

function loadPlacesLibrary(apiKey) {
  if (window.google?.maps?.importLibrary) {
    return window.google.maps.importLibrary('places')
  }

  if (!placesLibraryPromise) {
    placesLibraryPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async`
      script.async = true
      script.onload = () => window.google.maps.importLibrary('places').then(resolve, reject)
      script.onerror = () => reject(new Error('Google Maps could not be loaded.'))
      document.head.append(script)
    }).catch((error) => {
      placesLibraryPromise = undefined
      throw error
    })
  }

  return placesLibraryPromise
}

export default function GoogleLocationInput({ name = 'location', required = true, placeholder = 'Start typing a project location' }) {
  const [location, setLocation] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [status, setStatus] = useState('')
  const skipNextSearch = useRef(false)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  useEffect(() => {
    if (!apiKey) return undefined

    let cancelled = false
    let timer

    if (location.trim().length < 3 || skipNextSearch.current) {
      skipNextSearch.current = false
      return undefined
    }

    timer = window.setTimeout(async () => {
      try {
        const { AutocompleteSuggestion } = await loadPlacesLibrary(apiKey)
        if (cancelled) return
        const { suggestions: results } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({ input: location.trim() })
        if (!cancelled) {
          setSuggestions(results.filter((suggestion) => suggestion.placePrediction).slice(0, 5))
          setStatus('')
        }
      } catch (error) {
        if (!cancelled) {
          setSuggestions([])
          setStatus(error instanceof Error ? error.message : 'Google Maps suggestions are unavailable. You can enter the location manually.')
        }
      }
    }, 250)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [apiKey, location])

  async function selectSuggestion(prediction) {
    try {
      const place = prediction.toPlace()
      await place.fetchFields({ fields: ['formattedAddress'] })
      skipNextSearch.current = true
      setLocation(place.formattedAddress || prediction.text.toString())
      setSuggestions([])
      setStatus('')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'We could not select that location. Please enter it manually.')
    }
  }

  return (
    <div className="relative">
      <input
        name={name}
        type="text"
        value={location}
        required={required}
        maxLength={300}
        autoComplete="off"
        placeholder={placeholder}
        onChange={(event) => {
          skipNextSearch.current = false
          setLocation(event.target.value)
          setStatus('')
          if (event.target.value.trim().length < 3) setSuggestions([])
        }}
        onBlur={() => window.setTimeout(() => setSuggestions([]), 150)}
        className="w-full rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]"
        aria-autocomplete="list"
        aria-expanded={suggestions.length > 0}
      />
      {suggestions.length > 0 && (
        <ul role="listbox" className="absolute z-20 mt-1 w-full overflow-hidden rounded-xl border border-[#ebd7d7] bg-white shadow-lg">
          {suggestions.map(({ placePrediction }) => (
            <li key={placePrediction.placeId} role="option" aria-selected="false">
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectSuggestion(placePrediction)}
                className="w-full px-4 py-3 text-left text-sm text-[#6b0000] hover:bg-[#fff7f7]"
              >
                {placePrediction.text.toString()}
              </button>
            </li>
          ))}
        </ul>
      )}
      {status && (
        <p className="mt-2 text-xs leading-5 text-[#7b0000]" role="status">
          {status}
        </p>
      )}
    </div>
  )
}
