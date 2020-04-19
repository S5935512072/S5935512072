import React from 'react'
import {Link} from 'react-router-dom'
import SigndInLinks from './SignedInLink'

const Navbar = () => {
    return (
        <nav className="blue">
            <div className="container">
                <Link to='/' className="">Dog</Link>
                <SigndInLinks />
            </div>
        </nav>
    )
}

export default Navbar