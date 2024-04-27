import React from 'react'
import SideNavBar from './_components/SideNavBar'
import DashboardHeader from './DashboardHeader'

function DashboardLayout({children}) {
  return (
    <div>
        <div className='
        hidden md:block md:w-64 bg-slate-100 h-screen fixed'>
            <SideNavBar/>
        </div>
        <div className='ml-64'>
            <DashboardHeader/>
            {children}
        </div>
    </div>
    
  )
}

export default DashboardLayout