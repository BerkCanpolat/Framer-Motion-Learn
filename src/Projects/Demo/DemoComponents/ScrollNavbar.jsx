import React from 'react'
import { Link } from 'react-router'

const ScrollNavbar = () => {
  return (
    <div className='pt-5'>
        <ul className='flex items-center justify-center gap-10'>
            <Link to={"/"}>
            <li className='bg-amber-200 px-5 py-2.5 rounded-2xl cursor-pointer'>Animation 1</li>
            </Link>
            <Link to={"two"}>
            <li className='bg-amber-200 px-5 py-2.5 rounded-2xl cursor-pointer'>Animation 2</li>
            </Link>
            <li className='bg-amber-200 px-5 py-2.5 rounded-2xl cursor-pointer'>Animation 3</li>
        </ul>
    </div>
  )
}

export default ScrollNavbar