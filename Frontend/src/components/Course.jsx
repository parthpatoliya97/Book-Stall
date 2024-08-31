import React from 'react'
import list from "../../public/List.json"
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-20 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl '> We are delight to have you <span className='text-pink-500'>here</span></h1>
      <p className='mt-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum facilis minus quos magnam beatae et, iusto eos molestias accusamus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum facilis minus quos magnam beatae et, iusto eos molestias accusamus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum facilis minus quos magnam beatae et, iusto eos molestias accusamus!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum facilis minus quos magnam beatae et, iusto eos molestias accusamus!
      </p>
      <Link to='/'>
      <button className='bg-pink-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-pink-800 duration-300'>Back</button>
      </Link>
     
      
     
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
       {
        list.map((item)=>{
         return  <Cards key={item.id} item={item}/>
        })
       }
    </div>

    </div>
    </>
  )
}

export default Course