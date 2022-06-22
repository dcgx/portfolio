import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hooks/useTheme'

import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'
import { createContext } from 'react'

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {}
})

// const ThemeContext = ({ children }) => {
//   const [theme, _] = useTheme()

//   const themeMode = theme === 'dark' ? darkTheme : lightTheme

//   return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
// }

// export default ThemeContext
