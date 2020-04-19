import React from 'react'
import {Link} from 'react-router-dom'
import SigndInLinks from './SignedInLink'
import SigndOutLinks from './SignedOutLink'

const Navbar = () => {
    return (
        <nav className="blue">
            <div className="container">
                <Link to='/' className="">Dog</Link>
                <SigndInLinks />
                <SigndOutLinks />
            </div>
        </nav>
    )
}

export default Navbar