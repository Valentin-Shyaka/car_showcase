'use client'
import { useState } from 'react'
import {SearchManufacturer} from './'

const SearchBar = () => {
    const handleSearch=()=>{

    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchBar__item'>
            <SearchManufacturer
             
            />

        </div>

    </form>
  )
}

export default SearchBar