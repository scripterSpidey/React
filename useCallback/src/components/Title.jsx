import React from 'react'

const Title = () => {
    console.log('title')
  return (
    <div>
      <h2>Use call back hook</h2>
    </div>
  )
}

export default React.memo(Title)
