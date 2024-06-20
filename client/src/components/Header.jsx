import React from 'react';
import {FaSearch} from 'react-icons/fa';
// for navigation import link 
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const {currentUser}=useSelector(state=>state.user)
  return (
    <header className='bg-slate-200 shadow-md'>
        {/* in header we have three sections . logo . serach and menu */}
        {/* meaningful tags for seo  */}
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
 {/* Container component includes a flexbox layout that justifies content between two edges
  and centers them vertically. The max-w-6xl class ensures the container doesn't get too wide
   on large screens, and mx-auto keeps it centered on the page. The p-3 class provides 
   some padding around the content within the container. You can replace Left Content and Right 
   Content with actual content you want to display. */}
            {/* wrapping in div so that all items align horizontally  */}
      <Link to='/'>
<h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>  
{/* font-bold: Makes the text bold.
text-sm: Sets the font size to small by default.
sm:text-xl: Sets the font size to extra-large on small screens and larger.
flex: Applies a flexbox layout to the heading.
flex-wrap: Allows the content to wrap within the flex container. */}
    {/* above line for responsive ness  */}
    <span className='text-slate-500'>Modern</span>
    <span className='text-slate-5700'>Estate</span>
</h1>
</Link>
<form className='bg-slate-100 p-3 rounded-lg flex items-center'>
    <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
<FaSearch className='text-slate-600'/>
</form>
<ul className='flex gap-4'>
    <Link to='/'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>
    Home
    </li>
    </Link>

    <Link to='/about'>
    <li  className='hidden sm:inline text-slate-700 hover:underline'>
    About
    </li>
    
    </Link>

    <Link to='/profile'>
    
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
   
</ul>
</div>
    </header>
  
  )
}
