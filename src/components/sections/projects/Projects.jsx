import React from 'react'
import { Icon } from '@icons'
import { useProjects } from '@hooks'

const Projects = () => {
  const { fetching, projects } = useProjects()

  console.log({ projects })
  return (
    <section className="dark:bg-gray-900 mb-20">
      <div className="max-w-screen-xl mx-auto pb-10">
        <h2 className="text-center py-7">Other projects</h2>
        <div className="grid grid-cols-3 gap-8 gap-y-44">
          {projects.map((project) => {
            return (
              <div className="project-wrapper relative mt-52 mb-10 cursor-pointer">
                <img
                  style={{
                    width: '78%',
                    margin: '0 auto',
                    top: '-170px',
                    position: 'absolute',
                    left: '0',
                    right: '0'
                  }}
                  className="rounded border shadow-sm object-cover"
                  src={project.cover}
                  alt=""
                />
                <div className="project absolute bg-white shadow-md rounded-2xl dark:bg-gray-800 dark:border-none">
                  <div className="p-5">
                    <div>
                      <h4 className="font-semibold text-lg mt-5 mb-1">{project.name}</h4>
                      <p className="project-description dark:text-gray-50 mb-3">
                        {project.description}
                      </p>
                      <div className="grid grid-cols-1 ">
                        <div className="project-links flex justify-end">
                          {/* <img
                            width={20}
                            src="https://pckz.cl/wp-content/uploads/2020/04/icon-pckz-web-1.gif"
                            alt=""
                          /> */}
                          <a
                            aria-label="Repository Link"
                            href={project.repositoryUrl}
                            target="_blank"
                          >
                            <Icon name={project.repositoryProvider}></Icon>
                          </a>
                          <a href={project.url} target="_blank">
                            <Icon name="External"></Icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul className="flex flex-wrap gap-2">
                        {project.techs.map((tech) => {
                          return <li>{tech}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
