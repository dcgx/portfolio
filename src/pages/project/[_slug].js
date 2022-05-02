import { useRouter } from 'next/router'
import React from 'react'

export default function Project() {
  const router = useRouter()

  return (
    <div className="max-w-screen-lg mx-auto mt-36 mb-20">
      <h1 class="text-5xl font-bold text-center font-serif pb-10">
        Ambar.pet, redesign pet and veterinary system
      </h1>
      <a
        href="https://app.ambar.pet/"
        target="_blank"
        className="flex justify-end underline text-blue-700"
      >
        app.ambar.pet
      </a>
      <div class="flex justify-between text-gray-600 text-sm my-6">
        <time datetime="2021-08-09T00:00:00.000Z" class="pb-1 xs:pb-0">
          {/* Monday, August 9th 2021 (9 months ago) */}
          Miércoles, 27 de Octubre 2021 (hace 8 meses)
        </time>
        <p>6 min read</p>
      </div>

      <div className="flex">
        <div className="border rounded-full w-10 h-10"></div>
        <div class="flex flex-col ml-3">
          <p class="text-gray-900 font-medium">Diego Castillo</p>
          <a
            class="inline text-blue-600 text-xs -mt-0.5"
            href="https://twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @dcgx
          </a>
        </div>
      </div>

      <div class="mt-8 flex items-center flex-wrap">
        <span class="font-medium text-gray-500 mr-3">Tag:</span>
        <a
          class="inline px-1.5 py-1 bg-light-gray hover:bg-gray-200 text-sm font-medium border border-gray-300 shadow-sm xs:mr-3 mr-2.5"
          href="/writing?filter=vue"
        >
          vue
        </a>
        <a
          class="inline px-1.5 py-1 bg-light-gray hover:bg-gray-200 text-sm font-medium border border-gray-300 shadow-sm xs:mr-3 mr-2.5"
          href="/writing?filter=bootstrap"
        >
          bootstrap
        </a>
        <a
          class="inline px-1.5 py-1 bg-light-gray hover:bg-gray-200 text-sm font-medium border border-gray-300 shadow-sm xs:mr-3 mr-2.5"
          href="/writing?filter=sass"
        >
          sass
        </a>
      </div>

      <div className="mt-5">
        <p className="text-gray-600">
          Learn about the redesign process together with a UX/UI team come to life as a WebApp and
          PWA.
        </p>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-8 my-4">
          <div>
            <p class="font-medium text-2xl py-2">Role</p>
            <span class="text-lg">Developed the project</span>
          </div>
          <div>
            <p class="font-medium text-2xl py-2">Services</p>
            <div class="flex flex-col">
              <span class="text-lg">Web App Development</span>
            </div>
          </div>
          <div>
            <p class="font-medium text-2xl py-2">Core Tech</p>
            <div class="flex flex-col">
              <span class="text-lg">Vue</span>
              <span class="text-lg">Vuex</span>
              <span class="text-lg">Bootstrap</span>
              <span class="text-lg">SASS</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl mb-4 font-bold" id="overview">
          <a class="inline autolink" href="/writing/margatsni#overview">
            <span class="icon icon-link"></span>
          </a>
          Overview
        </h2>

        <p>
          {/* On the span of about <strong>6 weeks</strong>, <code>Margatsni</code> came together as a
          social media web platform that mimicks one of the most popular social media platforms out
          there, 
          
           */}
          En alrededor de <strong>8 semanas</strong>, <code>Ambar.pet</code> se transformó en un
          nuevo diseño que reunía la administración de mascotas y configuraciones de agendamiento
          {/*           
          <a
            class="inline"
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          . Beeing a lover of experimental projects, in the making of the product I wanted to try
          out some technologies that I was unfamiliar with at the time.{' '} */}
        </p>

        <h2 className="text-2xl mb-4 mt-8 font-bold" id="brief-walkthorugh-the-core-technologies">
          <a
            class="inline autolink"
            href="/writing/margatsni#brief-walkthorugh-the-core-technologies"
          >
            <span class="icon icon-link"></span>
          </a>
          Brief walkthorugh the core technologies
        </h2>

        <ul>
          <li>
            <code>Vue</code>: Implementado junto a vue-router, la cual fue usado como el
            enrutamiento del front-end <br />
            <code>Vuex</code>: Utilizado para la gestión del estado de la aplicación, funcionando
            como almacenamiento centrado de todos los componentes de la aplicación. <br />
            <code>Bootstrap</code>: Has been used to style the entire application
          </li>
        </ul>
      </div>
    </div>
  )
}
