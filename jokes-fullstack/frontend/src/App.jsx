import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
  
  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => setJokes(res.data))
      .catch((error) => console.log(error))
  })
  return (
    <>
      <h1>Jokes</h1>
      <h2>Number of Jokes : {jokes.length}</h2>
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}
export default App