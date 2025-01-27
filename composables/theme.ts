export const useDark = () => {
  return useState('dark', () => true)
}

export const useToggle = (isDark: Ref<boolean>) => {
  return () => {
    isDark.value = !isDark.value
    updateTheme(isDark.value)
  }
}

const updateTheme = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
} 