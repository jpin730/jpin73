import { FC, useEffect, useState } from 'react'

import { ProjectsContainer } from './components/ProjectsContainer'
import { LoadingBar } from './components/LoadingBar'
import { Hero } from './components/Hero'
import { getAllProjects } from './services/projects'
import { Project } from './types'
import { Footer } from './components/Footer'
import { ToTop } from './components/ToTop'

export const App: FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchProjects = () => {
    getAllProjects()
      .then((res) => {
        res.sort((a, b) => b.created.localeCompare(a.created))
        setProjects(res)
      })
      .catch(() => setProjects([]))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div className="bg-light d-flex flex-column justify-content-between min-vh-100">
      <nav className="navbar bg-dark mb-5" style={{ height: '40px' }}></nav>

      <Hero />

      <main className="container flex-grow-1 my-4">
        {loading && <LoadingBar />}

        {!loading &&
          (projects.length === 0 ? (
            <>
              <div className="alert alert-info">No projects available</div>
              <button
                className="btn btn-primary d-block mx-auto"
                onClick={() => {
                  setLoading(true)
                  fetchProjects()
                }}
              >
                Reload projects
              </button>
            </>
          ) : (
            <ProjectsContainer projects={projects} />
          ))}
      </main>

      <Footer />

      <ToTop />
    </div>
  )
}
