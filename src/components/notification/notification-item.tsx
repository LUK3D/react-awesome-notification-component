import { INotificationItem } from './types'
import { ClockIcon, CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function NotificationItem({
    id,
    source, 
    date, 
    body, 
    meetDate, 
    meetHour, 
    onCancel, 
    onConfirm, 
    onNotificationClick,
    confirmed,
    confirmedText = "Confirmed",
    cancelButtonText = "Cancel",
    confirmButtonText = "Confirm",
    isConfirmable,
    isCancelable
}:INotificationItem) {
  return (
    <li className='w-full flex flex-col px-4 py-2 border-b hover:bg-gray-100 cursor-pointer' onClick={()=>onNotificationClick?.(id)}>
        <div className='w-full flex justify-between items-center text-xs text-gray-400'>
            <p>{source}</p>
            <p>{date}</p>
        </div>
        <p className='text-sm font-semibold text-gray-800'>{body}</p>
        {
            meetDate && <div className='w-full flex items-center text-xs text-gray-400'>
                <p>Meeting:</p>
                <CalendarDaysIcon className='w-4 h-4 mx-1'></CalendarDaysIcon>
                {meetDate}
                {meetHour && <ClockIcon className='w-4 h-4 mx-1'></ClockIcon>}
                {meetHour}
            </div>
        }
        <div className='w-full flex items-center mt-2'>
            {
                (isCancelable && confirmed == undefined) &&
                <button onClick={()=>{
                        onCancel?.(id)
                    }}
                    className='transform active:scale-95 p-[1.3px] px-[1.6px] rounded-md mr-2 text-xs bg-gradient-to-r from-pink-500 to-yellow-500'
                >
                    <div className='px-2 py-[2px] w-full h-full bg-white rounded-md'>
                        {cancelButtonText}
                    </div>
                </button>
            }
            {(isConfirmable && confirmed == undefined) &&
            <button
                onClick={()=>{
                    onConfirm?.(id);
                }}
                className='active:scale-95 rounded-md px-2 py-1 text-xs text-white bg-gradient-to-r from-pink-500 to-yellow-500'
            >
                {confirmButtonText}
            </button>
            }
        </div>
        {
            confirmed && <div className='w-full flex items-center text-pink-500'>
                <p className='text-xs'>{confirmedText}</p>
                <CheckCircleIcon className='w-3 h-3'></CheckCircleIcon>
            </div>
        }
    </li>
  )
}
