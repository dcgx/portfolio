import { Button } from '@components'
import { useTheme } from 'next-themes'
import { FaUniversity } from 'react-icons/fa'
import { MdWorkspaces } from 'react-icons/md'
const About = () => {
  const { theme } = useTheme()

  return (
    <section className="dark:bg-gray-800 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className=" grid grid-cols-3 gap-10">
          <div class="bg-zinc-100 rounded-xl py-7 text-center shadow-sm   dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <MdWorkspaces size={40} color={theme === 'light' ? '#4c1d95' : '#fff'} />
            </div>
            <p class="font-bold text-zinc-800 text-lg dark:text-white">Experiencia</p>
            <p class="font-light text-sm text-zinc-700 dark:text-white mb-1">+2 Años</p>
          </div>
          <div class="rounded-xl bg-violet-100 py-7 text-center shadow-md dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <MdWorkspaces size={40} color={theme === 'light' ? '#4c1d95' : '#fff'} />
            </div>
            <p class="font-bold text-gray-800 text-lg dark:text-white">Proyectos completados</p>
            <p class="font-light text-sm text-gray-700 dark:text-white mb-1">+2 proyectos</p>
          </div>
          <div class="rounded-xl bg-violet-100 py-7 text-center shadow-md dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <FaUniversity size={35} color={theme === 'light' ? '#4c1d95' : '#fff'} />
            </div>
            <p class="font-bold text-gray-800 text-lg dark:text-white">Universidad</p>
            <p class="font-light text-sm text-gray-700 dark:text-white mb-1">
              Técnico Universitario en Informática
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center my-36">
          <div className="w-6/12">
            <p className="font-sans text-lg mb-14 text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ducimus facilis
              molestias rerum, sit animi vitae error deserunt, magnam, voluptatem sequi pariatur
              reiciendis incidunt molestiae quibusdam saepe placeat. Nisi, fuga!
            </p>
            <ul className="grid grid-cols-2">
              <li className="skill">JavaScript (ES6+)</li>
              <li className="skill">PHP</li>
              <li className="skill">Vue.js</li>
              <li className="skill">Laravel</li>
            </ul>

            <Button className="mt-10">Descargar CV</Button>
          </div>
          <img
            className="ml-10"
            src="https://miro.medium.com/max/392/0*ipiN42L-4hqvIPBv.jpg"
            width={250}
          />
        </div>
      </div>
    </section>
  )
}

export default About
