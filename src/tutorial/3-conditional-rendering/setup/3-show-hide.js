import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false)
 



  return<div>
 {show || <h1>Show/Hide</h1>}

 <button className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
 {show && <Item />}

  </div>
   
}

const Item = () =>{
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  };

  useEffect(() =>{
    window.addEventListener('resize', (checkSize))

    return () => window.removeEventListener('resize', checkSize)
  }, [])


  return(
    <div style={{marginTop: '2rem'}}>
      <h1>window</h1>
      <h3>{size}: Px</h3>
    </div>
  )

  

}


export default ShowHide;