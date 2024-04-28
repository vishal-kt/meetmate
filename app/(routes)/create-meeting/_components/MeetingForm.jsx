"use client"
import LocationOption from '@/app/_utils/LocationOption'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ChevronLeft, Divide } from 'lucide-react'
import Image from 'next/image'
import React ,{useState}from 'react'
function MeetingForm() {



  return (
    <div className='p-4'>

        <h2 className='flex gap-2'>
            <ChevronLeft/>Cancel</h2>
        <div className='mt-4'>
            <h2 className='font-bold text-2xl my-4'>Create New Event</h2>
            <hr></hr>
        </div>

        <div className='flex flex-col gap-3 my-4'>
            <h2 className='font-bold'>Event Name*</h2>
            <Input placeholder="Name of your meeting event"></Input>
            <h2 className='font-bold'>Duration *</h2>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" className="max-w-40">30 Min duration</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>15 Min</DropdownMenuItem>
                    <DropdownMenuItem>30 Min</DropdownMenuItem>
                    <DropdownMenuItem>45 Min</DropdownMenuItem>
                    <DropdownMenuItem>60 Min</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <h2 className='font-bold'>Location * </h2 >

            <div className='grid grid-cols-4 gap-3'>
                {LocationOption.map((option, index)=>(
                    <div className=' border flex flex-col justify-center items-center p-3 rounded-lg 
                    cursor-pointer
                    hover:bg-blue-100'>
                      <Image src={option.icon} width={30} height={30} alt={option.name}/>  
                        <h2>{option.name}</h2>
                    </div>
                ))}

                <h2 className='font-bold'>Add Url</h2>
                <Input placeholder="Add URl"></Input>
            </div>
            </div>
    </div>
  )
}

export default MeetingForm