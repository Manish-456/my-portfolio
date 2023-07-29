import React from 'react'

type Props = {
    title : string;
    subtitle : string;
}

export default function Heading({
    title,
    subtitle
}: Props) {
  return (
    <div className="max-w-2xl mt-8 sm:px-2 px-4 w-full">
    <h1 className="font-bold text-2xl sm:max-w-5xl   leading-8  sm:text-5xl dark:text-zinc-50">
{title}
        </h1>
         <p className='mt-8  leading-7 text-sm  text-gray-400'>
         {subtitle}
       </p>
          

        </div>
  )
}