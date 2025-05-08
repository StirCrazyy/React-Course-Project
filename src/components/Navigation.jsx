const Navigation = ({ onShowDetails }) => {
    return (
      <nav className="nav-bar">
        <div className="nav-logo">Conference Planner</div>
        <div className="nav-links">
          <a href="#rooms">Rooms</a>
          <a href="#addons">Add-ons</a>
          <a href="#meals">Meals</a>
        </div>
        <button className="show-details" onClick={onShowDetails}>
          Show Details
        </button>
      </nav>
    )
  }
  
  export default Navigation