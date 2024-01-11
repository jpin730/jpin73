import { FC, useMemo, useState } from 'react'
import { Project } from '../types'
import { ProjectCard } from './ProjectCard'

interface Props {
  projects: Project[]
}

export const ProjectsContainer: FC<Props> = ({ projects }) => {
  const [filterValue, setFilterValue] = useState('')

  const filterOptions = useMemo(
    () =>
      [...new Set(projects.flatMap(({ techs }) => techs.split(',')))].sort(
        (a, b) => a.localeCompare(b)
      ),
    [projects]
  )

  const filteredProjects = projects.filter(({ techs }) =>
    techs.includes(filterValue)
  )

  const onFilterChange = (opt: string) => () => {
    setFilterValue(opt)
  }

  return (
    <section>
      <div className="mb-3 d-flex flex-wrap">
        <button
          className={`btn btn-sm me-2 mb-2 ${
            filterValue === '' ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={onFilterChange('')}
        >
          All
        </button>
        {filterOptions.map((opt) => (
          <button
            key={opt}
            className={`btn btn-sm me-2 mb-2 ${
              opt === filterValue ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={onFilterChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
        {filteredProjects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </section>
  )
}
