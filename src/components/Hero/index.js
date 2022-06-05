import { Link } from '@components'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  height: 100vh;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20rem;

  .info {
  }

  figure {
  }
`

const Hero = () => {
  return (
    <StyledHeroSection>
      <div className="info">
        <h1 className="text-6xl font-semibold text-zinc-700">
          Frontend Developer, Self-taught Developer
        </h1>
        <p className="text-2xl mt-5">
          Hi 👋, I'am Diego, a software engineer and web developer from Chile. I have worked a web
          developer specialized in frontend for more 1 year.
        </p>
        <Link className="mt-4" href="/resume.pdf" target="_blank">
          Download CV
        </Link>
      </div>
      <figure>
        <img src="https://images.emojiterra.com/google/android-10/512px/1f468-1f4bb.png"></img>
      </figure>
    </StyledHeroSection>
    // <section className="h-screen mx-auto gap-2 items-center justify-center bg-white dark:bg-gray-900 px-5 md:px-0 grid grid-cols-2">

    // </section>
  )
}

export default Hero
