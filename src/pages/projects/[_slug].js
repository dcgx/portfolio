import { useRouter } from 'next/router'
import styled from 'styled-components'
import Navbar from '../../layouts/components/navbar'

const StyledProject = styled.article`
  border: 1px solid red;
  max-width: 1920px;
  margin: 0 20px;
  display: grid;
  grid-template-columns: 1fr 0.8fr;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StyledProjectGallery = styled.div`
  border: 1px solid blue;

  .project-thubmnail {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-flow: row;
    overflow: auto;
    .project-thubmnail {
      width: 96%;
      position: relative;
      display: block;
      flex-shrink: 0;
      figure {
        img {
          width: 100%;
        }
      }
    }
  }
`

const StyledProjectInfo = styled.div`
  border: 1px solid green;
  position: sticky;
  top: 20px;
  height: fit-content;
  margin: 0 20px;
`

export default function Project() {
  return (
    <>
      <Navbar />
      <StyledProject>
        <StyledProjectGallery>
          <div className="project-thubmnail">
            <figure>
              <img src="https://i0.wp.com/evilnapsis.com/wp-content/uploads/2015/06/adminlt2.png"></img>
            </figure>
          </div>
          <div className="project-thubmnail">
            <figure>
              <img src="https://i0.wp.com/evilnapsis.com/wp-content/uploads/2015/06/adminlt2.png"></img>
            </figure>
          </div>
          <div className="project-thubmnail">
            <figure>
              <img src="https://i0.wp.com/evilnapsis.com/wp-content/uploads/2015/06/adminlt2.png"></img>
            </figure>
          </div>
        </StyledProjectGallery>
        <StyledProjectInfo>
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
              Learn about the redesign process together with a UX/UI team come to life as a WebApp
              and PWA.
            </p>

            <p>
              En alrededor de <strong>8 semanas</strong>, <code>Ambar.pet</code> se transformó en un
              nuevo diseño que reunía la administración de mascotas y configuraciones de
              agendamiento
            </p>

            <ul>
              <li>
                <code>Vue</code>: Implementado junto a vue-router, la cual fue usado como el
                enrutamiento del front-end <br />
                <code>Vuex</code>: Utilizado para la gestión del estado de la aplicación,
                funcionando como almacenamiento centrado de todos los componentes de la aplicación.{' '}
                <br />
                <code>Bootstrap</code>: Has been used to style the entire application
              </li>
            </ul>

            <div class="grid md:grid-cols-3 grid-cols-1 gap-8 my-4">
              <div>
                <p class="font-medium text-md text-gray-500 py-2">Role</p>
                <span class="text-md text-black">Developed the project</span>
              </div>
              <div>
                <p class="font-medium text-md text-gray-500 py-2">Services</p>
                <div class="flex flex-col">
                  <span class="text-md text-black">Web App Development</span>
                </div>
              </div>
              <div>
                <p class="font-medium text-md text-gray-500 py-2">Core Tech</p>
                <div class="flex flex-col">
                  <span class="text-md text-black">Vue</span>
                  <span class="text-md text-black">Vuex</span>
                  <span class="text-md text-black">Bootstrap</span>
                  <span class="text-md text-black">SASS</span>
                </div>
              </div>
            </div>
          </div>
        </StyledProjectInfo>
      </StyledProject>
      {/* 
      <div className="grid grid-cols-3">
        <div className="col-span-2 mx-20">
          
        </div>
        <div className="sticky top-5 mr-10 h-fit">
         
        </div>
      </div> */}
    </>
  )
}
