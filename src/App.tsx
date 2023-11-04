import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './components/Router'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <h1>Stanley Wodson</h1>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
