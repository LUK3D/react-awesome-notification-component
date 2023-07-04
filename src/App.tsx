import { useState } from 'react';
import Notification from './components/notification'
import { INotificationItem } from './components/notification/types';

function App() {

  const [notifications, setNotifications] = useState<INotificationItem[]>([
    {
      id:"faee5a9f-2783-5c15-9b6a-439cf1cf1bcc",
      source:"Harriet",
      body:"exist experiment kitchen seat direct command ",
      date:"8/15/2083",
     
    },
    {
      id:"630f1e84-6ba2-5a02-9470-f6780376c696",
      source:"Leroy",
      body:"form sheep coal second difference block ",
      date:"8/15/2083",
      confirmed:true,
      isConfirmable:true,
      isCancelable:true
    },
  
    {
      id:"ba1c968c-1c18-5ee1-bfcf-680877d7d87e",
      source:"Emily",
      body:"replied unknown idea nearly child chose ",
      date:"8/15/2083",
      isConfirmable:true,
      isCancelable:true
    },
    {
      id:"b0038afa-92fe-5fbc-80c1-9acf9793fc46",
      source:"Ryan",
      body:"angry cast summer rhyme city watch ",
      date:"8/15/2083",
      isCancelable:true
    },
    {
      id:"0902c0ff-26a8-5e46-b201-21886d5c6113",
      source:"Adelaide",
      body:"onto summer upper develop hard political ",
      date:"8/15/2083",
      isConfirmable:true,

    },
    {
      id:"46b52c7d-c45f-5a9b-a75a-3a9e01b89f91",
      source:"Adelaide",
      body:
        <div className='w-full p-4 flex flex-col'>
          <img 
            src="https://images.pexels.com/photos/17369050/pexels-photo-17369050.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
              className='w-full h-[150px] object-cover rounded-[10px]'
            />
            <p className='text-sm text-gray-400 font-normal'> my definition stop limited birth mile cup gone caught hay driver metal flies mill source weak minerals am saved enjoy planned man sheep task</p>
        </div>,
      date:"8/15/2083",
      isConfirmable:true,
      isCancelable:true,

    },
  ]);

  const onNotificationConfirm = (id:string)=>{
    setNotifications(notifications.map((n)=>{
      if(n.id == id){
        n.confirmed = true;
      }
      return n;
    }));
  }
  const onNotificationCancel = (id:string)=>{
    setNotifications(notifications.map((n)=>{
      if(n.id == id){
        n.confirmed = false;
      }
      return n;
    }));
  }

  return (
    <div className="w-screen h-screen bg-[#E2E6E9] p-10 flex flex-col items-center">
      <Notification 
        items={notifications} 
        onConfirm={onNotificationConfirm} 
        onCancel={onNotificationCancel}
      ></Notification>
    </div>
  )
}

export default App
