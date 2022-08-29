import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Compelete = lazy(()=> import('../components/compelete/Compelete'))

const CompeletedPage = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>

          <Compelete />
          
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default CompeletedPage
