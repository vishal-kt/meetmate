import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'

function TimeDataSelection({date,handleDateChange,timeSlots,setSelectTime,enableTimeSlot}) {
  return (
    <div> <div className='md:col-span-2 flex px-4'>
    <div className='flex flex-col'>
      <h2 className='font-bold text-lg'>Select Date & Time</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(d)=>handleDateChange(d)}
        className="rounded-md border mt-5"
        disabled={(date)=>date<=new Date()}
      />
    </div>
    <div className='flex flex-col w-full 
    overflow-auto gap-4  p-5'
    style={{maxHeight:'400px'}}
    >

      {timeSlots?.map((time,index)=>(
      <Button
      disabled={!enableTimeSlot}
    onClick={()=>setSelectTime(time)}
      className="border-primary text-primary" variant="outline"
      >{time}</Button>))}


    </div>
  </div> </div>
  )
}

export default TimeDataSelection