import { ref, watch } from 'vue'

export function useTheme() {
  const theme = ref<'light' | 'dark'>('light')

  const applyTheme = (newTheme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', newTheme)
    theme.value = newTheme
  }

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(newTheme)
  }

  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  return { theme, applyTheme, toggleTheme }
}
