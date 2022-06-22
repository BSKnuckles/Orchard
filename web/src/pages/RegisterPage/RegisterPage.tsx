import { SignUp } from '@clerk/clerk-react'
import { MetaTags } from '@redwoodjs/web'

const RegisterPage = () => {
  return (
    <>
      <MetaTags title="Register" description="Register page" />
      <SignUp />
    </>
  )
}

export default RegisterPage
