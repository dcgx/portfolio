import { useState } from 'react'

import NavbarLink from './NavbarLink'
import { Link } from '@components'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [lang, setLang] = useState('es')
  const { theme, setTheme } = useTheme()

  const handleSwitchLang = () => {
    // if (lang === 'es') {
    //   setLang('en')
    //   localStorage.setItem('lang', lang)
    //   return
    // }

    // setLang('es')
    // localStorage.setItem('lang', lang)
    return
  }

  const handleSwitchTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }

    setTheme('light')
  }

  return (
    <nav class="w-full px-10 flex justify-around items-center py-5 fixed top-0 backdrop-blur-xl z-50  dark:bg-gray-900">
      <div className="logo flex items-center flex-1">
        <div>D</div>
        {/* <span className="mx-2 text-2xl font-sans font-bold">Diego Castillo</span> */}
        {/* <a
          class="logo font-extrabold flex items-center text-dark text-2xl hover:border-b-2  border-b-2 border-b-transparent dark:text-white"
          href="/"
        >
          <img className="mr-4" src="/emoji.png" style={{ width: '35px' }} alt=""></img>
          dcgx.
        </a> */}
      </div>

      <ul class="md:flex justify-between hidden">
        {/* <NavbarLink href="/">Inicio</NavbarLink>
        <NavbarLink href="/">Sobre Mí</NavbarLink>
        <NavbarLink href="/">Experiencia</NavbarLink>
        <NavbarLink href="/">Proyectos</NavbarLink> */}
      </ul>

      <div className="flex flex-1 gap-4 justify-end items-center">
        <small className="text-gray-500 mr-5">2022</small>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          class="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700 general-ring-state"
          onClick={handleSwitchTheme}
        >
          {theme === 'light' ? (
            <div>
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
                ></path>
              </svg>
            </div>
          ) : (
            <div>
              <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="3.25"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></circle>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 2.75V4.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 6.75L16.0659 7.93416"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21.25 12.0001L19.75 12.0001"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 17.2501L16.0659 16.066"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 19.75V21.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.9341 16.0659L6.74996 17.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.25 12.0001L2.75 12.0001"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.93405 7.93423L6.74991 6.75003"
                ></path>
              </svg>
            </div>
          )}
        </button>
        <button
          className="cursor-not-allowed flex items-center justify-center w-12 h-12 bg-white  border-none rounded-full dark:bg-midnight general-ring-state select-none"
          onClick={handleSwitchLang}
        >
          {lang === 'es' ? (
            <img src="/spain.png" width={40} alt=""></img>
          ) : (
            <img src="/uk.png" width={40} alt=""></img>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
