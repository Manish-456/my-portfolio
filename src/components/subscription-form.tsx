import React from 'react'
import {Mail} from 'lucide-react';

export default function SubscriptionForm() {
  return (
    <div className='mt-12 md:p-6 p-0 '>
   <div className="p-6 border border-gray-100 shadow-xs dark:shadow-none dark:border-gray-600 rounded-lg dark:bg-black/[0.2] border-1">
   <div className="flex items-center space-x-2">
    <Mail className='w-6 h-6 text-gray-400' />
    <span className='dark:text-gray-200 text-sm'>Stay up to date</span>
   </div>
   <p className='text-sm text-gray-400 mt-3 leading-6 tracking-wide'>Get notified when I publish something new, and unsubscribe at any time.</p>

   <div className="flex space-x-4 items-center mt-4">
    <div className="w-full">
        <input type="email" className='focus:ring-0.5 text-sm focus:ring-gray-200 focus:ring-offset-1 bg-transparent outline-none border border-0.5 border-gray-200 dark:shadow-none shadow-md focus:shadow-none dark:border-gray-600 placeholder:text-gray-500  rounded-md w-full px-4 py-2' placeholder='Email address' />
    </div>
    <button className='bg-slate-600 px-4 rounded-md py-2 font-base text-gray-200 hover:bg-gray-500'>Join</button>
   </div>
   </div>
    </div>
  )
}