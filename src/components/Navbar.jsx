import React from 'react';
import { Link } from 'react-router-dom';
import CElogo from '../assets/images/CEConsulting.png';
import Dots from '../assets/images/dots.png'

export default function Navbar() {
    return (
        <nav>
            <div className="header">
                <Link to="/">
                    <img className="CElogo" src={CElogo} alt="Home"/>
                </Link>
                <img className="dots" src={Dots}></img>
            </div>
        </nav>
    )
}