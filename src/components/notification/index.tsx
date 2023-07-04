import { useState } from "react";
import { INotification } from "./types";
import { BellIcon } from "@heroicons/react/24/outline";
import NotificationItem from "./notification-item";

export default function Notification({
    items,
    isOpen,
    emptyText="No Notifications 🔔", 
    onCancel,
    onConfirm,
    onNotificationClick
}:INotification) {
    const [open, setOpen] = useState(isOpen);
  return (
    <div className="relative">
        <button 
            onClick={()=>setOpen(!open)}
            className="bg-white p-3 rounded-full active:bg-opacity-80 relative shadow-md"
        >
            <BellIcon className="w-6 h-6 text-pink-500"></BellIcon>
            {items.length > 0 && <div className="
                absolute top-0 right-0 border-2 bg-pink-500 border-white
                rounded-full text-white text-xs w-[20px] h-[20px]
            ">{items.length}</div>}
        </button>
        {open && <div className="w-[320px] h-[400px] bg-white absolute right-0 top-[70px] rounded-lg flex flex-col shadow-lg border">
            <div className="w-[25px] h-[25px] bg-white -top-2 right-3 transform rotate-45 absolute roundedsm z-0 border"></div>
            <div className="w-full px-4 py-2 border-b flex justify-between items-center z-10 h-14 bg-white rounded-t-lg">
               {items.length > 0 && <> 
                <p className="bg-pink-500 w-6 h-6 text-center text-white rounded-md">{items.length}</p>
                <a href="#" className="text-sm text-blue-500">Mark all as Read</a>
                </>}
            </div>
            <ul className="w-full h-full overflow-y-auto">
                {
                    items.length == 0?
                    <p className="text-center text-2xl text-gray-400 py-4">{emptyText}</p>
                    :items.map((n)=>(<NotificationItem 
                        key={n.id}
                        {...n}
                        onCancel={onCancel}
                        onConfirm={onConfirm}
                        onNotificationClick={onNotificationClick}
                        ></NotificationItem>))
                }
            </ul>
            <div className="w-full px-4 py-2 border-t flex justify-center items-center">
                <a href="#" className="text-sm text-blue-500">Load more</a>
            </div>
        </div>}
    </div>
  )
}
