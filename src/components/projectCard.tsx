import { Project } from '@/utils/projects'
import React from 'react'
import { Icons } from './icons'
import Link from 'next/link';
import { Link2 } from 'lucide-react';

interface ProjectCardProps {
  project : Project
}
export default function ProjectCard({
  project
} : ProjectCardProps) {
   const ProjectIcon = Icons[project.icon];
  return (
    <div className=' hover:bg-gray-500/[0.1] rounded-md max-w-md w-full max-h-sm h-full flex flex-col p-4 space-y-4'>
     <div className="relative h-[36px] rounded-full  dark:border-gray-500/[0.5] flex items-center justify-center dark:border-2 w-[36px]">
       <ProjectIcon className='dark:ring-2  rounded-full h-8 w-8  dark:ring-gray-800'  />
     </div>
       <div className='text-base tracking-tighter text-[14px]'>{project.name}</div>
       <p className='text-sm text-gray-400'>{project.desc }</p>
       <Link className='flex items-center text-sm text-slate-700 dark:text-slate-300'  href={project.href}>
        <Link2  className='mr-2 w-6 h-4'/>
        {project.web}</Link>
    </div>
  )
}
