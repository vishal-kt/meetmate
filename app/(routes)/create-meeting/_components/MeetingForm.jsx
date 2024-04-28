"use client"
import LocationOption from '@/app/_utils/LocationOption'
import ThemeOption from '@/app/_utils/ThemeOption'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ChevronLeft, Divide } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React ,{useState}from 'react'

function MeetingForm() {

    const [duration ,setDuration] = useState(15);
    const [location, setLocation] = useState();
    const [themeColor, setThemeColor] = useState();
    const handleDurationChange = (value)=>{
            setDuration(value)
    }
  return (
    <div className='p-4'>

    <Link href={'/dashboard'}>
        <h2 className='flex gap-2'>
            <ChevronLeft/>Cancel</h2> </Link>
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
                <Button variant="outline" className="max-w-40">
                     {duration}  Min</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem 
                    onClick={()=>handleDurationChange(15)}
                    >15 Min</DropdownMenuItem>
                    <DropdownMenuItem 
                    onClick={()=>handleDurationChange(30)}
                    >30 Min</DropdownMenuItem>
                    <DropdownMenuItem
                    onClick={()=>handleDurationChange(45)}
                    >45 Min</DropdownMenuItem>
                    <DropdownMenuItem
                     onClick={()=>handleDurationChange(60)}
                    >60 Min</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        <h2 className='font-bold'>Location * </h2 >
            <div className='grid grid-cols-4 gap-3'>
             {LocationOption.map((option, index)=>(
                <div className={` border flex flex-col justify-center items-center p-3 rounded-lg 
                    cursor-pointer
                    hover:bg-blue-100 hover:border-primary
                    ${location==option.name&&'bg-blue-100 border-primary'}`} 
                    onClick={()=>setLocation(option.name)}
                    >
                      <Image src={option.icon} width={30} height={30} alt={option.name}/>  
                        <h2>{option.name}</h2>
                    </div>
                ))}

              
                </div>
                {location&&<>
                <h2 className='font-bold'>Add  
                 <span  className='text-blue-800'> {location}  </span>
                 Url</h2>
                <Input placeholder="Add URl"></Input> 
                </>}
               <h2 className='font-bold'>Select Theme Color</h2> 
                    <div className='flex justify-evenly'>
                        {ThemeOption.map((color,index)=>(
                            <div className={`h-7 w-7 rounded-full cursor-pointer ${themeColor==color&&'border border-black '}`}
                            style={{backgroundColor:color}}
                            onClick={()=>setThemeColor(color)}
                            >
                            </div>
                        ))}
                    </div>
       
        </div>

        <Button className="w-full">Create Meeting</Button>
    </div>

  )
}

export default MeetingForm