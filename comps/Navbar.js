import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className='log'>
                <h1>Ninja List</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>Aboutt</a></Link>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>

        </nav>
    )
}

export default Navbar
