import React from 'react';
import { Link } from 'react-router-dom';
import CElogo from '../assets/images/CEConsulting.png';
// import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav>
            <div className="header">
                <Link to="/">
                    <img className="CElogo" src={CElogo} alt="Home"/>
                </Link>
            </div>
        </nav>
    )
}