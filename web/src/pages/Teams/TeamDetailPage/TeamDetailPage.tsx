import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TeamDetailPage = () => {
  return (
    <>
      <MetaTags title="TeamDetail" description="TeamDetail page" />

      <h1>TeamDetailPage</h1>
      <p>
        Find me in <code>./web/src/pages/TeamDetailPage/TeamDetailPage.tsx</code>
      </p>
      <p>
        My default route is named <code>teamDetail</code>, link to me with `
        <Link to={routes.teamDetail()}>TeamDetail</Link>`
      </p>
    </>
  )
}

export default TeamDetailPage
