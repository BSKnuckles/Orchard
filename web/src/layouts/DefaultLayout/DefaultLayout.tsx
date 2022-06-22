type DefaultLayoutProps = {
  children?: React.ReactNode
}

import { Link, routes } from '@redwoodjs/router'
import { useUser } from '@clerk/clerk-react'
import { useAuth } from '@redwoodjs/auth'
import NavBar from 'src/components/Orchard/Navigation/NavBar'


const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { user } = useUser()
  const { logOut } = useAuth()

  const navigation = [
    { name: 'Dashboard', href: routes.dashboard() },
  ]
  const userNavigation = [
    { name: 'Profile', href: routes.profile() },
    { name: 'Billing', href: routes.profile() },
  ]

  if (user) return (
    <div className="min-h-full">
      <NavBar user={user} navigation={navigation} userNavigation={userNavigation} />

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )

  return null
}

export default DefaultLayout
