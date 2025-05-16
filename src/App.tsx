import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import { routes } from './routes'
import { Suspense } from 'react'

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  )
}

function AppRoutes() {
  const element = useRoutes(routes)
  return (
    <Suspense fallback={<LoadingFallback />}>
      {element}
    </Suspense>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
