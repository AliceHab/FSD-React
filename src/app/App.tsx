import 'app/styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames as cls } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'



const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
