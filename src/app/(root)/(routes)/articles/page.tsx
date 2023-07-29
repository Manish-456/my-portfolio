import Article from '@/components/articles/Article'
import Heading from '@/components/heading'
import { articles } from '@/utils/article'
import React from 'react'

type Props = {}

export default function page({}: Props) {
    
  return (
    <div>
        <div className='p-0 sm:p-8'>
            <div className="md:max-w-5xl w-full max-w-lg">
            <Heading 
            title='Writing on software design company building, and the aerospace industry.'
            subtitle='All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.'
            />
                  <div className="mt-8">
                    {
                        articles.map(article => <Article key={article.title} article={article} />)
                    }
                  </div>
            </div>
        

        </div>
    </div>
  )
}