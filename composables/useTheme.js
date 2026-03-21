export const useTheme = () => {
  const isDark = useState('theme:isDark', () => false)

  const applyTheme = (dark) => {
    if (!import.meta.client) return
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggle = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  const init = () => {
    if (!import.meta.client) return
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = saved ? saved === 'dark' : prefersDark
    applyTheme(isDark.value)
  }

  return { isDark, toggle, init }
}
