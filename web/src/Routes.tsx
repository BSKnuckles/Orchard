// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import AuthLayout from './layouts/AuthLayout'
import DefaultLayout from './layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />

      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/register" page={RegisterPage} name="register" />
      </Set>

      <Private unauthenticated="login" whileLoadingAuth={null}>
        <Set wrap={DefaultLayout}>
          <Route path="/" page={DashboardPage} name="dashboard" />

          {/* Teams */}
          <Route path="/team" page={TeamsTeamDetailPage} name="teamDetail" />
          <Route path="/team/new" page={TeamsNewTeamPage} name="newTeam" />
          {/* Settings */}
          <Route path="/settings/profile" page={ProfilePage} name="profile" />
          <Route path="/settings/security" page={SecurityPage} name="security" />
        </Set>
      </Private>
    </Router>
  )
}

export default Routes
