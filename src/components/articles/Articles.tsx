import { articles } from '@/utils/article'
import React from 'react'
import Article from './Article';
import SubscriptionForm from '../subscription-form';
import Work from '../work';



export default function Articles() {
   
  return (
    <div className='mt-8 md:mt-12'>
        <div className="grid grid-cols-1 space-x-0 lg:space-x-8 lg:grid-cols-12">
            <div className="col-span-6">
              {

                articles.map(article => (
                    <div key={article.title} className='mt-12'>
                         <Article article={article} key={article.title}  />
                    </div>
                ))
              }
            </div>
            <div className="col-span-6">
                <div className="flex flex-col space-y-8">
                    <SubscriptionForm />
                    <Work />
                </div>
            </div>
        </div>
    </div>
  )
}