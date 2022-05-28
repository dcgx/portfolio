const projects = [
  {
    id: 3,
    name: 'Portolio | dcgx.dev',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    repositoryProvider: 'GitLab',
    repositoryUrl: 'https://gitlab.com/nubbok/nubbok',
    url: 'http://nubbok.com/',
    techs: ['Vue', 'Nuxt.js', 'SSR']
  },
  {
    id: 1,
    name: 'Portal Smarthomy',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    repositoryProvider: 'GitHub',
    repositoryUrl: 'https://github.com/cardodev/edulingo',
    url: 'http://edulingo.com/',
    techs: ['Vue', 'Pinia']
  },
  {
    id: 2,
    name: 'Meetwi | Google Meet Clone',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    repositoryProvider: 'GitHub',
    repositoryUrl: 'https://github.com/cardodev/instacool',
    url: 'http://instacool.com/',
    techs: ['React', 'React Context']
  },
  {
    id: 3,
    name: 'TriviLingo | Duolingo Inspired',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    repositoryProvider: 'GitLab',
    repositoryUrl: 'https://gitlab.com/nubbok/nubbok',
    url: 'http://nubbok.com/',
    techs: ['Vue', 'Nuxt.js', 'SSR']
  }
]

export default function handler(req, res) {
  res.status(200).json(projects)
}
