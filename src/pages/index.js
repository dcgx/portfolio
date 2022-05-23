import { Hero, About, Jobs, Featured, Projects, Articles } from '@components'

export default function Home({ projects }) {
  return (
    <main>
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      {/* <Articles /> */}
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
