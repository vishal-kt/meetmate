"use client"
import { Button } from '@/components/ui/button'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { getFirestore ,collection,query, where , getDocs, deleteDoc ,doc } from 'firebase/firestore'
import { Clock,MapPin,Copy, Settings , Pen,Trash } from 'lucide-react'

import React ,{useState,useEffect}from 'react'
import { toast } from 'sonner'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MeetingEventList = () => {

    const db = getFirestore(app)
    const {user} = useKindeBrowserClient();

    const [eventList , setEventList] = useState([]);
      useEffect(() => {
        
        user&&getEventList();
      }, [user]);

    const getEventList = async ()=>{

      setEventList([]);
      const q = query(collection(db,"MeetingEvent"),where("createdBy","==",user?.email))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        console.log(doc.id ,"=>",doc.data());
        setEventList(prevEvent=>[...prevEvent,doc.data()])
      });
    }


    const onDeleteMeetingEvent = async(event)=>{
        await deleteDoc(doc(db,"MeetingEvent",event?.id))
        .then(resp=>{toast('Meeting Event Deleted!');
        getEventList()
      })
    }
    
  return (

    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7' >
        {eventList.length>0?eventList?.map((event,index)=>(
          <div className='border shadow-md border-t-8  rounded-lg p-5 
          ' style={{borderTopColor:event?.themeColor}}>
             <div className='flex justify-between'>
             <h2 className='font-medium text-xl capitalize  '
              style={{color:event?.themeColor}}>{event?.eventName}</h2>

              <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <Settings className='cursor-pointer'/> 
              </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="flex gap-2"><Pen/> Edit</DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2" 
              onClick={()=>onDeleteMeetingEvent(event)}
              > 
              
              <Trash/> Delete</DropdownMenuItem>
            </DropdownMenuContent>
              </DropdownMenu>
             </div>
              
              <div className='flex  gap-2 mt-2'>
                <Clock/>
                 <h2> {event.duration} Mins</h2>
              </div>

              <div className='flex gap-2 my-3'> 
              <MapPin/>
              <h2>{event.locationType}</h2>
              </div>
              
              <hr></hr>

              <div className='flex justify-between'>
                <h2 className='flex gap-2 mt-2 text-sm text-primary items-center cursor-pointer'
                onClick={()=>{
                  navigator.clipboard.writeText(event?.locationUrl)
                  toast('Url copied successfully')
                }}
                ><Copy className='h-4 w-4'/>Copy Link</h2>
              
                <Button variant="outline"
                 className=" rounded-full  mt-2"> Share</Button>
              </div>


            </div>
        )):
        <h2>Loading........</h2>}
    </div>
  )
}

export default MeetingEventList