/* eslint-disable no-unused-vars */
import React from 'react';
import { pages } from '../config/constants';
import { Link } from 'react-router-dom';

const PageLinks = () => {
  return (
    <div className='links hidden md:flex pt-4 w-full  items-center justify-between text-center'>
        {pages.map((page, index) => (
            <div key={index} className='relative link-wrapper px-2'>
                <Link to={`/${page.link}`} className='pg-links hover:text-blue-600 font-semibold text-sm md:text-lg'>
                  {page.text}
                </Link>
            </div>
            
        ))}
    </div>
  )
}

export default PageLinks