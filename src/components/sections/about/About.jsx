import { Link } from '@components'
import { useTheme } from 'next-themes'
import { FaUniversity } from 'react-icons/fa'
import { MdWorkspaces } from 'react-icons/md'
import { Skill } from '../../Skill/Skill'
const About = () => {
  const { theme } = useTheme()

  return (
    <section className="dark:bg-gray-900 py-10 px-5 md:px-0">
      <h2 className="text-center font-sans font-bold text-xl text-purple-800 mb-3">
        Do you want to know more about me?
      </h2>
      <a
        href="/about"
        className="text-center items-center text-5xl flex w-2/6 mx-auto justify-center cursor-pointer  font-bold mb-14 dark:text-gray-100 hover:border-b-4 hover:border-black"
      >
        <span className="mx-2">Read more about me</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      {/* <div className="max-w-screen-xl mx-auto ">
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-gray-50 rounded-lg py-7 text-center shadow-sm border border-zinc-100 dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <MdWorkspaces size={40} color={theme === 'light' ? '#4c1d95' : '#fff'}></MdWorkspaces>
            </div>
            <p className="font-bold text-zinc-800 text-1xl dark:text-white">Experiencia</p>
            <p className="text-md text-gray-900 font-normal dark:text-white mb-1">+1 Años</p>
          </div>

          <div className="bg-gray-50 rounded-lg py-7 text-center shadow-sm border border-zinc-100 dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <MdWorkspaces size={40} color={theme === 'light' ? '#4c1d95' : '#fff'}></MdWorkspaces>
            </div>
            <p className="font-bold text-zinc-800 text-1xl dark:text-white">
              Proyectos completados
            </p>
            <p className="text-md text-gray-900 font-normal dark:text-white mb-1">+4 proyectos</p>
          </div>

          <div className="bg-gray-50 rounded-lg py-7 text-center shadow-sm border border-zinc-100 dark:bg-gray-900 dark:text-white col-span-2 md:col-span-1">
            <div className="flex justify-center mb-2">
              <FaUniversity size={35} color={theme === 'light' ? '#4c1d95' : '#fff'}></FaUniversity>
            </div>
            <p className="font-bold text-zinc-800 text-1xl dark:text-white">
              Universidad Técnica Federico Santa María
            </p>
            <p className="text-md text-gray-900 font-normal dark:text-white mb-1">
              Tecnica Universitario en Informática
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-10">
          <img
            className="mb-10 block md:hidden"
            src="/emoji.png"
            style={{ width: '45px' }}
            alt=""
          ></img>
          <div className="w-full md:w-6/12">
            <p className="font-sans font-light text-lg mb-4 md:mb-14 text-gray-900 dark:text-gray-300">
              Desarrollador de software de 🇨🇱 especializado en construir excepcionales sitios web y
              con más de <strong>1 año de experiencia</strong> agregando valor a los procesos de
              negocios. Principalmente enfocado en el desarrollo web como Full-stack developer, me
              inicié con Laravel y Vue.js y aún sigo con estas tecnologías. <br /> Tengo
              conocimiento en HTML, CSS, JavaScript, Bootstrap, Tailwind React, Node.js y Flutter
            </p>
            <ul className="grid grid-cols-2">
              <Skill image="/img/skills/js.png" name="JavaScript (ES6+)"></Skill>
              <Skill image="/img/skills/php.png" name="PHP"></Skill>
              <Skill image="/img/skills/vue.png" name="Vue.js"></Skill>
              <Skill image="/img/skills/laravel.png" name="Laravel"></Skill>
              <Skill image="/img/skills/flutter.png" name="Flutter"></Skill>
            </ul>

            <div className="text-center">
              <Link href="/pdf/resume.pdf" target="_blank" className="mt-10">
                Descargar CV
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default About
