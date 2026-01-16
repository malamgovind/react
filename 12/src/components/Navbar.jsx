import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Demo website</div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="profile">
        <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Vipul" />
        <span>React</span>
      </div>
    </nav>
  )
}

export default Navbar