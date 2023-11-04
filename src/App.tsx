import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Stanley Wodson</h1>
      <p>More one text in side this place</p>
      <GlobalStyle />
    </ThemeProvider>
  )
}
