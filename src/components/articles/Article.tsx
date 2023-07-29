"use client";

import { ArticleType } from '@/utils/article'
import {usePathname} from 'next/navigation';
import React from 'react'

type Props = {
    article : ArticleType 
}

export default function Article({article}: Props) {
 const pathname = usePathname();  
 let className = `flex `;

  if(pathname === '/articles'){
    className += `md:flex-row flex-col space-x-0 md:space-y-4 space-y-2  md:space-x-24 `
  }else{
    className += `flex-col  space-y-4 `
  }


  return (
    <div className='p-2 md:mt-2 mt-8 sm:p-4 rounded-lg hover:bg-gray-500/[0.1]'>
      <div className={className}>
     
      <time dateTime='2022-09-05' className='text-gray-500 text-sm border-l-gray-700  pl-3 border-l-2'>{article.date}</time>
     
        <div className='flex flex-col max-w-2xl w-full  space-y-4'>
        <span className='text-gray-700 dark:text-gray-200'>{article.title}</span>
        <p className='text-gray-400 text-sm'>{article.description}</p>
        <div className='text-teal-500 text-sm'>Read article &rarr;</div>

        </div>
      </div>
    </div>
  )
}