import React from 'react'
import { MdChat} from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


const Chat = () => {
  return (
    <div>
      <TooltipComponent content='cart' >
        <button
          onClick={()=>{}}
          type='button'
          className="text-xl rounded-full hover:bg-light-gray block"
        >
          <MdChat/>
        </button>
      </TooltipComponent>
    </div>
  )
}

export default Chat