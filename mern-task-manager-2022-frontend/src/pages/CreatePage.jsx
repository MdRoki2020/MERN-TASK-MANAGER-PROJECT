import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Create = lazy(()=> import('../components/create/Create'))

const CreatePage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>

            <Create />
            
        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default CreatePage
