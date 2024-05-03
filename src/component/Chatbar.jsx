import React from 'react'
import search from "../assets/search.svg";

const Chatbar = () => {
  return (
    <div className='w-[1/4] bg-fundoChat'>
        <button className="w-auto  h-14 max-h-32 text-search-text border-[1px] m-2 bg-search rounded-full flex flex-row items-center gap-[10px] pl-[0.5rem] text-left">
            <img src={search} alt="procura" />
            <span className="bg-black block h-6 w-[2px]"></span>
            Pesquise mensagem
          </button>
    </div>
  )
}

export default Chatbar