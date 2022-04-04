import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [user, setUser] = useState('Default- user')
  

  useEffect(() => {
    fetch(url).then((response) => {
      if(response.status >= 200 && response.status <= 299){
         return response.json();
      }
      else{
        setIsError(true)
        setIsLoading(false)
      }
      throw Error(response.statusText)
     
    })
    .then((user) =>{
      const {login} = user
      setIsLoading(false)
      setUser(login)
    }).catch((err) =>{
      console.log(err)
    })
  }, []);




  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>Error</h1>
  }

 

 

  
  
  return <h2>{user}</h2>;
};

export default MultipleReturns;
