const projects = [
  {
    id: 1,
    name: 'Portolio | dcgx.dev',
    description: 'Portafolio personal para presentación personal.',
    repositoryProvider: 'GitHub',
    repositoryUrl: 'https://github.com/dcgx/portfolio',
    url: 'http://dcgx.vercel.app/',
    cover: '/img/projects/portfolio-1.png',
    techs: ['React', 'Next.js', 'Tailwind']
  },
  {
    id: 2,
    name: 'Portal Smarthomy',
    description:
      'Portal de clientes para productos SmartHome y flujo de subscripción para planes de la empresa. Integrado con Tuya, Shipit y Kushki.',
    repositoryProvider: 'GitLab',
    repositoryUrl: null,
    cover: '/img/projects/smarthomy-1.png',
    url: 'https://portal.smarthomy.com/',
    techs: ['Vue', 'Laravel', 'Kushki']
  },
  {
    id: 3,
    name: 'Meetwi | Google Meet Clone',
    description: 'Aplicación de reuniones, clon de Google Meet utilizando API de Twillio',
    repositoryProvider: 'GitHub',
    repositoryUrl: 'https://github.com/dcgx/meetwi',
    cover: '/img/projects/meetwi-1.png',
    url: 'https://meetwi.vercel.app/',
    techs: ['React', 'React Context', 'Next.js', 'Firebase', 'Tailwind']
  }
  // {
  //   id: 3,
  //   name: 'TriviLingo | Duolingo Inspired',
  //   description:
  //     'Una aplicación de trivias para divertirse y aprender, inspirado en el diseño de Duolingo',
  //   repositoryProvider: 'GitHub',
  //   repositoryUrl: 'https://github.com/dcgx/TriviLingo',
  //   url: 'https://trivilingo.netlify.app/',
  //   techs: ['Vue', 'Nuxt.js', 'SSR']
  // }
]

export default function handler(req, res) {
  res.status(200).json(projects)
}
