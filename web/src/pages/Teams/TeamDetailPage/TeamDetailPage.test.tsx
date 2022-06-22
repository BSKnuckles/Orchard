import { render } from '@redwoodjs/testing/web'

import TeamDetailPage from './TeamDetailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeamDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamDetailPage />)
    }).not.toThrow()
  })
})
