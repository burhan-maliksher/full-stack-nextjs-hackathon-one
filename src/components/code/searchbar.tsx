import React from 'react'
import { CiSearch } from 'react-icons/ci';

export default function Searchbar() {
  return (
    <div>
      <div className="border-2  outline-1 h-7  rounded-sm flex flex-row">
          <div className="flex items-center">
            <CiSearch/>
          </div>
          <input type="text" className=" pl-1 text-sm w-80" placeholder="What your are looking for?" />
        </div>
    </div>
  )
}
