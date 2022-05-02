import { Link } from '@components'

const Featured = () => {
  return (
    <section className=" max-w-screen-xl mx-auto">
      <h2 className="text-center my-14">Some Things I’ve Built</h2>

      <div className="grid grid-cols-2 gap-8 mt-28">
        <div className="mx-5">
          <h4 className="text-lg font-semibold">PROJECT - #001</h4>
          <h3 className="font-extrabold text-4xl my-4">Ambar.pet</h3>
          <div className="flex flex-wrap mb-4">
            <span class="border border-black px-5 py-1 uppercase text-gray-600 font-semibold text-sm mr-4">
              Vue
            </span>
            <span class="border border-black px-5 py-1 uppercase text-gray-600 font-semibold text-sm mr-4">
              PWA
            </span>
            <span class="border border-black px-5 py-1 uppercase text-gray-600 font-semibold text-sm mr-4">
              Bootstrap
            </span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque veniam quas ducimus
            voluptate, nesciunt accusantium omnis amet nam adipisci minus? Eveniet aperiam ducimus
            culpa, vitae consectetur odit fugiat minima!
          </p>

          <Link href="/project/ambar" outlined className="my-6" style={{ margin: '30px' }}>
            Ver proyecto
          </Link>
        </div>

        <div className="flex items-center">
          <a href="" className="w-100">
            <img src="/ambar-pet.png" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Featured
