import { Link, Button } from '@components'
import styled from 'styled-components'

const StyledAbout = styled.section`
  h1 {
    font-weight: 500;
    font-size: 3rem;
    text-align: center;
  }

  p {
    font-size: 22px;
    line-height: 2.2rem;
  }
`

export default function About({ projects }) {
  return (
    <StyledAbout>
      <div>
        <h1>Here is my story</h1>
        <section>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <img
                width={210}
                src="https://www.jaime00.me/static/media/profile_image.48d9c230fc97d28cf831.png"
              />
            </div>
            <div className="col-span-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <h2 className="my-5">Skill Experience</h2>
        <section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</p>

          <div className="flex items-center my-2">
            <span className="flex-none">Laravel</span>
            <span className="border-t border-dashed borde-gray-200 w-full"></span>
            <span className="flex-none">2021 - now (2 years)</span>
          </div>

          <div className="flex items-center my-2">
            <span className="flex-none">Laravel</span>
            <span className="border-t border-dashed borde-gray-200 w-full"></span>
            <span className="flex-none">2021 - now (2 years)</span>
          </div>
        </section>

        <Link className="mt-10" href="/resume.pdf" target="_blank">
          Download CV
        </Link>
      </div>

      <div className="flex  items-center justify-between border border-gray-500 my-20 py-5">
        <span>Consulta mi Curriculum</span>

        <Button>Ver Linkedin</Button>
      </div>
    </StyledAbout>
  )
}
