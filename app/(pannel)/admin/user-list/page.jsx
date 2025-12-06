import UsersList from '@/components/admin/UsersList'
import PreLoader from '@/components/common/PreLoader'
import BottomBarAdmin from '@/components/admin/common/BottomBarAdmin'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
    <UsersList/>
    <BottomBarAdmin />
    </Suspense>
  )
}

export default page