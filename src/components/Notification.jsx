import React from 'react'
import { MdNotifications } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Notification = () => {
  return (
    <div>
      <TooltipComponent content='cart' >
        <button
          onClick={()=>{}}
          type='button'
          className="text-xl rounded-full hover:bg-light-gray block"
        >
          <MdNotifications/>
        </button>
      </TooltipComponent>
    </div>
  )
}

export default Notification