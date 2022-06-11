import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hooks/useTheme'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

const ThemeContext = ({ children }) => {
  const [theme, _] = useTheme()

  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

export default ThemeContext
