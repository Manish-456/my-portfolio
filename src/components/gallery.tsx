import Image from 'next/image'
import React from 'react'

export const images = [
  {
    src : '/image-1.webp',
    additionalClass : 'rotate-2 hidden xl:block'
  },
  {
    src : '/image-2.webp',
    additionalClass : '-rotate-2'
  },
  {
    src : '/image-3.webp',
    additionalClass : '-rotate-4'
  },
  {
    src : '/image-4.webp',
    additionalClass : '-rotate-2 '
  },
  {
    src : '/image-5.webp',
    additionalClass : 'rotate-2 hidden xl:block'
  }
]

export default function Gallery() {
  return (
    <div className=' justify-start  sm:justify-center mt-4 sm:mt-8 flex flex-row  space-y-2  items-center space-x-2 md:space-x-8 inset-x-0'>
     {
        images.map(image => (
            <div key={image.src} className={`relative shrink-0 aspect-square  lg:w-64 w-24 h-24 sm:w-48 sm:h-48 lg:h-64 ${image.additionalClass}`}>

            <Image alt='images'  src={image.src} className={`rounded-lg object-cover ${image.additionalClass}`} priority referrerPolicy='no-referrer' fill />
            </div>
        ))
     }
    </div>
  )
}