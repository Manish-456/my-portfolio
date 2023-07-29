"use client";

import { cn } from '@/utils/cn';
import { Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

interface MobileNavbarProps {
    navItems : {
        href : string;
        label : string;
    }[]
}

export default function MobileNavbar({navItems} : MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function onOpen() {setIsOpen(true)}
  function onClose() {setIsOpen(false)};
  return (
    <>
     <div onClick={onOpen} className='px-4  rounded-lg py-2 dark:bg-slate-400/[0.4] cursor-pointer'>
       <Menu />
        </div>
    <Dialog as='div' onClose={onClose} className={'absolute h-full  p-4   backdrop-blur-sm bg-opacity-40  top-2 max-w-xl w-full  z-[9999] lg:hidden'} open={isOpen}>
         
      <Dialog.Panel className={"relative p-2 rounded-xl w-full max-w-xl bg-white/[0.9] dark:bg-slate-950  flex flex-col "}>  <h1 className='dark:text-slate-400 p-2 tracking-tight text-sm font-mono'>Navigation</h1>
       <ul className="md:hidden flex max-w-xl w-full items-center  space-y-8 p-4 flex-col ">
       {
           navItems.map(item => (
                <li key={item.href} className='pl-2'>
                    <Link className={cn(`font-base text-sm font-bold hover:text-teal-400 ${pathname === item.href ? "text-teal-400" : ""}`)} href={item.href}>{item.label}</Link>
                </li>
            ))
        }
       </ul>

       <div className="absolute dark:bg-gray-700 rounded-full cursor-pointer p-2 right-2 top-2 hover:text-gray-300" onClick={onClose}>
        <X />
       </div>

      </Dialog.Panel>
    </Dialog>
        </>
  )
}
