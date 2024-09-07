import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-pink-600 p-5 shadow-md flex justify-between items-center">
      <div className="flex items-center ml-10">
        <span className="text-black font-semibold text-lg">NVC Training Center</span> 
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-black hover:text-green-400">หน้าหลัก</NavLink></li> 
        <li><NavLink to="/Course" className="text-black hover:text-green-400">หลักสูตรที่เปิดสอน</NavLink></li>
        <li><NavLink to="/Contact" className="text-black hover:text-green-400">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
