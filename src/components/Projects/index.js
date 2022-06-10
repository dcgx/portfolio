import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

import { projects } from '@config'
import { Accordion, AccordionItem, Badge } from '@components'

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(0)
  const router = useRouter()
  const handleClickProject = (projectId) => {
    if (expandedProject === projectId) {
      router.push(`projects/${projectId}`)
    }
    setTimeout(() => {
      setExpandedProject(projectId)
    }, 10)
  }

  return (
    <section className="dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center font-sans font-bold text-xl text-purple-800 mb-3">
          Some Things I’ve Built
        </h2>
        <div className="h-32">
          <a
            href="/projects"
            className="text-center items-center text-5xl flex w-2/5 mx-auto justify-center cursor-pointer  font-bold mb-14 dark:text-gray-100 hover:border-b-4 hover:border-black"
          >
            <span className="mx-2">See all projects</span>
            <FiArrowRight />
          </a>
        </div>
      </div>

      <Accordion>
        {projects.map((project, index) => {
          return (
            <AccordionItem
              onClick={() => handleClickProject(index)}
              expanded={expandedProject === index}
              image={project.cover}
              imageSm={project.coverSm}
            >
              <h2 className="font-extrabold text-4xl text-white">{project.title}</h2>
              <div className="mt-2">
                {project.techs.map((tech) => {
                  return <Badge color={tech.color}>{tech.label}</Badge>
                })}
              </div>
              <p className="text-zinc-200 mt-3">{project.description}</p>
              <div className="flex gap-5">
                <a className="text-white mt-5">
                  <FaGithub size={26} />
                </a>
                <a className="text-white mt-5">
                  <FiExternalLink size={26} />
                </a>
              </div>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

export default Projects
