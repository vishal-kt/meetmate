"use client"
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { getFirestore ,collection,query, where ,getDocFromServer } from 'firebase/firestore'

import React from 'react'

const MeetingEventList = () => {

    const db = getFirestore(app)
    const {user} = useKindeBrowserClient();

  return (

    <div>MeetingEventList</div>
  )
}

export default MeetingEventList