import { Link, routes } from '@redwoodjs/router'
import { UserProfile } from '@clerk/clerk-react'
import { MetaTags } from '@redwoodjs/web'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <UserProfile />
    </>
  )
}

export default ProfilePage
