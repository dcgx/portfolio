import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firestore } from '../../firebase'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProjects().finally(() => setLoading(false))
  }, [])

  const projectsCollection = collection(firestore, 'projects')

  const getProjects = async () => {
    const projectsQuery = query(projectsCollection, where('enabled', '==', true))
    const querySnapshot = await getDocs(projectsQuery)
    const result = []

    querySnapshot.forEach((doc) => {
      console.log({ doc })
      result.push(doc.data())
    })

    setProjects(result)
  }

  return { projects, isLoading }
}
