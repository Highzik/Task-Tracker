import Home from "./components/Home"
import '/src/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from "react"
import Form from "./components/Form"

function App() {
  const [data, setData] = useState([
    { id: 1, task: 'Bogiloli suit fitting', place: 'Linnegotan 2, Gothenburg', time: '9am', reminder: true },
    { id: 2, task: 'Final design delivery', place: 'Inuse Experience, Lagos Island', time: '11am', reminder: false },
    { id: 3, task: 'Lunch run meeting', place: 'Victoria Garden City VGC', time: '12am', reminder: false },
    { id: 4, task: 'Record techno mixtape', place: 'Klockwork Studios, Maryland', time: '7pm', reminder: true },
  ])

  //Function to add new data to the existing data
  const newDataItem = (newItemData) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newData = { ...newItemData, id }
    setData([...data, newData])
  }
  const [showForm, setShowForm] = useState(false);
  const [showData, setShowData] = useState(true);
  const [lengthOfData, setLengthOfData] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm)
    setShowData(!showData)
  }
  const arrowBack = () => {
    setShowForm(!showForm);
    setShowData(!showData);
  }

  //Function to clear all datas
  const clearAllTasks = () => {
    setData([])
    setLengthOfData(!lengthOfData)
  }

  //Function to delete datas one after the other
  const deleteData = (id) => {
    setData(data.filter((data) => data.id !== id))
  }

  return (
    <div className="container appContainer">
      <Home
        onDelete={deleteData}
        dataLength={lengthOfData}
        clearAll={clearAllTasks}
        showData={showData}
        toggleForm={toggleForm}
        data={data} />
      <Form
        newData={newDataItem}
        arrowBack={arrowBack}
        showForm={showForm} />
    </div>
  )
}

export default App
