import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext, useUserContext } from '../context/userContextState';
import { auth } from '../utils/firebaseConfig';


function ProtectedRoute({ children}) {

  const {user, setUser} = useUserContext()
  const Navigate = useNavigate()

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (!authUser) {

            setUser(null)
            Navigate('/login')
          
          } else setUser(authUser)
        });
    
        return () => unsubscribe();
    
      }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute