import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  const [theme, setTheme] = React.useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
    </div>
  )
}

export default App