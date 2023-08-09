import { ChangeEvent, FC, useMemo, useState } from 'react'
import { Project } from '../types'
import { ProjectCard } from '.'

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

  const onFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value)
  }

  return (
    <>
      <select
        className="form-select form-select-lg mb-3"
        value={filterValue}
        onChange={onFilterChange}
      >
        <option value="">All</option>
        {filterOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
        {filteredProjects.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </>
  )
}
