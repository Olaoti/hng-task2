import React from 'react'

function error({message}) {
  return (
    <div className='error'>
      <h4>Error Encountered: {message}</h4>
      <h5>Kindly reload</h5>
    </div>
  )
}

export default error
