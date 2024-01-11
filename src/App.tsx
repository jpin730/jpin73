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
      {!loading && <Hero />}

      <main className="container flex-grow-1 my-4">
        {loading && <LoadingBar />}

        {projects.length === 0 ? (
          <div className="alert alert-info">No projects available</div>
        ) : (
          <ProjectsContainer projects={projects} />
        )}
      </main>

      <footer className="bg-dark-subtle">
        <p className="container m-0 py-3 text-center">
          <small>
            My Github profile:{' '}
            <a
              className="text-decoration-none"
              href="https://github.com/jpin730"
              target="_blank"
            >
              https://github.com/jpin730
            </a>
          </small>
        </p>
      </footer>
    </div>
  )
}
