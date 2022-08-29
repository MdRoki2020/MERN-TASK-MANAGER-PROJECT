import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Forgetpass = lazy(()=> import('../components/forgetpass/Forgetpass'))

const ForgetpassPage = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>

          <Forgetpass />
          
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default ForgetpassPage
