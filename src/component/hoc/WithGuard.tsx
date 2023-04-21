import React, {useEffect} from 'react';
import {useToken} from "../../store/modules/token/token";
import {useNavigate} from "react-router-dom";

export enum TGuard {
  LoggedIn,
  LoggedOut
}

export function WithGuard(WrappedComponent: React.FC, guard: TGuard) {
  const Guard = (props) => {
    const {  token } = useToken();
    const navigate = useNavigate();

    useEffect(()=> {
      if(guard === TGuard.LoggedIn){
        if(!token){
          navigate('/login', { replace: true })
        }
      } else {
        if(token) {
          navigate('/home', { replace: true })
        }
      }
    }, [navigate])



    return <WrappedComponent {...props}/>
  }

  return Guard
}
