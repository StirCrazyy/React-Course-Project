import { useNavigate } from 'react-router-dom'
import '../styles/global.css'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="content">
        <h1>Conference Expense Planner</h1>
        <p>
          Welcome to the Conference Expense Planner. We help you budget and plan
          your perfect conference event with our state-of-the-art venues and
          professional services. Create detailed cost estimates for your events
          with our intuitive planning tools.
        </p>
        <button 
          className="get-started"
          onClick={() => navigate('/React-Course-Project/products')}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingPage