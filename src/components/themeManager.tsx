import { useTheme } from 'next-themes'

// Do NOT use this! It will throw a hydration mismatch error.
//Fix hydration error? 



const ThemeManager = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
    className="py-1 px-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
    onClick={() => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }}
  >
    Lights
  </button>
  )
}

export default ThemeManager