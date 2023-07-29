import Heading from '@/components/heading'
import ProjectCard from '@/components/projectCard'
import { ProjectDone } from '@/utils/projects'
import React from 'react'

export default function Projects() {
  return (
    <div>
    <div className='p-0 sm:p-8'>
        <div className="md:max-w-5xl w-full max-w-lg">
        <Heading 
        title='Things I’ve made trying to put my dent in the universe.'
        subtitle='I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.'
        />
              <div className="mt-8 md:mt-12">
                <div className="grid lg:grid-cols-3 gap-4  md:grid-cols-2 grid-cols-1  ">

             {
                 ProjectDone.map(project => <>
            <ProjectCard project={project}/>
            </>)
             }
             </div>
              </div>
        </div>
    

    </div>
</div>
  )
}
