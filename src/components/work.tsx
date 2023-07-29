import React from 'react'
import {Briefcase, MoveDown} from 'lucide-react';
import { works } from '@/utils/work';
import { Icons } from './icons';

export default function Work() {
  return (
    <div className='mt-12 p-0 md:p-6 '>
   <div className="p-6 border border-gray-200 shadow-none dark:shadow-md dark:border-gray-600 rounded-lg dark:bg-black/[0.2] border-1">
   <div className="flex items-center space-x-2">
    <Briefcase className='w-6 h-6 text-gray-400' />
    <span className='dark:text-gray-200 text-sm'>Work</span>
   </div>
  <div className="mt-6">
  {
    works.map(work => {
        const WorkIcon = Icons[work.icon]
         return (

             <div key={work.name} className="mt-4 flex justify-between items-center">
     <div className="space-x-4 flex items-center">
        <div className='h-[36px] rounded-full  border-gray-500/[0.5] flex items-center justify-center border-2 w-[36px]'>
            <WorkIcon />
        </div>
        <div className="flex space-y-0.5 flex-col">
            <div className='text-[14px]'>{work.name}</div>
            <p className='text-xs font-thin text-gray-400 '>{work.post }</p>
        </div>
     </div>
     <div className='text-xs text-gray-500'>
         {work.duration}
     </div>
 </div>
             )
})
   
   }
  </div>
   <button className='mt-6 text-sm text-gray-200 hover:bg-gray-800 flex items-center justify-center text-[15px] px-4 py-2 w-full bg-gray-900'>
    Download CV 
    <MoveDown className='h-4 w-4 ml-2' />
   </button>
   </div>
    </div>
  )
}