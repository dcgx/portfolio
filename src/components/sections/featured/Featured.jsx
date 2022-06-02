import { Link } from '@components'

const Featured = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center font-sans font-bold text-xl text-purple-800 mb-3">
          Some Things I’ve Built
        </h2>
        <a
          href="/projects"
          className="text-center items-center text-5xl flex w-2/5 mx-auto justify-center cursor-pointer  font-bold mb-14 dark:text-gray-100 hover:border-b-4 hover:border-black"
        >
          <span className="mx-2">See all projects</span>
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

        {/* <div className="grid grid-cols-2 gap-8 mt-28 bg-gray-50 py-10 px-20 rounded-lg ">
          <div className="mx-5">
            <h4 className="text-lg font-semibold">PROJECT - #001</h4>
            <h3 className="font-extrabold text-4xl my-4">Ambar.pet</h3>
            <div className="flex flex-wrap mb-4">
              <span className="border border-black px-5 py-1 uppercase text-gray-600 font-semibold text-sm mr-4 dark:text-gray-300 dark:border-gray-400">
                Vue
              </span>
              <span className="border border-black px-5 py-1 uppercase text-gray-600 font-semibold text-sm mr-4 dark:text-gray-300 dark:border-gray-400">
                PWA
              </span>
              <span className="border border-black px-5 py-1 uppercase text-gray-600 font-semibold text-sm mr-4 dark:text-gray-300 dark:border-gray-400">
                Bootstrap
              </span>
            </div>

            <p className="dark:text-gray-50">
              Ambar.pet, sistema de administración de mascotas para veterinarios. Proyecto creado
              con Vue 2 y Bootstrap
            </p>

            <Link href="/project/ambar" outlined className="my-6" style={{ margin: '30px' }}>
              Ver proyecto
            </Link>
          </div>

          <div className="flex items-center">
            <a href="" className="w-100">
              <img src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png" />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Featured
