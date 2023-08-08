import { FC } from 'react'

export const LoadingBar: FC = () => {
  return (
    <div className="progress mb-4">
      <div className="progress-bar progress-bar-striped progress-bar-animated w-100"></div>
    </div>
  )
}
