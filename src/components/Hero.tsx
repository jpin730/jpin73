import { FC } from 'react'
import { Profile } from '../types/Profile'

interface Props {
  profile: Profile | null
}

export const Hero: FC<Props> = ({ profile }) => {
  console.log(profile)
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-sm-6 align-self-center mb-3 mb-sm-5">
          <h1>{profile?.name}</h1>
          <p>{profile?.description}</p>
          <img
            className="mw-100"
            src={profile?.techs}
            alt="Jaime Pineda's Tech Stack "
          />
        </div>
        <div className="col-12 col-sm-6 align-self-center mb-3 mb-sm-5">
          <img
            className="rounded-circle border w-100 mx-auto d-block"
            src={profile?.avatar}
            alt="Jaime Pineda's Github avatar"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>
    </section>
  )
}
