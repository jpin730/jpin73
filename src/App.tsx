import { FC, useEffect, useState } from 'react'

import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoadingBar } from './components/LoadingBar'
import { Nav } from './components/Nav'
import { ProjectsContainer } from './components/ProjectsContainer'
import { ToTop } from './components/ToTop'
import { getAllProjects } from './services/projects'
import { Project } from './types'
import { Profile } from './types/Profile'

export const App: FC = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [profile, setProfile] = useState<Profile | null>(null)

  const fetchProjects = () => {
    getAllProjects()
      .then((res) => {
        const projects = res.filter((project) => {
          if (project.id === 'profile') {
            setProfile(project as unknown as Profile)
            return false
          }
          return true
        })
        projects.sort((a, b) => b.created.localeCompare(a.created))
        setProjects(projects)
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
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Nav />

      <Hero profile={profile} />

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
