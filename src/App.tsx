import { FC, useEffect, useState } from 'react'

import { ProjectsContainer } from './components/ProjectsContainer'
import { LoadingBar } from './components/LoadingBar'
import { Hero } from './components/Hero'
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
      <nav className="navbar bg-dark mb-5" style={{ height: '40px' }}></nav>

      <Hero />

      <main className="container flex-grow-1 my-4">
        {loading && <LoadingBar />}

        {projects.length === 0 ? (
          <div className="alert alert-info">No projects available</div>
        ) : (
          <ProjectsContainer projects={projects} />
        )}
      </main>

      <footer className="bg-dark-subtle">
        <p className="container my-0 py-3 text-center">
          <a
            className="text-decoration-none"
            href="https://github.com/jpin730"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span className="mx-2">&middot;</span>

          <a
            className="text-decoration-none"
            href="https://linkedin.com/in/jpin730"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <span className="mx-2">&middot;</span>

          <a
            className="text-decoration-none"
            href="https://jpin730.github.io/certificates"
            target="_blank"
            rel="noreferrer"
          >
            Certificates
          </a>
        </p>
      </footer>
    </div>
  )
}
