import { createRoutesFromElements, Route } from 'react-router-dom'
import DisneyCharacter from './components/DisneyCharacter'
import Main from './components/Main.tsx'

export default createRoutesFromElements(
  <Route path="/">
    <Route index element={<Main />}/>
    <Route path="game/:id" element={<DisneyCharacter />} />
  </Route>
  

)
