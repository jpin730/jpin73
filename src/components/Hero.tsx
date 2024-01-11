import { FC } from 'react'

export const Hero: FC = () => {
  return (
    <>
      <nav className="navbar bg-dark mb-3">Portfolio</nav>

      <section className="container">
        <div className="row">
          <div className="col-12 col-sm-6 align-self-center mb-3">
            <h1>Jaime A. Pineda</h1>
            <p>
              <strong>Web Developer</strong> (Angular | ReactJS | NextJS |
              NodeJS | Express | NestJS) with experience building responsive
              websites and a strong UX-based approach. I am a passionate
              self-learner and open-minded to new ways of solving problems.
              Great emphasis on scalable code and good practices. My work
              experience stands out in the sport and retail industry as the NBA
              team “Miami Heat” and Unicomer Group, respectively.
            </p>
            <img
              className="w-100"
              src="https://skillicons.dev/icons?i=angular,react,nextjs,nodejs,express,nestjs,typescript,javascript&theme=light"
              alt="Jaime Pineda's Tech Stack "
            />
          </div>
          <div className="col-12 col-sm-6 align-self-center mb-3">
            <img
              className="rounded-circle w-100"
              src="https://github.com/jpin730.png"
              alt="Jaime Pineda's Github avatar"
            />
          </div>
        </div>
      </section>
    </>
  )
}
