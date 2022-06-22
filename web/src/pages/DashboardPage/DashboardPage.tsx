import { MetaTags } from '@redwoodjs/web'
import Welcome from 'src/components/Orchard/Welcome'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <Welcome />
    </>
  )
}

export default DashboardPage
