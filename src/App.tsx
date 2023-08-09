import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'


import { GithubProvider } from '../src/context/GihubContext'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubProvider>
          <AppRouter />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
