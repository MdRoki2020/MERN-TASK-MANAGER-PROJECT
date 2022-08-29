import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Dashboard = lazy(()=> import('../components/dashboard/Dashboard'))

const DashboardPage = () => {
  return (
    <div>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>

          <Dashboard />
          
        </Suspense>
      </MasterLayout>
    </div>
  )
}

export default DashboardPage
