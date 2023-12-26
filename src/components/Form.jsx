import '/src/index.css'
import { FaLongArrowAltLeft, FaUsers, FaShoePrints } from 'react-icons/fa'
import { useState } from 'react'

const Form = ({ showForm, arrowBack, newData }) => {
  const [task, setTask] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    newData({ task, place, time, reminder })

    setTask('')
    setPlace('')
    setTime('');
    setReminder(false)
  }

  return (
    <div className='container form--container'>
      {showForm && <div>
        <div className='form--header'>
          <FaLongArrowAltLeft title='Go Home'
            onClick={arrowBack}
            className='back--arrow' />
          <p className='formCenter--text'>Add new thing</p>
          <FaUsers className='back--arrow' />
        </div>
        <div className='text-center mb-4'>
          <button className="text-center shoe--prints"><FaShoePrints /></button>
        </div>
        <form onSubmit={submitForm}>
          <input
            className='col-12 mb-2 task--form'
            type="text"
            placeholder='Enter Task'
            required
            value={task}
            name={task}
            onChange={(e) => setTask(e.target.value)}
          /><br />

          <input
            className='col-12 mb-2 place--form'
            type="text"
            placeholder='Enter Place'
            required
            value={place}
            name={place}
            onChange={(e) => setPlace(e.target.value)}
          /><br />

          <input
            className='col-12 mb-2 time--form'
            type="time"
            placeholder='Enter Time'
            required
            value={time}
            name={time}
            onChange={(e) => setTime(e.target.value)}
          /><br />

          <label
            className='notify--me'
            htmlFor="text">Notification</label>
          <input
            type="checkbox"
            value={reminder}
            // name={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          /><br />

          <input
            className='col-12 mt-4 submit--btnn'
            type="submit"
            value={'ADD YOUR THING'} />

        </form>
      </div>}


    </div >
  )
}

export default Form