import React from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className='text-sm max-sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-all'
      aria-label='Toggle theme'
    >
      <img
        src={theme === 'light' ? assets.moon_icon : assets.sun_icon}
        alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        className='w-5 h-5'
      />
    </button>
  )
}

export default ThemeToggleBtn