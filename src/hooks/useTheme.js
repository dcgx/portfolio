import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  const setMode = (mode) => {
    console.log(mode, 'mode')
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  return [theme, toggleTheme]
}
