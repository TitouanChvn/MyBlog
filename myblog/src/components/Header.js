import LoginButton from "./LoginButton"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="header">
      <Link className="LinkToHome" to={('/')}>MyBlog</Link>
      header
      <LoginButton/>
    </div>
  )
}

export default Header
