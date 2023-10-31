import React, { useState } from 'react'

const UseMemo = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <div className='w-25 h-50 border rounded-2'>
        <input type="text" className='form-control m-3 text-start w-75' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    </div>
  )
}

export default UseMemo