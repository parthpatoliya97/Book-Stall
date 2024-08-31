import { space } from 'postcss/lib/list'
import React from 'react'
import banner from "../../public/Banner.png"

function Banner() {
  return (
   <>
   {/* left portion */}
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div className="  w-full md:w-1/2">
    <div className="space-y-10 mt-10 md:mt-32">
    <h1 className="text-4xl font-bold">Hello,Welcome Here to Learn Something  <span className="text-pink-400">new everyday!!!</span></h1>
    <p>

Unlock a world of stories, knowledge, and inspiration with our carefully curated collection of books. Whether you're seeking a thrilling adventure, a heartwarming romance, or deep insights into the real world, we've got something just for you. <span className="text-pink-400">Start your next literary journey today—browse our collection and find the perfect book to get lost in.</span>
    </p>

{/* search bar */}
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Enter your email to Login" />
</label>  
    </div>
    {/* button */}
<button className="btn mt-3 btn-secondary">Submit</button>
    </div>

{/* right portion */}
    <div className=' w-full md:w-1/2'>
    <img className="  space-y-10 mt-10 md:mt-32 w-92 h-92 ml-20 hover:bg-pink-800 duration-300" src={banner}/>
    </div>
   </div>
   </>
  )
}

export default Banner