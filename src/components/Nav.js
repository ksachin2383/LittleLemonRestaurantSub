import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="topHeader">
            <img src={logo} className='mt-1 mb-2' alt="Little Lemon" />
            <nav>
                <ul className="ml-5 top-links no-underline text-black text-sm mt-2">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Menu</Link></li>
                    <li><Link to={"/booking"}>Reservations</Link></li>
                    <li><Link to={"/"}>Order Online</Link></li>
                    <li><Link to={"/"}>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}