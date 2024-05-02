"use client"
import React ,{useEffect,useState}from 'react'
import MeetingTimeDataSelection from './_components/MeetingTimeDataSelection'
import { collection, getFirestore, query ,getDocs,where} from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig';

function SharedMeetingEvent({params}) {

    const db = getFirestore(app);
    useEffect(() => {

        params&&getMeetingBusinessAndEventDetail();
        
    }, [params]);
    const getMeetingBusinessAndEventDetail=async()=>{
        const q = query(collection(db,'Business'),where('BusinessName','=',params.business))
        const docSnap = await getDocs(q);
        docSnap.forEach((doc) => {
          console.log(doc.data());
        });
    }

  return (
    <div>
        <MeetingTimeDataSelection/>
    </div>
  )
}

export default SharedMeetingEvent