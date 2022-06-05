import { Hero, About, Jobs, Projects } from '@components'

export default function Home({ projects }) {
  return (
    <main>
      <Hero />
      <Jobs />
      <Projects />
      <About />
    </main>
  )
}

export async function getStaticProps() {
  // const res = await fetch('/api/projects')
  // const projects = await res.json()

  return {
    props: {
      projects: []
    }
  }
}
