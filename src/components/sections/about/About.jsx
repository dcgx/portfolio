import { Button } from '@components'
import { useTheme } from 'next-themes'
import { FaUniversity } from 'react-icons/fa'
import { MdWorkspaces } from 'react-icons/md'
const About = () => {
  const { theme } = useTheme()

  return (
    <section className="dark:bg-gray-900 py-10 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto ">
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-10">
          <div class="bg-slate-100 rounded-xl py-7 text-center shadow-sm dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <MdWorkspaces size={40} color={theme === 'light' ? '#4c1d95' : '#fff'} />
            </div>
            <p class="font-bold text-zinc-800 text-lg dark:text-white">Experiencia</p>
            <p class="font-light text-sm text-zinc-700 dark:text-white mb-1">+2 Años</p>
          </div>

          <div class="bg-zinc-100 rounded-xl py-7 text-center shadow-sm dark:bg-gray-900 dark:text-white">
            <div className="flex justify-center mb-2">
              <MdWorkspaces size={40} color={theme === 'light' ? '#4c1d95' : '#fff'} />
            </div>
            <p class="font-bold text-gray-800 text-lg dark:text-white">Proyectos completados</p>
            <p class="font-light text-sm text-gray-700 dark:text-white mb-1">+2 proyectos</p>
          </div>

          <div class="bg-zinc-100 rounded-xl py-7 text-center shadow-sm dark:bg-gray-900 dark:text-white col-span-2 md:col-span-1">
            <div className="flex justify-center mb-2">
              <FaUniversity size={35} color={theme === 'light' ? '#4c1d95' : '#fff'} />
            </div>
            <p class="font-bold text-gray-800 text-lg dark:text-white">Universidad</p>
            <p class="font-light text-sm text-gray-700 dark:text-white mb-1">
              Técnico Universitario en Informática
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-10">
          {/* <img
            className="m-0 mb-5 md:mr-10 md:mb-0"
            src="https://miro.medium.com/max/392/0*ipiN42L-4hqvIPBv.jpg"
            width={250}
          /> */}

          <img
            className="mb-10 block md:hidden"
            src="/emoji.png"
            style={{ width: '45px' }}
            alt=""
          />
          <div className="w-full md:w-6/12">
            <p className="font-sans font-light text-lg mb-4 md:mb-14 text-gray-900 dark:text-gray-300">
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

            <div className="text-center">
              <Button className="mt-10">Descargar CV</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
