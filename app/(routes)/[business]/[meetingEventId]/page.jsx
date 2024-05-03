"use client"
import React ,{useEffect,useState}from 'react'
import MeetingTimeDataSelection from './_components/MeetingTimeDataSelection'
import { collection, getFirestore, query ,getDocs,where, getDoc, doc} from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig';

function SharedMeetingEvent({params}) {

    const db = getFirestore(app);
    const [businessInfo, setBusinessInfo] = useState();
    const [eventInfo, setEventInfo] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        params&&getMeetingBusinessAndEventDetail();
        
    }, [params]);
    const getMeetingBusinessAndEventDetail=async()=>{
      setLoading(true)
        const q = query(collection(db,'Business'),where('businessName','==',params.business))
        const docSnap = await getDocs(q);
        docSnap.forEach((doc) => {
          setBusinessInfo(doc.data());
        });

        const docRef = doc(db,'MeetingEvent',params.MeetingEventId);
        const result = await getDoc(docRef)
        setEventInfo(result.data());
        setLoading(false)
        console.log(eventInfo);
    }

  return (
    <div>
        <MeetingTimeDataSelection eventInfo={eventInfo}
        businessInfo={businessInfo}/>
    </div>
  )
}

export default SharedMeetingEvent