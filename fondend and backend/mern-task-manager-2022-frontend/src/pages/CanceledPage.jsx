import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Canceled = lazy(()=> import('../components/canceled/Canceled'))

const CanceledPage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>

            <Canceled />

        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default CanceledPage
