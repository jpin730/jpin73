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
  image,
}) => {
  const formattedTechs = techs.split(',').join(' • ')
  const formattedCreated = new Date(
    `${created}T00:00:00.000-06:00`
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="col">
      <div className="bg-body border rounded shadow-sm overflow-hidden h-100 d-flex flex-column">
        <img className="w-100 border-bottom" src={image} alt={title} />

        <div className="d-flex flex-column justify-content-between flex-grow-1 p-3">
          <div>
            <h3>{title}</h3>
            <p className="text-secondary text-truncate" title={formattedTechs}>
              <small>{formattedTechs}</small>
            </p>
            <p className="flex-grow-1">{description}</p>
          </div>

          <div>
            <p className="d-flex gap-2">
              <a
                className="with-external-link-icon"
                href={deploy}
                target="_blank"
              >
                App
              </a>
              <span>&middot;</span>
              <a
                className="with-external-link-icon"
                href={repo}
                target="_blank"
              >
                Repo
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
    </div>
  )
}
