import React from 'react'

import "./Button.css"

export default function Button({title}) {
  return (
    <button type='button' className='btn basic-btn btn-secondary p-3 mt-md-4 mt-3'>{title}</button>
  )
}

