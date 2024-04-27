import { useState } from 'react'
import './App.css'
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './utils/theme/themeConfig';
import { loadTheme, toggleTheme } from './utils/theme/themeUtils';
import LandingPageComponent from './pages/LandingPageComponent';

function App() {
  const [theme, setTheme] = useState(loadTheme);

  const handleToggleTheme = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Wrapper>
          <GlobalStyles />
          <LandingPageComponent />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export default App
