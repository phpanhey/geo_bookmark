import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
const Header = () => {
    return (
        <div className="container m-4 flex flex-wrap">
            <div className="w-1/4">
                <Link to="/">
                <img src={logo} alt="geo bookmark logo" />
                </Link>
            </div>
            <div className="w-3/4 flex justify-end">
                <nav>
                    <Link className="hover:text-green-500 text-3xl uppercase font-black m-2 tracking-tighter" to="/Map">map</Link>
                    <Link className="hover:text-green-500 text-3xl uppercase font-black m-2 tracking-tighter" to="/">add</Link>
                    
                </nav>
            </div>
        </div>
    )
}

export default Header
