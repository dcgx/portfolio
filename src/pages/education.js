import { BsBoxArrowUpRight } from 'react-icons/bs'

export default function Education() {
  return (
    <section className="w-full">
      <div className=" border border-gray-300 max-w-2xl mx-auto ">
        <h1>Educación</h1>

        <section>
          <div className="flex items-center justify-between ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_UTFSM.png/680px-Logo_UTFSM.png"
              width={110}
            ></img>
            <div className="flex-1 mx-10">
              <h6>Universidad Técnica Federico Santa María</h6>
              <p>Técnico Universitario en Informática</p>
              <time>2018 - 2021</time>
              <div className="flex items-center justify-end">
                <button className="flex items-center justify-center border border-slate-400 px-3 py-2 rounded-full hover:bg-slate-100">
                  Mostrar credencial
                  <BsBoxArrowUpRight className="mx-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_UTFSM.png/680px-Logo_UTFSM.png"
              width={110}
            ></img>
            <div className="flex-1 mx-10">
              <h6>Universidad Técnica Federico Santa María</h6>
              <p>Técnico Universitario en Informática</p>
              <time>2018 - 2021</time>
            </div>
          </div>
        </section>

        <hr className="mt-10" />

        <h1>Certificados y credenciales</h1>

        <section>
          <div className="flex items-center justify-between my-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vW1-rP7wCjodoBZTJ8oGeKQH-S3LlGWmNSYY6bC6CerDMLsoAQFo-Y9pY_ZN7gT2YBs&usqp=CAU"
              width={110}
            ></img>
            <div className="flex-1 mx-10">
              <h6>Curso Profesional de Arquitectura de Software</h6>
              <p>Platzi</p>
              <time>2018 - 2021</time>
            </div>
          </div>

          <div className="flex items-center justify-between my-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vW1-rP7wCjodoBZTJ8oGeKQH-S3LlGWmNSYY6bC6CerDMLsoAQFo-Y9pY_ZN7gT2YBs&usqp=CAU"
              width={110}
            ></img>
            <div className="flex-1 mx-10">
              <h6>Curso Profesional de Arquitectura de Software</h6>
              <p>Platzi</p>
              <time>2018 - 2021</time>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
