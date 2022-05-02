import React from 'react'

const Jobs = () => {
  return (
    <section className=" max-w-screen-xl mx-auto my-28">
      <h2 className="text-center my-14">Where I’ve Worked</h2>

      <div className="w-full relative job-wrapper">
        <div className="flex justify-start px-28">
          <div className="shadow max-w-md left-0 p-6 border m-5">
            <h2 className="font-sans font-bold text-2xl">Full stack developer</h2>
            <a
              href="http://pckz.cl/"
              target="_blank"
              className="font-semibold text-gray-400 my-2 hover:underline"
            >
              PCKZ
            </a>
            <a className="block mb-2">
              <small className="text-gray-700">Santiago, Chile (Remoto)</small>
            </a>
            <ul className="list-disc text-sm ml-6">
              <li>
                Creación de interfaces de usuario usando JavaScript, Vue.js/Nuxt.js, Laravel, SSR
              </li>
              <li>Creación de API REST con PHP / Laravel</li>
              <li>
                Implementación de sistemas de pago y envíos como{' '}
                <a href="https://www.kushkipagos.com/" target="_blank" className="hover:underline">
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
            className="bg-white p-2 border-2 border-gray-300 rounded-full absolute "
            style={{ left: '613px' }}
            width={50}
            height={50}
            src="https://pckz.cl/wp-content/uploads/2020/04/icon-pckz-web-1.gif"
            alt=""
          />
        </div>
      </div>

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
  )
}

export default Jobs
