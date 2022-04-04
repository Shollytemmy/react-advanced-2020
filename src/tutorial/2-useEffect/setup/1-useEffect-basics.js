import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() =>{
    if(value > 1) {
      console.log('call useEffect')
      document.title = `changing ${value}`

    }

  }, [value])

  useEffect(() => {
    console.log('Hello World')
  }, [])
  // console.log('render conponent')


  return <>
    <h2>{value}</h2>
    <button onClick={() => setValue(preValue => preValue + 1
    )}>Click me!</button>
  </>
};

export default UseEffectBasics;
