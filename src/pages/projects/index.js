import styled from 'styled-components'
import { useProjects } from '../../hooks/useProjects'
import Navbar from '../../layouts/components/navbar'

const StyledProjects = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.2rem;
  margin: 0 32px;
  cursor: pointer;

  .project-info {
    margin-top: 10px;
    .title {
      font-weight: 600;
      font-size: 16px;
    }
    .date {
      color: #888b90;
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`

export default function Projects() {
  const { projects, isLoading } = useProjects()

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <StyledProjects>
          {projects.map((project) => {
            return (
              <article>
                <a href="/project/2"></a>
                <figure>
                  <img src="https://i0.wp.com/evilnapsis.com/wp-content/uploads/2015/06/adminlt2.png"></img>
                </figure>
                <div className="project-info">
                  <time className="date">Enero 2020</time>
                  <h3 className="title">{project.name}</h3>
                </div>
              </article>
            )
          })}
        </StyledProjects>
      )}
    </>
  )
}
