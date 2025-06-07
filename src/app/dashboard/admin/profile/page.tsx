import ProfileSetting from '@/components/profile'
import React from 'react'
import { cookies } from 'next/headers'

const ProfilePage = async() => {
  const cookieStore = await cookies()
  const token = cookieStore.get("AdminToken")?.value


  return (
    <div>
      <ProfileSetting token={token as string ?? ''} />

    </div>
  )
}

export default ProfilePage
