import { Link } from '@components'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  height: calc(100vh - 200px);
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
    display: block;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 10px;

    figure {
      display: none;
    }
  }
`

const Hero = () => {
  return (
    <StyledHeroSection>
      <div className="info">
        <h1 className="text-6xl font-semibold text-zinc-700">
          Software Engineer, Self-taught Developer
        </h1>
        <p className="text-3xl text-zinc-500 font-light mt-5">
          Hi 👋, I'am Diego, a software developer and web developer from Chile. I have worked a web
          developer specialized in frontend for more 1 year.
        </p>
        <div className="flex items-center mt-4">
          <Link href="/resume.pdf" target="_blank">
            Download CV
          </Link>
        </div>
        {/*         <button onClick={toggleTheme}>Toggle Theme</button>
         */}
      </div>
      <figure>
        <img src="https://images.emojiterra.com/google/android-10/512px/1f468-1f4bb.png"></img>
      </figure>
    </StyledHeroSection>
  )
}

export default Hero
