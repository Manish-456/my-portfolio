import { links } from '@/utils/links';
import Link from 'next/link'
import React from 'react'


export default function Footer() {
    const date = new Date();
    const year = date.getFullYear()
  return (
    <div className="mt-12 border-t border-t-gray-300">

    <div className='pt-8 px-6 pb-12'>
      <div className="px-6 flex items-center space-x-4 justify-between md:flex-row flex-col">
        <ul className='flex p-3 shadow-xl items-center space-x-4'>
        {
            links.map(item => (
                <li key={item.href} className='pl-2'>
                    <Link className='font-semibold font-base text-sm hover:text-teal-400 ' href={item.href}>{item.label}</Link>
                </li>
            ))
        }
       </ul>
        <p className='text-gray-500 md:mt-0 mt-4 text-xs'>
        &copy; {year} Manish Sharp. All rights reserved.
        </p>
      </div>
        </div>
      <div>
    </div>
    </div>
  )
}