import { Link } from 'react-router-dom'
import 'app/styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames as cls } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
