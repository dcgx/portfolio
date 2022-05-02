import { useState, useEffect } from 'react'

const useFetch = (endpoint) => {
  const [fetching, setFetching] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!endpoint) return

    const fetchData = async () => {
      setFetching(true)

      const response = await fetch(endpoint)
      const data = await response.json()

      setData(data)
      setFetching(false)
    }

    fetchData()
  }, [endpoint])
  return { fetching, data }
}

export default useFetch
