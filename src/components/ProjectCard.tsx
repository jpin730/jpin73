import { FC } from 'react'

import { Project } from '../types'

interface Props extends Omit<Project, 'id'> {}

export const ProjectCard: FC<Props> = ({
  created,
  title,
  repo,
  techs,
  description,
  deploy,
}) => {
  const formattedTechs = techs.split(',').join(' • ')
  const formattedCreated = new Date(created).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="col">
      <div className="bg-white border rounded d-flex flex-column justify-content-between p-3 h-100">
        <div>
          <h3>{title}</h3>
          <p className="text-secondary text-truncate" title={formattedTechs}>
            <small>{formattedTechs}</small>
          </p>
        </div>

        <p className="flex-grow-1">{description}</p>

        <div>
          <p className="d-flex gap-2">
            <a className="" href={deploy} target="_blank">
              Deployment
            </a>
            <a className="" href={repo} target="_blank">
              Repository
            </a>
          </p>
          <p className="m-0 text-end">
            <small className="text-secondary">
              Created: {formattedCreated}
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}
