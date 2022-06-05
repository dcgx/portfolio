import { useTheme } from 'next-themes'
const About = () => {
  const { theme } = useTheme()

  return (
    <section className="mt-10">
      <h2 className="text-center font-sans font-bold text-xl text-purple-800 mb-3">
        Do you want to know more about me?
      </h2>
      <a
        href="/about"
        className="text-center items-center text-5xl flex w-2/6 mx-auto justify-center cursor-pointer  font-bold mb-14 dark:text-gray-100 hover:border-b-4 hover:border-black"
      >
        <span className="mx-2">Read more about me</span>
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
    </section>
  )
}

export default About
