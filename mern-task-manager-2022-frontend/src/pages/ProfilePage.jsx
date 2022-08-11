import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Profile = lazy(()=> import('../components/profile/Profile'))


const ProfilePage = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>

          <Profile />
          
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default ProfilePage
