import React from 'react'
import { useStateContext } from "../context/ContextProoovider";
import {Link} from 'react-router-dom'
import { SiShopware } from "react-icons/si";
import {Notification, Chat, Cart} from '../components'

const Navbar = () => {
  const {activeMenu} = useStateContext();
  return (
    <div className=' flex align-center justify-between'>
        <MenuButton/>
        <div>
          {!activeMenu && (
            <Link
              to={"/"}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>shoopy</span>
            </Link>
          )}
        </div>
        <div className="items-center gap-6 mr-3 mt-4 flex text-m  tracking-tight dark:text-white text-slate-900">
          <Notification/>
          <Chat/>
          <Cart/>
        </div>
    </div>
  )
}

function MenuButton() {
  const {activeMenu, setActiveMenu} = useStateContext();
  return ( <>
    <div>
    {!activeMenu && (
      <button 
        type='button'
        onClick={()=> setActiveMenu(true)}
        className="items-center gap-3 ml-3 mt-4 flex text-m  tracking-tight dark:text-white text-slate-900"
      >
        Menu
      </button>
      )}
    </div>
  </> );
}


export default Navbar