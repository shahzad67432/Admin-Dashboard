import React from 'react'
import { useStateContext } from "../context/ContextProoovider";


const Navbar = () => {
  return (
    <div>
        <Button/>
    </div>
  )
}

function Button() {
  const {activeMenu, setActiveMenu} = useStateContext();
  return ( <>
    <div className= {!activeMenu}>
      <button onClick={()=> setActiveMenu(true)}>
        click me 
      </button>
    </div>
  </> );
}


export default Navbar