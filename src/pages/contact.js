export default function Home({ projects }) {
  return (
    <main className="max-w-screen-xl mx-auto h-screen">
      <h3>Contact</h3>
    </main>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/projects');
//   const projects = await res.json();

//   console.log({ projects });

//   return {
//     props: {
//       projects: projects,
//     },
//   };
// }
