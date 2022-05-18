import React from 'react'
import { Icon } from '@icons'
import { useProjects } from '@hooks'

const Projects = () => {
  const { fetching, projects } = useProjects()

  console.log({ projects })
  return (
    <section className="dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto pb-10">
        <h2 className="text-center py-14">Other projects</h2>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div className="project bg-white border rounded-2xl dark:bg-gray-800 dark:border-none">
                <div className="p-5">
                  <div>
                    <div className="grid grid-cols-2">
                      <div className="flex-1 folder">
                        <Icon name="Folder"></Icon>
                      </div>

                      <div className="project-links flex justify-end">
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

                    <h4 className="font-semibold text-lg mt-5 mb-1">{project.name}</h4>
                    <p className="project-description dark:text-gray-50 mb-3">
                      {project.description}
                    </p>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
