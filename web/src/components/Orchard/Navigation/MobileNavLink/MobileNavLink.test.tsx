import { render } from '@redwoodjs/testing/web'

import MobileNavLink from './MobileNavLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MobileNavLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MobileNavLink />)
    }).not.toThrow()
  })
})
