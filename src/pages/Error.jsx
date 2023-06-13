import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className='min-h-screen flex flex-wrap justify-center content-center'>
       <div>
       <h1 className='font-light text-slate-500'>PAGE NOT FOUND</h1>
       <ul className='mt-3 mb-8 text-lg text-slate-400 font-light space-y-1  list-inside'>
       <li >We are looking everyware for this page.</li>
       <li>Are you sure the Website URL is correct?</li>
       <li>Get in touch with the site owner.</li>
       </ul>
       <Link className=' px-5 border-primary text-primary outline-none hover:bg-primary hover:text-white py-1.5 border rounded-full'>Go Back</Link>
       </div>
    </div>
  )
}
