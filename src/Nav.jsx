import './App.css'
function Nav(){
    return(
        <nav className="navbar">
      <div className="logo-container">
        <img src='src\components\logo.png' alt="IMC Logo" className="logo-img" />
        <span className="logo-text">ISAMM Microsoft Club</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="home">Home</a></li>
        <li><a href="#team" className="team">Team</a></li>
        <li><a href="#events" className="events">Events</a></li>
        <li><a href="#join" className="join">Join</a></li>
      </ul>
    </nav>
    )
}
export default Nav