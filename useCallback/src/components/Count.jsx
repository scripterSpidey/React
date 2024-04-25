import React from 'react'

const Count = ({text,count}) => {
    console.log('renedering count', text)
  return (
    <div>
      {text} - {count}
    </div>
  )
}

export default React.memo(Count)

//? React.memo will prevent components form re-rendering if theire state has not changed.
