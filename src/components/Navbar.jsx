import { Link } from "react-router-dom"
import logo from "/logo.jpg"



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
      <Link to="/" className="text-[40px] font-normal tracking-wider relative group">
      <span className="font-semibold">W</span>e<span className="font-semibold">H</span>e <span className="font-semibold ">Studio</span>
      </Link>
    </nav>
  )
}

export default Navbar