import React from 'react'
import { motion } from 'framer-motion'

const Jobs = () => {
  return (
    <div className="dark:bg-gray-900">
      <section className="max-w-screen-xl mx-auto py-28 ">
        <h3 className="text-center font-sans font-bold text-xl text-purple-800 mb-3">
          Where I´have worked.
        </h3>
        <h2 className="text-center font-bold mb-14 dark:text-gray-100">Experience</h2>

        <motion.div
          className=" relative job-wrapper"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-start px-28 ">
            {/* rounded-xl bg-violet-100 py-7 text-center shadow-sm shadow-purple-900 dark:bg-gray-900 */}
            {/* dark:text-white */}
            <div className="border border-purple-800 dark:bg-gray-800 rounded-md max-w-md left-0 p-6  m-5">
              <h2 className="font-sans font-bold text-2xl">Junior Full stack developer</h2>
              <a
                href="http://pckz.cl/"
                target="_blank"
                className="font-semibold text-gray-400 my-2 hover:underline"
              >
                PCKZ
              </a>
              <a className="block mb-2">
                <small className="text-gray-700 dark:text-gray-400">Santiago, Chile (Remoto)</small>
              </a>
              <ul className="list-disc text-sm ml-6">
                <li>
                  Creación de interfaces de usuario usando JavaScript, Vue.js/Nuxt.js, Laravel, SSR
                </li>
                <li>Creación de API REST con PHP / Laravel</li>
                <li>
                  Implementación de sistemas de pago y envíos como{' '}
                  <a
                    href="https://www.kushkipagos.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Kushki
                  </a>{' '}
                  y{' '}
                  <a href="https://www.shipit.cl/" target="_blank" className="hover:underline">
                    Shipit
                  </a>
                </li>
                <li>Control de versiones con Git y GitLab</li>
              </ul>
            </div>
            <img
              className="bg-white p-2 border-2 border-gray-300 rounded-full absolute dark:border-gray-400"
              style={{ left: '613px' }}
              width={50}
              height={50}
              src="https://pckz.cl/wp-content/uploads/2020/04/icon-pckz-web-1.gif"
              alt=""
            />
          </div>
        </motion.div>

        <div className="w-full relative job-wrapper">
          <div className="flex justify-start px-28">
            <img
              className="bg-white p-2 border-2 border-gray-300 rounded-full absolute"
              style={{ left: '613px' }}
              width={50}
              height={50}
              src="/rocket.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Jobs
