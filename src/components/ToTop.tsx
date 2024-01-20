import { FC, useEffect, useState } from 'react'

export const ToTop: FC = () => {
  const [showToTop, setShowToTop] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () =>
      setShowToTop(window.scrollY / window.screen.height > 0.5)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showToTop && (
        <button
          title="Go to top"
          className="to-top btn btn-primary position-fixed bottom-0 end-0 p-3 m-3 m-lg-5 rounded"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            loading="eager"
            src="/top-arrow.svg"
            width="24"
            height="24"
            alt="top arrow icon"
          />
        </button>
      )}
    </>
  )
}
