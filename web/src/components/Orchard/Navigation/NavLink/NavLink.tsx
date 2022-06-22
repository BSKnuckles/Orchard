interface NavLinkProps {
  item: {
    name?: string
    href?: string
  }
}

import { Link, useMatch } from "@redwoodjs/router"
import { classNames } from "src/utils/style"

const NavLink = ({ item }: NavLinkProps) => {
  const current = useMatch(item.href)
  console.log(current)
  return (
    <Link
      key={item.name}
      to={item.href}
      className={classNames(
        current.match
          ? 'border-brand-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      )}
      aria-current={current.match ? 'page' : undefined}
    >
      {item.name}
    </Link>
  )
}

export default NavLink
