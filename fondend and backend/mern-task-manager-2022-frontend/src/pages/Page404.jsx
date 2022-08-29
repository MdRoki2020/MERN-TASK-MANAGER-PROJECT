import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const New = lazy(()=> import('../components/notfFound/NotFound'))

const Page404 = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>
          <New />
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default Page404
