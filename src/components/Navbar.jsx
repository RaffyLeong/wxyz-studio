import { Link } from "react-router-dom"
import logo from "/logo.jpg"
import WXYZ from "/WXYZ.jpg"


const Navbar = () => {
  return (
    <nav className="px-[36px] py-[48px] flex justify-between items-center  "> 
      {/* Logo  */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img className=" w-[64px] h-[64px]" src={logo} alt="Logo"/>
        </Link>
      </div>

      {/* Title  */}
      <Link to="/">
      <img className=" w-[200px] h-[30px]" src={WXYZ} alt="WXYZ"/> 
      </Link>
    </nav>
  )
}

export default Navbar