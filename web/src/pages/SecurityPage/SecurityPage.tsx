import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SecurityPage = () => {
  return (
    <>
      <MetaTags title="Security" description="Security page" />

      <h1>SecurityPage</h1>
      <p>
        Find me in <code>./web/src/pages/SecurityPage/SecurityPage.tsx</code>
      </p>
      <p>
        My default route is named <code>security</code>, link to me with `
        <Link to={routes.security()}>Security</Link>`
      </p>
    </>
  )
}

export default SecurityPage
