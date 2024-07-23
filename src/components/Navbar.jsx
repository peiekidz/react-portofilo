import logo from "../assets/logowhite.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center" >
            <img className="mx-3 w-24" src={logo} alt=""/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
            <a href="https://www.linkedin.com/in/fery-febriawan-858943166/"><FaLinkedin/></a>  
            <a href="https://github.com/peiekidz"><FaGithub/></a>
            <a href="https://www.instagram.com/pei_ekidz/"><FaInstagram/></a>
        </div>
    </nav>
}

export default Navbar;