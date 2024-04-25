import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

import { useContext } from 'react'
import { childContext } from './ComponentA'

const ChildToParent = () => {
   const {child,setChild} = useContext(childContext)
  return (
    <div>
      <button onClick={()=>setChild(!child)}>{child?'Kill':'revive'}</button>
    </div>
  )
}

export default ChildToParent
