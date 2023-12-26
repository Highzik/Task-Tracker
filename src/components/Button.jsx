import { FaPlus } from "react-icons/fa"
import '/src/index.css'

const Button = ({ toggleForm, title }) => {
  return (
    <div>
      <button
        title={title}
        onClick={toggleForm}
        className="btn--form"><FaPlus /></button>
    </div>
  )
}

export default Button