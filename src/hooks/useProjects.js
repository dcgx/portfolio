import { useFetch } from '@hooks'

const useProjects = () => {
  const { fetching, data } = useFetch('/api/projects')

  return { fetching, projects: data }
}

export default useProjects
