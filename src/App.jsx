import React from 'react'
import useAuth from './hooks/useAuth'

function App() {
   const { data } = useAuth() 
  

  return (
    <div> {data} </div>
  )
}

export default App