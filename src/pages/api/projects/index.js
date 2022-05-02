const projects = [
  {
    id: 1,
    name: 'EduLingo',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    repositoryProvider: 'GitHub',
    repositoryUrl: 'https://github.com/cardodev/edulingo',
    url: 'http://edulingo.com/',
    techs: ['Vue', 'Pinia']
  },
  {
    id: 2,
    name: 'Petgram',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    repositoryProvider: 'GitHub',
    repositoryUrl: 'https://github.com/cardodev/instacool',
    url: 'http://instacool.com/',
    techs: ['React', 'React Context']
  },
  {
    id: 3,
    name: 'Nubbok',
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
