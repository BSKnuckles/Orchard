import { MetaTags } from '@redwoodjs/web'
import { SignIn } from '@clerk/clerk-react'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <SignIn />
    </>
  )
}

export default LoginPage
