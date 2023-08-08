import { FC } from 'react'
import { Footer, NavBar } from './components'

export const App: FC = () => {
  return (
    <div className="bg-light">
      <NavBar />
      <main className="min-vh-100">Content</main>
      <Footer />
    </div>
  )
}
