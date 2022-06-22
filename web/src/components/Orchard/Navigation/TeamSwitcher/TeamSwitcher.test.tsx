import { render } from '@redwoodjs/testing/web'

import TeamSwitcher from './TeamSwitcher'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamSwitcher', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamSwitcher />)
    }).not.toThrow()
  })
})
