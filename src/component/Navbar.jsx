import React from 'react'
import Logo from '../assets/Logo.png'
import Photo from '../assets/joao.png'

const Navbar = () => {
  return (
    <div className='shadow-md min-w-60 h-full bg-bg-navbar'>
      <div className='flex flex-col mt-12 items-center gap-4'>
        <img src={Logo} alt="logo da navbar" className='h-[5rem] min-w-4 object-contain'  />
        <button className='border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]'>Close</button>
        <button className='border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]'>Home</button>
        <button className='border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]'>About us</button>
        <button className='border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]'>Projetos</button>
        <button className='border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]'>Chat</button>

        <div className='flex items-center mt-[300px] w-auto flex-row text-center w-[8rem]'>
          <img src={Photo} alt="Foto do usuário" />
          <h1 className='ml-2 text-white font-Inter'>João da Silva</h1>
        </div>

        <div>
          <button className='border-[1px] bg-button-navbar h-14 rounded-lg text-white font-Inter w-[12rem]'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar