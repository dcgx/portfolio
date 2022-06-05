import React from 'react'
import { jobs } from '@config'
import { TabList, TabButton, TabPanels, TabPanel, List } from '@components'
import { StyledJobsSection } from './styles'

const Jobs = () => {
  return (
    <StyledJobsSection>
      <h3 className="text-center font-sans font-bold text-xl text-purple-800 mb-3">
        Where I´have worked.
      </h3>
      <h2 className="text-center font-bold mb-14 dark:text-gray-100">Experience</h2>

      <div className="inner">
        <TabList>
          <TabButton>PCKZ</TabButton>
        </TabList>

        <TabPanels>
          {jobs.map((job) => {
            return (
              <TabPanel>
                <h3 className="font-semibold">
                  <span>Software Engineer</span>
                  <span className="company">
                    &nbsp;@
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  </span>
                </h3>

                <figure className="border rounded-full p-1 absolute right-0 top-0">
                  <img
                    width={35}
                    height={35}
                    src="https://pckz.cl/wp-content/uploads/2020/04/icon-pckz-web-1.gif"
                  ></img>
                </figure>

                <p className="range">{job.range}</p>
                <List>
                  {job.descriptions.map((description) => {
                    return <li>{description}</li>
                  })}
                </List>
              </TabPanel>
            )
          })}
        </TabPanels>
      </div>
    </StyledJobsSection>
  )
}

export default Jobs
