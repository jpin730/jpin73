import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { Project } from '../types'

export const getAllProjects = async () => {
  const collectionRef = collection(db, 'projects')
  const querySnapshot = await getDocs(collectionRef)
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Project
  )
}
