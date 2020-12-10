


import React, { useState } from 'react'

export const GlobalFilter = ({ filter, setFilter }) => {
  
  return (
    <span>
      <label>gloabla Search</label>
      <input
        value={filter || ''}
        onChange={e => {
         setFilter(e.target.value);
        }}
      />
    </span>
  )
}


export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
      <span>
          <label>colum serach</label>
        <input
          value={filterValue || ''}
          onChange={e => setFilter(e.target.value)}
        />
      </span>
    )
  }
  