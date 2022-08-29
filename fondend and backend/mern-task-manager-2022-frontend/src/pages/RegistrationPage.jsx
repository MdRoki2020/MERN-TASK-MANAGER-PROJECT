import React, { Suspense,lazy, Fragment } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
const Registration = lazy(()=> import('../components/registration/Registration'))


const RegistrationPage = () => {
  return (
    <div>
      <Fragment>
      <Suspense fallback={<LazyLoader />}>

          <Registration />
          
      </Suspense>
      </Fragment>
    </div>
  )
}

export default RegistrationPage
