import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-dark-subtle">
      <p className="container my-0 py-3 text-center">
        <a
          className="text-decoration-none"
          href="https://github.com/jpin730"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <span className="mx-2">&middot;</span>

        <a
          className="text-decoration-none"
          href="https://linkedin.com/in/jpin730"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <span className="mx-2">&middot;</span>

        <a
          className="text-decoration-none"
          href="https://jpin730.github.io/certificates"
          target="_blank"
          rel="noreferrer"
        >
          Certificates
        </a>
      </p>
    </footer>
  )
}
