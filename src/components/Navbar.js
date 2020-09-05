import React from 'react'
import {Link} from 'gatsby'
const Navbar = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='navList'>
          <li>
            <Link to='/' className='navItem' >Home</Link>
          </li>
          <li>
            <Link to='/blog' className='navItem'>Blog</Link>
          </li>
          <li>
            <Link to='/products' className='navItem' >Products</Link>
          </li>
          <li>
            <Link to='/examples' className='navItem'>Examples</Link>
          </li>
          <li>
            <Link to='/images' className='navItem'>Images</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
