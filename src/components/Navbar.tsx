import logo from "../assets/image/header.png"
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaFacebook onClick={() => (window.location.href = "https://www.facebook.com/sino.si.drei/")}/>
                <FaInstagram onClick={() => (window.location.href = "https://www.instagram.com/sino.si.drei/")}/>
                <FaGithub onClick={() => (window.location.href = "https://github.com/simplyandrei")}/>
            </div>
        </nav>
    )
}

export default Navbar;