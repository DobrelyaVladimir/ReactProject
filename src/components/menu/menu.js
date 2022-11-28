import './style.scss';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    const imagies = [
        {src: "../assets/screen1.png"},
        {src: "../assets/screen2.png"},
        {src: "../assets/screen3.png"},
        {src: "../assets/screen4.png"}
    ]

    return (
        <nav className='menu'>
            <h1>Game "Memory"</h1>
            <ul>
                <li>
                    <NavLink to="/Game1x4" className={({ isActive }) => isActive ? " actived" : ''}>
                        <img src={imagies[0].src}/>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Game2x4" className={({ isActive }) => isActive ? " actived" : ''}>
                        <img src={imagies[1].src}/> 
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Game3x4" className={({ isActive }) => isActive ? " actived" : ''}>
                        <img src={imagies[2].src}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Game4x4" className={({ isActive }) => isActive ? " actived" : ''}>
                        <img src={imagies[3].src}/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}