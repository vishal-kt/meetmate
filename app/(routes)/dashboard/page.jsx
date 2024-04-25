'use client'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
import {getFirestore} from "firebase/firestore"
import { app } from '@/config/FirebaseConfig'
const Dashboard = () => {
  
  const db = getFirestore(app);

  //to get user info from kinde you need to this 

  const {user}   = useKindeBrowserClient();
  const isBusinessRegistered = async()=>{

    //get data code 

    const docRef = doc(db,"Business",user.email)
    
  }
  
  return (
    <div>Dashboard
      <LogoutLink>Logout</LogoutLink>
    </div>
  )
}

export default Dashboard