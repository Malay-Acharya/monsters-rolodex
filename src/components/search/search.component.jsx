import React from 'react'
import './search.component.css'

export const Search = ({ placeholder , handlechange })=>(
    <input className='search'
    type='search' 
    placeholder= {placeholder}
    onChange={handlechange}>

    </input>
);