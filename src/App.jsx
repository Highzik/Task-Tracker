import Home from "./components/Home"
import '/src/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from "react"

function App() {
  const [data, setData] = useState([
    { id: 1, task: 'Bogiloli suit fitting', place: 'Linnegotan 2, Gothenburg', time: '9am' },
    { id: 2, task: 'Final design delivery', place: 'Inuse Experience, Lagos Island', time: '11am' },
    { id: 3, task: 'Lunch run meeting', place: 'Victoria Garden City VGC', time: '12am' },
    { id: 4, task: 'Record techno mixtape', place: 'Klockwork Studios, Maryland', time: '7pm' },
  ])
  return (
    <div className="container">
      <Home />
    </div>
  )
}

export default App
