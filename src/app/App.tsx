import { Link } from 'react-router-dom'
import 'app/styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames as cls } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
