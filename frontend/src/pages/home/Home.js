import React from 'react'
import { useAuth } from '../userContext/UserContext';

function Home() {

  const[userAuth, setUserAuth] = useAuth();

  return (
    <div>{JSON.stringify(userAuth,null,4)}</div>
  )
}

export default Home