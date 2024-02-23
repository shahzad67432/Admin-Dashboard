import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const Cart = () => {
  return (
    <div>
      <TooltipComponent content='cart' >
        <button
          onClick={()=>{}}
          type='button'
          className="text-xl rounded-full hover:bg-light-gray block"
        >
          <MdShoppingCart/>
        </button>
      </TooltipComponent>
    </div>
  )
}

export default Cart