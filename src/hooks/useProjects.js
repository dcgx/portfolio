import { useFetch } from '@hooks'

const useProjects = () => {
  const { fetching, data } = useFetch('http://localhost:3000/api/projects')

  return { fetching, projects: data }
}

export default useProjects
