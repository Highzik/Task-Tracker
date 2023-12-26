import Button from './Button'
import img1 from '/src/images/gettyImage3.jpg'
import { FaTimes } from 'react-icons/fa'
import '/src/index.css'

const Home = ({ data, toggleForm, showData, clearAll, dataLength, onDelete }) => {
  return (
    <>
      {showData && <div className='container'>
        <img src={img1} alt="" className='img-fluid mw-100' />
        <p className='inbox'>INBOX</p>
        {data.map((data) => (
          <div key={data.id} className='data--container'>
            <h4 className='data--task'>{data.task}</h4>
            <h4 className='data--place'>{data.place}</h4>
            <p className='data--time'>{data.time}</p>
            <div className='icon--container'>
              <FaTimes
                title='Delete'
                onClick={() => onDelete(data.id)}
                className='times--delete' />
            </div>
            <hr />
          </div>))}
        {data.length === 0 && <p className='noMore--task'>You have no ({data.length}) Tasks To Show</p>}
        <div className='footer--container'>
          <div className="subFooter--container">
            <p className='completed--data'>COMPLETED</p>
            <button className='number--data'>{data.length}</button>
          </div>
          <div className="">
            <Button
              title={'Go to form'}
              toggleForm={toggleForm}
            />
          </div>
        </div>
        {dataLength && <button
          onClick={clearAll}
          className='col-12 mt-4 clearAll--btn'>CLEAR ALL TASKS</button>}
      </div>}
    </>
  )
}

export default Home