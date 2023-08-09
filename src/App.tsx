import { FC, useEffect, useState } from 'react'
import { Footer, LoadingBar, NavBar, ProjectsContainer } from './components'
import { getAllProjects } from './services'
import { Project } from './types'

export const App: FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getAllProjects()
      .then((res) => {
        res.sort((a, b) => b.created.localeCompare(a.created))
        setProjects(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-light d-flex flex-column justify-content-between min-vh-100">
      <NavBar />

      <main className="container flex-grow-1 my-4">
        {loading && <LoadingBar />}

        {projects.length === 0 ? (
          <div className="alert alert-info">No projects available</div>
        ) : (
          <ProjectsContainer projects={projects} />
        )}
      </main>

      <Footer />
    </div>
  )
}
