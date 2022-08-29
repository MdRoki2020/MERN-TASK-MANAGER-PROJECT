import React, { Suspense,lazy, Fragment } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
const Login = lazy(()=> import('../components/login/Login'))


const LoginPage = () => {
  return (
    <div>
      <Fragment>
      <Suspense fallback={<LazyLoader />}>

          <Login />
          
      </Suspense>
      </Fragment>
    </div>
  )
}

export default LoginPage
