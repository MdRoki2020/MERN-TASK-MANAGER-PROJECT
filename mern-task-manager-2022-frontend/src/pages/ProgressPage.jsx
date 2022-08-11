import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Progress = lazy(()=> import('../components/progress/Progress'))

const ProgressPage = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>

          <Progress />
          
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default ProgressPage
