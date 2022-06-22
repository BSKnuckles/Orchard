import { Link, useMatch } from '@redwoodjs/router'
import React from 'react'
import { classNames } from 'src/utils/style'

interface NavLinkProps {
  item: {
    name?: string
    href?: string
  }
}

const MobileNavLink = React.forwardRef((props: NavLinkProps, ref) => {
  const { name, href } = props.item
  const current = useMatch(href)

  return (
    <Link
      key={name}
      to={href}
      className={classNames(
        current.match
          ? 'bg-brand-50 border-brand-500 text-brand-700'
          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      )}
      aria-current={current.match ? 'page' : undefined}
    >
      {name}
    </Link>
  )
})

export default MobileNavLink
